# ChinaListForAdGuardHome

**注意，闪存较小设备不建议使用本项目，规则文件较大，可能会爆闪存**

基于`googlehosts`和`dnsmasq-china-list`生成的`AdGuardHome`上游DNS配置

## 配置文件说明

### ChinaList

基于`dnsmasq-china-list`，使用`腾讯云`的`DoH`解析的配置

### GoogleHostsList

基于`googlehosts`，使用`Cloudflare`的`DoH`解析的配置

### ChinaWhiteList

在融合了前二者的基础上，添加了
 - `Quad9`
 - `Quad101`
 - `OpenDNS`
 - `Google`
 - `Cloudflare`
的`DoH`作为基础解析的配置，如果需要`除大陆白名单以外全部使用国外DNS`，则可以选择此方案

### ChinaBlackList

在融合了前二者的基础上，添加了
 - `阿里云`
 - `腾讯云`
 - `rubyfish`
的`DoH`作为基础解析的配置，如果需要`除GoogleHosts以外全部使用大陆DNS`，则可以选择此方案

## 去广告规则
### HalfLifeList
[https://github.com/o0HalfLife0o/list](https://github.com/o0HalfLife0o/list)
> 合并自乘风视频广告过滤规则、EasylistChina、EasylistLite、CJX'sAnnoyance，以及补充的一些规则

### AntiAD

[https://github.com/privacy-protection-tools/anti-AD](https://github.com/privacy-protection-tools/anti-AD)
> 致力于成为中文区命中率最高的广告过滤列表，实现精确的广告屏蔽和隐私保护。anti-AD现已支持AdGuardHome，dnsmasq， Surge，Pi-Hole，smartdns等网络组件。完全兼容常见的广告过滤工具所支持的各种广告过滤列表格式

### AdRulesDNSList
[https://github.com/Cats-Team/AdRules](https://github.com/Cats-Team/AdRules)

> List for blocking ads in the Chinese region


## 使用方式
将文件内容复制到`DNS 设置 / 上游 DNS 服务器`中，保存即可

[HalfLifeList.txt](#HalfLifeList)与[AntiAD](#AntiAD)是目前两个比较适合大陆的广告屏蔽表，推荐大家使用

[AdRulesDNSList](#AdRulesDNSList)是更加激进一些的广告屏蔽表，可能会导致误杀，建议大家酌情使用

### 配置文件地址

| 配置文件               | 地址                                                                                                   |
|--------------------|------------------------------------------------------------------------------------------------------|
| ChinaList          | [https://adguard.yojigen.tech/ChinaList.txt](https://adguard.yojigen.tech/ChinaList.txt)             |
| GoogleHostsList    | [https://adguard.yojigen.tech/GoogleHostsList.txt](https://adguard.yojigen.tech/GoogleHostsList.txt) |
| ChinaWhiteList     | [https://adguard.yojigen.tech/ChinaWhiteList.txt](https://adguard.yojigen.tech/ChinaWhiteList.txt)   |
| ChinaBlackList     | [https://adguard.yojigen.tech/ChinaBlackList.txt](https://adguard.yojigen.tech/ChinaBlackList.txt)   |

### 去广告规则地址

| 去广告规则              | 地址                                                                                                   |
|--------------------|------------------------------------------------------------------------------------------------------|
| HalfLifeList.txt   | [https://adguard.yojigen.tech/HalfLifeList.txt](https://adguard.yojigen.tech/HalfLifeList.txt)       |
| AntiAD.txt         | [https://adguard.yojigen.tech/AntiAD.txt](https://adguard.yojigen.tech/AntiAD.txt)                   |
| AdRulesDNSList.txt | [https://adguard.yojigen.tech/AdRulesDNSList.txt](https://adguard.yojigen.tech/AdRulesDNSList.txt)   |
