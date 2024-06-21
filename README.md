# Solve4Sub
Originally built for Wiley Worp to force him to solve a rubik's cube every time he gains subscribers. Now this code is open to anyone to use.
![Rubik's cube-like logo for solve4sub](/logo.png)
# Requirements
  you'll want an account and project on the [Google Developer Website](console.cloud.google.com).
  It's important that you make a project and find the **Youtube Data API v3** in **APIs & Services** on that page.
  With this you get the **key** & **username** shown in the first couple lines of _app.js_.
```
const Key = 'GOOGLE_API_KEY'; // replace with the API key you got from the website & DO NOT SHARE WITH ANYONE
const username = 'USERNAME'; // replace with the string when you go to your youtube channel
```
## Notes
> [!NOTE]
> An in depth tutorial for it can be found [here](https://youtu.be/Cemk32wKN_k?si=zFVBtKhU5d7XmA-j), I used this tutorial to start this project so it should be usefull.

> [!WARNING]
> This is for people getting into programming. DON'T FORGET TO MAKE A PROJECT FOR USING THE GOOGLE API!!! A mistake I've made a lot is just blindly copying code from these repositories and wondering why it's not working, you need to use the API that is very easily accesible!

> [!CAUTION]
> If you share your API Key you put your project at risk of not working anymore. Google will allow you 10,000 requests to the API per day and you can quickly reach that limit if you make your website public.
