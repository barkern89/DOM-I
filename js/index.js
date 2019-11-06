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



// *****NAVIGATION*****
const nav = document.querySelectorAll("nav a");
let navItemCount = 1;
nav.forEach(function(currentElement){
  currentElement.textContent = siteContent.nav[`nav-item-${navItemCount}`];
  navItemCount ++;
  currentElement.style.color = 'gray';
  currentElement.style.fontWeight = 'bold';
});


// *****Call To Action*****

    // H1:
    const ctaText = document.querySelector('.cta-text h1');
    ctaText.textContent = siteContent ["cta"]["h1"];

    //Button:
    const ctaBtn = document.querySelector('.cta-text button');
    ctaBtn.textContent = siteContent ["cta"]["button"];
    
    //Img:
    const ctaImg = document.getElementById("cta-img");
    ctaImg.src = siteContent ["cta"]["img-src"];


// *****Main Content*****

  // Section content H4's:

  const contentH4 = document.querySelectorAll('.main-content h4');
  contentH4[0].textContent = siteContent["main-content"]["features-h4"];
  contentH4[1].textContent = siteContent["main-content"]["about-h4"];
  contentH4[2].textContent = siteContent["main-content"]["services-h4"];
  contentH4[3].textContent = siteContent["main-content"]["product-h4"];
  contentH4[4].textContent = siteContent["main-content"]["vision-h4"];

  // Middle Image:

  const midImg = document.querySelector('#middle-img');
  midImg.src = siteContent["main-content"]["middle-img-src"];

  // Section Paragraph Content:

  const mainContent = document.querySelectorAll('.main-content p');
  mainContent[0].textContent = siteContent["main-content"]["features-content"];
  mainContent[1].textContent = siteContent["main-content"]["about-content"];
  mainContent[2].textContent = siteContent["main-content"]["services-content"];
  mainContent[3].textContent = siteContent["main-content"]["product-content"];
  mainContent[4].textContent = siteContent["main-content"]["vision-content"];



