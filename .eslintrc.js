// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    "jquery": true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 前面的会在构建的时候自动生成，自己添加的是后面的内容
    'space-before-function-paren': 0,
    // 结尾必须有分号的设置
    'semi': ['error', 'always'],
    'indent': 0,
    // 空行最多不能超过2行
    'no-multiple-empty-lines': [1, {
      "max": 1
    }]
  }
}
