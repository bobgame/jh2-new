import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'
import { environment } from './environments/environment'
import { enableProdMode } from '@angular/core'

// disable all console functions
if (environment.production) {
  enableProdMode()
  window.console.error = () => {}
  window.console.warn = () => {}
  window.console.log = () => {}
  window.console.info = () => {}
  window.console.debug = () => {}
  window.console.trace = () => {}
}

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err))
