import{_ as e,c as a,o as i,ae as n}from"./chunks/framework.CFeneB-q.js";const r=JSON.parse('{"title":"PC 端 · 快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"pc/getting-started.md","filePath":"pc/getting-started.md","lastUpdated":1789438865000}'),t={name:"pc/getting-started.md"};function p(l,s,h,d,c,k){return i(),a("div",null,[...s[0]||(s[0]=[n(`<h1 id="pc-端-·-快速开始" tabindex="-1">PC 端 · 快速开始 <a class="header-anchor" href="#pc-端-·-快速开始" aria-label="Permalink to &quot;PC 端 · 快速开始&quot;">​</a></h1><blockquote><p>蓝本：<code>e9tech/keystone-deliver-ui</code>（标品）。客户副本（keystone / changliu / demo 等）由团队提供对应仓库地址，操作流程相同。 目标：半天内在本地跑起标品并登录进系统。</p></blockquote><h2 id="环境前置清单" tabindex="-1">环境前置清单 <a class="header-anchor" href="#环境前置清单" aria-label="Permalink to &quot;环境前置清单&quot;">​</a></h2><table tabindex="0"><thead><tr><th>项</th><th>要求</th><th>说明</th></tr></thead><tbody><tr><td>Git</td><td>最新版</td><td>—</td></tr><tr><td>Node.js</td><td>建议 20+（团队日常使用 Node 24）</td><td>项目未声明 <code>engines</code>；<strong>存量 Vue2 项目（beam-web / e9-epim）需 Node 14/16，勿混用</strong>，建议装 nvm 切换</td></tr><tr><td>pnpm</td><td>推荐与指南站一致的 10.x</td><td>项目用 pnpm 管理依赖（有 pnpm-lock.yaml）；<code>corepack enable</code> 或 <code>npm i -g pnpm</code></td></tr><tr><td>npm 源</td><td>默认源或公司内网源</td><td>装不上依赖时先检查源与代理</td></tr></tbody></table><h2 id="克隆与安装" tabindex="-1">克隆与安装 <a class="header-anchor" href="#克隆与安装" aria-label="Permalink to &quot;克隆与安装&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/s-construction-site/keystone-delivery-ui.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keystone-delivery-ui</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">为什么用 pnpm</p><p>pnpm 全局 store 硬链接共享依赖，装多份项目也不重复占磁盘。此外 <code>e9tech</code> 工作区根 README 还提供了 mklink 方案——把各项目的 <code>node_modules</code> 目录联接到工作区根共享目录：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mklink</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">orkspace</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\E</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">9</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dmin-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">9tech</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">9-delivery-ui</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ode_modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">orkspace</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\E</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">9</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dmin-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">9tech</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ode_modules</span></span></code></pre></div><p>多副本工作区可按此法进一步省磁盘（需要管理员权限的 cmd 执行）。</p></div><h2 id="选择项目-api-pnpm-switch-api" tabindex="-1">选择项目 API（<code>pnpm switch:api</code>） <a class="header-anchor" href="#选择项目-api-pnpm-switch-api" aria-label="Permalink to &quot;选择项目 API（\`pnpm switch:api\`）&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">注意</p><p>首次使用项目、或需要切换其他客户项目时，必须先执行，否则请求会打到上一次选择的后端。</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> switch:api</span></span></code></pre></div><p>脚本自动扫描 <code>.env.development / .env.staging / .env.production</code> 中形如 <code>VITE_APP_&lt;KEY&gt;_API</code> 的变量发现可选项目，交互选择后把三个环境文件的 <code>VITE_APP_BASE_API</code> 统一替换为所选项目的地址：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🔍 当前项目API配置:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📋 development : http://changliu.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📋 production  : https://demo.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📋 staging     : http://demo.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📚 可用项目:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   keystone  : Keystone项目 (默认) - Keystone系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   pzgc      : Pzgc项目 - Pzgc系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   shate     : Shate项目 - Shate系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   demo      : Demo项目 - Demo系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   changliu  : Changliu项目 - Changliu系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   zhongjiao : Zhongjiao项目 - Zhongjiao系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   runcheng  : Runcheng项目 - Runcheng系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   sahw      : Sahw项目 - Sahw系统API接口</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🚀 项目API切换器</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请选择要切换的项目API:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">1. Keystone项目 (默认) (keystone)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Keystone系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://keystone.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://keystone.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://keystone.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">2. Pzgc项目 (pzgc)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Pzgc系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://pzgc.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://pzgc.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://pzgc.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">3. Shate项目 (shate)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Shate系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://sa.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://sa.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://sa.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">4. Demo项目 (demo)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Demo系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://demo.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://demo.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://demo.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">5. Changliu项目 (changliu)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Changliu系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://changliu.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://cl.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">6. Zhongjiao项目 (zhongjiao)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Zhongjiao系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://zj.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://zj.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">7. Runcheng项目 (runcheng)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Runcheng系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://runcheng.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://runcheng.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">8. Sahw项目 (sahw)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Sahw系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : http://37.224.115.117:10099/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请输入选项编号 (1-8): 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🔄 切换到: Keystone项目</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🔄 正在更新所有环境的API配置...</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✅ development环境配置文件更新成功</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development: http://keystone.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✅ production环境配置文件更新成功</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production: https://keystone.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✅ staging环境配置文件更新成功</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging: http://keystone.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📖 使用说明:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✅ 已成功切换到: Keystone项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🌍 各环境API地址:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://keystone.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://keystone.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://keystone.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📋 现在可以使用以下命令:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   开发环境: npm run dev 或 pnpm dev</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   测试环境: npm run build:stage 或 pnpm build:stage</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   生产环境: npm run build:pro 或 pnpm build:pro</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">💡 重要提示:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   - 所有环境的VITE_APP_BASE_API都已同步更新</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   - 构建生产版本时会使用对应的生产API地址</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   - API配置统一从.env文件中读取，避免重复配置</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   - HTTP配置文件中的baseURL: import.meta.env.VITE_APP_BASE_API保持不变</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✨ 多环境切换完成！</span></span></code></pre></div><p>八个可选项目对照：</p><table tabindex="0"><thead><tr><th>选项</th><th>key</th><th>客户 / 含义</th><th>生产 API</th></tr></thead><tbody><tr><td>1</td><td>keystone</td><td><strong>Keystone 标品（默认）</strong></td><td><code>https://keystone.matchbim.cn/api</code></td></tr><tr><td>2</td><td>pzgc</td><td>品质工程</td><td><code>https://pzgc.matchbim.cn/api</code></td></tr><tr><td>3</td><td>shate</td><td>沙特国内（sa）</td><td><code>https://sa.matchbim.cn/api</code></td></tr><tr><td>4</td><td>demo</td><td>标品权限改造演示</td><td><code>https://demo.matchbim.cn/api</code></td></tr><tr><td>5</td><td>changliu</td><td>长浏（cl）</td><td><code>https://cl.matchbim.cn/api</code></td></tr><tr><td>6</td><td>zhongjiao</td><td>中交（zj）</td><td><code>https://zj.matchbim.cn/api</code></td></tr><tr><td>7</td><td>runcheng</td><td>润城</td><td><code>https://runcheng.matchbim.cn/api</code></td></tr><tr><td>8</td><td>sahw</td><td>沙特海外（sahw，仅生产环境）</td><td><code>http://37.224.115.117:10099/api</code></td></tr></tbody></table><h2 id="选择业务视图与环境启动-pnpm-start" tabindex="-1">选择业务视图与环境启动（<code>pnpm start</code>） <a class="header-anchor" href="#选择业务视图与环境启动-pnpm-start" aria-label="Permalink to &quot;选择业务视图与环境启动（\`pnpm start\`）&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>每次启动都要选三件事：<strong>业务视图 → 运行模式 → 运行/打包</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">可选业务视图：</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  1) changliu (cl)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  2) fanchang (fc)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  3) pzgc (pzgc)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  4) shate (st)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  5) test (ts)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  选择多个用逗号分隔（输入 0 仅保留 keystone/system/screen）</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请输入选择序号: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">可选模式：</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  1) location</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  2) development</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  3) staging</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  4) production</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请选择模式序号 [1-4] 或名称 (默认 1=location): 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">选择操作：</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  1) 运行开发服务</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  2) 打包构建</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请选择序号 [1-2] 或名称 (默认 1=运行): 1</span></span></code></pre></div><ul><li><strong>可选业务视图</strong>：<code>changliu(cl)</code>、<code>fanchang(fc)</code>、<code>pzgc(pzgc)</code>、<code>shate(st)</code>、<code>test(ts)</code>；输 <code>0</code> 仅保留 keystone + system + screen。选择结果写入对应 <code>.env.&lt;mode&gt;</code> 的 <code>VITE_BUILD_VIEWS</code>（逗号分隔别名），未选中的业务目录不参与编译——这就是「一套代码、多项目交付」的裁剪机制；</li><li><strong>可选模式</strong>：<code>location</code>（本地，前端代理到 <code>VITE_APP_BASE_URL</code>）、<code>development</code>（开发）、<code>staging</code>（测试）、<code>production</code>（生产）；</li><li>别名映射的唯一配置源：<code>src/config/business.config.js</code>。</li></ul><p>开发服务运行在 <strong><code>http://localhost:8193</code></strong>（<code>VITE_PORT</code>），浏览器访问即可。</p><h2 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-label="Permalink to &quot;登录&quot;">​</a></h2><ul><li><strong>账号来源</strong>：SSO 账号由 SSO 平台（e9-sso-ui）统一管理，找项目管理员开通；</li><li><strong>本地 location 模式</strong>：<code>.env.location</code> 默认 <code>VITE_APP_USE_SSO=false</code>——不跳 SSO，走本地登录页，使用本地联调后端（<code>VITE_APP_BASE_URL</code>）的账号约定；</li><li><strong>开启 SSO</strong>：将 <code>VITE_APP_USE_SSO</code> 置 <code>true</code> 并配置 <code>VITE_APP_SSO_URL</code> 后，未登录访问会跳转 SSO 登录页（完整链路见<a href="/E9-Front-Dev-Guide.io/pc/references/sso-login.html">SSO 登录链路</a>）；</li><li>路由白名单只有登录页（<code>WHITE_LIST = [&#39;Login&#39;]</code>），其余页面都需要登录态。</li></ul><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>处理</th></tr></thead><tbody><tr><td>端口 8193 被占用</td><td>杀掉占用进程，或改 <code>.env</code> 的 <code>VITE_PORT</code></td></tr><tr><td><code>pnpm install</code> 失败</td><td>检查 pnpm 版本与 npm 源；删除 <code>node_modules</code> 与 lock 后重装；确认没有把存量 Vue2 项目的 Node 14/16 环境混用过来</td></tr><tr><td>启动后接口 404 / 跨域</td><td>确认已 <code>pnpm switch:api</code> 选择正确项目；location 模式检查 <code>.env.location</code> 的 <code>VITE_APP_BASE_URL</code> 是否指向可达后端</td></tr><tr><td>页面打开空白 / 视图缺失</td><td>检查 <code>pnpm start</code> 时业务视图选择——<code>VITE_BUILD_VIEWS</code> 未包含对应业务目录则该视图不编译</td></tr><tr><td>登录后 403</td><td>动态路由来自服务端菜单，当前角色无可见菜单即报「当前角色无路由权限」——找管理员配置菜单</td></tr></tbody></table>`,24)])])}const g=e(t,[["render",p]]);export{r as __pageData,g as default};
