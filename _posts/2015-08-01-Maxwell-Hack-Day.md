---
title: Maxwell Hack Day
author: James Hrisho - Information Architect
category: blog
date: 2015-08-01 00:00:00 +/-0000
layout: post
---
![Whole Team Meeting](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7427.JPG)


On July 23rd, our engineering team had our first ever hackday. This was a whole day for all developers and quality assurance people to self assemble on teams to work on any project they want to - culminating in a demo session at the end the day. The teams were actively encouraged not to use this time to get ahead of our backlog but rather work on pet projects, prototypes using cutting edge technologies and generally creative approaches to problems.


###Before The Event

We annouced the hack day to the full team about a week before the event, this gave those who didn't already have a project in the back of their head time to think about what they wanted to achieve. We then collected those ideas in a spreadsheet with a signup portion, people inspired by a project joined that team and potentially could begin planning. In addition to the spreadsheet, I put together a github repo of APIs and SDKs from AWS, Github, Google Apps, JIRA and HipChat. We use these tools regularly and many of the project ideas included potential integrations.  If you are planning a hackday for your team or a general hackathon having these tools in a centralized place helps get a team moving right away.  Lastly, we decided on some key tenants of the day:

* Failure is perfectly fine. We are exploring new ideas and failure can be part of that.
* Your project might not make it to production.
* Open source your project if it is possible.
* Try to have something to demo by the end of the day.
* Try to work with someone you don't normally work with and don't work alone.
* This should go without saying but have fun.

With our tenants set, our resources assembled and projects mostly planned, we were ready for our event.

###Day Of

![Breakfast](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7380.JPG)

At 8:30AM, the team started to arrive at the office and breakfast was served. People were organizing their thoughts and mostly still waking up. At 9:00AM, we started pitches for each project. While some team members knew what they were going to work on, almost half the team was still up in the air. Each person with an idea was able to pitch to the team in hopes of recruiting members to their cause. Again, a tenant of the event was to not work alone, it was important for people to put their best foot forward with their pitch. By the end of the pitch session the teams were formed and people got to work.


![Tyler pitching his app](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7389.JPG){: .vert-image }
![Will pitching his app](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7392.JPG){: .vert-image }
![Shayna pitching her app](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7391.JPG){: .vert-image }
![Fern pitching his app](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7394.JPG){: .vert-image }

Other than a quick break for lunch at Noon, the teams worked straight through from 9:30AM to 6:30PM when our demos occurred. This would come out as the biggest insight from the event, the ability to completely get in the flow and think through our prototypes has a large impact in the work we want to achieve.

![Anamta](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7416.JPG){: .vert-image }
![Ethan and Will](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7407.JPG){: .vert-image }
![Tommy And Arthur](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7408.JPG){: .vert-image }
![Chris and Zach](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7401.JPG){: .vert-image }


###Demos

At 6:30 we had dinner and put together the order of who would be demoing. As each team stood up and demoed their work, I was completely blown away by the creativity and the level of sophistication in projects in just one day. The other striking piece was how confident the team was demoing to a large group of people. Demos can be scary, but the culture of humility that we have fostered made people feel comfortable. They could stand in front of their peers, show off their still in progress work with a big smile on their face. They were proud of what they had achieved.

So what did we work on? Here is a list of just some of the projects:

![Andrew](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7437.JPG){: .vert-image }

*Maxwell TestBot* - An automated testing framework based on selenium built in Node. Each workflow can be built out using a series of components written in TOML files, those components then can be mixed and matched for many different testing scenarios.

![Laura and Shayna](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7439.JPG){: .vert-image }

*MaxVotes* - An internal tool to crowdsource ideas and suggestions to our platform built in Ruby. It has a voting system to bubble up the best ideas and a karma system to see who the best idea generators are.

![Chris and Zach](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7431.JPG){: .vert-image }

*4 Strength 4 Stam Leather Belt* - Built in PHP, creating a ton of testing scenarios can be tough. This helps aid in that by simulating and creating familiesx in our system.

![James](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7423.JPG){: .vert-image }

*MongoAdmin* - A MongoDB administration tool built in Go. It has to the ability to do many basic MongoDB functions, finds, find by id, inserts, deletes and adding and removing indexes.

![Tyler](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7432.JPG){: .vert-image }

*PLUG-AND-PLAY* - A framework for internal dashboards that lets a developer add different components to make up a large scale dashboard built in Python.

![Cory and Tommy](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7433.JPG){: .vert-image }

*OnDemand* - The ability to launch on demand instances of an environment running any branch of code, built with Docker.

![Will and Emmma Crushing Code](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7384.JPG){: .vert-image }

*Mercury* - A tool to integrate GraphQL, the new query language format from Facebook, Mongoose and RESTFul APIs built in Node.

![Shridhar](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7440.JPG){: .vert-image }

*Tinder for Maxwell Socializing* - Built in React-Native, you can post lunch and after work events, swipe left to ignore and right to commit to come. Has an
internal chat for each event you commit to.

![Frank and Will](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7420.JPG){: .vert-image }

*Maxwell Utils* - A dashboard for internal tools we use for administrating our system built in PHP.

![Emma and Anamta](https://s3.amazonaws.com/engineering.maxwellhealth.com/IMG_7421.JPG){: .vert-image }

*Bug Reporter* - A system that lets anyone report bugs with all of the details necessary to get started: browser version, currently logged in user, etc, built in PHP.


###Wrap Up

After our event we had a short retrospective. It let us review what worked, what didn't and what we will do better next time. The general consesus was that this was a huge success and that we will absolutely will be doing another hackday in the near future. The work was inspired, innovative and got people excited about next steps for their projects. We've already identified several projects from the event as potential open source candidates and will be introducing those projects as they become open and reach milestones.


