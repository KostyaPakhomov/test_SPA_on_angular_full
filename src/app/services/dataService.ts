import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable()
export class DataService{
  userActivated = new ReplaySubject(3);
}
