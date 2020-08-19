#!/usr/bin/env node
const fs = require('fs');
const request = require('request')
const path = 'dist/'
let strChinaList, strGoogleHosts, strChinaWhiteList, strChinaBlackList

request({
    url: 'https://raw.githubusercontent.com/felixonmars/dnsmasq-china-list/master/accelerated-domains.china.conf',
    method: 'GET'
}, (error, response, body) => {
    strChinaList = body
    strChinaList = strChinaList.replace(/#.+/g, '')
    strChinaList = strChinaList.replace(/server=\/(.+)\/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g, '[/$1/]https://dns.alidns.com/dns-query')
    strChinaList = strChinaList.replace(/([\s])[\s]*/g, '$1')
    strChinaList = strChinaList.trim()
    fs.writeFileSync(path + 'ChinaList', strChinaList, 'UTF-8')
    request({
        url: 'https://raw.githubusercontent.com/googlehosts/hosts/master/hosts-files/dnsmasq.conf',
        method: 'GET'
    }, (error, response, body) => {
        strGoogleHosts = body
        strGoogleHosts = strGoogleHosts.replace(/#.+/g, '')
        strGoogleHosts = strGoogleHosts.replace(/address=\/(.+)\/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g, '[/$1/]https://dns.quad9.net/dns-query')
        strGoogleHosts = strGoogleHosts.replace('[/localhost/]https://dns.quad9.net/dns-query', '')
        strGoogleHosts = strGoogleHosts.replace(/([\s])[\s]*/g, '$1')
        strGoogleHosts = strGoogleHosts.trim()
        fs.writeFileSync(path + 'GoogleHosts', strGoogleHosts, 'UTF-8')
        strChinaWhiteList = strChinaList + '\n' + strGoogleHosts + '\nhttps://dns.quad9.net/dns-query\nhttps://dns.cloudflare.com/dns-query\nhttps://dns.google/dns-query'
        fs.writeFileSync(path + 'ChinaWhiteList', strChinaWhiteList, 'UTF-8')
        strChinaBlackList = strChinaList + '\n' + strGoogleHosts + '\nhttps://dns.alidns.com/dns-query'
        fs.writeFileSync(path + 'ChinaBlackList', strChinaBlackList, 'UTF-8')
    });
});