var loc0 = "Cave";
var loc1 = "Entrance";
var loc2 = "Dungeon";
var loc3 = "Trap Room";
var loc4 = "Treasure Room";
var loc5 = "Mummy Room";
var loc6 = "Chimney";
var loc7 = "Library";
var loc8 = "Prison Rooms";
var loc9 = "Fire Well";

var loc0_visited = false;
var loc1_visited = true;
var loc2_visited = false;
var loc3_visited = false;
var loc4_visited = false;
var loc5_visited = false;
var loc6_visited = false;
var loc7_visited = false;
var loc8_visited = false;
var loc9_visited = false;

var loc0_desc = "You have entered the cave";
var loc1_desc = "You are at the entrance.";
var loc2_desc = "You are in the dungeon. There are gold coins on the ground.";
var loc2_desc2 = "You are in the dungeon.";
var loc3_desc = "You are in the trap room!";
var loc4_desc = "You are in the treasure room. There are some gold coins on the ground.";
var loc4_desc2 = "You are in the treasure room.";
var loc5_desc = "You are in the mummy room!";
var loc6_desc = "You are by the chimney.";
var loc7_desc = "You are in the library.";
var loc8_desc = "You are at the prison cells.";
var loc9_desc = "You are at the fire well.";

var current_loc = 0;
var points = 0;
var message = "";
var coins = 0;

function display_message(message) {
	var txt_area = document.getElementById("ta_main");
	txt_area.value = message + "\n\n" + txt_area.value;
}

function init() {
	message = "Welcome to Treasure Hunt. Your objective is to explore the areas. Every time you visit a new location you will receive 5 points.\n\n"
	display_message(message);
}

function loc_change(x) {
	var txt_loc_a = document.getElementById("txt_loc");
	var txt_points_a = document.getElementById("txt_points");
	var north = document.getElementById("btnNorth");
	var east = document.getElementById("btnEast");
	var south = document.getElementById("btnSouth");
	var west = document.getElementById("btnWest");
	switch (x) {
		case 0:
			current_loc = 0;
			txt_loc_a.value = loc0;
			message = loc0_desc;
			display_message(message);
			if (loc0_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc0_visited = true;
			}
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === true) {
				east.disabled = false;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === true) {
				west.disabled = false;
			}
			break;
		case 1:
			current_loc = 1;
			txt_loc_a.value = loc1;
			message = loc1_desc;
			display_message(message);
			if (loc1_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc1_visited = true;
			}
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 2:
			current_loc = 2;
			txt_loc_a.value = loc2;
			message = loc2_desc;
			display_message(message);
			if (loc2_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc2_visited = true;
			}
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === true) {
				east.disabled = false;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === true) {
				west.disabled = false;
			}
			break;
		case 3:
			current_loc = 3;
			txt_loc_a.value = loc3;
			message = loc3_desc;
			display_message(message);
			if (loc3_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc3_visited = true;
			}
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 4:
			current_loc = 4;
			txt_loc_a.value = loc4;
			message = loc4_desc;
			display_message(message);
			if (loc4_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc4_visited = true;
			}
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === true) {
				east.disabled = false;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === true) {
				west.disabled = false;
			}
			break;
		case 5:
			current_loc = 5;
			txt_loc_a.value = loc5;
			message = loc5_desc;
			display_message(message);
			if (loc5_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc5_visited = true;
			}
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 6:
			current_loc = 6;
			txt_loc_a.value = loc6;
			message = loc6_desc;
			display_message(message);
			if (loc6_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc6_visited = true;
			}
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === true) {
				south.disabled = false;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 7:
			current_loc = 7;
			txt_loc_a.value = loc7;
			message = loc7_desc;
			display_message(message);
			if (loc7_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc7_visited = true;
			}
			if (north.disabled === true) {
				north.disabled = false;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 8:
			current_loc = 8;
			txt_loc_a.value = loc8;
			message = loc8_desc;
			display_message(message);
			if (loc8_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc8_visited = true;
			}
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === true) {
				east.disabled = false;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === false) {
				west.disabled = true;
			}
			break;
		case 9:
			current_loc = 9;
			txt_loc_a.value = loc9;
			message = loc9_desc;
			display_message(message);
			if (loc9_visited === false) {
				points += 5;
				txt_points_a.value = points;
				loc9_visited = true;
			}
			if (north.disabled === false) {
				north.disabled = true;
			}
			if (east.disabled === false) {
				east.disabled = true;
			}
			if (south.disabled === false) {
				south.disabled = true;
			}
			if (west.disabled === true) {
				west.disabled = false;
			}
			break;
	}
}

function btnNorth_Click() {
	switch (current_loc) {
		case 0:
			loc_change(1);
			break;
		case 3:
			loc_change(0);
			break;
		case 5:
			loc_change(3);
			break;
		case 6:
			loc_change(5);
			break;
		case 7:
			loc_change(6);
			break;
		default:
			message = "You cannot go North from here.";
			display_message(message);
	}
}
		
function btnEast_Click() {
	switch (current_loc) {
		case 0:
			loc_change(4);
			break;
		case 2:
			loc_change(0);
			break;
		case 4:
			loc_change(9);
			break;
		case 8:
			loc_change(2);
			break;
		default:
			message = "You cannot go East from here.";
			display_message(message);
	}
}

function btnSouth_Click() {
	switch (current_loc) {
		case 0:
			loc_change(3);
			break;
		case 1:
			loc_change(0);
			break;
		case 3:
			loc_change(5);
			break;
		case 5:
			loc_change(6);
			break;
		case 6:
			loc_change(7);
			break;
		default:
			message = "You cannot go South from here.";
			display_message(message);
	}
}

function btnWest_Click() {
	switch (current_loc) {
		case 0:
			loc_change(2);
			break;
		case 2:
			loc_change(8);
			break;
		case 4:
			loc_change(0);
			break;
		case 9:
			loc_change(4);
			break;
		default:
			message = "You cannot go West from here.";
			display_message(message);
	}
}

function btnTake_Click() {
	switch (current_loc) {
		case 2:
			if (loc2_desc != loc2_desc2) {
				display_message("You have taken the gold coins!");
				coins += 5;
				loc2_desc = loc2_desc2;
			}
			break;
		case 4:
			if (loc4_desc != loc4_desc2) {
				display_message("You have taken the gold coins!");
				coins += 5;
				loc4_desc = loc4_desc2;
			}
			break;
		default:
			display_message("There is nothing to take!");
	}
}

function inventory() {
	var invty = "INVENTORY:\n Coins:" + coins + "\n";
	display_message(invty);
}

function btn_Command() {
	var txt_Command = document.getElementById("txtCommand");
	var txt_loc_a = document.getElementById("ta_main");
	var Command = txt_Command.value.toLowerCase();
	if (Command === "n") {
		btnNorth_Click();
	}
	else if (Command === "s") {
		btnSouth_Click();
	}
	else if (Command === "e") {
		btnEast_Click();
	}
	else if (Command === "w") {
		btnWest_Click();
	}
	else if (Command === "take") {
		btnTake_Click();
	}
	else if (Command === "inventory") {
		inventory();
	}
	else {
		txt_loc_a.value = "Please enter a valid command!" + txt_loc_a.value;
	}
	txt_Command.value = "";
}