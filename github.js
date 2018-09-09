class GitHub {
    constructor() {
        this.clientID = 'f8d2b8f987ad97f01ab0';
        this.clientSecret = '6f62d9e8a1dd63cb55660acbdbb84b9ec81f358e';
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