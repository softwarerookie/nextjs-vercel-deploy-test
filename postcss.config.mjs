const config = {
  plugins: [
    "@tailwindcss/postcss",
    "autoprefixer",
    "postcss-preset-env", // 整合多个插件
    [
      "postcss-normalize", // 重置浏览器默认样式
      {
        browsers: ["> 1%", "last 2 versions", "not ie <= 11"],
      },
    ],
  ],
};

export default config;
