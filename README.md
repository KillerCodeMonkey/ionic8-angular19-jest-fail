# IonicAngular19Jest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

Reproduction repo with Angular 19, Ionic 8 and Jest.

Run `npm run test` to start the default test with jest.
It leads to:

```SH
/home/bengtler/dev/ionic-angular19-jest/node_modules/@stencil/core/internal/client/index.js:11
  import { BUILD } from "@stencil/core/internal/app-data";
  ^^^^^^

  SyntaxError: Cannot use import statement outside a module

    1 | import { Component } from '@angular/core';
    2 | import { RouterOutlet } from '@angular/router';
  > 3 | import { IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
      | ^
    4 | import { addIcons } from 'ionicons';
    5 | import { camera } from 'ionicons/icons';
```
