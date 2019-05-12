import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { RaaModule } from './raa.module';
import { RaaComponent } from './raa.component';
import { JssContextService } from './jss-context.service';
import { JssContextServerSideService } from './jss-context.server-side.service';
import { JssTranslationServerLoaderService } from './i18n/jss-translation-server-loader.service';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    RaaModule,
    ServerModule,
    ModuleMapLoaderModule, // <-- *Important* to have lazy-loaded routes work
    ServerTransferStateModule,
    TranslateModule.forRoot({ // <-- *Important* to get translation values server-side
      loader: {
        provide: TranslateLoader,
        useFactory: (ssrViewBag: any) => {
          return new JssTranslationServerLoaderService(ssrViewBag);
        },
        deps: ['JSS_SERVER_VIEWBAG']
      }
    }),
  ],
  providers: [
    // *Important*: Get JSS route data server-side from Sitecore or proxy (server.bundle injection)
    { provide: JssContextService, useClass: JssContextServerSideService },
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [RaaComponent]
})
export class RaaServerModule { }
