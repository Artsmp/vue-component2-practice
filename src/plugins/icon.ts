import * as Icons from '@element-plus/icons-vue'
import { App } from 'vue'
import { toLine } from '../util'

export function registerIcons(app: App) {
  for (let key in Icons) {
    app.component(`icon${toLine(key)}`, (Icons as any)[key])
  }
}
