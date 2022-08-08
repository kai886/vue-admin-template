# vue-admin-template

> 这是一个极简的 vue admin 管理后台系统。它包含了 Element UI & axios & iconfont & permission control & lint。


## 安装

```bash
# 克隆项目
git clone https://github.com/kai886/vue-admin-template.git

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```
