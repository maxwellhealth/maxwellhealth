---
title: Story Tellers
author: Taylor Pechacek - Product Manager
category: blog
date: 2015-08-28 12:00:00 +/-0000
layout: post
---

Software requirements is a communication problem. Any organization that builds or uses software, which is growing more common in today's world, must learn how to communicate what they actually want to build with those who can actually build it. This is where product management fits in within the product team; to help capture, organize, and 

distill this information from multiple stakeholders into actionable requirements that can be understood and built by engineers.

It's important to note that this communication is not one-way. It doesn't always come from stakeholders down the chain to engineering. It is vital that neither side comes to the table looking to dominate the conversation. When the business side dominates, it mandates functionality and dates with little concern for whether developers can meet both objectives. When engineering dominates the communication, the technical jargon replaces the language of the business and the developers lose the opportunity to learn what is needed to bring value to their users.

This is where user stories come in! They are the preferred way within [Agile](https://en.wikipedia.org/wiki/Agile_software_development) teams to communicate the required functionality of 

software that should be built in order to create value for end users or customers. The way we write our stories at Maxwell Health is based on a format called [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin). This format consists of the title of a scenario and then explains that scenario by answering each question of:

- Given ...
- When ...
- Then ...
- And ...

This allows you to write stories as you would normally explain them, while giving context and autonomy to engineering teams so they can build them in the best way possible. Let's dive into an example!

Say we want to add a new demographic field for an employee using Maxwell Health that asks whether they are left or right-handed.   

**Scenario:** New demographic field for an employee - Are they left or right-handed?


**Given** I am an employee

**When** I am asked to enter demographic information

**Then** I will have a field called "Left or Right-handed?" as an option to input

**And** it will be a dropdown with 2 options: "Left", "Right."

**And** it is not a required field by default

**And** it can be made a required field by a Master HR Admin


It is easy to interpret this requirement and understand what needs to be done. Engineering can take this, ask further questions if they need clarification or refinement, and then implement it in the best way possible. This is a very simplified example. We would normally expand on this and answer further things like what is the default value, how does this show up on reports, and possibly provide some testing instructions at the bottom.

One important thing to remember when writing stories is how we can test this! We don't have time to go into that here, but meeting the "Acceptance Criteria" or tests, are how we know this feature has the intended value we want to deliver and it's ready to ship for people to actually use.

So, next time you are thinking about that new feature or small improvement you would love to have either for yourself or a customer, try writing out what it would look like using the Gherkin method above. At the very least, it helps you think about everything that goes into one simple feature!