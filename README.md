# 唱票 APP

## 简介

（此处省略 N 字）

## 支持浏览器

- 除了 IE（不保证兼容）

## 依赖

- Git
- Node
- npm

## 运行方法

1. 在命令行下，克隆此 Git 仓库

```bash
git clone https://github.com/Soulike/TicketAnnouncingApp.git
```

2. 将运行目录切换到工程所在目录

```bash
cd TicketAnnouncingApp
```

3. 安装依赖

```bash
npm install
```

4. 依赖安装完成后，运行以下命令即可在本地执行

```bash
npm start
```

## 部署方法

（直接双击 index.html 是不行的）

如果想要打包部署在服务器上，最简单的办法如下

1、2、3 步同[运行方法](#运行方法)。

4. 依赖安装完成后，运行以下命令打包

```bash
npm run build
```

5. 开启静态文件服务

```bash
serve -s build/
```

6. 访问 http://localhost:5000

……当然这个是最简单的，如果想用其他静态服务器可以去必应查一下怎么部署 React 应用。