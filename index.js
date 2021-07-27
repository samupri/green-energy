// Coding Guidelines
// *********************************************************************************
// Assignment: Content Manipulation
//  **********************************By Priti Liz Samuel***************************

// Load your images on page-load
function preloader() {
    const imagesPaths = [
       "./img/SolarEnergy.jpg",
       "./img/HydroEnergy.jpg",
       "./img/BiogasEnergy.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};  
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    let myNodelist = document.getElementsByTagName('button');

    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    const data = {
        partial1: {
            headingContent: 'Solar Energy',
            imageURL: '../img/SolarEnergy.jpg',
            imageAlt: 'Solar...',
            bodyText: "Solar energy is the earliest source of energy known to mankind, and is also the origin of other forms of energy used by man. Other renewable sources of energy, such as, wind energy, hydro power, biomass and ocean energy are the indirect forms of solar energy."
            
        },
            
            
        partial2: {
            headingContent: 'Hydro Energy',
            imageURL: '../img/HydroEnergy.jpg',
            imageAlt: 'Hydro...',
            bodyText: "HydroGreen Energy manufactures systems to produce viable “green” energy and make possible “zero-energy input” production systems.  HydroGreen Energy will improve the condition of our environment and provide quality local employment."
            
        },
        partial3: {
            headingContent: 'Biogas Energy',
            imageURL: '../img/BiogasEnergy.jpg',
            imageAlt: 'BiogasEnergy...',
            bodyText: "Biogas has gained popularity in recent years as a “greener” fuel. Biogas today is a more sustainable solution than traditional natural gas, we should consider it as an important transition fuel on the road to completely decarbonizing our energy supply."
        }
    }
    
    const markupElements =
    {
        solar: `<h1>${data.partial1.headingContent}</h1>
                <img src="${data.partial1.imageURL}" alt="${data.partial1.imageAlt}" />
                <p>${data.partial1.bodyText}</p>`,
    
    
        hydro: `<h1>${data.partial2.headingContent}</h1>
                <img src="${data.partial2.imageURL}" alt="${data.partial2.imageAlt}" />
                <p>${data.partial2.bodyText}</p>`,
    
    
        biogas: `<h1>${data.partial3.headingContent}</h1>
                <img src="${data.partial3.imageURL}" alt="${data.partial3.imageAlt}" />
                <p>${data.partial3.bodyText}</p>`
    
    }
    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    let $dc = document.getElementById('dynamic-content');

   

    /* The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
     let markup1 = `<h1>${data.partial1.headingContent}</h1>
     <img src="${data.partial1.imageURL}" alt="${data.partial1.imageAlt}" />
     <p>${data.partial1.bodyText}</p>`;

        $dc.innerHTML = markup1;
    /* 
    Start your handleSelection function here. */ 
    function handleClick(ev)
    {
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */
        let currentItem = ev.target;
    
        for(let i=0; i< myNodelist.length; i++)
        {
        
            if(myNodelist[i].hasAttribute('id')) 
            {
                
                myNodelist[i].removeAttribute('id');
            }


        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
            currentItem.setAttribute('id', 'btn-active');
        
        } 
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
        if(ev.target == myNodelist[0])
        {
            $dc.innerHTML = markupElements.solar;
        }
        else if(ev.target == myNodelist[1])
        {
            $dc.innerHTML = markupElements.hydro;
        }
        else if(ev.target == myNodelist[2])
        {
            $dc.innerHTML = markupElements.biogas;
        }
    /* 
    Close your handleSelection function here. */  
        }
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  
    
    for(let i=0; i < myNodelist.length; i++)
    {
        myNodelist[i].addEventListener('click',handleClick);
    }