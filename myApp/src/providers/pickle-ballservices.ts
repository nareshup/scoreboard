import { Injectable} from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class PickleBallservices {
  header: any = {};
  path = "http://localhost:9000";
  constructor(public http: Http, public storage: Storage) {}
 


    //Tournment Directors Login 
    TournmentDirectorsLogin(obj) {
      console.log(">>>>>> parameters >>>>>", obj);
      return this.http.post(this.path + '/auth/local', obj)
        .map(res => res.json())
    }

    //Tournment Directors Login and get Directors data 
    TournmentDirectorsHomepageonload(obj) {
          let headers = new Headers();
          headers.append('authorization','Bearer '+ obj);
          this.header = new RequestOptions({ headers: headers });
          let body = {};
          return this.http.post(this.path + '/api/sheduledmatchess/matchsheduledmatcheslist', body, this.header).map(response => response.json());
    }
    //function for get event players list.  
    EeventPlayersList(id) {
      console.log(" EeventPlayersList.........//",id);
          let body:any={};
          body.EventId=id;
          return this.http.post(this.path + '/api/EventPlayerLists/eventbasedplayers',body,this.header).map(response => response.json());
    }

    //Tournment Directors shedule matches.
    ScheduleMatch(obj){
       console.log(" ScheduleMatch.........//",obj);
        return this.http.post(this.path + '/api/sheduledmatchess',obj,this.header).map(response => response.json());
    }

    //Referee Login service.
    RefereeLoginService(obj){
       console.log(" ScheduleMatch.........//",obj);
        return this.http.post(this.path + '/api/sheduledmatchess/refreelogin',obj).map(response => response.json());
    }

    //Referee Reload ScoreBoard service.
    RefereeReloadScoreBoard(token){
        let headers = new Headers();
          headers.append('authorization','Bearer '+ token);
          this.header = new RequestOptions({ headers: headers });
          let body = {};
          return this.http.post(this.path + '/api/sheduledmatchess/reloadservice', body, this.header).map(response => response.json());
        
    }

    // Spectator Get Matches service.
    SpectatorGetMatches(){
        
         return this.http.get(this.path + '/api/sheduledmatchess/spectatormatchs').map(response => response.json());
    }

    // Spectator Get Matches service.
    RefereeScoreBoardUpdate(id,obj){
        
         return this.http.put(this.path + '/api/sheduledmatchess/'+id,obj).map(response => response.json());
    }
    
}

    // console.log("this.headers",this.options);
    // return this.http.post(this.path+'/api/sheduledmatchess/matchsheduledmatcheslist',this.options)
    //   .map(res => res.json())



