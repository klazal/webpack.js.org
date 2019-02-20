webpackJsonp([161],{324:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default='<p>The <code>Compiler</code> module is the main engine that creates a compilation instance\nwith all the options passed through the <a href="/api/cli">CLI</a> or <a href="/api/node">Node API</a>. It extends the\n<code>Tapable</code> class in order to register and call plugins. Most user facing plugins\nare first registered on the <code>Compiler</code>.</p>\n<blockquote class="tip">\n<p>This module is exposed as <code>webpack.Compiler</code> and can be used directly. See\n<a href="https://github.com/pksjce/webpack-internal-examples/tree/master/compiler-example">this example</a>\nfor more information.</p>\n</blockquote>\n<p>When developing a plugin for webpack, you might want to know where each hook is called. To learn this, search for <code>hooks.&#x3C;hook name>.call</code> across the webpack source</p>\n<h2 id="watching">Watching<a href="#watching" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The <code>Compiler</code> supports <a href="/api/node/#watching">watching</a> which monitors the file\nsystem and recompiles as files change. When in watch mode, the compiler will\nemit the additional events such as <code>watchRun</code>, <code>watchClose</code>, and <code>invalid</code>.\nThis is typically used in <a href="/guides/development">development</a>, usually under\nthe hood of tools like <code>webpack-dev-server</code>, so that the developer doesn\'t\nneed to re-compile manually every time. Watch mode can also be entered via the\n<a href="/api/cli/#watch-options">CLI</a>.</p>\n<h2 id="hooks">Hooks<a href="#hooks" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following lifecycle hooks are exposed by the <code>compiler</code> and can be accessed\nas such:</p>\n<pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>someHook<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Depending on the hook type, <code>tapAsync</code> and <code>tapPromise</code> may also be available.</p>\n<p>For the description of hook types, see <a href="https://github.com/webpack/tapable#tapable">the Tapable docs</a>.</p>\n<h3 id="entryoption"><code>entryOption</code><a href="#entryoption" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Executes a plugin after <a href="https://webpack.js.org/configuration/entry-context/#entry">the <code>entry</code> configuration</a> from webpack options has been processed.</p>\n<h3 id="afterplugins"><code>afterPlugins</code><a href="#afterplugins" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Runs a plugin after setting up initial set of plugins.</p>\n<p>Parameters: <code>compiler</code></p>\n<h3 id="afterresolvers"><code>afterResolvers</code><a href="#afterresolvers" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Executes a plugin after resolver setup is complete.</p>\n<p>Parameters: <code>compiler</code></p>\n<h3 id="environment"><code>environment</code><a href="#environment" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Runs a plugin before the environment is prepared.</p>\n<h3 id="afterenvironment"><code>afterEnvironment</code><a href="#afterenvironment" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Executes a plugin after the environment setup is complete.</p>\n<h3 id="beforerun"><code>beforeRun</code><a href="#beforerun" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Adds a hook right before <code>compiler.run()</code> is executed.</p>\n<p>Parameters: <code>compiler</code></p>\n<h3 id="run"><code>run</code><a href="#run" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Hook into the compiler before it begins reading records.</p>\n<p>Parameters: <code>compiler</code></p>\n<h3 id="watchrun"><code>watchRun</code><a href="#watchrun" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Executes a plugin during watch mode after a new compilation is triggered\nbut before the compilation is actually started.</p>\n<p>Parameters: <code>compiler</code></p>\n<h3 id="normalmodulefactory"><code>normalModuleFactory</code><a href="#normalmodulefactory" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Runs a plugin after a <code>NormalModuleFactory</code> is created.</p>\n<p>Parameters: <code>normalModuleFactory</code></p>\n<h3 id="contextmodulefactory"><code>contextModuleFactory</code><a href="#contextmodulefactory" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Runs a plugin after a <code>ContextModuleFactory</code> is created.</p>\n<p>Parameters: <code>contextModuleFactory</code></p>\n<h3 id="beforecompile"><code>beforeCompile</code><a href="#beforecompile" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Executes a plugin after compilation parameters are created.</p>\n<p>Parameters: <code>compilationParams</code></p>\n<h3 id="compile"><code>compile</code><a href="#compile" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Hook into the compiler before a new compilation is created.</p>\n<p>Parameters: <code>compilationParams</code></p>\n<h3 id="thiscompilation"><code>thisCompilation</code><a href="#thiscompilation" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Executed before emitting the <code>compilation</code> event (see below).</p>\n<p>Parameters: <code>compilation</code></p>\n<h3 id="compilation"><code>compilation</code><a href="#compilation" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Runs a plugin after a compilation has been created.</p>\n<p>Parameters: <code>compilation</code></p>\n<h3 id="make"><code>make</code><a href="#make" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncParallelHook</code></p>\n<p>...</p>\n<p>Parameters: <code>compilation</code></p>\n<h3 id="aftercompile"><code>afterCompile</code><a href="#aftercompile" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>...</p>\n<p>Parameters: <code>compilation</code></p>\n<h3 id="shouldemit"><code>shouldEmit</code><a href="#shouldemit" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncBailHook</code></p>\n<p>Can return true/false at this point</p>\n<p>Parameters: <code>compilation</code></p>\n<h3 id="emit"><code>emit</code><a href="#emit" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Before emitting assets to output dir</p>\n<p>Parameters: <code>compilation</code></p>\n<h3 id="afteremit"><code>afterEmit</code><a href="#afteremit" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>After emitting assets to output dir</p>\n<p>Parameters: <code>compilation</code></p>\n<h3 id="done"><code>done</code><a href="#done" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>AsyncSeriesHook</code></p>\n<p>Compilation has completed.</p>\n<p>Parameters: <code>stats</code></p>\n<h3 id="failed"><code>failed</code><a href="#failed" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Compilation has failed.</p>\n<p>Parameters: <code>error</code></p>\n<h3 id="invalid"><code>invalid</code><a href="#invalid" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Watch compilation has been invalidated.</p>\n<p>Parameters: <code>fileName</code>, <code>changeTime</code></p>\n<h3 id="watchclose"><code>watchClose</code><a href="#watchclose" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SyncHook</code></p>\n<p>Watch mode has stopped.</p>\n'}});