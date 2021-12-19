import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { SocialsComponent } from "./socials/socials.component";
import { StreamComponent } from "./stream/stream.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'stream', component: StreamComponent },
    { path: 'socials', component: SocialsComponent },
    { path: '**', component: HomeComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
