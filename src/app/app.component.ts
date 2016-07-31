import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { DisplayComponent } from './display';
import { BeardsService, BeardType } from './beards.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DisplayComponent]
})
export class AppComponent implements OnInit {
  private beards: FirebaseListObservable<any[]>;
  private bs: BeardsService;

  constructor(bs: BeardsService) {
    this.bs = bs;
  }

  ngOnInit() {
    this.beards = this.bs.getBeards(BeardType.LUMBERJACK, 3);
  }
}
