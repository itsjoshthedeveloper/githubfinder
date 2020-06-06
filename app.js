// Init GitHub object
const github = new GitHub();

// Init UI object
const ui = new UI();

// UI vars
const UIinput = document.querySelector('#searchUser');
const UIop1 = document.querySelector('#option1');
const UIop2 = document.querySelector('#option2');
let UIsort = document.querySelector('.active');

// Global vars
let sort = UIsort.childNodes[2].textContent.trim();
const repos_count = 10;

// Search input event listener
UIinput.addEventListener('input', getInput);

// Sort option event listener
UIop1.addEventListener('click', getInput);
UIop2.addEventListener('click', getInput);

// Get input
function getInput(e) {
  // Check if there's input
  if (UIinput.value !== '') {
    // Get input
    const input = UIinput.value;
    // Check sort
    checkSort();
    // Make http request
    github.getUser(input).then((user) => {
      if (user.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Format user
        user = formatUser(user);
        // Show profile
        ui.showProfile(user.profile);
        // Show repos
        ui.showRepos(user.repos.slice(0, repos_count));
        // Clear alert
        ui.clearAlert();
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
}

// Check sort
function checkSort() {
  UIsort = document.querySelector('.active');
  if (sort !== UIsort.childNodes[2].textContent.trim()) {
    sort = UIsort.childNodes[2].textContent.trim();
  }
}

// Format user
function formatUser(user) {
  // Sort repos by popularity
  if (sort === 'Popular') {
    user.repos.sort((a, b) => (a.stargazers_count - b.stargazers_count) * -1);
  }
  // Remove 'null' strings
  Object.keys(user.profile).forEach((key) => {
    if (user.profile[key] === null) {
      user.profile[key] = '';
    }
  });
  return user;
}
