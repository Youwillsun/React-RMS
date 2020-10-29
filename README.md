# 后台管理系统(React + antDesign)

**Language：react + antDesign**

**学习说明：**

> 项目只具有学习意义：

1. react 路由的学习—【整个页面的切换，组件之间的跳转】

   - 如何处理路由逻辑
   - 路由重定向
   - 路由抽取成单独文件
   - 路由传参 【 ？定义可选参数】

2. react hook 学习

   - useState 定义状态（数据）

     ```bash
     # () 内提供初始值
     const [state，setState] = useState(0);
     ```

   - useEffect 副作用，用于组件初始化时调用一些方法

     ```bash
     # []为提供初始化时的依赖，可以传空数组或者不传
     useEffect((=>{
         # your method
     },[]))
     ```

3. 项目整体架构搭建学习：

   - pages - 页面
   - components - 组件
   - services - 服务
   - routes - 路由
   - utils - 工具
   - App.js - 组件之间路由逻辑 【加载组件】
   - index.js - 根路由 【包含 404页面 | login页面 | App.js】

4. axios 请求学习：

   - axios 各种请求封装及使用
   - axios 拦截器，自动拦截请求并添加头部token信息，自动拦截响应数据，获取其中内容。

5. antDesign UI框架学习：

   - 框架安装及引入。
   - 各类组件的使用及布局。

6. 代码逻辑学习

   - 登录逻辑
   - 列表渲染
   - 列表增删改查

**注意事项：**

- 学习时看代码就好。

- 未使用`react-reudux`

- 代码中API调用会出错，所以导致页面只能通过url地址访问。
- `/admin/products/edit` 页面出现了错误，待修改。

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
