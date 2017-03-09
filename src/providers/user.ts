import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular";
import { Storage } from '@ionic/storage';

/*
 Generated class for the User provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class User {
  private list: any = null;
  constructor(private platform:Platform, private storage: Storage) {
  }
  saveList(){
    this.storage.set('profiles', JSON.stringify(this.list));
  }
  init(success) {
    if(this.list === null) {
      this.getList().then((data) => {
        this.list = JSON.parse(data);
        success();
      });
    }
  }
  getList(){
    return this.storage.get('profiles');
  }
  saveUser(user) {
    let isEdit = false;
    if(user.current && this.list !== null){
      for(var i = 0; i < this.list.length; i++){
        if(user.id === this.list[i].id){
          this.list[i] = user;
          isEdit = true;
        }
        this.list[i].current = false;
      }
    }
    if(!isEdit){
      this.list = this.list || [];
      this.list.push(user);
    }
    this.saveList();
  }

  setCurrentUser(user) {
    console.log(this.list);
    user.current = true;
    for(var i = 0; i < this.list.length; i++){
      if(user.id === this.list[i].id){
        this.list[i] = user;
      }
      this.list[i].current = false;
    }
    this.saveList();
  }

  getCurrentUser() {
    if(this.list){
      for(var i = 0; i < this.list.length; i++){
        if(this.list[i].current){
          return this.list[i];
        }
      }
      this.list[0].current = true;
      this.saveList();
      return this.list[0];
    }
    return null;
  }
  getProfiles() {
    return this.list;
  }

  deleteUser(user) {
    this.list = this.list.filter((u)=> {return u.id === user.id});
    this.saveList();
  }

  editUser(user) {
    this.list = this.list.filter((u)=> {return u.id === user.id});
    this.list.push(user);
    this.saveList();
  }

}
