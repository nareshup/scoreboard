import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PickleBallservices} from '../../providers/pickle-ballservices';
/*
  Generated class for the Spectatorhome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-spectatorhome',
  templateUrl: 'spectatorhome.html',
  providers:[PickleBallservices]
})
export class SpectatorhomePage {
  Turnamentes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:PickleBallservices) {}

  ionViewDidLoad() {
     this.service.SpectatorGetMatches().subscribe(response => {
                this.Turnamentes=response.Matchs;
      },err =>{
      });
  }

}
