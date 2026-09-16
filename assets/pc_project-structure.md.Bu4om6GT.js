import{_ as a,c as n,o as e,ae as i}from"./chunks/framework.CFeneB-q.js";const u=JSON.parse('{"title":"PC 端 · 项目结构","description":"","frontmatter":{},"headers":[],"relativePath":"pc/project-structure.md","filePath":"pc/project-structure.md","lastUpdated":1789438865000}'),p={name:"pc/project-structure.md"};function t(l,s,c,o,d,r){return e(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="pc-端-·-项目结构" tabindex="-1">PC 端 · 项目结构 <a class="header-anchor" href="#pc-端-·-项目结构" aria-label="Permalink to &quot;PC 端 · 项目结构&quot;">​</a></h1><blockquote><p>由原《项目整体结构说明》与《Keystone 目录结构介绍》合并而成，以 <code>keystone-deliver-ui</code> 实际代码核对（2026-09-16）。</p></blockquote><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>Keystone 2.0（工程信息化管理平台）基于 Vue 3 + Vite + Arco Design，采用「一套代码、多项目交付」架构：</p><ul><li><strong>keystone</strong> 为标品业务（默认参与编译），其余（fanchang / pzgc / shate / changliu / test）为客户定制业务；</li><li><code>.env</code> 中的 <code>VITE_BUILD_VIEWS</code> 控制参与编译的业务视图，实现按客户裁剪打包；</li><li>数据大屏（screen）是相对独立的子系统，自带完整的路由 / 状态管理 / 组件分层。</li></ul><h2 id="整体目录结构" tabindex="-1">整体目录结构 <a class="header-anchor" href="#整体目录结构" aria-label="Permalink to &quot;整体目录结构&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ scripts/                        # 工程/开发辅助脚本（Node.js，不参与业务运行）</span></span>
<span class="line"><span>│  ├─ api-switcher.js              #   接口环境切换（pnpm switch:api）</span></span>
<span class="line"><span>│  ├─ views-switcher.mjs           #   交互选择业务视图写入 VITE_BUILD_VIEWS 后 spawn vite（pnpm start）</span></span>
<span class="line"><span>│  └─ i18n/                        #   i18n 工具脚本（generate / extract-components / check-unused / dedupe / migrate / verify-keys，见 pnpm i18n:*）</span></span>
<span class="line"><span>├─ build/                          # Vite 构建插件与工具函数</span></span>
<span class="line"><span>├─ public/                         # 原样拷贝的静态资源</span></span>
<span class="line"><span>├─ nginx/                          # 部署用 Nginx 配置（含域名验证文件）</span></span>
<span class="line"><span>├─ test/                           # 配置校验脚本</span></span>
<span class="line"><span>├─ skills/                         # AI 辅助开发指引（接口迁移、按钮权限接入等）</span></span>
<span class="line"><span>├─ src/                            # 源码主目录（见下）</span></span>
<span class="line"><span>├─ auto-imports.d.ts / components.d.ts   # unplugin 自动生成，勿手改</span></span>
<span class="line"><span>├─ vite.config.js                  # Vite 配置（业务视图按需编译、代理、插件）</span></span>
<span class="line"><span>├─ tailwind.config.js / postcss.config.js</span></span>
<span class="line"><span>├─ .env*                           # 多环境变量（见参考文档·环境变量清单）</span></span>
<span class="line"><span>├─ .eslintrc.cjs / .prettierrc.cjs / .editorconfig</span></span>
<span class="line"><span>├─ .cz-config.js / commitlint.config.js  # 提交规范（commitizen + commitlint）</span></span>
<span class="line"><span>├─ .husky/                         # pre-commit → lint-staged</span></span>
<span class="line"><span>├─ Dockerfile / .dockerignore</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p><code>src/</code> 一级结构：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├─ api/            # 接口层（按业务域分目录，见下）</span></span>
<span class="line"><span>├─ assets/         # 静态资源（icons/ 下的 svg 注册为 icon-xxx 组件）</span></span>
<span class="line"><span>├─ certs/          # 本地 HTTPS 证书</span></span>
<span class="line"><span>├─ components/     # 全局通用组件（与具体业务无关，全站共享——含原「shared」职责）</span></span>
<span class="line"><span>├─ composables/    # 组合式函数（全局骨架屏、i18n 刷新）</span></span>
<span class="line"><span>├─ config/         # business.config.js：业务目录→别名映射的唯一配置源</span></span>
<span class="line"><span>├─ constants/      # 全局常量（权限标识 permissions.js、页面权限、路由 constants.js、主题）</span></span>
<span class="line"><span>├─ directives/     # 自定义指令（核心：v-permission 按钮权限指令）</span></span>
<span class="line"><span>├─ hooks/          # 组合式函数（9 个，见下）</span></span>
<span class="line"><span>├─ layout/         # 布局（垂直/水平/混合、导航栏、侧边栏、标签栏）</span></span>
<span class="line"><span>├─ locale/         # i18next 国际化资源与加载（见下）</span></span>
<span class="line"><span>├─ router/         # 路由（guard 守卫、routes 静态路由、动态路由管理）</span></span>
<span class="line"><span>├─ settings/       # 应用全局设置</span></span>
<span class="line"><span>├─ store/          # Pinia（modules + plugins）</span></span>
<span class="line"><span>├─ styles/         # 全局样式（变量、断点、Arco 覆写）</span></span>
<span class="line"><span>├─ utils/          # 工具库（http/、auth、cache、upload 等）</span></span>
<span class="line"><span>└─ views/          # 页面视图：business / screen / system 三大块</span></span></code></pre></div><h2 id="views-business-screen-system-三大块" tabindex="-1">views：business / screen / system 三大块 <a class="header-anchor" href="#views-business-screen-system-三大块" aria-label="Permalink to &quot;views：business / screen / system 三大块&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>views/</span></span>
<span class="line"><span>├─ business/                      # 业务模块视图（多项目定制）</span></span>
<span class="line"><span>│  ├─ keystone/                   #   标品业务（默认参与编译），按业务域组织：</span></span>
<span class="line"><span>│  │  ├─ cfg_center/              #     配置中心（菜单/字典/用户/角色/流程等 36 个子模块，最大配置域）</span></span>
<span class="line"><span>│  │  ├─ personnel_mgmt/          #     人员管理（考勤/考试/工资/定位等）</span></span>
<span class="line"><span>│  │  ├─ qual_mgmt/               #     质量管理（沥青/水泥/水稳/混凝土试验检测、拌合站、隧道监测等，最大业务域）</span></span>
<span class="line"><span>│  │  ├─ safe_mgmt/               #     安全管理（AI 报警/巡检/许可证/基坑/高边坡/视频监控）</span></span>
<span class="line"><span>│  │  ├─ machinery_mgmt/          #     机械管理（塔吊/龙门吊/运输车/船舶/司机）</span></span>
<span class="line"><span>│  │  ├─ general_mgmt/            #     综合管理（合同/计量/党建）</span></span>
<span class="line"><span>│  │  ├─ material_cost/           #     材料成本（投资计划/进度填报/称重台账）</span></span>
<span class="line"><span>│  │  ├─ progress_collab/         #     进度协同（形象进度/里程碑）</span></span>
<span class="line"><span>│  │  ├─ env_mgmt/                #     环境管理（环境/土壤/水体监测、智能水电表）</span></span>
<span class="line"><span>│  │  └─ shared/                  #     业务内共享组件</span></span>
<span class="line"><span>│  ├─ changliu/  (cl)             # 客户定制业务（别名见 business.config.js）</span></span>
<span class="line"><span>│  ├─ fanchang/  (fc)</span></span>
<span class="line"><span>│  ├─ pzgc/      (pzgc)</span></span>
<span class="line"><span>│  ├─ shate/     (st)</span></span>
<span class="line"><span>│  └─ test/      (ts)</span></span>
<span class="line"><span>├─ screen/                        # 数据大屏子系统（独立分层）</span></span>
<span class="line"><span>│  ├─ api/ router/ store/ hooks/ utils/   # 大屏自己的接口、路由、状态与工具</span></span>
<span class="line"><span>│  ├─ layout/ pages/              # 布局 + 各项目大屏页面（shate/xuzhou/suzhou 等）</span></span>
<span class="line"><span>│  ├─ library/                    # 大屏通用卡片/图表组件库（screen-lib:exports 生成导出）</span></span>
<span class="line"><span>│  └─ components/ styles/ assets/ config/ docs/</span></span>
<span class="line"><span>└─ system/                        # 系统级页面</span></span>
<span class="line"><span>   ├─ account-info/  error-page/  frame/  map/  redirect/</span></span></code></pre></div><h2 id="api-层组织" tabindex="-1">api 层组织 <a class="header-anchor" href="#api-层组织" aria-label="Permalink to &quot;api 层组织&quot;">​</a></h2><p><code>src/api/</code> 按后端业务域分目录，与 <code>views/business/keystone/</code> 一一对应：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api/</span></span>
<span class="line"><span>├─ cfg_center/  common/  env_mgmt/  general_mgmt/  machinery_mgmt/</span></span>
<span class="line"><span>├─ material_cost/  personnel_mgmt/  progress_collab/  qual_mgmt/</span></span>
<span class="line"><span>├─ safe_mgmt/  system/</span></span></code></pre></div><p>写法约定（以 <code>api/qual_mgmt/rebound_hammer_test.js</code> 为例——qual_mgmt 下 110+ 个按业务主题一文件的 snake_case 文件）：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/utils/http&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 回弹仪分页查询</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@example</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> POST /reboundmeter/query/page</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getReboundmeterListApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`/reboundmeter/query/page\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;POST&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		params,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		data,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>命名</strong>：<code>getXxxListApi</code> / <code>addXxxApi</code> / <code>editXxxApi</code> / <code>delXxxApi</code>，动词 + 业务名 + <code>Api</code> 后缀；</li><li><strong>注释</strong>：JSDoc 中文一句话 + <code>@example</code> 标注方法与路径；</li><li><strong>导出</strong>：<code>export function</code> 具名导出；<code>params</code>（query）/ <code>data</code>（body）双参透传。</li></ul><h2 id="关键目录职责边界" tabindex="-1">关键目录职责边界 <a class="header-anchor" href="#关键目录职责边界" aria-label="Permalink to &quot;关键目录职责边界&quot;">​</a></h2><table tabindex="0"><thead><tr><th>目录</th><th>职责</th><th>边界提示</th></tr></thead><tbody><tr><td><code>src/utils/http/</code></td><td>class HttpClient：重试、统一请求头、业务前缀改写、401/302 处理</td><td>行为规格见<a href="/E9-Front-Dev-Guide.io/pc/references/http-request.html">请求封装参考</a>，业务代码不要绕过它直接 new axios</td></tr><tr><td><code>src/hooks/</code></td><td>9 个组合式函数：<code>usePager</code>（分页）、<code>usePermission</code>（按钮权限）、<code>useRequest</code>、<code>useLoading</code>、<code>useTimePicker</code>、<code>useTimeQuery</code>、<code>useUser</code>、<code>useLocale</code>（i18next 无刷新切语言）、<code>permissionHelper</code>（<code>definePermission</code> 生成 13 种标准权限码）</td><td>页面逻辑优先复用 hooks，不要自写分页/权限逻辑</td></tr><tr><td><code>src/store/</code></td><td>Pinia 模块：<code>app / dict / equipment / locale / permission / section / theme / user / viewTag</code>（+ screen store 经 modules/index.js 并入导出）</td><td>持久化仅限 persist 白名单；token/tenantId 走 <code>@/utils/auth</code></td></tr><tr><td><code>src/locale/</code></td><td>i18next 分层加载：<code>index.js</code>（初始化 + LanguageDetector，fallback zh）、<code>loader.js</code>（路由级懒加载 views 下 zh/en.json）、三个预加载域 <code>basic_components/ common/ screen/</code>（各含 index.js + zh.json + en.json）</td><td>语言存储用裸 key <code>arco-locale</code>；页面词条放页面内 <code>locale/zh.json|en.json</code>，详见<a href="/E9-Front-Dev-Guide.io/pc/references/i18n-architecture.html">国际化架构</a></td></tr></tbody></table><h2 id="多业务按需编译机制" tabindex="-1">多业务按需编译机制 <a class="header-anchor" href="#多业务按需编译机制" aria-label="Permalink to &quot;多业务按需编译机制&quot;">​</a></h2><ol><li>业务目录与别名的唯一配置源：<code>src/config/business.config.js</code>（fanchang=fc、pzgc、shate=st、changliu=cl、test=ts；keystone 默认常驻）；</li><li><code>pnpm start</code>（scripts/views-switcher.mjs）交互选择参与编译的业务，写入 <code>.env.&lt;mode&gt;</code> 的 <code>VITE_BUILD_VIEWS</code>，随后自动 spawn vite dev / build；</li><li>vite 侧经 define 注入 <code>__BUILD_VIEWS__</code> 等编译期常量，未选中的业务子路由指向空路由，不参与加载；</li><li><code>pnpm switch:api</code> 切换接口环境（详见<a href="/E9-Front-Dev-Guide.io/pc/getting-started.html#选择项目-api-pnpm-switch-api">快速开始</a>）。</li></ol><h2 id="相关文档" tabindex="-1">相关文档 <a class="header-anchor" href="#相关文档" aria-label="Permalink to &quot;相关文档&quot;">​</a></h2><ul><li><a href="./function-development.html">功能开发</a> —— 用这套结构开发一个新页面</li><li><a href="/E9-Front-Dev-Guide.io/pc/references/button-permissions-architecture.html">按钮权限架构</a> ｜ <a href="/E9-Front-Dev-Guide.io/pc/references/i18n-architecture.html">国际化架构</a></li><li>业务模块到页面的明细树可从仓库 <code>views/business/keystone/</code> 直接查看（历史文档中的逐页清单已从本指南移除，需要时从 git 历史找回）</li></ul>`,23)])])}const k=a(p,[["render",t]]);export{u as __pageData,k as default};
