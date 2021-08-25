import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormModel} from '../../models/form.model';
import {DataService} from '../../services/dataService';

@Component({
  selector: 'app-for-big-company',
  templateUrl: './for-big-company.component.html',
  styleUrls: ['./for-big-company.component.scss']
})
export class ForBigCompanyComponent implements OnInit, OnDestroy {
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
