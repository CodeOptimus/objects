//week 3 assignment
/* Using the constructor method to create an InstagramPost() constructor function that takes the properties below as arguments.
Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes,
*/

function InstagramPost(handle, content, imageLink, views, likes) {
    this.handleOfAuthor = handle;
    this.content = content;
    this.imageLink = imageLink;
    this.numOfViews = views;
    this.numOfLikes = likes;
  }

// create two Instagram post objects from the constructor function above

// the first Instagram post object
let post1 = new InstagramPost("@suncity", "Looking for best places to park my case!", "https://google.com/case.jpg", 2000, 30);

// the second Instagram post object
let post2 = new InstagramPost("@suncity", "Still running the bases!", "https://google.com/bases.jpg", 600, 50);


// solution to Musa Dawodu's scenario

// the createPerson factory function
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location
    };
    
    
/*the Nigerian poll scenario, Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’
*/

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 };
 
 for (let party in presidentialCandidates) {
   console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
 }
     
    
  }

  
  // object representing Musa using createPerson factory function
  let musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
  
  
  // the createJambScores factory function
  function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    };
  }
  

  // object representing Musa's JAMB scores using createJambScores factory function
  let musaJambScores = createJambScores(70, 85, 82, 94);
  
  // adding the musaJambScores object as a property to Musa object
  musa.jambScores = musaJambScores;
  


  // the different ways to clone an object
  /* 1. Object.create()

  below is an example
  */
  let objectOne = { a: 1, b: 2 };
  let objectTwo = Object.create(objectOne);
  console.log(objectTwo); 

 /* 2. the spread operator

  below is an example
*/ 
  let objectOne = { a: 1, b: 2 };
  let objectTwo = { ...objectOne };
  console.log(objectTwo); 
  
/* 3. Object.assign()

  below is an example
*/ 
let objectOne = { a: 1, b: 2 };
let objectTwo = Object.assign({}, objectOne);
console.log(objectTwo); 


/* 4. JSON.parse() and JSON.stringify()

  below is an example
*/ 
let objectOne = { a: 1, b: 2 };
let objectTwo = JSON.parse(JSON.stringify(objectOne));
console.log(objectTwo); 
