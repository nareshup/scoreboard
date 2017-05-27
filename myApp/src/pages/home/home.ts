import { Component } from '@angular/core';
import { NavController, NavParams,AlertController} from 'ionic-angular';
import{TournamentsdirectorhomePage} from '../tournamentsdirectorhome/tournamentsdirectorhome';
import {RecmodalhomepagePage} from '../recmodalhomepage/recmodalhomepage';
import {PickleBallservices} from '../../providers/pickle-ballservices';
import { Refereescoreboardwinby1Page} from '../refereescoreboardwinby1/refereescoreboardwinby1';
import { Refereescoreboardwinby2Page} from '../refereescoreboardwinby2/refereescoreboardwinby2';
import { SpectatorhomePage } from '../Spectatorhome/Spectatorhome';
// import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PickleBallservices]
})
export class HomePage {
  createtournmentshow=false;
  Homepageobj:any={};
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams,public service:PickleBallservices,public storage: Storage) {}
  //function for page onload.
  	ionViewDidLoad(){

          this.storage.get('loginUser-Token').then((val)=>{
              if(val!==null){
                  this.service.RefereeReloadScoreBoard(val).subscribe(response => {
                    if(response.Matchs.twopointse){
                        this.navCtrl.push(Refereescoreboardwinby2Page,response.Matchs);
                    }else{
                        this.navCtrl.push(Refereescoreboardwinby1Page,response.Matchs); 
                    }
			    },err =>{
				});
              }
                
                
            });
          this.Homepageobj.SignInShow=false;
      }
  //function for TournmentDirector opstion click.
  TournmentDirectors(){
    this.Homepageobj.SignInShow=!this.Homepageobj.SignInShow;
    this.Homepageobj.TournmentDirectorlogin=true;
    this.Homepageobj.Refereelogin=false;
    // this.service.getData().subscribe(response => {
    //     console.log(response);
    //     this.navCtrl.push(TournamentsdirectorhomePage);

    //     this.storage.set('login_user',"email").then(() => {
    //         console.log("naresh");
    //     })
    //     })
    //     this.storage.get('nare').then((val)=>{
    //         console.log(val);
    //     });


    // this.Homepageobj.LoginUserName=null;
    // this.Homepageobj.LoginPassword=null;
    // this.Homepageobj.SignInShow=!this.Homepageobj.SignInShow;

  }

  //function for TournmentDirector login and validastionse card.
  Login(){
      if(this.Homepageobj.LoginUserName===null){
            this.AlertMethode("Enter coruct UserName");
      }else if(this.Homepageobj.LoginPassword ===null){
            this.AlertMethode("Enter coruct password");
      }else{
          let obj:any={};
              obj.email=this.Homepageobj.LoginUserName;
              obj.password=this.Homepageobj.LoginPassword;
             this.service.TournmentDirectorsLogin(obj).subscribe(response => {
                this.storage.set('loginUser-Token',response.token);
                 this.storage.set('loginUser-Role',response.role);
                this.navCtrl.push(TournamentsdirectorhomePage,response.token);
                this.Homepageobj.LoginUserName=null;
                this.Homepageobj.LoginPassword=null;
                this.Homepageobj.SignInShow=false;
                this.Homepageobj.TournmentDirectorlogin=false;
                
             },err =>{
                 this.AlertMethode("Please Enter valid email and Password");
                this.Homepageobj.LoginUserName=null;
                this.Homepageobj.LoginPassword=null;
             });

           
      }
  }

  //function for Referre login and validastionse card.
  RefereeLogin(){
      this.Homepageobj.SignInShow=!this.Homepageobj.SignInShow;
      this.Homepageobj.Refereelogin=true;
      this.Homepageobj.TournmentDirectorlogin=false; 
  }

   LoginReferee(){
      if(this.Homepageobj.LoginUserName===null){
            this.AlertMethode("Enter coruct UserName");
      }else if(this.Homepageobj.LoginPassword ===null){
            this.AlertMethode("Enter coruct password");
      }else{
          let obj:any={};
              obj.RefereeName=this.Homepageobj.LoginUserName;
              obj.RefereePassword=this.Homepageobj.LoginPassword;
             this.service.RefereeLoginService(obj).subscribe(response => {
                this.storage.set('loginUser-Token',response.Token);
                this.storage.set('loginUser-Role',response.role);
                if(response.Matchs.twopointse){
                    this.navCtrl.push(Refereescoreboardwinby2Page,response.Matchs);
                }else{
                    this.navCtrl.push(Refereescoreboardwinby1Page,response.Matchs); 
                }
                this.Homepageobj.LoginUserName=null;
                this.Homepageobj.LoginPassword=null;
                this.Homepageobj.SignInShow=false;
                this.Homepageobj.Refereelogin=false;
                
             },err =>{
                this.AlertMethode("Please Enter valid email and Password");
                this.Homepageobj.LoginUserName=null;
                this.Homepageobj.LoginPassword=null;
             });

           
      }
  }

  //function for login form validastionse card.

  //function for close login card.
  closeLogin(){
    this.Homepageobj.SignInShow=false;
    this.Homepageobj.TournmentDirectorlogin=false;
    this.Homepageobj.Refereelogin=false;
    this.Homepageobj.LoginUserName=null;
    this.Homepageobj.LoginPassword=null;
  }

  // function for Show create tournment card.
  Showcreatetournmentcard(){
    this.Homepageobj.SignInShow=false;
    this.createtournmentshow=!this.createtournmentshow;

  }
  // function for Show creae tournment.
  createtournment(){

    if(this.Homepageobj.TournamentTitle===null){
          this.AlertMethode("Fill TournamentTitle Details");
      }else if(this.Homepageobj.UserId===null){
          this.AlertMethode("Fill Tournament User Details");
      }else if(this.Homepageobj.Password===null){
          this.AlertMethode("Fill Password");
      }else if(this.Homepageobj.TournamentLogo===null){
          this.AlertMethode("Fill TournamentLogo Details");
      }else if(this.Homepageobj.TournamentStartDate===null){
          this.AlertMethode("Fill TournamentStartDate Details");
      }else if(this.Homepageobj.TournamentEndDate===null){
          this.AlertMethode("Fill TournamentEndDate Details");
      }else if(this.Homepageobj.TournamentAddress===null){
          this.AlertMethode("Fill TournamentAddress Details");
      }else if(this.Homepageobj.TournamentZipcode===null){
          this.AlertMethode("Fill TournamentZipcode Details");
      }else if(this.Homepageobj.TournamentCity===null){
          this.AlertMethode("Fill TournamentCity Details");
      }else{
          this.createtournmentshow=false;
          this.Homepageobj.TournamentLogo="assets/icon/newicon.png";
      }

  }
  //function Spectator Matches home screen.
  SpectatorMatches(){
       this.navCtrl.push(SpectatorhomePage); 
  }

  //function for RecMode methode.
  RecMode(){
      this.navCtrl.push(RecmodalhomepagePage);
  }

  //function for alert messages
    AlertMethode(str){
          let prompt = this.alertCtrl.create({
          message: str,
          buttons: [
            {
            text: 'ok',
            handler: data => {
            }
          }
        ]
      });
      prompt.present();
    }
    



}
