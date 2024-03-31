import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpCornerComponent } from './help-corner/help-corner.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {path: '', 
     component: HomeComponent,
    },
    {path: 'home', 
     component: HomeComponent,
    },
    {path: 'about', 
     component: AboutComponent,
    },
    {path: 'help', 
     component: HelpCornerComponent,
    },
    {path: 'contact', 
     component: ContactComponent,
    },
    {path: 'gallery', 
     component: FeedbackComponent,
    },
];
