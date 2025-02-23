import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'
import { HammerModule } from '@angular/platform-browser'

import 'hammerjs'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom(HammerModule)],
}

export const vs = {
  dv: 10,
  hv: 2,
  up: 18, // 升级check的版本15
}

// 找到 \CordovaLib\src\org\apache\cordova\engine\SystemWebViewEngine.java 文件，里面有一个 initWebViewSettings 方法，在里面可以对webView进行一些修改。

// 1 webView.setInitialScale(0);
// 2 webView.setVerticalScrollBarEnabled(false);
// 3 // Enable JavaScript
// 4 final WebSettings settings = webView.getSettings();
// 5 settings.setJavaScriptEnabled(true);
// 6 settings.setJavaScriptCanOpenWindowsAutomatically(true);
// 7 settings.setLayoutAlgorithm(LayoutAlgorithm.NORMAL);

//  这是其内部其中的一部分代码，我们紧接着这些代码之后追加设置字体的代码即可，因为这里面有把webView.getSettings()赋值给settings变量，所以我们只需在其后追加

// settings.setTextZoom(100);
// 保存一下，重新打包app，完美解决。
