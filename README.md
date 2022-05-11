# Picture-in-picture Project

## Purpose
To create a button that allows for any window open on the computer to be set as picture-in-picture.

This is mainly for my own curiosity. 

The project allowed me to practice the skills of researching useful APIs, reading API documentation, implementing APIs to achieve expected result.

The project also allowed me to practice and gain a practical application in how asyncronous javascript works.

Upon starting the project I had no idea about either the Picture-in-Picture Web API or the Screen Capture API.

## How it works
- Upon page load a popup allows user to select the source, i.e. the video or window that user wants to picture-in-picture.
- After selecting the source the video shows up in the video element.
- At this point the user can press the Engage button which will put the source into Picture-In-Picture mode.


## Resources
- [An Introduction to the Picture-in-Picture Web API | CSS-Tricks - CSS-Tricks](~https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/~)
- [Picture-in-Picture](https://w3c.github.io/picture-in-picture/)
- [Using the Screen Capture API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [box-shadow - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- 

## Learnings
- Box shadow transition. Understanding how the values of box shadow property works and how to use its values and the 'inset' keyword to fill the button with the shadow in order to create a cool transition effect on hovering.
- Exploring how the HTMLMediaElement API works and various properties and methods such as:
	- HTMLMediaElement.srcObject property which allowed me to set the source of the video element according to what was selected with the screen capture api.
	- HTMLMediaElement.onloadedmetadata event which allowed me to utilize the HTMLMediaElement.play() method upon the selected screen capture source being loaded. 
	- I also got more experience with how object property inheritance works as well. I started my exploration with the HTMLVideoElement API, but wasn’t finding exactly what I wanted, but I have learned that this usually means I need to look one layer up (or down depending on perspective) and this led me to the HTMLMediaElement.
    - HTMLVideoElement.requestPictureInPicture method which gave the button the functionality of creating the picture-in-picture box of the selected source.