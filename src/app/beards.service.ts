import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export enum BeardType {
  LUMBERJACK,
  HIPSTER,
  HOMELESS
}

@Injectable()
export class BeardsService {
  private af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
  }

  public getBeards(kind:BeardType, num = 5) : FirebaseListObservable<any[]> {
    return this.af.database.list(BeardType[kind].toLowerCase());
  }

}
