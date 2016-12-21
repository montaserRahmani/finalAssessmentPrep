//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....

function newPlayer(name, age= null, position= null, level= null, availability= false){
	return {
		name:name,
		age: age,
		position: position,
		level: level,
		availability:availability,
		addInfo: addInfoFunc,
		increaseLevel: increaseLevelFunc,
		isAvailable: isAvailableFunc
	}
}

var addInfoFunc= function(age, position, level, availability ){
	this.age=age;
	this.position=position;
	this.level=level;
	this.availability=availability;
	return "player info updated! HOAH!"
}

var increaseLevelFunc= function(num){
	this.level=num;
	return "player info updated! YEAH!";
}

var isAvailableFunc=function(){
	return this.availability;
}

var p1=newPlayer("Montaser", 23, "Worrior", 6, true);
var p2=newPlayer("Maher", 25, "Defence", 5, true);
var p3=newPlayer("Ahma", 23, "Attack", 3, true);
var p4=newPlayer("Tahseen", 32, "Middle", 1, false);
var arrayOfPlayers=[p1,p2,p3,p4];

function decrease30(arr){
	arr.forEach((elem,i)=> elem.age > 30 ? --elem.level: null);
	return"Players updated";
}

function sortPlayerBy(arr, key){
	return arr.sort((a,b)=> a[key] > b[key]);
}