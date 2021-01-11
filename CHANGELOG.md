
# tiledesk-dashboard

### 2.0.83
- Add the property "appId" in dashboard-config-template

### 2.0.82
- updated dashboard-config.json
- Updated Firebase dependency to 7.24.0

### 2.0.81
- fixes excessive loading time when refreshing the conversation list

### 2.0.80
- Fixes production environment settings

### 2.0.79
- Fixes block in loading conversation details

### 2.0.78
- Fixes the departments status updating service

### 2.0.77
- Adds query string with the fields "project_id" and "jwt" of to the app store apps installation url

### 2.0.76
- Adds events and visitors (test)

### 2.0.75
- Displays in the conversation list a badge over the link to the not real-time conversations if the total count of conversation is >=100

### 2.0.74
- Change the color of the border highlighting that it is the registered user serving the conversation
- Changes the bot avatar in the bot test page 
- Fixes the display of the 'verified contact' icon on the 'not real-time' conversations page
- Adds in the 'not real-time' conversation page the evidence of the filter applied
- Improves in the 'not real-time' conversation page and in the history page the filters box and adds the evidence of the applied filters
- Moves in the top bar of the conversations page the link to the 'not real-time' conversations
- Displays a custom loading when the conversation detail page "for the chat" is running on mobile devices

### 2.0.73 
- Fixes the message displayed when occurs an error sending the password recovery email
- Updates the preview of the callout in the callout customization page
- Adds in the callout customization page the ability to enable the callout with a "toggle switch"
- Adds in the callout customization page the ability to customize the emoticon
- Adds in Triggers list page the tabs to filter the triggers for type custom / system 
- Adds in Triggers list page a link to the trigger documentation 
- Removes in Triggers list page the ability to delete triggers of "system type"
- Adds in the request details visible in the chat the ability to open the chat transcript
- Removes in the request details visible in the chat the button 'go to request'
- Adds in the widget customization page the notes on the properties that the image of custom logo must have
- Fixes in the app service the call to get the apps

### 2.0.72 
- Adds the ability in conversations list to filter for "Human Agents only" and for "Bots Only"

### 2.0.71
- Displays the in-app notifications only once
- Renames occurrences of 'requests' to 'conversations'
- Gets contacts presence from websocket subscription (no longer from firebase)
- Fixes widget logo
- Adds on the navigation bar a link to the simulate visitor page 
- Adds on the navigation bar the ability to know if the operating hours are enabled 
- Fixes the loading spinner display in app-store page


### 2.0.68
- Displays in requests list name initials if profile picture is not provided

### 2.0.67
- Updates the Dockerfile with the commands to bundle the dashboard for production 

### 2.0.64
- Adds a navigable sidebar (projects, unserved requests, request details) that will be integrated in the chat

### 2.0.63
- Adds in README the explanation on how to load external script 

### 2.0.62
- Improves scripts service

### 2.0.61
- Adds the ability to load external scripts

### 2.0.60
- Fixes brand service

### 2.0.59
- Does not allow to delete a bot if it is associated with a department

### 2.0.58
- Adds the ability to customize the brand from an external json

### 2.0.57
- Adds the ability to join a request from the requests list
- Changes in the request list the orientation of agent avatars to horizontal on desktop devices
- Improves UI

### 2.0.56
- Adds links in "Create a dialogflow bot" page to related Knowledge Base 

### 2.0.55
- Fixes the logout button visibility on small device
- Adds links in edit / add FAQs pages to related Knowledge Base 
- Adds widget pre-translated languages: German, Portuguese, Russian, Spanish, Turkish
- Disabled the ability to agents to archive a request of which they aren't "participants"

### 2.0.54
- Adds SSO service

### 2.0.53
- Fixes the external docs urls 

### 2.0.46
- Disables the ability to owner and to current user to delete themselves from the project

### 2.0.45
- Fixes the scroll in the modal window add agent to a request / assign request

### 2.0.44
- Disables the ability to agent to add another agent to a request, to reassign a request and to close a request of which he not is a participant
- Makes the surname field mandatory during registration
- Fixes the layout on mobile of the list of the requests

### 2.0.43
- Minor improvements

