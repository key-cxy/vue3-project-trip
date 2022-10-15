import { createApp } from 'vue'
import App from './App.vue'

// 引入样式重置文件
import "normalize.css"
import "./assets/css/index.css"

// 引入路由
import router from "./router"

// 引入pinia
import pinia from './store'


const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
