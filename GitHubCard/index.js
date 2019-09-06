/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
//   const cardsSection = document.querySelector('.cards');
// axios.get("https://api.github.com/users/adamcpenman")
//   .then(userData => {
//    let followersArray = []
//       axios.get('https://api.github.com/users/adamcpenman')
//   .then (followers => {
//     followersArray = followers.data.map(follower => follower.login)

//     followersArray.forEach(followersLogin => {
//       axios.get(`https://api.github.com/users/${}`)
//        .then(followerData =>  {
//         cardsSection.appendChild(createCard(followerData.data))
//        })
//        .catch(error => console.error(error))
//     })
//     })
//     .catch(error => console.error(error))
//   console.log(createCard(userData.data))
//   cardsSection.appendChild(createCard(userData.data));
//   })
//   .catch(error => {
//     console.log('error');
//   })

// function CreateCard (user) {
//   const card = document.createElement('div');
//   card.classList.add('card');

//   const img = document.createElement('img');
//   img.src = user['avatar_url'];

//   const cardInfo = document.createElement('div');
//   cardInfo.classList.add('card-info');

//   const h3 = document.createElement('h3');
//   h3.classList.add('name');
//   h3.textContent = user.name || user.login;

//   const pTags = [];
//   for(let i = 0; i < 6; i++){
//     pTags.push(document.createElement('p'))
//   }
//   pTags[0].classList.add('username')
//   pTags[0].textContent = user.login;

//   pTags[1].textContent = `Location: ${user.location}` || 'Not Available';

//   pTags[2].textContent = `Profile: `;
//   const a = document.createElement('a');
//   const aURL = user['html_url'];
//   // a.href = aURL;
//   a.textContent = aURL
//   pTags[2].appendChild(a);

//   pTags[3].textContent = `Followers: ${user.followers} `
//   pTags[4].textContent = `Following: ${user.following}`
//   pTags[5].textContent = `Bio: ${user.bio || NA}`

//  cardInfo.appendChild(h3);
//  pTags.forEach(p => cardInfo.appendChild.(p));

//  card.appendChild(img);
//  card.appendChild(cardInfo);



// return card;

// }







// Creating Variables
const card = document.querySelector('.cards');


// Creating Function 

function cardCreator (
  imageUrl,
  titleText,
  usernameInfo,
  userLocation,
  profileHref,
  followCount,
  followingCount,
  userBio
) {

  //creating elements in function
  const cardDiv = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const headerThree = document.createElement('h3');
  const usernameP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const addressA = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  //creating classes
  cardDiv.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  headerThree.classList.add('name');
  usernameP.classList.add('username');

  //appending elements
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(headerThree);
  cardInfoDiv.appendChild(usernameP);
  cardInfoDiv.appendChild(locationP);
  cardInfoDiv.appendChild(profileP);
  cardInfoDiv.appendChild(addressA);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);

  //Grabbing content
  cardImg.src = imageUrl;
  headerThree.textContent = titleText;
  usernameP.textContent = usernameInfo;
  locationP.textContent = `Location: ${userLocation}`;
  profileP.textContent = "Profile: ";
  addressA.textContent = profileHref;
  followersP.textContent = `Followers: ${followCount}`;
  followingP.textContent = `Following: ${followingCount}`;
  bioP.textContent = `Bio: ${userBio}`;  

  

  return cardDiv;
}

// console.log(cardCreator());

// const adam = cardCreator ( 
//   "https://avatars2.githubusercontent.com/u/50333588?v=4",
//   "name",
//   "login",
//   "location",
//   "html_url",
//   "followers",
//   "following",
//   "bio"
// );


// card.appendChild(adam);


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// axios.get('https://api.github.com/users/adamcpenman').then(response => {
//   console.log(response);
// });

// axios
//   .get("https://api.github.com/users/adamcpenman")
//   .then(response => {
//     console.log(response.data);

//     const card = cardCreator(
//       response.data.avatar_url,
//       response.data.name,
//       response.data.login,
//       response.data.location,
//       response.data.html_url,
//       response.data.followers,
//       response.data.following,
//       response.data.bio
//     );
//     const container = document.querySelector(".cards");
//     container.appendChild(card);
//   })
//   .catch(error => {
//     console.log("Unsuccessful")
//   });

const followersArray = [
  'adamcpenman',
  'LCRT215',
  'dannyotown',
  'LoralieFlint',
  'wallacecs007',
  'nickdurbin',
  'OksanaK24',
  'rupol'
];

const followersLink = followersArray.map(item => {
  const link = "http://api.github.com/users/"
  return link + item;
});

console.log(followersLink);

followersLink.forEach(item => {
axios
  .get(item)
  .then(response => {
    console.log(response.data);

    const card = cardCreator(
      response.data.avatar_url,
      response.data.name,
      response.data.login,
      response.data.location,
      response.data.html_url,
      response.data.followers,
      response.data.following,
      response.data.bio
    );
    const container = document.querySelector(".cards");
    container.appendChild(card);
  })
  .catch(error => {
    console.log("Unsuccessful")
    })
  });

  // axios
  // .get(http://api.github.com/users/adamcpenmn)
  // .then(response => {
  //   console.log(response.data);

  //   const card = cardCreator(
  //     response.data.avatar_url,
  //     response.data.name,
  //     response.data.login,
  //     response.data.location,
  //     response.data.html_url,
  //     response.data.followers,
  //     response.data.following,
  //     response.data.bio
  //   );
  //   const container = document.querySelector(".cards");
  //   container.appendChild(card);
  // })
  // .catch(error => {
  //   console.log("Unsuccessful")
  //   })