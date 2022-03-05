import { createApp } from 'vue'
import App from './App.vue'
import { registerIcons } from './plugins/icon'
import router from './router'
import 'element-plus/es/components/message/style/css'

const app = createApp(App)
registerIcons(app)
app.use(router).mount('#app')
