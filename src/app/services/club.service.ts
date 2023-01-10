import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Sportif } from '../models/sportif';


@Injectable({
  providedIn: 'root'
})
export class ClubService{
sportifs : Sportif [] = [
  {firstName : 'Razzak', lastName : 'Khalfallah', age : 27, sport : 'BodyBuilding'},
  {firstName : 'Nicolas', lastName : 'Guy', age : 30, sport : 'Football'},
  {firstName : 'Nicolas', lastName : 'Fuente', age : 35, sport : 'Natation'},
];

  constructor() { }

  getSportifs(){
   return of(this.sportifs);
  }
}
