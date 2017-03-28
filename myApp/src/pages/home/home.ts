import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { secondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	playersDetails=[	
		{ "courtNumber":"Court1",
			"EventName":"Mens Doubles",
			"Matches":[
				{"Match":"Match1",
					"TournamentName":"Robson Ranch pickleball tournament",
					"id":"158878",
					"GameFormat":"1 to 21",
					"Referee":"ramana",
					"Serve":false,
					"EventName":"Mens Doubles",
					"court":"Court1",
					"Time":"10:00 AM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":1,
							"Name":"John",
							"Served":false},
							{"id":2,
							"Name":"Bill",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":3,
							"Name":"Ron",
							"Served":false},
							{"id":4,
							"Name":"Tom",
							"Served":false}
						]
					}
				},
				{"Match":"Match2",
					"id":"158878",
					"GameFormat":"1 to 21",
					"Referee":"kingkoti",
					"EventName":"Mens Doubles",
					"Serve":false,
					"court":"Court1",
					"Time":"11:00 AM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":5,
							"Name":"Alex",
							"Served":false},
							{"id":6,
							"Name":"George",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":7,
							"Name":"Adam",
							"Served":false},
							{"id":8,
							"Name":"David",
							"Served":false}
						]
					}
				},
				{"Match":"Match3",
					"id":"158878",
					"GameFormat":"1 to 21",
					"Referee":"kalyan",
					"EventName":"Mens Doubles",
					"Serve":false,
					"court":"Court1",
					"Time":"12:00 PM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":9,
							"Name":"Ivan",
							"Served":false},
							{"id":10,
							"Name":"Martin ",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
							"TeamId":"id",
							"Players":[{"id":11,
							"Name":"Max",
							"Served":false},
							{"id":12,
							"Name":"Igor",
							"Served":false}
						]
					}
				},
				{"Match":"Match4",
					"id":"158878",
					"GameFormat":"1 to 21",
					"Referee":"ramana",
					"EventName":"Mens Doubles",
					"Serve":false,
					"court":"Court1",
					"Time":"01:00 PM",
					"Team1":{"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":13,
							"Name":"Nick",
							"Served":false},
							{"id":14,
							"Name":"Kamil ",
							"Served":false}
						]
					},
					"Team2":{"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":15,
							"Name":"Mark",
							"Served":false},
							{"id":16,
							"Name":"Filip",
							"Served":false}
						]
					}
				}
			]
		},
		{ "courtNumber":"Court2",
			"EventName":"Womens singles",
			"Matches":[
				{"Match":"Match1",
					"id":"158878",
					"GameFormat":"2 of 3 to 11",
					"Referee":"subbarao",
					"EventName":"Womens singles",
					"Serve":false,
					"court":"Court2",
					"Time":"10:00 AM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":49,
							"Name":"Anna",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":50,
							"Name":"Maria",
							"Served":false}
						]
					}
				},
				{"Match":"Match2",
					"id":"158878",
					"GameFormat":"2 of 3 to 11",
					"Referee":"basha",
					"EventName":"Womens singles",
					"Serve":false,
					"court":"Court2",
					"Time":"11:00 AM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":51,
							"Name":"Mary",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":52,
							"Name":"Liza",
							"Served":false}
						]
					}
				},
				{"Match":"Match3",
					"id":"158878",
					"GameFormat":"2 of 3 to 11",
					"Referee":"suresh",
					"EventName":"Womens singles",
					"Serve":false,
					"court":"Court2",
					"Time":"12:00 PM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":53,
							"Name":"Tanya",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":54,
							"Name":"Ola",
							"Served":false}
						]
					}
				},
			]
		},
		{ "courtNumber":"Court3",
			"EventName":"Womens Doubles",
			"Matches":[
				{"Match":"Match1",
					"id":"158878",
					"GameFormat":"2 of 3 to 11",
					"Referee":"damu",
					"EventName":"Womens Doubles",
					"Serve":false,
					"court":"Court3",
					"Time":"10:00 AM",

					"Team1":{"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":17,
							"Name":"Bala",
							"Served":false},
							{"id":18,
							"Name":"Banu",
							"Served":false}
						]
					},
					"Team2":{"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":19,
							"Name":"Rani",
							"Served":false},
							{"id":20,
							"Name":"sudha",
							"Served":false}
						]
					}
				},
				{"Match":"Match2",
					"id":"158878",
					"GameFormat":"1 to 15",
					"Referee":"mahesh",
					"EventName":"Womens Doubles",
					"Serve":false,
					"court":"Court3",
					"Time":"11:00 AM",
					"Team1":{"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":21,
							"Name":"sandi",
							"Served":false},
							{"id":22,
							"Name":"paddhu",
							"Served":false}
						]
					},
					"Team2":{"Team":"Team2",
							"TeamId":"id",
						"Players":[{"id":23,
							"Name":"jani",
							"Served":false},
							{"id":24,
							"Name":"lalitha",
							"Served":false}
						]
					}
				},
				{"Match":"Match3",
					"id":"158878",
					"GameFormat":"1 to 15",
					"Referee":"koti",
					"EventName":"Womens Doubles",
					"Serve":false,
					"court":"Court3",
					"Time":"12:00 PM",

					"Team1":{"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":25,
							"Name":"laxmi",
							"Served":false},
							{"id":26,
							"Name":"vasavi",
							"Served":false}
						]
					},
					"Team2":{"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":27,
							"Name":"githa",
							"Served":false},
							{"id":28,
							"Name":"madu",
							"Served":false}
						]
					}
				},
				{"Match":"Match4",
					"id":"158878",
					"GameFormat":"1 to 15",
					"Referee":"raju",
					"EventName":"Womens Doubles",
					"Serve":false,
					"court":"Court3",
					"Time":"01:00 PM",
					"Team1":{"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":29,
							"Name":"sitha",
							"Served":false},
							{"id":30,
							"Name":"Radha",
							"Served":false}
						]
					},
					"Team2":{"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":31,
							"Name":"nicjhone",
							"Served":false},
							{"id":32,
							"Name":"anusha",
							"Served":false}
						]
					}
				}
			]
		},
		{ "courtNumber":"Court4",
			"EventName":"Mixed Doubles",
			"Matches":[
				{"Match":"Match1",
					"id":"158878",
					"GameFormat":"2 of 3 to 11",
					"Serve":false,
					"Referee":"sudher",
					"EventName":"Mixed Doubles",
					"court":"Court4",
					"Time":"10:00 AM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":33,
							"Name":"Smith",
							"Served":false},
							{"id":34,
							"Name":"Diana",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":35,
							"Name":"Jackson",
							"Served":false},
							{"id":36,
							"Name":"Victoria",
							"Served":false}
						]
					}
				},
				{"Match":"Match2",
					"id":"158878",
					"GameFormat":"1 to 15",
					"Referee":"srinu",
					"Serve":false,
					"EventName":"Mixed Doubles",
					"court":"Court4",
					"Time":"11:00 AM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":37,
							"Name":"Davis",
							"Served":false},
							{"id":38,
							"Name":"Ann",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":39,
							"Name":"Walker",
							"Served":false},
							{"id":40,
							"Name":"Eva",
							"Served":false}
						]
					}
				},
				{"Match":"Match3",
					"id":"158878",
					"GameFormat":"1 to 15",
					"Referee":"sami",
					"EventName":"Mixed Doubles",
					"Serve":false,
					"court":"Court4",
					"Time":"12:00 PM",
					"Team1":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":41,
							"Name":"sadhaa",
							"Served":false},
							{"id":42,
							"Name":"David",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":43,
							"Name":"jyothi",
							"Served":false},
							{"id":44,
							"Name":"George",
							"Served":false}
						]
					}
				},
				{"Match":"Match4",
					"id":"158878",
					"GameFormat":"1 to 15",
					"Referee":"ganesh",
					"EventName":"Mixed Doubles",
					"Serve":false,
					"court":"Court4",
					"Time":"01:00 PM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":45,
							"Name":"silpa",
							"Served":false},
							{"id":46,
							"Name":"George",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":47,
							"Name":"pallaviMV",
							"Served":false},
							{"id":48,
							"Name":"David",
							"Served":false}
						]
					}
				}
			]
		},
		{ "courtNumber":"Court5",
			"EventName":"Mens singles",
			"Matches":[
				{"Match":"Match1",
					"id":"158878",
					"GameFormat":"2 of 3 to 11",
					"Referee":"pavan",
					"EventName":"Mens singles",
					"Serve":false,
					"court":"Court5",
					"Time":"10:00 AM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":57,
							"Name":"John",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":58,
							"Name":"Ron",
							"Served":false}
						]
					}
				},
				{"Match":"Match2",
					"id":"158878",
					"GameFormat":"2 of 3 to 11",
					"Referee":"sathaya",
					"EventName":"Mens singles",
					"Serve":false,
					"court":"Court5",
					"Time":"11:00 AM",
					"Team1":{
						"Team":"Team1",
						"TeamId":"id",
						"Players":[{"id":59,
							"Name":"Alex",
							"Served":false}
						]
					},
					"Team2":{
						"Team":"Team2",
						"TeamId":"id",
						"Players":[{"id":60,
							"Name":"Adam",
							"Served":false}
						]
					}
				}
				
				
			]
		}
	]

constructor(public navCtrl: NavController) {}
  	ionViewDidLoad(){
  	}

	NextPage(obj){
		let data = obj;
    	this.navCtrl.push(secondPage, data);
    }
}
