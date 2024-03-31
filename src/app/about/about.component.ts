import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { HelpCornerComponent } from '../help-corner/help-corner.component';

const routes: Routes = [
  { path: 'help', component: HelpCornerComponent },
];


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
