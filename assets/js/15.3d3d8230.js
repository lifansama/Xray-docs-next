(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{376:function(r,t,e){"use strict";e.r(t);var a=e(26),s=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"vless-协议详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vless-协议详解"}},[r._v("#")]),r._v(" VLESS 协议详解")]),r._v(" "),e("blockquote",[e("p",[e("strong",[r._v("VLESS 是原创的无状态的轻量传输协议, 也是 Xray 一切的开始")])])]),r._v(" "),e("h2",{attrs:{id:"协议详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协议详解"}},[r._v("#")]),r._v(" 协议详解 "),e("Badge",{attrs:{text:"WIP",type:"warning"}})],1),r._v(" "),e("h2",{attrs:{id:"配置模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置模板"}},[r._v("#")]),r._v(" 配置模板")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/xtls/Xray-examples",target:"_blank",rel:"noopener noreferrer"}},[r._v("Xray-examples"),e("OutboundLink")],1),r._v(" 有完整的 VLESS 配置示例供参考。（但目前不能保证其它协议的配置示例质量）")]),r._v(" "),e("h2",{attrs:{id:"客户端开发指引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端开发指引"}},[r._v("#")]),r._v(" 客户端开发指引")]),r._v(" "),e("ol",[e("li",[r._v("VLESS 协议本身还会有不兼容升级，但客户端配置文件参数基本上是只增不减的。"),e("strong",[r._v("所以如果你开发了用 core 的客户端，现在就可以适配。")]),r._v(" iOS 客户端的协议实现则需紧跟升级。")]),r._v(" "),e("li",[e("strong",[r._v("视觉标准：UI 标识请统一用 VLESS")]),r._v("，而不是 VLess / Vless / vless，配置文件不受影响，代码内则顺其自然。")]),r._v(" "),e("li",[e("code",[r._v("encryption")]),r._v(" 应做成输入框而不是选择框，新配置的默认值应为 "),e("code",[r._v("none")]),r._v("，若用户置空则应代填 "),e("code",[r._v("none")]),r._v("。")])]),r._v(" "),e("p",[e("strong",[r._v("以下为已支持图形化配置 VLESS 的部分客户端列表，推荐使用：")]),r._v("（排名不分先后顺序）")]),r._v(" "),e("ul",[e("li",[r._v("OpenWrt\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/xiaorouji/openwrt-passwall",target:"_blank",rel:"noopener noreferrer"}},[r._v("PassWall"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/jerrykuku/luci-app-vssr",target:"_blank",rel:"noopener noreferrer"}},[r._v("Hello World"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/fw876/helloworld",target:"_blank",rel:"noopener noreferrer"}},[r._v("ShadowSocksR Plus+"),e("OutboundLink")],1)])])]),r._v(" "),e("li",[r._v("Windows\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/2dust/v2rayN",target:"_blank",rel:"noopener noreferrer"}},[r._v("v2rayN"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray",target:"_blank",rel:"noopener noreferrer"}},[r._v("Qv2ray"),e("OutboundLink")],1)])])]),r._v(" "),e("li",[r._v("Android\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/2dust/v2rayNG",target:"_blank",rel:"noopener noreferrer"}},[r._v("v2rayNG"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/rurirei/Kitsunebi/tree/release_xtls",target:"_blank",rel:"noopener noreferrer"}},[r._v("Kitsunebi"),e("OutboundLink")],1)])])]),r._v(" "),e("li",[r._v("iOS / Mac\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://apps.apple.com/app/shadowrocket/id932747118",target:"_blank",rel:"noopener noreferrer"}},[r._v("Shadowrocket"),e("OutboundLink")],1)])])])]),r._v(" "),e("h2",{attrs:{id:"fallbacks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fallbacks"}},[r._v("#")]),r._v(" Fallbacks")]),r._v(" "),e("p",[r._v("Fallbacks 是 Xray 独创的新型协议回落模式解析, 可有效防止主动探测, 自由配置常用端口多服务共享.")]),r._v(" "),e("p",[r._v("目前 Xray 中的 VLESS 和 trojan 协议支持Fallbacks.")]),r._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/config/fallback/#fallbacks-配置"}},[r._v("Fallbacks 配置说明")])],1),r._v(" "),e("li",[e("a",{attrs:{href:""}},[r._v("Fallbacks 功能简析")])]),r._v(" "),e("li",[e("RouterLink",{attrs:{to:"/config/fallback/#fallbacks-设计理论"}},[r._v("Fallbacks 设计理论")])],1)]),r._v(" "),e("h2",{attrs:{id:"vless-分享链接标准"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vless-分享链接标准"}},[r._v("#")]),r._v(" VLESS 分享链接标准")]),r._v(" "),e("p",[r._v("感谢"),e("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/7822648?s=32",width:"32px",height:"32px",alt:"a"}}),r._v(" "),e("a",{attrs:{href:"https://github.com/DuckSoft",target:"_blank",rel:"noopener noreferrer"}},[r._v("@DuckSoft"),e("OutboundLink")],1),r._v(" 的提案!")]),r._v(" "),e("p",[r._v("目前为初步提案, 详情请见"),e("a",{attrs:{href:"https://github.com/XTLS/Xray-core/issues/91",target:"_blank",rel:"noopener noreferrer"}},[r._v("VMessAEAD / VLESS 分享链接标准提案"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);