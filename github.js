class GitHub {
    constructor() {
        this.clientID = config.SECRET_ID;
        this.clientSecret = config.SECRET_KEY;
        this.reposCount = 5;
        this.reposSort = 'created: asc';
    }

    async getUser(user) {
        const 
            profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`), 
            reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`), 
            profile = await profileResponse.json(),
            repos = await reposResponse.json();

        return {profile, repos};
    }
}