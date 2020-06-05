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
  // Check if there's input
  if (e.target.value !== '') {
    // Get input
    const input = e.target.value;
    // Make http request
    github.getUser(input).then((user) => {
      if (user.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(user.profile);
        // Clear alert
        ui.clearAlert();
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
}