### 2.0.42
- Adds the lazy loading of agents and bots in the request list

### 2.0.41
- Minor improvements

### 2.0.40
- Changes the endpoint of the "bot credential" service

### 2.0.39
- Changes the id and the condition of the trigger "available agents"

### 2.0.38
- Adds the lazy loading of departments in the request list

### 2.0.37
- Minor improvements

### 2.0.36
- Minor improvements and bug fixing

### 2.0.31
- Adds the ability to reset the prebuilt triggers
- Adds the ability to edit the "Offices are closed" widget message

### 2.0.26
- Adds the ability to add or edit a description for bots
- Improves departments list page, department create and edit page and the routing page

### 2.0.23
- Adds the labels in requests list and history

### 2.0.16
- Adds to history and request's details custom icons for browser and operating system data retrieved from the "User-agent"
- Adds the ability to add or edit a description for departments

### 2.0.14
- Adds to requests list custom icons for browser and operating system data retrieved from the "User-agent"

### 2.0.12
- Fixes bugs
- Redirects to the recent projects page if the user is logged in and is directed to the login or registration page
- Adds a spinner in the popup window "create bot"

### 2.0.8
- Adds mimor improvements
- Merges pull request 'German language support'. Many thanks Michael

### 2.0.4
- Adds the ability to remove the account

### 2.0.1
- Fixes in 'Labels' the labels color dropdown is always open at media width < 992px
- Allows agents to edit notes and labels only of their own requests
- Allows agents to edit notes and labels only of their own requests
- Adds in the users list the evidence of the "busy user" status if an agent reach the limit of maximum chats

### 2.0.0
- Adds widget trigger
- Adds filters for agent and department in the requests' list page
- Displays the request's attributes in the request details page
- Fixes the upload of the user profile image when one already exist
- Adds the ability to upload bot profile image
- Fixes the bottom nav in metrics page
- Adds the ability to customize all over the app the properties concerning the company (company name, the logo images, company site and contact email and more)
- Changes the environments' publicKey
- Adds the ability to customize buttons' color
- Adds the ability to translate or edit all the phrases appearing in the widget
- Adds the ability to reassign a request to a department
- Adds the ability to reassign a request to a bot
- Adds the ability to view all the request' attributes
- Adds the ability to view all the contact' attributes
- Fixes the in-app notifications and count of unserved requests when user' role is agent 
- Fixes the reload of the request's details page when change the request id url parameter
- Fixes the handle-invitation path without surname parameter 
- Fixes registration form' email validation to not allow address without domain
- Edits endpoints services for users and project users
- Fixes "project settings" sidebar menu item is not displayed
- Fixes the error that generates the logout if made in the request' details page
- Adds the ability to create an "internal request"
- Adds the ability to chat with an agent of a request
- Adds the ability to integrate a Dialogflow bot
- Adds the ability to create canned responses
- Adds the ability to add label to requests
- Adds the ability to limit the number of concurrent chats each agent can take at once
- Adds the ability to reassign chat after a specified time frame
- Adds the ability to set an agent's status to unavailable after a consecutive number of chats reassigned
- Adds real time update of the current user availability
- Fixes the delete of a project
- Adds the ability to turn off the in-app notifications sound
- Adds in the sidebar the evidence of the "busy user" status if the current user reach the limit of maximum chats
- Adds attributes to contacts (company, note, address, phone)

### 1.0.40
- Fixes the user profile urls

### 1.0.39
- Minor improvements

### 1.0.38
- Changes the url of the widget live test page
- Adds in the sidebar the link to "Tiledesk changelog" blog


### 1.0.37
- Improves the project settings page organizing the contents in tabs and adding info
- Adds a "SAVE" buttons on top of the widget settings pages 
- Fixes the issue of saving the widget setting
- Improves the widget live test page

### 1.0.36
- Adds a two step wizard (create project and install widget) after the sign up
- Adds the list of recent projects in the navbar "project" dropdown menu 
- Adds save button to widget settings
- Improves graphics of the widget settings pages
- Adds help page to improve new users pending invitations workflow
- Fixes minor bugs

### 1.0.35
- Fixes minor bugs

### 1.0.34
- Adds Pricing

