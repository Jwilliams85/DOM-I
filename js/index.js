const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ## Task 1: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content

const headerline = document.getElementById("cta-img");
headerline.setAttribute('src', siteContent["cta"]["img-src"])

// ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images





const middleImge = document.getElementById("middle-img");
middleImge.setAttribute('src', siteContent["main-content"]["middle-img-src"])

middleImge.addEventListener('dblclick',(event) => {
  event.target.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png"
})

let navbar = document.querySelectorAll('nav a');
navbar[0].innerText = siteContent['nav']['nav-item-1']
navbar[1].innerText = siteContent['nav']['nav-item-2']
navbar[2].innerText = siteContent['nav']['nav-item-3']
navbar[3].innerText = siteContent['nav']['nav-item-4']
navbar[4].innerText = siteContent['nav']['nav-item-5']
navbar[5].innerText = siteContent['nav']['nav-item-6']

let ctaText = document.getElementsByClassName('cta-text')[0];
ctaText.getElementsByTagName('h1')[0].innerHTML = siteContent['cta']['h1'];
ctaText.getElementsByTagName('button')[0].innerHTML = siteContent['cta']['button'];

let paragraphHeadings = document.querySelectorAll("h4");
paragraphHeadings[0].innerText = "Features";
paragraphHeadings[1].innerText = "Product";
paragraphHeadings[2].innerText = "Vision";
paragraphHeadings[3].innerText = "Features";
paragraphHeadings[4].innerText = "About";
paragraphHeadings[5].innerText = "Contact";

let textBlocks = document.querySelectorAll("p");
textBlocks[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[2].innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[3].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[4].innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[5].innerText = "123 Way 456 Street Somewhere, USA";
textBlocks[6].innerText = "1 (888) 888-8888";
textBlocks[7].innerText = "sales@greatidea.io";
textBlocks[8].innerText = "Copyright Great Idea! 2018";


// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

navbar.forEach(link => {
  link.style.color = "green";
  
 })


 

let nav = document.querySelector('nav');
let anchorTag = document.createElement('a');
let anchorbTag = document.createElement('a');
anchorTag.innerText = ('Creators');
anchorbTag.innerText = ('Inventions');
nav.prepend(anchorTag);
nav.append(anchorbTag);

anchorbTag.style.color= "papayawhip"
anchorTag.style.color= "papayawhip"
// ## Stretch Goals
// * [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.  
// * [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

// ## Stretch Project: Digital Timer
// This project is heavier on logic but employs some DOM manipulation to achieve it's goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get. 