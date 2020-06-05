class GitHub {
  constructor() {
    this.client_id = '477c986d5b2dbd5249af';
    this.client_secret = 'ce27bc52b26be994d8aafae654f763682697bd8b';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();

    return {
      profile, // if key name and value var name are the same
    };
  }
}
