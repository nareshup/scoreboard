import { Component } from '@angular/core';

import { NavController,NavParams} from 'ionic-angular';

@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class secondPage {
	Array=[];
	scoresobj:any={};
	TeamAScore:any={};
	TeamBScore:any={};
	ScoringFormatObj={};
	Firstserve:any={};
	SetType:string;
	TeamAactive=false;
	TeamBactive=false;
	TimoutStop;
	timeMints=0;
	timeSecondes=0;
	time=false;
	SideOutButtonActive=false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  	//function for page onload.  
  	ionViewDidLoad(){
	  	if(this.navParams.data.GameFormat ==="2 of 3 to 11"){
	  	this.SetType="SetOneScores";
	  		this.scoresobj ={"GameFormat":"2 of 3 to 11",
					"Team1":
						{
							"Team":"Team1",
								"SetOneServe":false,
								"SelectedTeam":null,
									"SetOneScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team1"},
										{"TimeOut":2,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team1"}
									],
									"SetTwoServe":false,
									"SetTwoScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team1"}
									],
									"SetTwoTimeOuts":[
											{"TimeOut":1,"complete":false,"set":"SetTwoScores","Status":false,"Time":null,"Team":"Team1"},
											{"TimeOut":2,"complete":false,"set":"SetTwoScores","Status":false,"Time":null,"Team":"Team1"}
										],
									"SetThreeServe":false,
									"SetThreeScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team1"}
									],
									"SetThreeTimeOuts":[
											{"TimeOut":1,"complete":false,"set":"SetThreeScores","Status":false,"Time":null,"Team":"Team1"},
											{"TimeOut":2,"complete":false,"set":"SetThreeScores","Status":false,"Time":null,"Team":"Team1"}
									]
						},

					"Team2":{
							"Team":"Team2",
							"SetOneServe":false,
							"SelectedTeam":null,
									"SetOneScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team2"}
									],
									"SetTwoServe":false,
									"SetTwoScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetTwoScores","Team":"Team2"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetTwoScores","Team":"Team2"}
									],
									"SetTwoTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetTwoScores","Status":false,"Time":null,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetTwoScores","Status":false,"Time":null,"Team":"Team2"}
									],
								
									"SetThreeServe":false,
									"SetThreeScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetThreeScores","Team":"Team2"}
									],
									"SetThreeTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetThreeScores","Status":false,"Time":null,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetThreeScores","Status":false,"Time":null,"Team":"Team2"}
									]
								}		
						}

	  	}else if(this.navParams.data.GameFormat ==="1 to 15"){
	  	this.SetType="SetOneScores";
	  		this.scoresobj ={"GameFormat":"1 to 15",
					"Team1":
						{
							"Team":"Team1",
								"SetOneServe":false,
								"SelectedTeam":null,
									"SetOneScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team1"},
										{"TimeOut":2,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team1"}
									]
									
						},

					"Team2":{
							"Team":"Team2",
							"SetOneServe":false,
							"SelectedTeam":null,
									"SetOneScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team2"}
									]		
						}
					}

	  	}else if(this.navParams.data.GameFormat ==="1 to 21"){
	  		this.SetType="SetOneScores";
	  		this.scoresobj ={"GameFormat":"1 to 21",
					"Team1":
						{
							"Team":"Team1",
							"SelectedTeam":null,
								"SetOneServe":false,
									"SetOneScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":false,"set":"SetOneScores","Team":"Team1"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team1"}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team1"},
										{"TimeOut":2,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team1"}
									]
								
						},

					"Team2":{
							"Team":"Team2",
							"SetOneServe":false,
							"SelectedTeam":null,
									"SetOneScores":[	
										{"Score":1,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":2,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":3,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":4,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":5,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":6,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":7,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":8,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":9,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":10,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":11,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":12,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":13,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":14,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":15,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":16,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":17,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":18,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":19,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":20,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"},
										{"Score":21,"clicked":false,"Status":false,"ServicesDowen":true,"set":"SetOneScores","Team":"Team2"}
									],
									"SetOneTimeOuts":[
										{"TimeOut":1,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team2"},
										{"TimeOut":2,"complete":false,"set":"SetOneScores","Status":false,"Time":null,"Team":"Team2"}
									]		
						}
					}

	  	}
	  	this.TeamAScore=this.scoresobj.Team1;
	  	this.TeamBScore=this.scoresobj.Team2;
	}


	//function for back to home page.
	backtohome(){
  		this.navCtrl.pop();
  	}


  	//function for how is the first serve.
  	FirstServe(userId,data){
  		this.Firstserve.nameAServeCount=2;
  		this.Firstserve.nameBServeCount=0;
		this.scoresobj.Team1.SetOneScores[0].Status=true;
  		this.scoresobj.Team2.SetOneScores[0].Status=true;
  		if(this.navParams.data.Team1.Team===data){
  			this.TeamAactive=true;
  			this.navParams.data.Team1.SetOneServe=true;
  			this.scoresobj.Team1.SelectedTeam="TeamA";
  			this.scoresobj.Team2.SelectedTeam="TeamB";
	  		this.TeamBScore=this.scoresobj.Team2;
	  		this.Firstserve.TeamAPoints=0;
		  	this.Firstserve.TeamBPoints=0;
		  	this.scoresobj.Team1.SetOneServe=true;

	  		if(this.navParams.data.Team1.Players[0]['id']==userId){
	  			
	  			this.navParams.data.Serve=true;
	  			if(this.navParams.data.Team1.Players.length ===2){
		  			this.Firstserve.nameA1=this.navParams.data.Team1.Players[0]['Name'];
		  			this.Firstserve.nameB1=this.navParams.data.Team2.Players[0]['Name'];
		  			this.Firstserve.nameA2=this.navParams.data.Team1.Players[1]['Name'];
		  			this.Firstserve.nameB2=this.navParams.data.Team2.Players[1]['Name'];
		  			
		  		}else{
		  			this.Firstserve.nameA1=this.navParams.data.Team1.Players[0]['Name'];
		  			this.Firstserve.nameB1=this.navParams.data.Team2.Players[0]['Name'];

		  		}
			}else{
	  			this.navParams.data.Serve=true;
	  			this.Firstserve.nameA1=this.navParams.data.Team1.Players[1]['Name'];
	  			this.Firstserve.nameA2=this.navParams.data.Team1.Players[0]['Name'];
	  			this.Firstserve.nameB1=this.navParams.data.Team2.Players[0]['Name'];
	  			this.Firstserve.nameB2=this.navParams.data.Team2.Players[1]['Name'];	
	  		}
  		}else if(this.navParams.data.Team2.Team===data){
  				this.scoresobj.Team2.SetOneServe=true;
  				this.scoresobj.Team1.SelectedTeam="TeamB";
  				this.scoresobj.Team2.SelectedTeam="TeamA";
  				this.TeamAactive=true;
  				this.navParams.data.Team2.SetOneServe=true;
  				this.TeamAScore=this.scoresobj.Team2;
	  			this.TeamBScore=this.scoresobj.Team1;
	  			this.Firstserve.TeamAPoints=0;
		  		this.Firstserve.TeamBPoints=0;
		  		this.navParams.data.Team2.SetOneScores=true;
  			if(this.navParams.data.Team2.Players[0]['id']==userId){
  				this.navParams.data.Serve=true;
  				if(this.navParams.data.Team1.Players.length ===2){
		  			this.Firstserve.nameA1=this.navParams.data.Team2.Players[0]['Name'];
		  			this.Firstserve.nameA2=this.navParams.data.Team2.Players[1]['Name'];
		  			this.Firstserve.nameB1=this.navParams.data.Team1.Players[0]['Name'];
		  			this.Firstserve.nameB2=this.navParams.data.Team1.Players[1]['Name'];
		  		}else{
		  			this.Firstserve.nameA1=this.navParams.data.Team2.Players[0]['Name'];
		  			this.Firstserve.nameB1=this.navParams.data.Team1.Players[0]['Name'];
		  		}
	  		}else{
	  			this.navParams.data.Serve=true;
	  			this.Firstserve.nameA1=this.navParams.data.Team2.Players[1]['Name'];
	  			this.Firstserve.nameA2=this.navParams.data.Team2.Players[0]['Name'];
	  			this.Firstserve.nameB1=this.navParams.data.Team1.Players[0]['Name'];
	  			this.Firstserve.nameB2=this.navParams.data.Team1.Players[1]['Name'];
	  		}
		}
  	}
  	//function for inter change the score board.
  	SideOut(){
  		this.SideOutButtonActive = !this.SideOutButtonActive;
  		this.TeamAactive = !this.TeamAactive;
  		this.TeamBactive = !this.TeamBactive;
		if(this.TeamAScore.Team === 'Team1'){
  			this.TeamAScore=this.scoresobj.Team2;
  			this.TeamBScore=this.scoresobj.Team1;
		}else{
			this.TeamAScore=this.scoresobj.Team1;
			this.TeamBScore=this.scoresobj.Team2;
		}
	}

  	//function for UpdateScore.
  	UpdateScore(score){
  		if(score.Team ==="Team1"){
  			this.Firstserve.TeamAPoints=this.Firstserve.TeamAPoints+1;
		}else if(score.Team ==="Team2"){
  			this.Firstserve.TeamBPoints=this.Firstserve.TeamBPoints+1;
  		}
  		let team = score.Team;
  		this.SetType= score.set;
  		let myscore =score.Score;
  		myscore=myscore-1;
  		this.scoresobj[team][this.SetType][myscore].clicked = true;
  		myscore=myscore+1;

  		if(this.scoresobj[team][this.SetType].length >myscore){
  			this.scoresobj[team][this.SetType][myscore].Status = true;
  		}else{	
			if(this.scoresobj[team].Team ==="Team1"){
              	if(this.Firstserve.TeamAPoints>this.Firstserve.TeamBPoints){
                    myscore =this.Firstserve.TeamBPoints;
                    this.scoresobj.Team2[this.SetType][myscore].Status = false;
                }else{
                    myscore =this.Firstserve.TeamAPoints;
                    this.scoresobj.Team2[this.SetType][myscore].Status = false;
                }
			}else if(this.scoresobj[team].Team ==="Team2"){
              	if(this.Firstserve.TeamAPoints>this.Firstserve.TeamBPoints){
                    myscore =this.Firstserve.TeamBPoints;
                    this.scoresobj.Team1[this.SetType][myscore].Status = false;
                }else{
                    myscore =this.Firstserve.TeamAPoints;
                    this.scoresobj.Team1[this.SetType][myscore].Status = false;
                }
            }


  				if(this.scoresobj[team][this.SetType].length===15){
  					let winnersobj:any={};
  						if(this.Firstserve.TeamAPoints>this.Firstserve.TeamBPoints){
  							winnersobj.winnerteam="teamA";
  						}else{
  							winnersobj.winnerteam="teamB";
  						}
  						winnersobj.teamnamea1 =this.Firstserve.nameA1;
  						if(this.Firstserve.nameA2 !=undefined){
  							winnersobj.teamnamea2 =this.Firstserve.nameA2;
  						}
  						winnersobj.teamnameb1 =this.Firstserve.nameB1;
  						if(this.Firstserve.nameB2 !=undefined){
  							winnersobj.teamnameb2 =this.Firstserve.nameB2;
  						}
  						winnersobj.TeamAscore=this.Firstserve.TeamAPoints;
  						winnersobj.TeamBscore=this.Firstserve.TeamBPoints;
  					this.Firstserve.Winner=winnersobj;

  				}else if(this.scoresobj[team][this.SetType].length===21){

  					let winnersobj:any={};
  					if(this.Firstserve.TeamAPoints>this.Firstserve.TeamBPoints){
  						winnersobj.winnerteam="teamA";
  					}else{
  						winnersobj.winnerteam="teamB";
  					}
					winnersobj.teamnamea1 =this.Firstserve.nameA1;
					if(this.Firstserve.nameA2 !=undefined){
						winnersobj.teamnamea2 =this.Firstserve.nameA2;
					}
					winnersobj.teamnameb1 =this.Firstserve.nameB1;
					if(this.Firstserve.nameB2 !=undefined){
						winnersobj.teamnameb2 =this.Firstserve.nameB2;
					}
					winnersobj.TeamAscore=this.Firstserve.TeamAPoints;
					winnersobj.TeamBscore=this.Firstserve.TeamBPoints;
  					this.Firstserve.Winner=winnersobj;
				}
  		}
  		
	}

	//function for serveDownCount count Increasing.
	serveDownCount(str,count){
		if(str==="TeamA") {
			if(count <= 1 ){
				this.SideOutButtonActive = !this.SideOutButtonActive;
				this.Firstserve.nameAServeCount=0;
				this.Firstserve.nameBServeCount=2;
			}else{
				this.Firstserve.nameAServeCount=this.Firstserve.nameAServeCount-1;
			}
		}
		if(str==="TeamB") {
			if(count <= 1){
				this.SideOutButtonActive = !this.SideOutButtonActive;
				this.Firstserve.nameBServeCount=0;
				this.Firstserve.nameAServeCount=2;
			}else{
				this.Firstserve.nameBServeCount=this.Firstserve.nameBServeCount-1;
			}
		}

	}

	//function for Timeouts select.
	Timeouts(str){
	console.log(str);
		let TimeoutSetType;
		if(this.SetType==="SetOneScores"){
			TimeoutSetType="SetOneTimeOuts";
		}else if(this.SetType==="SetTwoScores"){
			TimeoutSetType="SetTwoTimeOuts";
		}else if(this.SetType==="SetThreeScores"){
			TimeoutSetType="SetThreeTimeOuts";
		}

		if(str==="1min"){
			if(this.scoresobj.Team1[TimeoutSetType][0].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][0].Time="1min";
				this.scoresobj.Team2[TimeoutSetType][0].Time="1min";
				this.scoresobj.Team1[TimeoutSetType][0].Status=true;
				this.scoresobj.Team2[TimeoutSetType][0].Status=true;
			}else if(this.scoresobj.Team1[TimeoutSetType][1].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][1].Time="1min";
				this.scoresobj.Team2[TimeoutSetType][1].Time="1min";
				this.scoresobj.Team1[TimeoutSetType][1].Status=true;
				this.scoresobj.Team2[TimeoutSetType][1].Status=true;
			}	
		}else if(str==="2min"){
			if(this.scoresobj.Team1[TimeoutSetType][0].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][0].Time="2min";
				this.scoresobj.Team2[TimeoutSetType][0].Time="2min";
				this.scoresobj.Team1[TimeoutSetType][0].Status=true;
				this.scoresobj.Team2[TimeoutSetType][0].Status=true;
			}else if(this.scoresobj.Team1[TimeoutSetType][1].Time !=null){
				this.scoresobj.Team1[TimeoutSetType][1].Time="2min";
				this.scoresobj.Team2[TimeoutSetType][1].Time="2min";
				this.scoresobj.Team1[TimeoutSetType][1].Status=true;
				this.scoresobj.Team2[TimeoutSetType][1].Status=true;
			}

		}else if(str==="3min"){
			console.log("str",str);
			if(this.scoresobj.Team1[TimeoutSetType][0].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][0].Time="3min";
				this.scoresobj.Team2[TimeoutSetType][0].Time="3min";
				this.scoresobj.Team1[TimeoutSetType][0].Status=true;
				this.scoresobj.Team2[TimeoutSetType][0].Status=true;
			}else if(this.scoresobj.Team1[TimeoutSetType][1].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][1].Time="3min";
				this.scoresobj.Team2[TimeoutSetType][1].Time="3min";
				this.scoresobj.Team1[TimeoutSetType][1].Status=true;
				this.scoresobj.Team2[TimeoutSetType][1].Status=true;
			}
		}else if(str==="4min"){
			if(this.scoresobj.Team1[TimeoutSetType][0].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][0].Time="4min";
				this.scoresobj.Team2[TimeoutSetType][0].Time="4min";
				this.scoresobj.Team1[TimeoutSetType][0].Status=true;
				this.scoresobj.Team2[TimeoutSetType][0].Status=true;
			}else if(this.scoresobj.Team1[TimeoutSetType][1].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][1].Time="4min";
				this.scoresobj.Team2[TimeoutSetType][1].Time="4min";
				this.scoresobj.Team1[TimeoutSetType][1].Status=true;
				this.scoresobj.Team2[TimeoutSetType][1].Status=true;
			}
		}else if(str==="5min"){
			if(this.scoresobj.Team1[TimeoutSetType][0].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][0].Time="5min";
				this.scoresobj.Team2[TimeoutSetType][0].Time="5min";
				this.scoresobj.Team1[TimeoutSetType][0].Status=true;
				this.scoresobj.Team2[TimeoutSetType][0].Status=true;
			}else if(this.scoresobj.Team1[TimeoutSetType][1].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][1].Time="5min";
				this.scoresobj.Team2[TimeoutSetType][1].Time="5min";
				this.scoresobj.Team1[TimeoutSetType][1].Status=true;
				this.scoresobj.Team2[TimeoutSetType][1].Status=true;
			}
		}else if(str==="6min"){
			if(this.scoresobj.Team1[TimeoutSetType][0].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][0].Time="6min";
				this.scoresobj.Team2[TimeoutSetType][0].Time="6min";
				this.scoresobj.Team1[TimeoutSetType][0].Status=true;
				this.scoresobj.Team2[TimeoutSetType][0].Status=true;
			}else if(this.scoresobj.Team1[TimeoutSetType][1].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][1].Time="6min";
				this.scoresobj.Team2[TimeoutSetType][1].Time="6min";
				this.scoresobj.Team1[TimeoutSetType][1].Status=true;
				this.scoresobj.Team2[TimeoutSetType][1].Status=true;
			}
		}else if(str==="7min"){
			if(this.scoresobj.Team1[TimeoutSetType][0].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][0].Time="7min";
				this.scoresobj.Team2[TimeoutSetType][0].Time="7min";
				this.scoresobj.Team1[TimeoutSetType][0].Status=true;
				this.scoresobj.Team2[TimeoutSetType][0].Status=true;
			}else if(this.scoresobj.Team1[TimeoutSetType][1].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][1].Time="7min";
				this.scoresobj.Team2[TimeoutSetType][1].Time="7min";
				this.scoresobj.Team1[TimeoutSetType][1].Status=true;
				this.scoresobj.Team2[TimeoutSetType][1].Status=true;
			}
		}else if(str==="8min"){
			if(this.scoresobj.Team1[TimeoutSetType][0].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][0].Time="8min";
				this.scoresobj.Team2[TimeoutSetType][0].Time="8min";
				this.scoresobj.Team1[TimeoutSetType][0].Status=true;
				this.scoresobj.Team2[TimeoutSetType][0].Status=true;
			}else if(this.scoresobj.Team1[TimeoutSetType][1].Time ===null){
				this.scoresobj.Team1[TimeoutSetType][1].Time="8min";
				this.scoresobj.Team2[TimeoutSetType][1].Time="8min";
				this.scoresobj.Team1[TimeoutSetType][1].Status=true;
				this.scoresobj.Team2[TimeoutSetType][1].Status=true;
			}
		}
	}
	

	//function for time out start.
	TimerStart(obj){
		this.time=!this.time;
		if(obj.Time==="1min"){
			this.TimeCount();
			this.TimoutStop=setTimeout(() => {
				this.time=!this.time;		
		    }, 60000);
		}else if(obj.Time==="2min"){
			this.TimeCount();
			this.TimoutStop=setTimeout(() => { 
				this.time=!this.time;
		    }, 120000);
		}else if(obj.Time==="1min"){
			this.TimeCount();
			this.TimoutStop=setTimeout(() => {
				this.time=!this.time;
		    }, 60000);
		}else if(obj.Time==="3min"){
			this.TimeCount();
			this.TimoutStop=setTimeout(() => {
				this.time=!this.time;
		    }, 180000);
		}else if(obj.Time==="4min"){
			this.TimeCount();
			this.TimoutStop=setTimeout(() => {
				this.time=!this.time;
		    }, 240000);
		}else if(obj.Time==="5min"){
			this.TimeCount();
			this.TimoutStop=setTimeout(() => {
				this.time=!this.time;
		    }, 300000);
		}else if(obj.Time==="6min"){
			this.TimeCount();
			this.TimoutStop=setTimeout(() => {
				this.time=!this.time;
		    }, 360000);
		}else if(obj.Time==="7min"){
			this.TimeCount();
			this.TimoutStop=setTimeout(() => {
				this.time=!this.time;
		    }, 420000);
		}else if(obj.Time==="8min"){
			this.TimeCount();
			this.TimoutStop=setTimeout(() => {
				this.time=!this.time;
		    }, 480000);
		}
	}
	// function for show the time out time.
	TimeCount(){
		this.timeMints;
		if(this.timeSecondes===59){
			this.timeSecondes=0;
			this.timeMints++;
			console.log("this.timeMints",this.timeMints);
		}
		setTimeout(() => {
			this.timeSecondes++;
			console.log("this.timeSecondes",this.timeSecondes);
			if(this.time===true){
	    		this.TimeCount();
	    	}
		}, 1000);
	}
	// function for stop the timer.
	StopTimer(){
		this.time=!this.time;
		clearTimeout(this.TimoutStop);
	}



  
  
}