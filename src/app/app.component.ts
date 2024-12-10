import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonContent, IonFab, IonFabButton, IonIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ionic-angular19-jest';
  constructor() {
    addIcons({
      camera
    })
  }
}
