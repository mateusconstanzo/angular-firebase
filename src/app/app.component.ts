import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  items: Observable<any[]>;

  itemsRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) {

    this.items = db.list('/items', ref => ref.limitToFirst(2).orderByKey()).valueChanges()

    //db.list('items').push('aaaaaaaaa');

    //this.items = this.itemsRef.valueChanges();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function(result) {

      debugger;
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      
      

    });
  } 

  logout() {
    this.afAuth.auth.signOut();
  }  

}
