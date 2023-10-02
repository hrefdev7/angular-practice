import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Notre application de base dispose d'un unique point d'entrée main.ts
//

//
//Ce fichier effectue le lancement ou Bootstrapping du module root --appcomponet.ts.

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
 