import{_ as e,c as a,o as n,ae as i}from"./chunks/framework.CFeneB-q.js";const k=JSON.parse('{"title":"PC · Quick Start","description":"","frontmatter":{},"headers":[],"relativePath":"en/pc/getting-started.md","filePath":"en/pc/getting-started.md","lastUpdated":1789438865000}'),t={name:"en/pc/getting-started.md"};function p(l,s,h,d,c,o){return n(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="pc-·-quick-start" tabindex="-1">PC · Quick Start <a class="header-anchor" href="#pc-·-quick-start" aria-label="Permalink to &quot;PC · Quick Start&quot;">​</a></h1><blockquote><p>Blueprint: <code>e9tech/keystone-deliver-ui</code> (standard product). Customer copies (keystone / changliu / demo, etc.) are provided by the team — the workflow is identical. Goal: run the standard product locally and sign in within half a day.</p></blockquote><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Item</th><th>Requirement</th><th>Notes</th></tr></thead><tbody><tr><td>Git</td><td>latest</td><td>—</td></tr><tr><td>Node.js</td><td>20+ recommended (team uses Node 24 daily)</td><td>No <code>engines</code> declared; <strong>legacy Vue2 projects (beam-web / e9-epim) need Node 14/16 — do not mix</strong>, use nvm</td></tr><tr><td>pnpm</td><td>10.x recommended (same as this guide site)</td><td>The project uses pnpm (pnpm-lock.yaml); <code>corepack enable</code> or <code>npm i -g pnpm</code></td></tr><tr><td>npm registry</td><td>default or company mirror</td><td>Check registry/proxy first when installs fail</td></tr></tbody></table><h2 id="clone-and-install" tabindex="-1">Clone and install <a class="header-anchor" href="#clone-and-install" aria-label="Permalink to &quot;Clone and install&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/s-construction-site/keystone-delivery-ui.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keystone-delivery-ui</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Why pnpm</p><p>pnpm&#39;s global store hard-links shared dependencies — 20+ customer copies in the e9tech workspace can each install deps without duplicating disk usage. <strong>No need to hand-share node_modules via mklink.</strong></p></div><h2 id="select-the-project-api-pnpm-switch-api" tabindex="-1">Select the project API (<code>pnpm switch:api</code>) <a class="header-anchor" href="#select-the-project-api-pnpm-switch-api" aria-label="Permalink to &quot;Select the project API (\`pnpm switch:api\`)&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">Note</p><p>Run this on first use and whenever switching to another customer project — otherwise requests go to the previously selected backend.</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> switch:api</span></span></code></pre></div><p>The script scans <code>.env.development / .env.staging / .env.production</code> for variables shaped like <code>VITE_APP_&lt;KEY&gt;_API</code> to discover selectable projects, then rewrites <code>VITE_APP_BASE_API</code> in all three files to the chosen project&#39;s address:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🔍 当前项目API配置:</span></span>
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
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✨ 多环境切换完成！</span></span></code></pre></div><p>The eight selectable projects:</p><table tabindex="0"><thead><tr><th>Option</th><th>key</th><th>Customer / meaning</th><th>Production API</th></tr></thead><tbody><tr><td>1</td><td>keystone</td><td><strong>Keystone standard product (default)</strong></td><td><code>https://keystone.matchbim.cn/api</code></td></tr><tr><td>2</td><td>pzgc</td><td>Quality Engineering</td><td><code>https://pzgc.matchbim.cn/api</code></td></tr><tr><td>3</td><td>shate</td><td>Saudi Arabia domestic (sa)</td><td><code>https://sa.matchbim.cn/api</code></td></tr><tr><td>4</td><td>demo</td><td>Standard-product permission refactor demo</td><td><code>https://demo.matchbim.cn/api</code></td></tr><tr><td>5</td><td>changliu</td><td>Changliu (cl)</td><td><code>https://cl.matchbim.cn/api</code></td></tr><tr><td>6</td><td>zhongjiao</td><td>China Communications (zj)</td><td><code>https://zj.matchbim.cn/api</code></td></tr><tr><td>7</td><td>runcheng</td><td>Runcheng</td><td><code>https://runcheng.matchbim.cn/api</code></td></tr><tr><td>8</td><td>sahw</td><td>Saudi Arabia overseas (production only)</td><td><code>http://37.224.115.117:10099/api</code></td></tr></tbody></table><h2 id="select-business-views-and-start-pnpm-start" tabindex="-1">Select business views and start (<code>pnpm start</code>) <a class="header-anchor" href="#select-business-views-and-start-pnpm-start" aria-label="Permalink to &quot;Select business views and start (\`pnpm start\`)&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>Each start asks for three things: <strong>business views → mode → run/build</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">可选业务视图：</span></span>
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
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请选择序号 [1-2] 或名称 (默认 1=运行): 1</span></span></code></pre></div><ul><li><strong>Business views</strong>: <code>changliu(cl)</code>, <code>fanchang(fc)</code>, <code>pzgc(pzgc)</code>, <code>shate(st)</code>, <code>test(ts)</code>; enter <code>0</code> to keep only keystone + system + screen. The choice is written to <code>VITE_BUILD_VIEWS</code> in <code>.env.&lt;mode&gt;</code> — unselected business directories are excluded from compilation (the &quot;one codebase, multi-project delivery&quot; mechanism);</li><li><strong>Modes</strong>: <code>location</code> (local, dev-server proxy), <code>development</code>, <code>staging</code>, <code>production</code>;</li><li>The alias mapping lives in <code>src/config/business.config.js</code>.</li></ul><p>The dev server runs at <strong><code>http://localhost:8193</code></strong> (<code>VITE_PORT</code>).</p><h2 id="sign-in" tabindex="-1">Sign in <a class="header-anchor" href="#sign-in" aria-label="Permalink to &quot;Sign in&quot;">​</a></h2><ul><li><strong>Accounts</strong>: SSO accounts are managed by the SSO platform (e9-sso-ui); ask a project admin to create one;</li><li><strong>Local <code>location</code> mode</strong>: <code>.env.location</code> defaults to <code>VITE_APP_USE_SSO=false</code> — no SSO redirect, local login page against your local backend (<code>VITE_APP_BASE_URL</code>);</li><li><strong>SSO enabled</strong>: set <code>VITE_APP_USE_SSO=true</code> and configure <code>VITE_APP_SSO_URL</code>; unauthenticated visits redirect to the SSO login page;</li><li>The route whitelist contains only the login page (<code>WHITE_LIST = [&#39;Login&#39;]</code>).</li></ul><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Fix</th></tr></thead><tbody><tr><td>Port 8193 in use</td><td>Kill the process or change <code>VITE_PORT</code> in <code>.env</code></td></tr><tr><td><code>pnpm install</code> fails</td><td>Check pnpm version and registry; remove <code>node_modules</code> and reinstall; don&#39;t reuse a legacy Vue2 Node 14/16 environment</td></tr><tr><td>404 / CORS after start</td><td>Make sure <code>pnpm switch:api</code> selected the right project; in location mode check <code>VITE_APP_BASE_URL</code> in <code>.env.location</code></td></tr><tr><td>Blank page / missing views</td><td>Check the business-view selection — if <code>VITE_BUILD_VIEWS</code> doesn&#39;t include the business directory, its views aren&#39;t compiled</td></tr><tr><td>403 after login</td><td>Dynamic routes come from server-side menus; a role with no visible menus reports &quot;no route permission&quot; — ask an admin to configure menus</td></tr></tbody></table><hr><p><strong>Owner</strong>: E9 Frontend Team ｜ <strong>Last verified</strong>: 2026-09-16 ｜ <strong>Blueprint</strong>: <code>keystone-deliver-ui</code></p>`,26)])])}const g=e(t,[["render",p]]);export{k as __pageData,g as default};
