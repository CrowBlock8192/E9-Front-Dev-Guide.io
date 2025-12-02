import{_ as a,c as e,o as i,ae as n}from"./chunks/framework.CFeneB-q.js";const g=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/getting-started.md","filePath":"zh/guide/getting-started.md"}'),p={name:"zh/guide/getting-started.md"};function l(t,s,h,k,c,d){return i(),e("div",null,[...s[0]||(s[0]=[n(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h4 id="前置准备" tabindex="-1">前置准备 <a class="header-anchor" href="#前置准备" aria-label="Permalink to &quot;前置准备&quot;">​</a></h4><p>推荐使用 pnpm 安装依赖，因为它的速度快，占用空间少。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Rp2iM" id="tab-c11SxTe" checked><label data-title="npm" for="tab-c11SxTe">npm</label><input type="radio" name="group-Rp2iM" id="tab-Cr4f_7E"><label data-title="pnpm" for="tab-Cr4f_7E">pnpm</label><input type="radio" name="group-Rp2iM" id="tab-CiL5BED"><label data-title="yarn" for="tab-CiL5BED">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div></div></div><h2 id="项目运行" tabindex="-1">项目运行 <a class="header-anchor" href="#项目运行" aria-label="Permalink to &quot;项目运行&quot;">​</a></h2><h4 id="根据项目选择对应的api" tabindex="-1">根据项目选择对应的api <a class="header-anchor" href="#根据项目选择对应的api" aria-label="Permalink to &quot;根据项目选择对应的api&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> switch:api</span></span></code></pre></div><p>将需要选择项目：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🔍 当前项目API配置:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📋 development : http://keystone.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📋 production  : https://keystone.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📋 staging     : http://keystone.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📚 可用项目:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   base      : Base项目 - Base系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   keystone  : Keystone项目 - Keystone系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   pzgc      : Pzgc项目 - Pzgc系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   shate     : Shate项目 - Shate系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   demo      : Demo项目 - Demo系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   changliu  : Changliu项目 - Changliu系统API接口</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🚀 项目API切换器</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请选择要切换的项目API:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">1. Base项目 (base)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Base系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://keystone.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://keystone.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://keystone.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">2. Keystone项目 (keystone)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Keystone系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://keystone.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://keystone.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://keystone.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">3. Pzgc项目 (pzgc)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Pzgc系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://pzgc.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://pzgc.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://pzgc.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">4. Shate项目 (shate)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Shate系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://sa.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://sa.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://sa.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">5. Demo项目 (demo)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Demo系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://demo.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://demo.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://demo.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">6. Changliu项目 (changliu)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   Changliu系统API接口</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://cl.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : http://cl.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请输入选项编号 (1-6): 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🔄 切换到: Pzgc项目</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🔄 正在更新所有环境的API配置...</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✅ development环境配置文件更新成功</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development: http://pzgc.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✅ production环境配置文件更新成功</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production: https://pzgc.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✅ staging环境配置文件更新成功</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging: http://pzgc.tet.deliver.matchbim.cn/api</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">📖 使用说明:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">==================================================</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✅ 已成功切换到: Pzgc项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">🌍 各环境API地址:</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   development : http://pzgc.dev01.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   production  : https://pzgc.matchbim.cn/api</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   staging     : http://pzgc.tet.deliver.matchbim.cn/api</span></span>
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
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">✨ 多环境切换完成！</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>首次使用前端项目,请使用该命令初始化请求api，目前常用的可选项目有：</p><ul><li>Keystone项目</li><li>Pzgc项目</li><li>Shate项目</li><li>Changliu项目</li></ul></div><h4 id="根据项目选择对应的环境启动" tabindex="-1">根据项目选择对应的环境启动 <a class="header-anchor" href="#根据项目选择对应的环境启动" aria-label="Permalink to &quot;根据项目选择对应的环境启动&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>将需要选择项目：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">可选业务视图：</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  1) changliu (cl)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  2) fanchang (fc)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  3) pzgc (pzgc)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  4) shate (st)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  5) test (ts)</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  选择多个用逗号分隔（输入 0 仅保留 keystone/system/screen）</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请输入选择序号: 3</span></span>
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
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">请选择序号 [1-2] 或名称 (默认 1=运行): 1</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>每次启动前都要选择项目，请求环境，运行的服务</p><ul><li>可选业务视图 <ul><li>每个项目的业务视图可能不同，选择后会和基础业务一起运行或打包</li></ul></li><li>可选模式 <ul><li>location <ul><li>本地环境，示例：<a href="http://192.168.31.102:8080" target="_blank" rel="noreferrer">http://192.168.31.102:8080</a></li></ul></li><li>development <ul><li>开发环境, 示例：<a href="http://keystone.dev01.matchibim.cn/api" target="_blank" rel="noreferrer">http://keystone.dev01.matchibim.cn/api</a></li></ul></li><li>staging <ul><li>测试环境, 示例：<a href="http://keystone.test01.matchibim.cn/api" target="_blank" rel="noreferrer">http://keystone.test01.matchibim.cn/api</a></li></ul></li><li>production <ul><li>生产环境, 示例：<a href="http://keystone.matchibim.cn/api" target="_blank" rel="noreferrer">http://keystone.matchibim.cn/api</a></li></ul></li></ul></li></ul></div><p>开发服务应该会运行在 <code>http://localhost:8193</code> 上。在浏览器中访问 URL 以查看新站点的运行情况吧！</p>`,17)])])}const o=a(p,[["render",l]]);export{g as __pageData,o as default};
