import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { HelpCornerComponent } from '../help-corner/help-corner.component';

const routes: Routes = [
  { path: 'help', component: HelpCornerComponent },
];

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
