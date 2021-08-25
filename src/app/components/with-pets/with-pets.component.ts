import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormModel} from '../../models/form.model';
import {DataService} from '../../services/dataService';

@Component({
  selector: 'app-with-pets',
  templateUrl: './with-pets.component.html',
  styleUrls: ['./with-pets.component.scss']
})
export class WithPetsComponent implements OnInit, OnDestroy {
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
