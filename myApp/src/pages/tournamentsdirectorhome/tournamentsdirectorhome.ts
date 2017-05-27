import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { Refereescoreboardwinby1Page} from '../refereescoreboardwinby1/refereescoreboardwinby1';
import { Refereescoreboardwinby2Page} from '../refereescoreboardwinby2/refereescoreboardwinby2';
import {PickleBallservices} from '../../providers/pickle-ballservices';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/*
  Generated class for the Tournamentsdirectorhome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournamentsdirectorhome',
  templateUrl: 'tournamentsdirectorhome.html',
  providers:[PickleBallservices]
})
export class TournamentsdirectorhomePage {
        courtlist;
        MensDoubles4to5;
        MensDoubles5to0;
        WomensDoubles5to0;
        MensSingles4to0;
        WomensSingles4to5;
        Referees;
        SinglesList;
        DoublesList;
        header;
        Curentshedulecourt:any={};
        TeamBPlayersList=[];
        TeamAPlayersList=[];
        SelectedfirstTeamb=false;
        ShedulecourtListArray=[];
        SelectedEventName=null;
        SelectedFormatName=null;
        ScheduleMatchDetailes:any={};
	constructor(public navCtrl: NavController,public storage:Storage, public navParams: NavParams, public alertCtrl: AlertController,public service:PickleBallservices) {}
   
    
     
        ionViewDidLoad(){
            this.storage.get('loginUser-Token').then((val)=>{
                if(val !=undefined){
                    this.service.TournmentDirectorsHomepageonload(val).subscribe(response => {
                        this.ScheduleMatchDetailes=response; 
                        console.log("........................",response);
                    },err =>{
                        this.logout();
                    });
                }else{
                    this.service.TournmentDirectorsHomepageonload(this.navParams.data).subscribe(response => {
                       this.ScheduleMatchDetailes=response;
                        console.log("........................",response);
                    },err =>{
                        this.logout();
                    });
                }
         
            });
            
            this.courtlist=this.ScheduleMatchDetailes.Courts;
            this.MensDoubles4to5=this.ScheduleMatchDetailes["MensDoubles4.5"]
            this.MensDoubles5to0=this.ScheduleMatchDetailes["MensDoubles5.0"]
            this.WomensDoubles5to0=this.ScheduleMatchDetailes["WomensDoubles5.0"]
            this.MensSingles4to0=this.ScheduleMatchDetailes["MensSingles4.0"]
            this.WomensSingles4to5=this.ScheduleMatchDetailes["WomensSingles4.5"]
            this.Referees=this.ScheduleMatchDetailes["Referees"]
        }

    //function for selected for courts.
    selectCourt(obj){
        if(this.Curentshedulecourt.courtNumber===undefined){
            this.Curentshedulecourt.courtNumber= obj.courtnumber;
            this.Curentshedulecourt.courtName= obj.courtName;
            this.Curentshedulecourt.courtId= obj._id;
            this.Curentshedulecourt.CourtNo= obj.CourtNo;
            this.Curentshedulecourt.court=true;
        }else{
            this.Curentshedulecourt.courtNumber= obj.courtnumber;
            this.Curentshedulecourt.courtName=obj.courtName;
            this.Curentshedulecourt.courtId= obj._id;
            this.Curentshedulecourt.CourtNo= obj.CourtNo;
            
            
        }
        
    }
    //function for selected for Eventes.
    SelectEvent(obj){ 
        if(this.Curentshedulecourt.TeamAPlayerName!=undefined){
            delete this.Curentshedulecourt.TeamAPlayerName;
            delete this.Curentshedulecourt.TeamAPlayerId;
             delete this.Curentshedulecourt.TeamA;
              delete this.Curentshedulecourt.Evente;
            if(this.Curentshedulecourt.TeamAPlayerName1!=undefined){
                delete this.Curentshedulecourt.TeamA;
                delete this.Curentshedulecourt.TeamAPlayerName1
            }
        }
         if(this.Curentshedulecourt.TeamBPlayerName!=undefined){
            delete this.Curentshedulecourt.TeamBPlayerName;
            delete this.Curentshedulecourt.TeamBPlayerId;
            delete this.Curentshedulecourt.TeamB;
            delete this.Curentshedulecourt.Evente;
             if(this.Curentshedulecourt.TeamBPlayerName1!=undefined){
                delete this.Curentshedulecourt.TeamB;
                delete this.Curentshedulecourt.TeamBPlayerName1
            }
        }

        if(obj.EventType==="Singles"){
            this.service.EeventPlayersList(obj._id).subscribe(response => {
                        this.TeamAPlayersList=[];
                        this.TeamBPlayersList=[];
                        this.Curentshedulecourt.Event="singles";
                        this.Curentshedulecourt.EventName=obj.EventName;
                        this.SinglesList=response.slice(0);
                        this.TeamAPlayersList=this.SinglesList.slice(0);
                        this.TeamBPlayersList=this.SinglesList.slice(0);
                        this.Curentshedulecourt.Evente=true;
                        this.Curentshedulecourt.EventId=obj._id;
                    },err =>{
                    });
        }else if(obj.EventType==="Doubles"){
            this.service.EeventPlayersList(obj._id).subscribe(response => {
                        this.TeamAPlayersList=[];
                        this.TeamBPlayersList=[];
                        this.Curentshedulecourt.Event="Doubles";
                        this.Curentshedulecourt.EventName=obj.EventName;
                        this.DoublesList=response.slice(0);;
                        this.TeamAPlayersList= this.DoublesList.slice(0);
                        this.TeamBPlayersList= this.DoublesList.slice(0);
                        this.Curentshedulecourt.EventId=obj._id;
                        this.Curentshedulecourt.Evente=true;
                    },err =>{
                    });
        }
        
    }


    //function for select TeamAplayers in singles list.
    SelectTeamAplayersSingles(obj){
            if(this.Curentshedulecourt.TeamBPlayerName===undefined && this.Curentshedulecourt.TeamAPlayerName===undefined){
                let  index = this.TeamBPlayersList.map(function(obj) {return obj._id;}).indexOf(obj._id);
                this.TeamBPlayersList.splice(index,1);
                this.Curentshedulecourt.TeamAPlayerName=obj.Player1Name;
                this.Curentshedulecourt.TeamAPlayerId=obj._id;
                this.Curentshedulecourt.TeamAPlayer1Id=obj.Player1Id;
                this.Curentshedulecourt.TeamA=true;
            }else{
                if(this.Curentshedulecourt.TeamAPlayerName!=undefined ){
                    let  index =this.SinglesList.map(function(obj) {return obj._id;}).indexOf(this.Curentshedulecourt.TeamAPlayerId);
                    let addobj=this.SinglesList[index];
                    this.TeamBPlayersList.push(addobj);
                    let  index1 =this.TeamBPlayersList.map(function(obj) {return obj._id;}).indexOf(obj._id);
                    this.TeamBPlayersList.splice(index1,1);
                    this.Curentshedulecourt.TeamAPlayerName=obj.Player1Name;
                    this.Curentshedulecourt.TeamAPlayerId=obj._id;
                    this.Curentshedulecourt.TeamAPlayer1Id=obj.Player1Id;
                }else{
                    let  index =this.TeamBPlayersList.map(function(obj) {return obj._id;}).indexOf(obj._id);
                    this.TeamBPlayersList.splice(index,1);
                    this.Curentshedulecourt.TeamAPlayerName=obj.Player1Name;
                    this.Curentshedulecourt.TeamA=true;
                    this.Curentshedulecourt.TeamAPlayerId=obj._id;
                    this.Curentshedulecourt.TeamAPlayer1Id=obj.Player1Id;
                }
        
            }
        
           
}

        //function for select TeamAplayers in singles list.
        SelectTeamBplayersSingles(obj){
             if(this.Curentshedulecourt.TeamAPlayerName===undefined){
                this.SelectedfirstTeamb=true;
                let  index = this.TeamAPlayersList.map(function(obj) {return obj._id;}).indexOf(obj._id);
                this.TeamAPlayersList.splice(index,1);
                this.Curentshedulecourt.TeamBPlayerName=obj.Player1Name;
                this.Curentshedulecourt.TeamBPlayerId=obj.PlayerID;
                this.Curentshedulecourt.TeamAPlayer1Id=obj.Player1Id;
                this.Curentshedulecourt.TeamB=true;

            }else{
                if(this.Curentshedulecourt.TeamBPlayerName!=undefined ){
                    let  index =this.SinglesList.map(function(obj) {return obj._id;}).indexOf(this.Curentshedulecourt.TeamBPlayerId);
                    let addobj=this.SinglesList[index];
                    this.TeamAPlayersList.push(addobj);
                    let  index1 =this.TeamAPlayersList.map(function(obj) {return obj._id;}).indexOf(obj._id);
                    this.TeamAPlayersList.splice(index1,1);
                    this.Curentshedulecourt.TeamBPlayerName=obj.Player1Name;
                    this.Curentshedulecourt.TeamBPlayer1Id=obj.Player1Id;
                    this.Curentshedulecourt.TeamBPlayerId=obj._id;
                }else{
                    let  index =this.TeamAPlayersList.map(function(obj) {return obj._id;}).indexOf(obj._id);
                    this.TeamAPlayersList.splice(index,1);
                    this.Curentshedulecourt.TeamBPlayerName=obj.Player1Name;
                    this.Curentshedulecourt.TeamBPlayerId=obj._id;
                    this.Curentshedulecourt.TeamBPlayer1Id=obj.Player1Id;
                    this.Curentshedulecourt.TeamB=true;
                }
        
            }
        }

    //function for select TeamAplayers in doubles list.
    SelectTeamAplayersDoubles(obj){
       if(this.Curentshedulecourt.TeamBPlayerName===undefined && this.Curentshedulecourt.TeamAPlayerName===undefined){
                let  index = this.TeamBPlayersList.map(function(obj) {return obj._id;}).indexOf(obj._id);
                this.TeamBPlayersList.splice(index,1);
                this.Curentshedulecourt.TeamAPlayerName=obj.Player1Name;
                this.Curentshedulecourt.TeamAPlayerName1=obj.Player2Name;
                this.Curentshedulecourt.TeamAPlayerId=obj._id;
                this.Curentshedulecourt.TeamAPlayer1Id=obj.Player1Id;
                this.Curentshedulecourt.TeamAPlayer2Id=obj.Player2Id;
                this.Curentshedulecourt.TeamA=true;

            }else{
                if(this.Curentshedulecourt.TeamAPlayerName!=undefined ){
                    let  index =this.DoublesList.map(function(obj) {return obj._id;}).indexOf(this.Curentshedulecourt.TeamAPlayerId);
                    let addobj=this.DoublesList[index];
                    this.TeamBPlayersList.push(addobj);
                    let  index1 =this.TeamBPlayersList.map(function(obj) {return obj._id;}).indexOf(obj._id);
                    this.TeamBPlayersList.splice(index1,1);
                    this.Curentshedulecourt.TeamAPlayerName=obj.Player1Name;
                    this.Curentshedulecourt.TeamAPlayerName1=obj.Player2Name;
                    this.Curentshedulecourt.TeamAPlayerId=obj._id;
                     this.Curentshedulecourt.TeamAPlayer1Id=obj.Player1Id;
                this.Curentshedulecourt.TeamAPlayer2Id=obj.Player2Id;
                }else{
                     let  index =this.TeamBPlayersList.map(function(obj) {return obj._id;}).indexOf(obj._id);
                    this.TeamBPlayersList.splice(index,1);
                    this.Curentshedulecourt.TeamAPlayerName=obj.Player1Name;
                    this.Curentshedulecourt.TeamAPlayerName1=obj.Player2Name;
                    this.Curentshedulecourt.TeamAPlayerId=obj._id;
                    this.Curentshedulecourt.TeamAPlayer1Id=obj.Player1Id;
                    this.Curentshedulecourt.TeamAPlayer2Id=obj.Player2Id;
                    this.Curentshedulecourt.TeamA=true;
                }
            }   
}

        
        //function for select TeamAplayers in doubles list.
        SelectTeamBplayersDoubles(obj){
                if(this.Curentshedulecourt.TeamAPlayerName===undefined){
                this.SelectedfirstTeamb=true;
                let  index = this.TeamAPlayersList.map(function(obj) {return obj._id; }).indexOf(obj._id);
                this.TeamAPlayersList.splice(index,1);
                this.Curentshedulecourt.TeamBPlayerName=obj.Player1Name;
                this.Curentshedulecourt.TeamBPlayerName1=obj.Player2Name;
                this.Curentshedulecourt.TeamBPlayerId=obj._id;
                this.Curentshedulecourt.TeamBPlayer1Id=obj.Player1Id;
                this.Curentshedulecourt.TeamBPlayer2Id=obj.Player2Id;
                this.Curentshedulecourt.TeamB=true;

            }else{
                if(this.Curentshedulecourt.TeamBPlayerName!=undefined ){
                    let  index =this.DoublesList.map(function(obj) {return obj._id; }).indexOf(this.Curentshedulecourt.TeamBPlayerId);
                    let addobj=this.DoublesList[index];
                    this.TeamAPlayersList.push(addobj);
                    let  index1 =this.TeamAPlayersList.map(function(obj) {return obj._id; }).indexOf(obj._id);
                    this.TeamAPlayersList.splice(index1,1);
                    this.Curentshedulecourt.TeamBPlayerName=obj.Player1Name;
                    this.Curentshedulecourt.TeamBPlayerName1=obj.Player2Name;
                    this.Curentshedulecourt.TeamBPlayerId=obj._id;
                    this.Curentshedulecourt.TeamBPlayer1Id=obj.Player1Id;
                    this.Curentshedulecourt.TeamBPlayer2Id=obj.Player2Id;
                }else{
                    let  index =this.TeamAPlayersList.map(function(obj) {return obj._id; }).indexOf(obj._id);
                    this.TeamAPlayersList.splice(index,1);
                    this.Curentshedulecourt.TeamBPlayerName=obj.Player1Name;
                    this.Curentshedulecourt.TeamBPlayerName1=obj.Player2Name;
                    this.Curentshedulecourt.TeamBPlayerId=obj._id;
                    this.Curentshedulecourt.TeamBPlayer1Id=obj.Player1Id;
                    this.Curentshedulecourt.TeamBPlayer2Id=obj.Player2Id;
                    this.Curentshedulecourt.TeamB=true;
                }
        
            }
        }


        //function for Selected Format.
        SelectedFormat(obj){
             this.Curentshedulecourt.ForMate=obj.FormateName;
             this.Curentshedulecourt.ForMateId=obj._id;

             this.Curentshedulecourt.format=true;
        }
        
    //function for selected selectreferee.
    selectreferee(obj){
        this.Curentshedulecourt.RefereeName=obj.RefereeName;
        this.Curentshedulecourt.RefereeNameId=obj.RefereeId;
        this.Curentshedulecourt.refere=true;
    }

    //function for SheduleCourt.
    SheduleCourt(){
        let Alert=false;
        let Alertmsg;
        if(this.Curentshedulecourt.court===undefined){
            Alert=true;
            Alertmsg=" Select Court Number"
        }else if(this.Curentshedulecourt.Evente===undefined){
            Alert=true;
            Alertmsg=" Select Event Name"
        }else if(this.Curentshedulecourt.TeamA===undefined){
            Alert=true;
            Alertmsg=" Select TeamA players Names"
        }else if(this.Curentshedulecourt.TeamB===undefined){
            Alert=true;
            Alertmsg=" Select TeamB players Names"
        }else if(this.Curentshedulecourt.format===undefined){
            Alert=true;
            Alertmsg=" Select Game format"
        }else if(this.Curentshedulecourt.refere===undefined){
            Alert=true;
            Alertmsg=" Select refere Name"
        }else if(Alert===false){
            this.TeamAPlayersList=[];
            this.TeamBPlayersList=[];
            let courtindex=this.ScheduleMatchDetailes.Courts.map(function(obj) {return obj._id; }).indexOf(this.Curentshedulecourt.courtId);
            this.ScheduleMatchDetailes.Courts.splice(courtindex,1);
            // if(this.Curentshedulecourt.Event==="Doubles"){
            //         if(this.Curentshedulecourt.EventName==="Mens Doubles 4.5"){
            //             let teamAindex=this.MensDoubles4to5.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamAPlayerId);
            //             this.MensDoubles4to5.splice(teamAindex,1);
            //             let teamBindex=this.MensDoubles4to5.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamBPlayerId);
            //             this.MensDoubles4to5.splice(teamBindex,1);
            //         }else if(this.Curentshedulecourt.EventName==="Womens Doubles 5.0"){
            //             let teamAindex=this.WomensDoubles5to0.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamAPlayerId);
            //             this.WomensDoubles5to0.splice(teamAindex,1);
            //             let teamBindex=this.WomensDoubles5to0.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamBPlayerId);
            //             this.WomensDoubles5to0.splice(teamBindex,1);

            //         }else if(this.Curentshedulecourt.EventName==="Mens Doubles 5.0"){
            //              let teamAindex=this.MensDoubles5to0.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamAPlayerId);
            //             this.MensDoubles5to0.splice(teamAindex,1);
            //             let teamBindex=this.MensDoubles5to0.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamBPlayerId);
            //             this.MensDoubles5to0.splice(teamBindex,1);
            //         }
            // }else if(this.Curentshedulecourt.Event==="singles"){
            //         if(this.Curentshedulecourt.EventName==="Womens Singles 4.5"){
                        
            //             let teamAindex=this.WomensSingles4to5.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamAPlayerId);
            //             this.WomensSingles4to5.splice(teamAindex,1);
            //             let teamBindex=this.WomensSingles4to5.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamBPlayerId);
            //             this.WomensSingles4to5.splice(teamBindex,1);
            //         }else if(this.Curentshedulecourt.EventName==="Mens Singles 4.0"){
            //             let teamAindex=this.MensSingles4to0.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamAPlayerId);
            //             this.MensSingles4to0.splice(teamAindex,1);
            //             let teamBindex=this.MensSingles4to0.map(function(obj) {return obj.PlayerID; }).indexOf(this.Curentshedulecourt.TeamBPlayerId);
            //             this.MensSingles4to0.splice(teamBindex,1);

            //         }
            // }
            let refereindex=this.ScheduleMatchDetailes.Referes.map(function(obj) {return obj.RefereeId;}).indexOf(this.Curentshedulecourt.RefereeNameId);
            this.ScheduleMatchDetailes.Referes.splice(refereindex,1);

                 this.finalresponseobj();
        }
        if(Alert===true){
                let prompt = this.alertCtrl.create({
        					      	message: Alertmsg,
        					      
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

    finalresponseobj(){
		if(this.Curentshedulecourt.Event==="singles"){
        	    let date:any = new Date();
        	 	let hours:any = date.getHours();
  				let minutes:any = date.getMinutes();
  				let ampm:any = hours >= 12 ? 'pm' : 'am';
  				hours = hours % 12;
  				hours = hours ? hours : 12; // the hour '0' should be '12'
  				minutes = minutes < 10 ? '0'+minutes : minutes;
  				let strTime:any = hours + ':' + minutes + ' ' + ampm;
                  let teamids:any=[];
                  teamids.push(this.Curentshedulecourt.TeamAPlayerId);
                  teamids.push(this.Curentshedulecourt.TeamBPlayerId);
                  let parametersobj:any={};
                  parametersobj.Time=strTime;
                  parametersobj.CourtId=this.Curentshedulecourt.courtId;
                  parametersobj.CourtNo=this.Curentshedulecourt.CourtNo;
                  parametersobj.EventId=this.Curentshedulecourt.EventId;
                  parametersobj.FormatId=this.Curentshedulecourt.ForMateId;
                  parametersobj.TeamAPlayer1Id= this.Curentshedulecourt.TeamAPlayer1Id;
                  parametersobj.TeamBPlayer1Id= this.Curentshedulecourt.TeamBPlayer1Id;
                  parametersobj.RefereeId= this.Curentshedulecourt.RefereeNameId;
                  parametersobj.RefereeName= this.Curentshedulecourt.RefereeName;

                  parametersobj.TeamIds=teamids;
                  this.service.ScheduleMatch(parametersobj).subscribe(response => {
                       this.ScheduleMatchDetailes.Matchs.push(response);

                    },err =>{
                    });

            //     let teamA:any={};
            //     let Myarray=[];
            //     let playersobj1:any={};
            //     playersobj1.id=this.Curentshedulecourt.TeamAPlayerId;
            //     playersobj1.Name= this.Curentshedulecourt.TeamAPlayerName;
            //     playersobj1.Served=false;
            //     Myarray.push(playersobj1);
            //     let teamB:any={};
            //     let Myarray1=[];
            //     let playersobj2:any={};
            //     playersobj2.id=this.Curentshedulecourt.TeamBPlayerId;
            //     playersobj2.Name=this.Curentshedulecourt.TeamBPlayerName;
            //     playersobj2.Served=false;
            //     Myarray1.push(playersobj2);
            //     teamA.Team="Team1";
            //     teamA.Players=Myarray;
            //     teamB.Team="Team2";
            //     teamB.TeamId="id";
            //     teamB.Players=Myarray1;
            //     let obj:any={};
            //     obj.id="12";
            //     obj.EventName=this.Curentshedulecourt.EventName;
            //     obj.Referee=this.Curentshedulecourt.RefereeName;
            //     obj.TournamentName="Robson Ranch pickleball tournament";
            //    if(this.Curentshedulecourt.ForMate==="1 to 15 win By 2"){
            //         obj.twopointse=true;
            //         obj.GameFormat='1 to 15';
            //          obj.GameFormatName="1 to 15 win By 2";
            //     }else if(this.Curentshedulecourt.ForMate==="1 to 21 win By 2"){
            //         obj.GameFormat='1 to 21';
            //         obj.GameFormatName="1 to 21 win By 2";
            //         obj.twopointse=true;
            //     }else{
            //         if(this.Curentshedulecourt.ForMate==="1 to 15"){
            //              obj.GameFormatName="1 to 15 win By 1";
            //         }else if(this.Curentshedulecourt.ForMate==="1 to 21"){
            //             obj.GameFormatName="1 to 21 win By 1";
            //         }else{
            //             obj.GameFormatName="2 Of 3 To 11 win By 2";
            //         }
            //          obj.GameFormat=this.Curentshedulecourt.ForMate;
            //     }
            //     obj.courtNumber=this.Curentshedulecourt.courtNumber;
            //     obj.court=this.Curentshedulecourt.courtName;
            //     obj.Event="singles";
            //     obj.Serve=false;
            //     obj.Time=strTime;
            //     obj.Team1=teamA;
            //     obj.Team2=teamB;
                // this.ShedulecourtListArray.push(obj);
                 this.SelectedEventName=null;
                 this.SelectedFormatName=null;
        }else if(this.Curentshedulecourt.Event==="Doubles"){
        		let date:any = new Date();
        	 	let hours:any = date.getHours();
  				let minutes:any = date.getMinutes();
  				let ampm:any = hours >= 12 ? 'pm' : 'am';
  				hours = hours % 12;
  				hours = hours ? hours : 12; // the hour '0' should be '12'
  				minutes = minutes < 10 ? '0'+minutes : minutes;
  				let strTime:any = hours + ':' + minutes + ' ' + ampm;

                  let teamids:any=[];
                  teamids.push(this.Curentshedulecourt.TeamAPlayerId);
                  teamids.push(this.Curentshedulecourt.TeamBPlayerId);
                  let parametersobj:any={};
                  parametersobj.Time=strTime;
                  parametersobj.CourtId=this.Curentshedulecourt.courtId;
                  parametersobj.CourtNo=this.Curentshedulecourt.CourtNo;
                  parametersobj.EventId=this.Curentshedulecourt.EventId;
                  parametersobj.FormatId=this.Curentshedulecourt.ForMateId;
                  parametersobj.TeamAPlayer1Id= this.Curentshedulecourt.TeamAPlayer1Id;
                  parametersobj.TeamAPlayer2Id= this.Curentshedulecourt.TeamAPlayer2Id;
                  parametersobj.TeamBPlayer1Id= this.Curentshedulecourt.TeamBPlayer1Id;
                  parametersobj.TeamBPlayer2Id= this.Curentshedulecourt.TeamBPlayer2Id;
                  parametersobj.RefereeId= this.Curentshedulecourt.RefereeNameId;
                  parametersobj.RefereeName= this.Curentshedulecourt.RefereeName;
                  parametersobj.TeamIds=teamids;

                   this.service.ScheduleMatch(parametersobj).subscribe(response => {
                      this.ScheduleMatchDetailes.Matchs.push(response);

                    },err =>{
                    });
            // 	let teamA:any={};
            //     let Myarray=[];
            //     let playersobj1:any={};
            //     playersobj1.Player1Id=this.Curentshedulecourt.TeamAPlayer1Id;
            //     playersobj1.Name= this.Curentshedulecourt.TeamAPlayerName;
            //      playersobj1.Served=false;
            //     Myarray.push(playersobj1);
            //     let playersobj4:any={};
            //     playersobj4.Player2Id=this.Curentshedulecourt.TeamAPlayer2Id;
            //     playersobj4.Name= this.Curentshedulecourt.TeamAPlayerName1;
            //     playersobj4.Served=false;
            //     Myarray.push(playersobj4);
            //     let teamB:any={};
            //     let Myarray1=[];
            //     let playersobj2:any={};
            //     playersobj2.Player1Id=this.Curentshedulecourt.TeamBPlayer1Id;
            //     playersobj2.Name=this.Curentshedulecourt.TeamBPlayerName;
            //     playersobj2.Served=false;
            //     Myarray1.push(playersobj2);
            //     let playersobj3:any={};
            //     playersobj3.Player2Id=this.Curentshedulecourt.TeamBPlayer2Id;
            //     playersobj3.Name=this.Curentshedulecourt.TeamBPlayerName1;
            //     playersobj3.Served=false;
            //     Myarray1.push(playersobj3);
            //     teamA.Team="Team1";
            //     teamA.TeamId="id";
            //     teamA.Players=Myarray;
            //     teamB.Team="Team2";
            //     teamB.TeamId="id";
            //     teamB.Players=Myarray1;
            //     let obj:any={};
            //     obj.id="12";
            //     obj.TournamentName="Robson Ranch pickleball tournament";
            //     obj.EventName=this.Curentshedulecourt.EventName;
            //     obj.Referee=this.Curentshedulecourt.RefereeName;
            //    if(this.Curentshedulecourt.ForMate==="1 to 15 win By 2"){
            //         obj.twopointse=true;
            //         obj.GameFormat='1 to 15';
            //          obj.GameFormatName="1 to 15 win By 2";
            //     }else if(this.Curentshedulecourt.ForMate==="1 to 21 win By 2"){
            //         obj.GameFormat='1 to 21';
            //         obj.GameFormatName="1 to 21 win By 2";
            //         obj.twopointse=true;
            //     }else{
            //         if(this.Curentshedulecourt.ForMate==="1 to 15"){
            //              obj.GameFormatName="1 to 15 win By 1";
            //         }else if(this.Curentshedulecourt.ForMate==="1 to 21"){
            //             obj.GameFormatName="1 to 21 win By 1";
            //         }else{
            //             obj.GameFormatName="2 Of 3 To 11 win By 2";
            //         }
            //          obj.GameFormat=this.Curentshedulecourt.ForMate;
            //     }
            //     obj.courtNumber=this.Curentshedulecourt.courtNumber;
            //     obj.court=this.Curentshedulecourt.courtName;
            //     obj.Event="Doubles";
            //     obj.Serve=false;
            //     obj.Time=strTime;
            //     obj.Team1=teamA;
            //     obj.Team2=teamB;
            //     this.ShedulecourtListArray.push(obj);
            //     this.Curentshedulecourt={};
                this.SelectedEventName=null;
                this.SelectedFormatName=null;
    }
     this.Curentshedulecourt={};
    }         

    //function for move to score board.
     NextPage(obj){
       if(obj.twopointse){
            this.navCtrl.push(Refereescoreboardwinby2Page,obj);
         }else{
            this.navCtrl.push(Refereescoreboardwinby1Page, obj); 
         }
     }

     //function for logout.
     logout(){
        this.storage.clear().then(()=>{
         this.navCtrl.push(HomePage);
        });
     }

}
