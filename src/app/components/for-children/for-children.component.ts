import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormModel} from '../../models/form.model';
import {DataService} from '../../services/dataService';

@Component({
  selector: 'app-for-children',
  templateUrl: './for-children.component.html',
  styleUrls: ['./for-children.component.scss']
})
export class ForChildrenComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  model: FormModel;
  constructor(private user: DataService) { }

  ngOnInit(): void {
    this.subs = this.user.userActivated.subscribe(
      (forma: FormModel) => {
        console.log(forma);
        this.model = forma;
      }
    );
  }
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }
}
