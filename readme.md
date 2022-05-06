**The ToDo Web App and LaunchDarkly**

------

*The App*

The app itself is simple.  It simply accepts a task (and description) of an item on a "to do" list, and stores it for you to complete.   Chrome is the recommended browser of choice.  While the app is designed for single user - I added a user prompt at runtime for the user to input their name.  This allows some fun experimentation with the feature flags!  The files in the source code that have been updated for LaunchDarkly are: app.js, and index.html.    The app currently stores the tasks in order of entry --- newest on the bottom.   I will be adding a feature that alphabetizes the task names.   Tasks usually aren't completed in alpha-order, but it's a fun, easy adjustment - and we'll be rolling it out in a way that targets certain individuals only.  And of course, we can always hit the kill-switch if needed!   To add a new item to the To-Do list, simply fill out the notecard form, and click save.  Saved items will show on the right hand side.

![image-20220506183747988](C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506183747988.png)

*The Code*

This is a very simple app using JavaScript, HTML, and bootstrap.  

The main files involved in the Feature Flags are the index.html and app.js.

The index.html file handles the user processing as well as the initialization of the LaunchDarkly Client.  The code updated for this purpose can be viewed below:

<img src="C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506170853370.png" alt="image-20220506170853370" style="zoom:33%;" />

The app.js handles the primary application functions -- as well as the feature flag evaluations.   We set a listener which will react to a "ready" and a "change" listener event.   The "ready" event should handle unsuccessful connections to LaunchDarkly as well.  The following screenshot shows the start of the getTasks() function that holds our new feature.   IF the sortFlagValue (returned from our feature flag!)  is TRUE, the sort will fire.   If FALSE, the sort will not occur, and the tasks will display in the order they were entered.    

<img src="C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506164958412.png" alt="image-20220506164958412" style="zoom:33%;" />

*The Feature Flag and Implementation*

<u>Setting up the Implementation</u>

I will assume the user has a LaunchDarkly account ready, and has chosen a Project and Environment.   I will also assume a Javascript SDK is associated with the Project/Environment.  This will start from the Feature flag setup and code setup.  

1. Download the source code of the ToDo Web App from [](https://github.com/melaniebeth/todowebapp).
2. You will need to edit the index.html file (located in the main folder).   Use the code editor of your choice.
3. Within LaunchDarkly's console: Go to your "Account Settings", and locate your Projects.   Click on the project you are associating the code with.
4. Next, copy the Client-side ID of the Environment you wish to use.  (JavaScript requires the Client-side ID).
   <img src="C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506170612455.png" alt="image-20220506170612455" style="zoom: 50%;" />
5. Paste it into the assignment area of the ldKey variable within the index.html file, as indicated by the red box below.  Leave the single quotation marks surrounding it.  Save the file.
   <img src="C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506170955387.png" alt="image-20220506170955387" style="zoom:67%;" />
6. Next, we will return to the LaunchDarkly console and setup the Feature Flag.   First, ensure the JavaScript SDK is associated with your Project/Environment:
   <img src="C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506171450420.png" alt="image-20220506171450420" style="zoom: 67%;" />
7. In the appropriate Project/Environment, select "Feature flags" from the left-hand menu.
8. Click "Create Flag"
   ![image-20220506172645600](C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506172645600.png)
9. Fill out the Feature Flag details as indicated below:

![image-20220506172603340](C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506172603340.png)

10. Once you click "Save flag" the properties should open up.   Under "Target users who match these rules" -- click "+ Add rules".
    ![image-20220506172940552](C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506172940552.png)

11. Add a new rule based on the user name, as shown below.
    ![image-20220506173213227](C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506173213227.png)

12. Compile and launch the source code!  The index.html is the starting point.

13. Feel free to test without the Feature Flag "OFF" first.   

14. When you are ready, simply turn the "On" button On.
    ![image-20220506174132645](C:\Users\mbmsd\AppData\Roaming\Typora\typora-user-images\image-20220506174132645.png)

15. When on, the application should sort the list IF and ONLY IF the name you enter when you launch the project does NOT start with M, R, or T.   Play around with the names if needed.   If the Feature Flag is OFF, the list will not be sorted.

16.  If there are any questions, feel free to reach out to melanie.keeney@midco.net.

17. ENJOY!!!

    



