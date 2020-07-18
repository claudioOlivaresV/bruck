import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: 'home', component: MainComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
