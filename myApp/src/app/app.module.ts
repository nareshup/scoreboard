import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page1Page } from '../pages/page1/page1';
import { Thirdpage } from '../pages/ThirdPage/third';
import { ScoreboardQuestionmodalPage } from '../pages/Scoreboard-questionmodal/Scoreboard-questionmodal';
import{TournamentsPage} from '../pages/Tournaments/Tournaments';
import{RecmodalhomepagePage} from '../pages/recmodalhomepage/recmodalhomepage';
import{RecmodalScoreBoardPage} from '../pages/recmodal-score-board/recmodal-score-board';
import { WinningdeferencepointstwoscoresPage } from '../pages/winningdeferencepointstwoscores/winningdeferencepointstwoscores';
import{RecmodescoreboardQuestionmodalPage} from '../pages/recmodescoreboard-questionmodal/recmodescoreboard-questionmodal';
import{TournamentsdirectorhomePage} from '../pages/tournamentsdirectorhome/tournamentsdirectorhome';
import { Refereescoreboardwinby1Page} from '../pages/refereescoreboardwinby1/refereescoreboardwinby1';
import { Refereescoreboardwinby2Page} from '../pages/refereescoreboardwinby2/refereescoreboardwinby2';
import { PickleBallservices} from '../providers/pickle-ballservices';
import { SpectatorhomePage } from '../pages/Spectatorhome/Spectatorhome';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page1Page,
    Thirdpage,
    ScoreboardQuestionmodalPage,
    TournamentsPage,
    RecmodalhomepagePage,
    RecmodalScoreBoardPage,
    WinningdeferencepointstwoscoresPage,
    RecmodescoreboardQuestionmodalPage,
    TournamentsdirectorhomePage,
    Refereescoreboardwinby1Page,
     Refereescoreboardwinby2Page,
     SpectatorhomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1Page,
    Thirdpage,
    ScoreboardQuestionmodalPage,
    TournamentsPage,
    RecmodalhomepagePage,
    RecmodalScoreBoardPage,
    WinningdeferencepointstwoscoresPage,
    RecmodescoreboardQuestionmodalPage,
    TournamentsdirectorhomePage,
    Refereescoreboardwinby1Page,
     Refereescoreboardwinby2Page,
     SpectatorhomePage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},PickleBallservices]
})
export class AppModule {}
