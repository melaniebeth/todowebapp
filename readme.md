**The ToDo Web App and LaunchDarkly**

------

*The App*

The app itself is simple,  it accepts a task and description of an item for a to-do list, and stores it for you to complete.   Chrome is the recommended browser of choice.  While the app is designed for a single user - I added a user prompt at runtime for the user to input their name.  This allows for some fun experimentation with the Feature Flags!  The files in the source code that have been updated for LaunchDarkly are: app.js, and index.html.    The app currently stores the tasks in order of entry, with the newest on the bottom.   I will be adding a feature that alphabetizes the task names.   Tasks usually aren't completed in alphanumeric order, but it's a fun, easy adjustment - and we'll be rolling it out in a way that targets certain individuals.  And of course, we can always hit the kill-switch if needed!   To add a new item to the to-do list, simply fill out the card input form, and click save.  Saved items will show on the right-hand side.

<img src="https://github.com/melaniebeth/todowebapp/blob/master/images/image-20220506183747988.png" width="700" />

*The Code*

The app uses JavaScript, HTML, and bootstrap.  The main files involved with the Feature Flags are the index.html and app.js.

The index.html file handles the user processing as well as the initialization of the LaunchDarkly client.  The name will be generated from the user's input, and a random key will be assigned to the user.   There is no check for duplication.  The code updated for this purpose can be viewed below:

<img src="https://github.com/melaniebeth/todowebapp/blob/master/images/image-20220506170853370.png" width="700"/>

The app.js handles the primary application functions -- as well as the Feature Flag inputs and evaluations.   A listener is setup which will react to a "ready" or a "change" event.   The "ready" event handles unsuccessful connections to LaunchDarkly, ensuring the list is populated.  The following screenshot shows the start of the getTasks() function that holds the new feature.   If the sortFlagValue variable (returned from our Feature Flag!)  is TRUE, the sort will fire.   If FALSE, the sort will not occur, and the tasks will display in the order they were entered.    

<img src="https://github.com/melaniebeth/todowebapp/blob/master/images/image-20220506164958412.png" width="700" />

*The Feature Flag and Implementation*

<u>Setting up the Implementation</u>

I will assume the user has a LaunchDarkly account ready, and has chosen a Project and Environment.   I will also assume a Javascript SDK is associated with the Project/Environment, and that an http server is running with access on port 8000.  This will start from the code and Feature Flag setup.  

1. Download the source code of the ToDo Web App from [](https://github.com/melaniebeth/todowebapp).
2. You will need to edit the index.html file (located in the main folder).   Use the code editor of your choice.
3. Within LaunchDarkly's console: Go to your "Account Settings", and locate your "Projects".   Click on the project to which you are associating the code.
4. Next, copy the Client-side ID of the Environment you wish to use.  (JavaScript requires the Client-side ID).
   <img src="https://github.com/melaniebeth/todowebapp/blob/master/images/image-20220506170612455.png" alt="image-20220506170612455" width="600" />
5. Paste it into the assignment area of the ldKey variable within the index.html file, as indicated by the red box below.  Leave the single quotation marks surrounding it.  Save the file.
   <img src="https://github.com/melaniebeth/todowebapp/blob/master/images/image-20220506170955387.png" width="500" />
6. Next, we will return to the LaunchDarkly console and setup the Feature Flag.   Ensure the JavaScript SDK is associated with your Project/Environment:
   <img src="https://github.com/melaniebeth/todowebapp/blob/master/images/image-20220506171450420.png" width="400" />
7. In the appropriate Project/Environment, select "Feature Flags" from the left-hand menu.
8. Click "Create Flag"
   ![image-20220506172645600](https://github.com/melaniebeth/todowebapp/blob/master/images/image-20220506172645600.png)
9. Fill out the Feature Flag details as indicated below:

<img src="https://github.com/melaniebeth/todowebapp/blob/master/images/image-20220506172603340.png" width="800" />

10. Once you click "Save flag" the properties will open up.   Under "Target users who match these rules" -- click "+ Add rules".
    ![image-20220506172940552](https://github.com/melaniebeth/todowebapp/blob/master/images/)

11. Add a new rule based on the user name, as shown below.
    ![image-20220506173213227](https://github.com/melaniebeth/todowebapp/blob/master/images/)

12. Compile and launch the source code!  The index.html is the starting point.

13. Feel free to test with the Feature Flag "OFF" first.   The sort will not occur in any case.

14. When you are ready, simply turn the "On" button On.
    ![image-20220506174132645](https://github.com/melaniebeth/todowebapp/blob/master/images/image-20220506174132645.png)

15. When on, the application should sort the list IF and ONLY IF the name you enter when you launch the project does NOT start with M, R, or T.   Play around with the names if desired.

16.  If there are any questions, feel free to reach out to melanie.keeney@midco.net.

17. ENJOY!!!

    



