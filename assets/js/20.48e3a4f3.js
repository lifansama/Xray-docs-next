(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{381:function(t,e,o){"use strict";o.r(e);var s=o(26),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"dokodemo-door"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dokodemo-door"}},[t._v("#")]),t._v(" Dokodemo door")]),t._v(" "),o("p",[t._v("Dokodemo door（任意门）可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果。")]),t._v(" "),o("h2",{attrs:{id:"inboundconfigurationobject"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeout"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followRedirect"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userLevel"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("blockquote",[o("p",[o("code",[t._v("address")]),t._v(": address")])]),t._v(" "),o("p",[t._v("将流量转发到此地址。可以是一个 IP 地址，形如 "),o("code",[t._v('"1.2.3.4"')]),t._v("，或者一个域名，形如 "),o("code",[t._v('"xray.com"')]),t._v("。字符串类型。")]),t._v(" "),o("p",[t._v("当 "),o("code",[t._v("followRedirect")]),t._v("（见下文）为 "),o("code",[t._v("true")]),t._v(" 时，"),o("code",[t._v("address")]),t._v(" 可为空。")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("port")]),t._v(": number")])]),t._v(" "),o("p",[t._v("将流量转发到目标地址的指定端口，范围 [1, 65535]，数值类型。必填参数。")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("network")]),t._v(': "tcp" | "udp" | "tcp,udp"')])]),t._v(" "),o("p",[t._v("可接收的网络协议类型。比如当指定为 "),o("code",[t._v('"tcp"')]),t._v(" 时，仅会接收 TCP 流量。默认值为 "),o("code",[t._v('"tcp"')]),t._v("。")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("timeout")]),t._v(": number")])]),t._v(" "),o("p",[t._v("连接空闲的时间限制。单位为秒。默认值为 "),o("code",[t._v("300")]),t._v("。处理一个连接时，如果在 "),o("code",[t._v("timeout")]),t._v(" 时间内，没有任何数据被传输，则中断该连接。")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("followRedirect")]),t._v(": true | false")])]),t._v(" "),o("p",[t._v("当值为 "),o("code",[t._v("true")]),t._v(" 时，dokodemo-door 会识别出由 iptables 转发而来的数据，并转发到相应的目标地址。")]),t._v(" "),o("p",[t._v("可参考 "),o("a",{attrs:{href:"../../base/transport#sockoptobject"}},[t._v("传输配置")]),t._v(" 中的 "),o("code",[t._v("tproxy")]),t._v(" 设置。")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("userLevel")]),t._v(": number")])]),t._v(" "),o("p",[t._v("用户等级，连接会使用这个用户等级对应的"),o("a",{attrs:{href:"../../base/policy#levelpolicyobject"}},[t._v("本地策略")]),t._v("。")]),t._v(" "),o("p",[t._v("userLevel 的值, 对应 "),o("a",{attrs:{href:"../../base/policy#policyobject"}},[t._v("policy")]),t._v(" 中 level 的值. 如不指定, 默认为 0.")]),t._v(" "),o("h2",{attrs:{id:"透明代理配置样例"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#透明代理配置样例"}},[t._v("#")]),t._v(" 透明代理配置样例")]),t._v(" "),o("p",[t._v("此部分请参考"),o("a",{attrs:{href:"../../../documents/level-2/tproxy"}},[t._v("透明代理（TProxy）配置教程")]),t._v("。")])])}),[],!1,null,null,null);e.default=a.exports}}]);