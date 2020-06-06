class GitHub {
  constructor() {
    this.client_id = '477c986d5b2dbd5249af';
    this.client_secret = 'ce27bc52b26be994d8aafae654f763682697bd8b';
    // Number of returned repos
    this.repos_count = 6000;
    // Repos sort
    this.repos_sort = 'created: asc';
  }

  // Makes http request to get a user
  async getUser(user) {
    // Gets profile
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();

    // Gets repos
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repos = await reposResponse.json();

    return {
      profile, // if key name and value var name are the same
      repos,
    };
  }
}
