class GitHub {
  constructor() {
    // Access token
    this.config = {
      headers: {
        Authorization: '5353b9e95c46b19ad3ce96d88cb0f4d182540068',
      },
    };
    // Number of returned repos
    this.repos_count = 6000;
    // Repos sort
    this.repos_sort = 'created: asc';
  }

  // Makes http request to get a user
  async getUser(user) {
    // Gets profile
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );
    const profile = await profileResponse.json();

    // Gets repos
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );
    const repos = await reposResponse.json();

    return {
      profile, // if key name and value var name are the same
      repos,
    };
  }
}