### 1.0.33
- Fixes minor bugs

### 1.0.32
- Implements the new FAQ services

### 1.0.31
- Adds in Analytics the graphs: "Requests per hour of day", "Median Response Time", "Median Conversation Lenght"
- Adds in Analytics' graph "Number of requests last 7 days" the ability to filter by time range and project's departments

### 1.0.30
- Minor improvements

### 1.0.29
- Fixes the widget url

### 1.0.28
- Adds the chat widget
- Adds the ability to revoke a pending invitation

### 1.0.26
- Adds the "Train bot" slide-out panel in request's details and in the bot test page
- Fixes the link in the home page "Get The Mobile App"

### 1.0.24
- Improves the chat in the request's detail page

### 1.0.23
- Fixes minor bugs

### 1.0.22
- Adds the ability to view the request details by clicking on the in app notifications
- Adds the button "delete contact" in the contact details page
- Groups: fixes the count of members of groups
- Project settings: adds a link to 'Widget Authentication'
- Bots: adds the ability to manage external bot
- Fixes the login and logout errors caused by the Firebase Cloud Messaging
- Adds Activities log

### 1.0.20
- Adds the avatar of the agents in the column 'Served By' of the history table
- Adds graphic improvements
- Fixes minor bugs

### 1.0.19
- Outsources the url of the widget; updates the names of the 'base-urls' in the 'environments' files

### 1.0.18
- Minor improvements

### 1.0.16
- Remove 'AngularFire2' dependencies and update 'Firebase'
- Adds the ability to allow to receive Web Push Notifications for the requests in which the current user is an agent
- Adds the avatar of the agents in the column 'Served By' of the support requests list

### 1.0.15
- Disable autocapitalize of the the inputs of type email

### 1.0.14
- Adds the requester avatar in the history page
- Adds the available / unavailable agent status in the pop-up windows "reassign request" and "add agent"

### 1.0.12
- Adds the notifications for the requests assigned to the logged agent
- Adds in the footer the the ability to send an email to info@tiledesk.com
- Adds in history the requester name

### 1.0.11
- Replaces the comma with the semicolon as column delimiter of the exported faq.csv file
- Adds in the pop-up window 'Upload CSV' the ability to download the example.csv file 

### 1.0.10
- Adds the titles on the login page and on the signup page

### 1.0.9
- Bug fixed: requests assigned to a department and then reassigned to an agent of another department are not listed among the new agent's requests
- Edits: the unserved requests notifications are not displayed if it are older than one day
- Adds the display of notifications when the user change the widget appearance or the department online / offline messages
- Adds to the sidebar's avatar a link to the user' profile
- Adds to the sidebar the menu item 'Project Settings'
- Adds tabs to switch from the user-profile page to the change password page 
- Other minor improvements

### 1.0.8
- Adds translations for the Notification Messages related to user actions

### 1.0.7
- Adds the ability to resend the invitation email

### 1.0.6
- Displays an alert to encourage the user to open the chat

### 1.0.5
- Fixes some translations

### 1.0.4
- Sorts the dates in ascending order in the graph "Number of requests last 7 days" 

### 1.0.3
- Adds to the user with role Agent the ability to reassign a request
- Adds to the user with role Agent the ability to add an agent to serve a request
- Removes to the user with role Agent the ability to delete a contact

### 1.0.2
- Analytics, count of last 7 days requests: fixed the bug "month label and count of requests are undefined if the month is represented with one digit"

### 1.0.1
- Adds widget appearance preview
- Adds the ability to change the widget logo
- Adds the ability to customize the widget welcome messages
- Adds the ability to customize the online / offline messages

### 1.0.0
- Adds a tooltip to the column "visibility" of the departments list 

### 0.9.51
- Adds the ability of set a department as hidden so that it is not displayed in the list of widget's available departments

### 0.9.50
- Avatars of the contacts : adequate colors and initials to those of the widget
- Users list: translated the roles

### 0.9.49
- Adds "Export faqs to CSV"
- Adds "Export contacts to CSV"
- Adds "Export requests history to CSV"
- Adds search for contacts by email
- Adds in the request's details 'View contact's details'

### 0.9.48
- Adds requester online/offline status