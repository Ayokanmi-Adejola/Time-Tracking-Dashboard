# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

![](./preview.jpg)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

| Desktop | Mobile |
| ------- | ------ |
|<img width="1440" height="1024" alt="image" src="https://github.com/user-attachments/assets/8df5c2a2-eac9-4915-b704-cfcd5bce5a92" />|<img width="375" height="1469" alt="image" src="https://github.com/user-attachments/assets/8bf63030-269e-4bdf-b3a0-67725c954513" />|

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
