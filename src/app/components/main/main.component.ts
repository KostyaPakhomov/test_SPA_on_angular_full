import { Component, OnInit } from '@angular/core';
import {FormModel} from '../../models/form.model';
import {DataService} from '../../services/dataService';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  form: FormModel;
  clientForm: FormGroup;
  validPatternNum = '^[0-9]*$';
  validPatternAlpha = '^[А-Яа-яЁёa-zA-Z\s]+$';
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private user: DataService, private router: Router) {
    this._createForm();
  }
  ngOnInit(): void {
  }
  setParams(): void {
    if (this.clientForm.valid) {
      const surname = this.clientForm.get('surname').value;
      const name = this.clientForm.get('name').value;
      const adultsCount = parseInt(this.clientForm.get('adultsCount').value, 10);
      const childrenCount = parseInt(this.clientForm.get('childrenCount').value, 10);
      const pets = this.clientForm.get('pets').value;
      this.form = {
        surname,
        name,
        adultsCount,
        childrenCount,
        pets,
        dateNow: Date.now()
      };

      this.user.userActivated.next(this.form);
      if ((adultsCount > 0) && (adultsCount <= 40) && (childrenCount < 1) && (pets === false)) {
        this.router.navigate(['/for-adult']).then(m => console.log('Это оно ' + m));
      } else if ((adultsCount > 0) && (childrenCount > 0) && ((adultsCount + childrenCount) <= 40) && (pets === false)) {
        this.router.navigate(['/for-children']);
      } else if ((adultsCount > 0) && (adultsCount <= 40) && ((adultsCount + childrenCount) <= 40) && (pets === true)) {
        this.router.navigate(['/with-pets']);
      } else if (((adultsCount > 40) || ((adultsCount + childrenCount) > 40)) && (pets === false)) {
        this.router.navigate(['/for-big-company']);
      } else {
        alert('Усадеб более чем на 40 персон с животными не существует!');
      }
    }
  }
  private _createForm(): void {
    this.clientForm = this.fb.group({
      surname: ['',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(this.validPatternAlpha)
        ]
      ],
      name: ['',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(this.validPatternAlpha)
        ]
      ],
      adultsCount: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(60),
          Validators.pattern(this.validPatternNum)
        ]
      ],
      childrenCount: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
          Validators.pattern(this.validPatternNum)
        ]
      ],
      pets: [false, Validators.nullValidator]
    });
  }
  // tslint:disable-next-line:typedef
  get _surname() {
    return this.clientForm.get('surname');
  }
  // tslint:disable-next-line:typedef
  get _name() {
    return this.clientForm.get('name');
  }
  // tslint:disable-next-line:typedef
  get _adultsCount() {
    return this.clientForm.get('adultsCount');
  }
  // tslint:disable-next-line:typedef
  get _childrenCount() {
    return this.clientForm.get('childrenCount');
  }
  // tslint:disable-next-line:typedef
  get _pets() {
    return this.clientForm.get('pets');
  }
}
