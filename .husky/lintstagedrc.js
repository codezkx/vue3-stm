/**
  这个用来替换, 这种写法：
  "lint-staged": {
     "*.{vue,js,ts}": "eslint --fix"
  }
 */

/**
 * 配置对应文件的格式化方式
 * 1) git commit -m"添加暂存区的代码" -> pre-commit -> npm run lint:lint-staged ( 只针对暂存区代码格式化 )
 * 2）lint-staged -c lintstagedrc.js
 */
 module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  '*.{scss,less,styl,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
}
