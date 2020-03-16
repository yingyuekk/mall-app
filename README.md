

## 刚学习了vue然后练习一下，以后如果有机会在完善一下，希望不要太监了

# 搭建vue移动端小商场

*知识点：*

- Vue创建项目
- ![Vue创建项目](C:\Users\qiong\Pictures\创建Vue项目.jpg)
- flex 商品列表布局
- http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
- reset.css的引入
- https://cssreset.com/
- 手机适配问题之rem 和lib-flexible
- https://github.com/amfe/lib-flexible
- 阿里巴巴矢量库icon-font的运用
  1. 新建图标项目
     1. ![图标项目](C:\Users\qiong\Pictures\图标项目.jpg)
  2. 下载图标到本地
  3. 项目中引入
     1. ![全部复制到styles目录下](C:\Users\qiong\Pictures\项目中引入.jpg)
     2. 在main.js中全局引入一下
        1. ![只要引入iconfont.css就可以了](C:\Users\qiong\Pictures\iconfont.jpg)
  4. 使用
     1. ![使用](C:\Users\qiong\Pictures\使用.jpg)
  5. 注意
     1. 项目中增加图标时需要更新的地方
     2. ![项目中增加图标时需要更新的地方-vue](C:\Users\qiong\Pictures\项目中增加图标时需要更新的地方-vue项目.jpg)
     3. ![项目中增加图标时需要更新的地方-iconfont](C:\Users\qiong\Pictures\项目中增加图标时需要更新的地方-iconfont.jpg)

- axios的使用

  1. ```vue
     npm install axios // npm 引入
     ```

  2. 在main.js导入

     1. ```vue
        import axios from 'axios'
        Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
        ```

  3. 简单封装axios

     1. ```vue
        import axios from 'axios'
        // import router from '../router'
        // 引入路由是为了做重定向，比如没有登录过期定向到登录页面
        // 创建axios实例
        const instance = axios.create({
          baseURL: '', // api的base_url
          timeout: 15000, // 请求超时时间
          headers: { 'content-type': 'application/json;charset=UTF-8' }
        })
        
        // 拦截请求
        instance.interceptors.request.use(config => {
          //  可以在此处添加 token
          return config
        }, error => {
          return Promise.reject(error)
        })
        // 拦截响应
        instance.interceptors.response.use(res => {
          // 可以在此处拦截接口错误
          return res
        }, error => {
          return Promise.reject(error)
        })
        export default instance
        ```

  4. api简单封装

     1. ```
        import request from '@/utils/request' // 引入axios文件
        
        export function home () {
          return request({
            url: '/flask-api/home/content',
            method: 'get'
          })
        }
        
        ```

  5. 使用

     1. ![axios的使用](C:\Users\qiong\Pictures\axios的使用.jpg)

  6. axios跨域

     1. ![axios跨域](C:\Users\qiong\Pictures\axios跨域.jpg)