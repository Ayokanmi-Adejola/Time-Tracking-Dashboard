# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./preview.jpg)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

This project helped me improve my CSS Grid skills and JavaScript DOM manipulation. I learned how to create responsive layouts that adapt to different screen sizes and how to dynamically update content based on user interaction.

I'm particularly proud of the implementation of the time period switching functionality:

```js
function setupEventListeners() {
  const timeButtons = document.querySelectorAll('.time-btn');
  
  timeButtons.forEach(button => {
    button.addEventListener('click', () => {
      timeButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentTimePeriod = button.dataset.time;
      renderActivityCards(activityData, currentTimePeriod);
    });
  });
}
```

### Continued development

In future projects, I'd like to focus on:
- Improving accessibility features
- Adding animations for smoother transitions
- Implementing more complex data visualization techniques

## Author

- Frontend Mentor - [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
