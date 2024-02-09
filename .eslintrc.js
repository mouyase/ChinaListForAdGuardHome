module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    eqeqeq: 'error', // 必须使用全等
    'no-nested-ternary': 'error', // 禁止嵌套三元表达式
    'react-native/no-inline-styles': 'off', // 关闭行内样式检测
    'react/display-name': 'off', // 关闭display-name检测，打开会导致无法定义箭头函数组件
    curly: 'error', // 强制要求if换行
    'no-unused-vars': ['warn'],
  },
}
