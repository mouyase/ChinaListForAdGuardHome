# ChinaListForAdGuardHome

基于`googlehosts`和`dnsmasq-china-list`生成的`AdGuardHome`上游DNS配置

`ChinaList`是基于`dnsmasq-china-list`，使用`阿里云`的`DoH`解析的配置

`GoogleHostsList`是基于`googlehosts`，使用`Quad9`的`DoH`解析的配置

`ChinaWhiteList`是融合了二者的基础上，添加了`Quad9`，`Google`和`Cloudflare`的`DoH`作为基础解析的配置，如果需要`除大陆白名单以外全部使用国外DNS`，则可以选择此方案

`ChinaBlackList`是融合了二者的基础上，添加了`阿里云`和`腾讯云`的`DoH`作为基础解析的配置，如果需要`除GoogleHosts以外全部使用大陆DNS`，则可以选择此方案

`HalfLifeList.txt`与`AntiAD.txt`是目前两个比较适合大陆的广告屏蔽表，推荐大家使用


## 使用方式
讲文件内容复制到`DNS 设置 / 上游 DNS 服务器`中，保存即可

|文件名|地址|
|-|-|
|ChinaList|[https://adguard.yojigen.tech/ChinaList.txt](https://adguard.yojigen.tech/ChinaList.txt)|
|GoogleHostsList|[https://adguard.yojigen.tech/GoogleHostsList.txt](https://adguard.yojigen.tech/GoogleHostsList.txt)|
|ChinaWhiteList|[https://adguard.yojigen.tech/ChinaWhiteList.txt](https://adguard.yojigen.tech/ChinaWhiteList.txt)|
|ChinaBlackList|[https://adguard.yojigen.tech/ChinaBlackList.txt](https://adguard.yojigen.tech/ChinaBlackList.txt)|
|HalfLifeList.txt|[https://adguard.yojigen.tech/HalfLifeList.txt](https://adguard.yojigen.tech/HalfLifeList.txt)|
|AntiAD.txt|[https://adguard.yojigen.tech/AntiAD.txt](https://adguard.yojigen.tech/AntiAD.txt)|
