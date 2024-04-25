// Set the Star ratting
let stars = 4;

//Call the createStarImageArray function and pass the # of Stars and ID
createStarImageArray(stars, '#r1');
createStarImageArray(stars, '#r2');
createStarImageArray(stars, '#r3');


// Create image Array for appending the div element with star images
//  Pass in the number of stars and the target element
function createStarImageArray(numberOfStars, targetContainer) {
    // Create an array to hold the images ... might not use
    //const imageArray = [];


    const starReviewTarget = document.querySelector(targetContainer);

    // Loop through the desired number of images
    for (let i = 0; i < numberOfStars; i++) {
        // Create a new image element
        const image = document.createElement('img');

        // set image source
        image.setAttribute('src', "images/icon-star.svg");

        //Append
        starReviewTarget.append(image);

        //Push the image element to the array
        //imageArray.push(image);
    }
    //return imageArray;
}


///////////////////////
//  TESTING OF CODE  //
///////////////////////

//Individually create the image element x 5
// const starRatingImg = document.createElement('img');
// const starRatingImg2 = document.createElement('img');
// const starRatingImg3 = document.createElement('img');
// const starRatingImg4 = document.createElement('img');
// const starRatingImg5 = document.createElement('img');

//Give each star element the correct source and class attributes
// starRatingImg.setAttribute('src', "images/icon-star.svg");
// starRatingImg.classList.add('star');

// starRatingImg2.setAttribute('src', "images/icon-star.svg");
// starRatingImg2.classList.add('star');

// starRatingImg3.setAttribute('src', "images/icon-star.svg");
// starRatingImg3.classList.add('star');

// starRatingImg4.setAttribute('src', "images/icon-star.svg");
// starRatingImg4.classList.add('star');

//Create an "array" of the document elements
// const starReview = document.querySelectorAll('.starReview>div');

//Prepend each of the Stars
// starReview[0].prepend(starRatingImg, starRatingImg2, starRatingImg3, starRatingImg4);
// starReview[1].prepend(starRatingImg, starRatingImg2, starRatingImg3, starRatingImg4);
// starReview[2].prepend(starRatingImg);