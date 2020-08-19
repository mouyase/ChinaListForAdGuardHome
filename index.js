#!/usr/bin/env node
const fs = require('fs');
const request = require('request')

const path = 'dist/'

let strChinaList, strGoogleHostsList, strChinaWhiteList, strChinaBlackList

fs.mkdir(path, error => {
})

request({
    url: 'https://raw.githubusercontent.com/felixonmars/dnsmasq-china-list/master/accelerated-domains.china.conf',
    method: 'GET'
}, (error, response, body) => {
    strChinaList = body
    strChinaList = strChinaList.replace(/#.+/g, '')
    strChinaList = strChinaList.replace(/server=\/(.+)\/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g, '[/$1/]https://dns.alidns.com/dns-query')
    strChinaList = strChinaList.replace(/([\s])[\s]*/g, '$1')
    strChinaList = strChinaList.trim()
    fs.writeFileSync(path + 'ChinaList.txt', strChinaList, 'UTF-8')
    request({
        url: 'https://raw.githubusercontent.com/googlehosts/hosts/master/hosts-files/dnsmasq.conf',
        method: 'GET'
    }, (error, response, body) => {
        strGoogleHostsList = body
        strGoogleHostsList = strGoogleHostsList.replace(/#.+/g, '')
        strGoogleHostsList = strGoogleHostsList.replace(/address=\/(.+)\/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g, '[/$1/]https://dns.quad9.net/dns-query')
        strGoogleHostsList = strGoogleHostsList.replace('[/localhost/]https://dns.quad9.net/dns-query', '')
        strGoogleHostsList = strGoogleHostsList.replace(/([\s])[\s]*/g, '$1')
        strGoogleHostsList = strGoogleHostsList.trim()
        fs.writeFileSync(path + 'GoogleHostsList.txt', strGoogleHostsList, 'UTF-8')
        strChinaWhiteList = strChinaList + '\n' + strGoogleHostsList + '\nhttps://dns.quad9.net/dns-query\nhttps://dns.cloudflare.com/dns-query\nhttps://dns.google/dns-query'
        fs.writeFileSync(path + 'ChinaWhiteList.txt', strChinaWhiteList, 'UTF-8')
        strChinaBlackList = strChinaList + '\n' + strGoogleHostsList + '\nhttps://dns.alidns.com/dns-query'
        fs.writeFileSync(path + 'ChinaBlackList.txt', strChinaBlackList, 'UTF-8')
    });
});

let strHalfLifeList

request({
    url: 'https://raw.githubusercontent.com/o0HalfLife0o/list/master/ad.txt',
    method: 'GET'
}, (error, response, body) => {
    strHalfLifeList = body
    strHalfLifeList = strHalfLifeList.replace(/! Checksum: (.+)/, '')
    strHalfLifeList = strHalfLifeList.replace(/! Title: (.+)/, '! Title: HalfLifeList')
    strHalfLifeList = strHalfLifeList.trim()
    fs.writeFileSync(path + 'HalfLifeList.txt', strHalfLifeList, 'UTF-8')
});

let strAntiAD

request({
    url: 'https://anti-ad.net/easylist.txt',
    method: 'GET'
}, (error, response, body) => {
    strAntiAD = body
    strAntiAD = strAntiAD.replace(/!TITLE=(.+)/, '[Adblock Plus 2.0]\n! Title: AntiAD')
    strAntiAD = strAntiAD.replace(/!VER=(.+)/, '! Version: $1')
    strAntiAD = strAntiAD.replace(/!URL=(.+)/, '! Homepage: $1')
    strAntiAD = strAntiAD.replace(/!TOTAL_LINES=(.+)/g, '')
    strAntiAD = strAntiAD.trim()
    fs.writeFileSync(path + 'AntiAD.txt', strAntiAD, 'UTF-8')
});