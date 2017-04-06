var work = {
  "jobs": [
    {
      "employer": "AffiliateTraction / Pepperjam",
      "title": "Web Designer",
      "dates": "Nov 2012 - Feb 2017",
      "description": "Worked directly with clients and account managers to strategize and execute successful, brand sensitive campaigns assets."
    },
    {
      "employer": "R&B Cummunications",
      "title": "Technician",
      "dates": "April 2011 - May 2012",
      "description": "Diegnosed and repaired work stations, build work stations, ran virus/malware scans and used bootloaders to diognose systems."
    }
  ]
}

var bio = {
  "name": "Andrew Cornell",
  "role": "Front-End Web Designer",
  "welcomeMessage": "Welcome to my resume page!",
  "bioPic": "images/me.jpg",
  "contacts": {
    "mobile": "831-419-4106",
    "email": "andrewjc88@gmail.com",
    "github": "github.com/andrewjc88",
    "location": "San Francisco"
  },
  "skills": [
    "Self Motivated", " Early Adopter", " User focused", "Naturally Inquisitive", " intuative responsive design centric!"
  ]
};

var education = {
  "schools": [
    {
      "name": "Cabrillo College",
      "city": "Santa Cruz, CA",
      "major": "Computer Science",
      "dates": "2015 - Current"
    },
    {
      "name": "Sierra College",
      "city": "Nevada City, Ca",
      "major": "Computer engineering",
      "dates": "2010 – 2012"
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

var projects = {
  projects [
    {
      "title": "T49 Agency Website",
      "dates": "aug-16/nov-17",
      "description": "I made a website. It was a chill site for sure!"
      "images": "http://placehold.it/350x150"
    },
    {
      "title": "My Resume Website",
      "dates": "nov-13/someshit",
      "description": "Made shit and stuff for an ugle site for my udacity program."
      "images": "http://placehold.it/350x150"
    }
  ]
}

projects.display = function() {
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

$("#header").append(HTMLheaderName.replace("%data%", bio.name));

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmplyerTitle = formattedEmployer + formattedTitle;

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    $(".work-entry:last").append(formattedEmplyerTitle);
  }
}

displayWork();

if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
}
