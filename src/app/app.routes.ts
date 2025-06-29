import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { TalkComponent } from './talk/talk.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"features/:feature", loadComponent:() => FeaturesComponent},
    {path:"contact", loadComponent:()=> TalkComponent},
    {path:"404", component:ErrorComponent},
    {path:"**", component:ErrorComponent}
];