function Nbachampions(teams){

	this.teams = teams;

}
 
 var my_nbachampions = new Nbachampions("warriors");

 function Actress(){

 	this.pretty = true;



 }
Actress.prototype = new Nbachampions("spurs");
selma = new Actress();
 