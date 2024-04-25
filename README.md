# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](./images/Screenshot%20Desktop.png)
![](./images/ScreenshotMobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- DOM 
- Javascript

### What I learned

The Desktop layout was tricky creating the staggard star rattings. I believed I could use flexbox and then use a combination of center, flex-end and flex-start. I also wanted to practice using the DOM, so I decided to create a function to pass the number of stars and then append the target element with the number of stars needed.  

Code snippets:

```css
  .starReview:nth-child(2) {
        align-self: center;
  }

  .starReview:nth-child(3) {
        align-self: flex-end;
  }
```
```js
function createStarImageArray(numberOfStars, targetContainer) {
    //Save the target element to a variable
    const starReviewTarget = document.querySelector(targetContainer);

    // Loop based on the desired number of star images
    for (let i = 0; i < numberOfStars; i++) {
        // Create a new image element
        const image = document.createElement('img');

        // set image source to the incon-star file location 
        image.setAttribute('src', "images/icon-star.svg");

        //Append the image to the target HTML Element
        starReviewTarget.append(image);
    }
}
```

### Continued development

So as with most of my challenges, I am always unsure of the sizing of components. I think the card font-size and the profile images are a little off. I also didn't get the staggard star rating exactly as the design. I also had to use margin-right to push the contant over a little, so I know that their has to be a better way to get this spacing. 

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) - This helped me when using the Document Object Model to create this project. 
- [Udemy](https://www.udemy.com/course/the-web-developer-bootcamp) - This Udemy course has helped to learn how to use the DOM. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@TechEdDan2](https://www.frontendmentor.io/profile/TechEdDan2)
- Twitter - [@TechEdDan](https://twitter.com/TechEdDan)

