const SteamUser = require('steam-user')
const SteamCommunity = require('steamcommunity')
const SteamTotp = require('steam-totp')
const { Logger } = require('betterlogger.js')

const client = new SteamUser()
const community = new SteamCommunity()

const logger = new Logger('Steam Idle').setDebugging(99)

const login = {
  accountName: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  twoFactorCode: SteamTotp.generateAuthCode(process.env.USER_AUTH)
}

client.logOn(login)

client.on('loggedOn', () => {
  logger.log(`Logged in as ${client.steamID.getSteam2RenderedID()}`)

  client.setPersona(SteamUser.EPersonaState.Online)
  client.setUIMode(SteamUser.EClientUIMode.BigPicture)
  client.gamesPlayed([20, 440, 730])
})

client.on('webSession', (sessionID, cookies) => {
  logger.log(`Cookies set ${client.steamID.getSteam2RenderedID()}`)
  community.setCookies(cookies)
})
