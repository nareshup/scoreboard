import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import{TournamentsdirectorhomePage} from '../pages/tournamentsdirectorhome/tournamentsdirectorhome';
import { HomePage } from '../pages/home/home';
import { Refereescoreboardwinby1Page} from '../pages/refereescoreboardwinby1/refereescoreboardwinby1';
import { Refereescoreboardwinby2Page} from '../pages/refereescoreboardwinby2/refereescoreboardwinby2';
import {PickleBallservices} from '../providers/pickle-ballservices';


@Component({
  templateUrl: 'app.html',
  providers:[PickleBallservices]

})
export class MyApp {
  
  rootPage;

  constructor(platform: Platform,public storage: Storage,public service:PickleBallservices) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      //Splashscreen.hide();
    });
    this.storage.get('loginUser-Role').then((val)=>{
        if(val==="Tournament Director"){
            this. rootPage = TournamentsdirectorhomePage;
         }else{
          this. rootPage = HomePage;
        }
    });
  }
  

}
