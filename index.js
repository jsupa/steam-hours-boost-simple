const SteamUser = require('steam-user')
const { Logger } = require('betterlogger.js')
const qrcode = require('qrcode-terminal')
const { LoginSession, EAuthTokenPlatformType } = require('steam-session')

const client = new SteamUser()

const logger = new Logger('Steam Idle').setDebugging(99)

client.on('loggedOn', () => {
  logger.log(`Logged in as ${client.steamID.getSteam2RenderedID()}`)

  client.setPersona(SteamUser.EPersonaState.Online)
  client.gamesPlayed([730])
})

const init = async () => {
  const session = new LoginSession(EAuthTokenPlatformType.SteamClient)
  const startResult = await session.startWithQR()

  qrcode.generate(startResult.qrChallengeUrl, { small: true })

  session.on('remoteInteraction', () => {
    logger.log("Looks like you've scanned the code! Now just approve the login.")
  })

  session.on('timeout', () => {
    logger.error('The login session has timed out.')
  })

  session.on('error', err => {
    logger.error('An error occurred while trying to login:', err)
  })

  session.on('authenticated', async () => {
    client.logOn({ refreshToken: session.refreshToken })
  })
}

init()
