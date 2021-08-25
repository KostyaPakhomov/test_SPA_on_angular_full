import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormModel} from '../../models/form.model';
import {DataService} from '../../services/dataService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-for-adult',
  templateUrl: './for-adult.component.html',
  styleUrls: ['./for-adult.component.scss']
})
export class ForAdultComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  model: FormModel;
  constructor(private user: DataService) { }

  ngOnInit(): void {
    this.subs = this.user.userActivated.subscribe(
      (form: FormModel) => {
        console.log(form);
        this.model = form;
      }
    );
  }
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }
}
