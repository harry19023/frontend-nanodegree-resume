/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%", "Harry Metzger");
var formattedRole = HTMLheaderRole.replace("%data%", "JavaScript Noob");

$("#header").append(formattedName);
$("#header").append(formattedRole);