(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[202],{420:(e,o,n)=>{"use strict";n.r(o),n.d(o,{data:()=>t});const t={key:"v-617f0fcf",path:"/en/config/outbounds/freedom.html",title:"Freedom",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"OutboundConfigurationObject",slug:"outboundconfigurationobject",children:[]}],filePathRelative:"en/config/outbounds/freedom.md",git:{updatedTime:1622027153e3,contributors:[]}}},6861:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>O});var t=n(6252);const s=(0,t.uE)('<h1 id="freedom"><a class="header-anchor" href="#freedom">#</a> Freedom</h1><p>Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据。</p><h2 id="outboundconfigurationobject"><a class="header-anchor" href="#outboundconfigurationobject">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:3366&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;UseIP&quot; | &quot;UseIPv4&quot; | &quot;UseIPv6&quot;</p></blockquote><p>在目标地址为域名时, 配置相应的值, Freedom 的行为模式如下:</p>',6),u=(0,t.Wm)("li",null,[(0,t.Wm)("code",null,'"AsIs"'),(0,t.Uk)(": Freedom 通过系统 DNS 服务器解析获取 IP, 向此域名发出连接.")],-1),c=(0,t.Wm)("code",null,'"UseIP"',-1),a=(0,t.Uk)("、"),l=(0,t.Wm)("code",null,'"UseIPv4"',-1),d=(0,t.Uk)(" 和 "),r=(0,t.Wm)("code",null,'"UseIPv6"',-1),p=(0,t.Uk)(": Xray 使用 "),i=(0,t.Uk)("内置 DNS 服务器"),m=(0,t.Uk)(" 解析获取 IP, 向此域名发出连接. 默认值为 "),k=(0,t.Wm)("code",null,'"AsIs"',-1),b=(0,t.Uk)("。"),q={class:"custom-container tip"},U=(0,t.Wm)("p",{class:"custom-container-title"},"TIP 1",-1),f=(0,t.Uk)("当使用 "),h=(0,t.Wm)("code",null,'"UseIP"',-1),g=(0,t.Uk)(" 模式，并且 "),v=(0,t.Uk)("出站连接配置"),I=(0,t.Uk)(" 中指定了 "),P=(0,t.Wm)("code",null,"sendThrough",-1),W=(0,t.Uk)(" 时，Freedom 会根据 "),y=(0,t.Wm)("code",null,"sendThrough",-1),j=(0,t.Uk)(" 的值自动判断所需的 IP 类型，IPv4 或 IPv6。"),F=(0,t.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>当使用 <code>&quot;UseIPv4&quot;</code> 或 <code>&quot;UseIPv6&quot;</code> 模式时，Freedom 会只使用对应的 IPv4 或 IPv6 地址。当 <code>sendThrough</code> 指定了不匹配的本地地址时，将导致连接失败。</p></div><blockquote><p><code>redirect</code>: address_port</p></blockquote><p>Freedom 会强制将所有数据发送到指定地址（而不是 inbound 指定的地址）。</p><p>其值为一个字符串，样例：<code>&quot;127.0.0.1:80&quot;</code>，<code>&quot;:1234&quot;</code>。</p><p>当地址不指定时，如 <code>&quot;:443&quot;</code>，Freedom 不会修改原先的目标地址。 当端口为 <code>0</code> 时，如 <code>&quot;xray.com: 0&quot;</code>，Freedom 不会修改原先的端口。</p><blockquote><p><code>userLevel</code>: number</p></blockquote>',6),_=(0,t.Uk)("用户等级，连接会使用这个用户等级对应的 "),w=(0,t.Uk)("本地策略"),T=(0,t.Uk)("。"),x=(0,t.Uk)("userLevel 的值, 对应 "),C=(0,t.Uk)("policy"),S=(0,t.Uk)(" 中 "),A=(0,t.Wm)("code",null,"level",-1),L=(0,t.Uk)(" 的值。 如不指定, 默认为 0。"),O={render:function(e,o){const n=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[s,(0,t.Wm)("ul",null,[u,(0,t.Wm)("li",null,[c,a,l,d,r,p,(0,t.Wm)(n,{to:"/en/config/dns.html"},{default:(0,t.w5)((()=>[i])),_:1}),m,k,b])]),(0,t.Wm)("div",q,[U,(0,t.Wm)("p",null,[f,h,g,(0,t.Wm)(n,{to:"/en/config/outbound.html#outboundobject"},{default:(0,t.w5)((()=>[v])),_:1}),I,P,W,y,j])]),F,(0,t.Wm)("p",null,[_,(0,t.Wm)(n,{to:"/en/config/policy.html#levelpolicyobject"},{default:(0,t.w5)((()=>[w])),_:1}),T]),(0,t.Wm)("p",null,[x,(0,t.Wm)(n,{to:"/en/config/policy.html#policyobject"},{default:(0,t.w5)((()=>[C])),_:1}),S,A,L])],64)}}}}]);