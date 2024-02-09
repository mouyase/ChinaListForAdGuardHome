#!/usr/bin/env node
import fs from 'node:fs'

const DIST_PATH = 'dist/'

const DNSPOD = 'https://1.12.12.12/dns-query'
const AliDNS = 'https://223.5.5.5/dns-query'
const RubyFish = 'https://dns.rubyfish.cn/dns-query'

const Quad9 = 'https://dns10.quad9.net/dns-query'
const Cloudflare = 'https://1.0.0.1/dns-query'
const Google = 'https://dns.google/dns-query'
const Quad101 = 'https://dns.twnic.tw/dns-query'
const OpenDNS = 'https://doh.opendns.com/dns-query'

const ChinaDNS = DNSPOD
const GlobalDNS = Cloudflare

const makeDist = async () => {
  try {
    fs.mkdirSync(DIST_PATH)
    return Promise.resolve()
  } catch (e) {
    console.error('dist目录创建失败')
    console.error(e)
    return Promise.resolve()
  }
}

const getChinaList = async () => {
  let chinaListResponse = await fetch(
    'https://raw.githubusercontent.com/felixonmars/dnsmasq-china-list/master/accelerated-domains.china.conf',
  )
  let chinaList = await chinaListResponse.text()
  chinaList = chinaList.replace(/#.+/g, '')
  chinaList = chinaList.replace(
    /server=\/(.+)\/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g,
    `[/$1/]${ChinaDNS}`,
  )
  chinaList = chinaList.replace(/(\s)\s*/g, '$1')
  chinaList = chinaList.trim()
  fs.writeFileSync(DIST_PATH + 'ChinaList.txt', chinaList, 'UTF-8')
  let googleHostsListResponse = await fetch(
    'https://raw.githubusercontent.com/googlehosts/hosts/master/hosts-files/dnsmasq.conf',
  )
  let googleHostsList = await googleHostsListResponse.text()
  googleHostsList = googleHostsList.replace(/#.+/g, '')
  googleHostsList = googleHostsList.replace(
    /address=\/(.+)\/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g,
    `[/$1/]${GlobalDNS}`,
  )
  googleHostsList = googleHostsList.replace(`[/localhost/]${GlobalDNS}`, '')
  googleHostsList = googleHostsList.replace(/(\s)\s*/g, '$1')
  googleHostsList = googleHostsList.trim()
  fs.writeFileSync(DIST_PATH + 'GoogleHostsList.txt', googleHostsList, 'UTF-8')
  const chinaWhiteList = `${chinaList}
  ${googleHostsList}
  ${Quad9}
  ${Quad101}
  ${Google}
  ${Cloudflare}
  ${OpenDNS}
  `
  fs.writeFileSync(DIST_PATH + 'ChinaWhiteList.txt', chinaWhiteList, 'UTF-8')
  const chinaBlackList = `${chinaList}
  ${googleHostsList}
  ${AliDNS}
  ${DNSPOD}
  ${RubyFish}
  `
  fs.writeFileSync(DIST_PATH + 'ChinaBlackList.txt', chinaBlackList, 'UTF-8')
}

const getHalfLifeList = async () => {
  let halfLifeListResponse = await fetch(
    'https://raw.githubusercontent.com/o0HalfLife0o/list/master/ad.txt',
  )
  let halfLifeList = await halfLifeListResponse.text()
  halfLifeList = halfLifeList.replace(/! Checksum: (.+)/, '')
  halfLifeList = halfLifeList.replace(/! Title: (.+)/, '! Title: HalfLifeList')
  halfLifeList = halfLifeList.trim()
  fs.writeFileSync(DIST_PATH + 'HalfLifeList.txt', halfLifeList, 'UTF-8')
}

const getAntiAD = async () => {
  let antiADResponse = await fetch('https://anti-ad.net/easylist.txt')
  let antiAD = await antiADResponse.text()
  antiAD = antiAD.replace(/!Title: (.+)/, '!Title: AntiAD')
  antiAD = antiAD.trim()
  fs.writeFileSync(DIST_PATH + 'AntiAD.txt', antiAD, 'UTF-8')
}

const getAdRulesDNSList = async () => {
  let adRulesDNSListResponse = await fetch('https://adrules.top/dns.txt')
  let adRulesDNSList = await adRulesDNSListResponse.text()
  adRulesDNSList = adRulesDNSList.replace(
    /!Title: (.+)/,
    '!Title: AdRulesDNSList',
  )
  adRulesDNSList = adRulesDNSList.trim()
  fs.writeFileSync(DIST_PATH + 'AdRulesDNSList.txt', adRulesDNSList, 'UTF-8')
}

const main = async () => {
  await makeDist()
  await getChinaList()
  await getHalfLifeList()
  await getAntiAD()
  await getAdRulesDNSList()
}

main()
  .then(() => {
    console.log('规则创建完成')
  })
  .catch(reason => {
    console.error('规则创建错误', reason)
  })
