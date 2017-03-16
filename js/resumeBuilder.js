var work = {
  "jobs": [
    {
      "employer": "Pepperjam",
      "title": "Web Designer",
      "dates": "Nov 2012 - Feb 2017",
      "description": "Worked directly with clients and account managers to strategies and execute successful, brand sensitive campaigns assets."
    },
    {
      "employer": "Freelance Designer",
      "title": "Web and Print Designer",
      "dates": "April 2012 - Current",
      "description": "Met with small business owners to develop branding and design company websites."
    }
  ]
}

var bio = {
  "name" : "Andrew Cornell",
  "role" : "Front-End Web Designer",
  "welcomeMessage" : "Welcome to my resume page!",
  "bioPic" : "images/me.jpg",
  "contacts" : {
    "mobile" : "831-419-4106",
    "email" : "andrewjc88@gmail.com",
    "github" : "github.com/andrewjc88",
    "location" : "San Francisco"
  },
  "skills" : [
    "Self Motivated", " Early Adopter", " User focused", "Naturally Inquisitive", " intuative responsive design centric!"
  ]
}

var education = {
  "schools": [
    {
      "name": "Cabrillo College",
      "city": "Santa Cruz, CA",
      "major": "Computer Science",
      "dates": "2015-2016"
    },
    {
      "name": "Sierra College",
      "city": "Nevada City, Ca",
      "major": "Computer engineering",
      "dates": "2010–2012"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScritp Syntax",
      "school": "Udacity",
      "dates": "2015-2016"
    },
    {
      "title": "Other code junk",
      "school": "Udacity",
      "dates": "2015-2016"
    }
  ]
}

//                                 old stuff                                  //
////////////////////////////////////////////////////////////////////////////////
//
// var work = {};
// work.employer = "Pepperjam";
// work.title = "Web Designer";
// work.location = "Santa Cruz, CA";
// work.dates = "Nov 2012 – Feb 2017";
//
// $("#workExperience").append(HTMLworkStart);
//
// var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
// var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
// var formattedDates = HTMLworkDates.replace("%data%", work.dates);
//
// $(".work-entry:last").append(formattedEmployer);
// $(".work-entry:last").append(formattedTitle);
// $(".work-entry:last").append(formattedLocation);
// $(".work-entry:last").append(formattedDates);
//
// var education = {};
// education["name"] = "Cabrillo College";
// education["dates"] = "2015 – 2016";
// education["city"] = "Santa Cruz, CA";
//
// $("#education").append(HTMLschoolStart);
//
// var formattedEducationName = HTMLschoolName.replace("%data%", education["name"]);
// var formattedEducationYear = HTMLschoolDates.replace("%data%", education["dates"]);
// var formattedEducationCity = HTMLschoolLocation.replace("%data%", education["city"]);
//
// $(".education-entry:last").append(formattedEducationName);
// $(".education-entry:last").append(formattedEducationYear);
// $(".education-entry:last").append(formattedEducationCity);
//
// var role = bio.role;
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);
//
// var name = bio.name;
// var formattedName = HTMLheaderName.replace("%data%", name);
// $("#header").prepend(formattedName);
//
// var mobile = bio.contacts.mobile;
// var formattedMobile = HTMLmobile.replace("%data%", mobile);
// $("#topContacts").append(formattedMobile);
//
// var email = bio.contacts.email;
// var formattedEmail = HTMLemail.replace("%data%", email);
// $("#topContacts").append(formattedEmail);
//
// var github = bio.contacts.github;
// var formattedGithub = HTMLgithub.replace("%data%", github);
// $("#topContacts").append(formattedGithub);
//
// var _location = bio.contacts.location;
// var formattedLocation = HTMLlocation.replace("%data%", _location);
// $("#topContacts").append(formattedLocation);
//
// var bioPic = bio.bioPic;
// var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
// $("#header").append(formattedBioPic);
//
// var welcomeMessage = bio.welcomeMessage;
// var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
// $("#header").append(formattedWelcomeMessage);
//
// var skills = bio.skillers;
// var formattedSkills = HTMLskills.replace("%data%", skills);
// $("#header").append(HTMLskillsStart);
// $("#skills").append(formattedSkills);
//
