import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { HelpCornerComponent } from '../help-corner/help-corner.component';

const routes: Routes = [
  { path: 'help', component: HelpCornerComponent },
];

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class FeedbackComponent {

}
