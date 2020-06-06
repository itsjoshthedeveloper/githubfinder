class UI {
  constructor() {
    // UI vars
    this.UIprofile = document.querySelector('#profile');
    this.UIcontainer = document.querySelector('.searchContainer');
    this.UIsearch = document.querySelector('.search');

    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  // Show profile
  showProfile(profile) {
    // Website formatting
    if (profile.blog.includes('http://')) {
      profile.blog = profile.blog.replace('http://', '');
    } else if (profile.blog.includes('https://')) {
      profile.blog = profile.blog.replace('https://', '');
    }
    if (profile.blog.slice(-1) === '/') {
      profile.blog = profile.blog.slice(0, -1);
    }
    // New Date
    profile.created_at = new Date(profile.created_at);
    profile.created_at =
      String(this.months[profile.created_at.getMonth()]) +
      ' ' +
      String(profile.created_at.getFullYear());
    // Create profile element
    this.UIprofile.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img src="${profile.avatar_url}" alt="avatar" class="img-fluid mb-2">
          <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <h4 class="mb-3">
            ${profile.name}
            <small class="text-muted">${profile.login}</small>
          </h4>
          <span class="badge badge-primary">Public Repos: ${profile.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${profile.public_gists}</span>
          <span class="badge badge-success">Followers: ${profile.followers}</span>
          <span class="badge badge-info">Following: ${profile.following}</span>
          <br>
          <p class="text-muted mt-3">${profile.bio}</p>
          <ul class="list-group mt-2">
            <li class="list-group-item">Company: ${profile.company}</li>
            <li class="list-group-item">Website: <a href="http://${profile.blog}" target="_blank">${profile.blog}</a></li>
            <li class="list-group-item">Location: ${profile.location}</li>
            <li class="list-group-item">Member Since: ${profile.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // Show repos
  showRepos(repos) {
    // Create repo elements
    let output = '';
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">
                <h6>${repo.name}</h6>
              </a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    this.UIrepos = document.querySelector('#repos');
    this.UIrepos.innerHTML = output;
  }

  // Show alert message
  showAlert(msg, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create and insert div
    const div = document.createElement('div');
    div.className = className;
    div.textContent = msg;
    this.UIcontainer.insertBefore(div, this.UIsearch);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.UIprofile.innerHTML = '';
  }
}
