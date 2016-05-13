/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $("#main").append(internationalizeButton);3

 function inName(name) {
    nameArray = name.trim().split(" ");
    first = nameArray[0];
    last = nameArray[1].toUpperCase();
    return first + " " + last;
 }

var work = {
    "jobs": [
        {
            "employer" : "KPMG",
            "title" : "Senior Associate, IPBR",
            "location" : "San Francisco, CA",
            "dates" : "Aug 2013 - Present",
            "description" : "IT Security Consultant"
        },
        {
            "employer" : "Rice Pool",
            "title" : "Concessions Manager",
            "location" : "Wheaton, IL",
            "dates" : "2005 - 2011",
            "description" : "Grilled Burgers"
        }
    ]
}

var projects = {
    "projects" : [
        {
            "title" : "JSON Resume",
            "dates" : "May 2016",
            "description" : "silly website",
            "images" : [
                "images/selfie.jpg",
                "https://goo.gl/photos/z8dxajS46NMyPWqg9"
                ]
        },
        {
            "title" : "Web Design Resume",
            "dates" : "April 2016",
            "description" : "sillier website",
            "images" : [
                "images/selfie.jpg",
                "https://goo.gl/photos/z8dxajS46NMyPWqg9"
                ]
        }
    ]
}

var bio = {
    "name" : "Harry Metzger",
    "role" : "JavaScript n00b",
    "welcomeMessage" : "HI I BE HARBLES",
    "contacts" : {
        "cell" : "630-621-6363",
        "email" : "harry19023@gmail.com",
        "location" : "San Francisco, CA",
        "address" : "3744 Sacramento Street, San Francisco, CA 94118"
    },
    "skills" : [
        "JavaScript",
        "HTML",
        "CSS"
    ]
}

var education = {
    "schools": [
        {
            "name" : "Notre Dame",
            "location" : "South Bend, IN",
            "degree" : "BS",
            "majors" : [
                "Computer Science"
            ],
            "dates" : "2009 - 2013",
            "url" : "https://www.nd.edu/"
        },
        {
            "name" : "Wheaton Warrenville South High School",
            "location" : "Wheaton, IL",
            "degree" : "High School Dipolma",
            "majors" : [
                "High School"
            ],
            "dates" : "2005 - 2009",
            "url" : "http://www.cusd200.org/Domain/140"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Responsive Web Design",
            "school" : "udacity",
            "dates" : "April 2016",
            "url" : "nah.com"
        },
        {
            "title" : "Intro  to JavaScript",
            "school" : "udacity",
            "dates" : "May 2016",
            "url" : "nah.com"
        }
    ]
}

function replaceData(HTMLstring, dataString) {
    formattedString = HTMLstring.replace("%data%", dataString)
    return formattedString;
}

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));



$("#header").append(HTMLskillsStart);
if (bio.skills.length > 0)
{
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }

}



for (job in work.jobs)
{
    if(work.jobs.hasOwnProperty(job))
    {
        $("#workExperience").append(HTMLworkStart);
        //var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedEmployer = replaceData(HTMLworkEmployer, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",  work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",  work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",  work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%",  work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer);
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}

projects.display = function () {
        for (project in projects.projects)
        {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = replaceData(HTMLprojectTitle, projects.projects[project].title);
            var formattedDates = replaceData(HTMLprojectDates, projects.projects[project].dates);
            var formattedDescription = replaceData(HTMLprojectDescription, projects.projects[project].description);
            var formattedImage = replaceData(HTMLprojectImage, projects.projects[project].images[0]);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            //$(".project-entry:last").append(formattedImage);
        }
    }
projects.display();

$("#mapDiv").append(googleMap);