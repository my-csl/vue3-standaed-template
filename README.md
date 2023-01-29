此项目是基于 create-vue 创建的 vue3+ts+vite+eslint+prettier+husky+commitizen 项目模版

# eslint 和 prettier

eslint 和 prettier 在创建使用脚手架的时候已经选择了该配置，开箱即用，不需要额外配置，但是 prettier 的配置文件和忽略文件还需要手动创建  
vite 默认是不打印 eslint 的错误的，需要安装插件才可以  
1、vite-plugin-eslint  
2、@nabla/vite-plugin-eslint  
两个插件的区别就是 @nabla/vite-plugin-eslint 只会在控制台打印出 eslint 的错误，永远不会导致构建失败，而 vite-plugin-eslint 跟 webpack 上的 eslint 插件基本相同，可以设置 waring 和 error 错误的显示效果

# husky

使用 husky 接管 git hook，实现 git 提交代码的时候格式化和校验 git commit 信息  
1、npx husky-init && npm i；直接安装并初始化 husky

# lint-staged

使用 lint-staged 实现 git add 的文件才进行格式化  
1、npm i lint-staged -D  
2、创建.lintstagedrc.json 配置文件

```json
{
  "*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}": [
    "prettier --write .",
    "eslint --fix"
  ],
  "*.md": ["prettier --write"]
}
```

3、配合 husky 设置格式化命令  
4、在.husky 目录下的 pre-commit 运行 `npx lint-staged` 命令

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

# commitizen

使用 commitizen 可以使用交互式的命令提交 commit 信息  
1、npm i commitizen -D  
2、npx commitizen init cz-conventional-changelog --save-dev --save-exact
3、提交代码的时候使用 npx cz 即可，也可以在 package.json 中设置 npm 的命令

# commitlint

使用 commitlint 限制 git commit 提交信息  
1、npm i @commitlint/config-conventional @commitlint/cli -D  
2、创建 commitlint.config.js 配置文件

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

3、npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
