# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Done after the Social Links Profile challenge. This is a great next step as it now adds some functionality to the same card item, which lead to the problem of how to manage the height change of the card when the body is shown. At first I tried to layout with grid, as I thought that was enough to center the div (yes, such a meme), but my card was growing upwards and downwards. So I changed the layout to flex and gave the card a margin-top to give it space from the top of the viewport, and that did the trick. Now I have a card that only grows downwards when the items are shown.

```html
<h1>Some HTML code I'm proud of</h1>
```

This finally clicked. Now the card grows smoothly up to desktop mode, and it doesn't break when the vw is too small.

```css
.accordion-container {
  min-width: 300px;
  width: min(calc(100dvw - 100px), 540px);
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

### Continued development

I need to come up with best practices quicker, I know I'm just starting the frontend roadmap and making it work is good enough, but I strive for perfection lol. Very happy so far with this challenge. I need to keep working on responsiveness as well as on accesibility, those are "new" to me (knew the concepts, worked with it on Oracle Apex, but this is the first time actually coding the frontend to have those features). I think after this challenge I will try to tackle something with a more challenging layout.

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
