// Init GitHub object
const github = new GitHub();

// UI vars
const UIinput = document.querySelector('#searchUser');
const UIprofile = document.querySelector('#profile');

// Search input event listener
UIinput.addEventListener('input', getInput);

// Get input
function getInput(e) {
  if (e.target.value !== '') {
    const input = e.target.value;
    github.getUser(input).then((user) => {
      if (user.profile.message === 'Not Found') {
        // Show alert
      } else {
        // Show profile
      }
    });
  } else {
    // Clear profile
  }
}
