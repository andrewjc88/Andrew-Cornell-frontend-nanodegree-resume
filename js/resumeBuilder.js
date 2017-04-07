var bio = {
  "name": "Andrew Cornell",
  "role": "Front-End Web Designer",
  "welcomeMessage": "Hello! My name is Andrew and I want to enhance storytelling through user interaction design using cutting edge web techniques.",
  "biopic": "images/me.jpg",
  "contacts": {
    "mobile": "831-419-4106",
    "email": "andrewjc88@gmail.com",
    "github": "github.com/andrewjc88",
    "location": "San Francisco"
  },
  "skills": [
    "HTML5 / CSS3 / SASS", "JavaScript / jQuery", "JSON / AJAX", "Photoshop / Illustrator", "Wordpress / HubSpot", "Git / Github"
  ],

  "display": function() {

    $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
    $("#header").prepend(HTMLheaderName.replace('%data%', bio.name));
    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    $('#header').append(HTMLskillsStart);

    $.each(bio.skills, function(data2) {
      $('#skills').append(HTMLskills.replace('%data%', bio.skills[data2]));
    });

    $.each(bio.contacts, function(data1, data2) {
      $('#topContacts').append(HTMLcontactGeneric.replace("%contact%", data1).replace('%data%', data2));
      $('#footerContacts').append(HTMLcontactGeneric.replace("%contact%", data1).replace('%data%', data2));
    });
  }
};

var work = {
  "jobs": [
    {
      "employer": "Freelance",
      "location": "San Francisco, CA",
      "title": "Front-End Designer",
      "dates": "Feb 2017 - present",
      "description": "Designed and implemented personal and small business wibsites for clients. Managed hosting, sketched layout and revised site to clients liking."
    },
    {
      "employer": "AffiliateTraction / Pepperjam",
      "location": "Santa Cruz, CA",
      "title": "Web Designer",
      "dates": "Nov 2012 - Feb 2017",
      "description": "Worked directly with clients and account managers to strategize and execute successful, brand sensitive campaigns assets."
    },
    {
      "employer": "R&B Cummunications",
      "location": "Grass Valley, CA",
      "title": "Technician",
      "dates": "April 2011 - May 2012",
      "description": "Diegnosed and repaired work stations, build work stations, ran virus/malware scans and used bootloaders to diognose systems."
    }
  ],
  "display": function() {

    $.each(work.jobs, function(i){

      $('#workExperience').append(HTMLworkStart);

      var myJobs = work.jobs[i];

      var formattedEmployer = HTMLworkEmployer.replace("%data%", myJobs.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", myJobs.title);
      var formattedEmplyerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmplyerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", myJobs.dates);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace("%data%", myJobs.location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace("%data%", myJobs.description);
      $(".work-entry:last").append(formattedDescription);
    });
  }
};

var education = {
  "schools": [
    {
      "name": "Cabrillo College",
      "location": "Santa Cruz, CA",
      "major": "Computer Science",
      "dates": "2016 - 2017"
    },
    {
      "name": "Sierra College",
      "location": "Nevada City, Ca",
      "major": "Computer engineering",
      "dates": "2010 – 2012"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front_End Nano degree",
      "school": "Udacity",
      "dates": "2016 - Current"
    },
    {
      "title": "Mobile UX Design",
      "school": "Udacity",
      "dates": "2017 - Current"
    }
  ],
  "display": function() {

    $.each(education.schools, function(edu) {

        $('#education').append(HTMLschoolStart);

        var educations = education.schools;

        var formattedSchoolName = HTMLschoolName.replace('%data%', educations[edu].name).replace("#", educations[edu].url);
        $('.education-entry:last').append(formattedSchoolName);

        var myDates = HTMLschoolDates.replace('%data%', educations[edu].dates);
        $('.education-entry:last').append(myDates);

        var myLocation = HTMLschoolLocation.replace('%data%', educations[edu].location);
        $('.education-entry:last').append(myLocation);

        var formattedMajor = HTMLschoolMajor.replace('%data%', educations[edu].major);
        $('.education-entry:last').append(formattedMajor);
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "T49 Agency Website",
      "dates": "2015-2016",
      "description": "I made a website. It was a chill site for sure!",
      "images": [
        "images/coding.jpg"
      ]
    },
    {
      "title": "My Resume Website",
      "dates": "2016-2017",
      "description": "Made a profesional resume site using jQuery and Javascript.",
      "images": [
          "images/hipcat.jpg"
      ]
    }
  ],
  "display": function() {
    for (project in projects.projects) {
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

bio.display();
work.display();
education.display();
projects.display();


$("#mapDiv").append(googleMap);
