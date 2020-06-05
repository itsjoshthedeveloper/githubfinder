// Init GitHub object
const github = new GitHub();

// Init UI object
const ui = new UI();

// UI vars
const UIinput = document.querySelector('#searchUser');

// Search input event listener
UIinput.addEventListener('input', getInput);

// Get input
function getInput(e) {
  if (e.target.value !== '') {
    const input = e.target.value;
    github.getUser(input).then((user) => {
      if (user.profile.message === 'Not Found') {
        // Show alert
        console.log('NOT FOUND');
      } else {
        // Show profile
        ui.showProfile(user.profile);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
}
