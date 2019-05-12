import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RaaModule } from './app/raa.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Waiting for DOMContentLoaded is a temporary workaround to get TransferState working in the client
// See https://github.com/angular/angular/issues/20484 for further info.
document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(RaaModule)
    .catch(err => console.log(err));
});
