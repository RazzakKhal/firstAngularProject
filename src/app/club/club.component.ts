import { Component } from '@angular/core';
import { Sportif } from '../models/sportif';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent {

sportifs : Sportif [] | undefined;

  constructor(clubService : ClubService){
clubService.getSportifs().subscribe({
  next : (donnees) => {this.sportifs = donnees},
  error : () => {console.log('il y a une erreur')},
  complete : () => {console.log('requete terminée')}

});
  }

}
