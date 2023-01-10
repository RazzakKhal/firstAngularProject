import { AccueilComponent } from "./accueil/accueil.component";
import { ClubComponent } from "./club/club.component";
import { ContactComponent } from "./contact/contact.component";
import { RequetageComponent } from "./requetage/requetage.component";
import { Routes } from "@angular/router";

const ROUTES : Routes= [
{path : 'accueil', component : AccueilComponent},
{path : 'club', component : ClubComponent},
{path : 'contact', component : ContactComponent},
{path : 'requetage', component : RequetageComponent}
];
 export {ROUTES};
