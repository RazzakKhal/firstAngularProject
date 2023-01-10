import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sportif } from '../models/sportif';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnDestroy {

sportifs : Sportif [] | undefined;
subscrition : Subscription;

  constructor(clubService : ClubService){
this.subscrition = clubService.getSportifs().subscribe({
  next : (donnees) => {this.sportifs = donnees},
  error : () => {console.log('il y a une erreur')},
  complete : () => {console.log('requete terminée')}

});
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }

}
