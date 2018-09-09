class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
        this.alertContainer = document.querySelector('#alert-container');
    }

    showProfile(user) {
        this.removeAlert();
        
        let dateOfMembership = new Date(user.created_at);

        this.profile.innerHTML = `
            <div class="card card-body mb-5">
                <div class="row">
                    <div class="col-md-3 img-container">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-secondary">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-secondary">Public repos ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public gists ${user.public_gists}</span>
                        <span class="badge badge-secondary">Followers ${user.followers}</span>
                        <span class="badge badge-secondary mb-2">Following ${user.following}</span>
                        <div>
                            <ul class="list-group">
                                <li class="list-group-item">Name ${user.name}</li>
                                <li class="list-group-item">Website/blog <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                                <li class="list-group-item">Location ${user.location}</li>
                                <li class="list-group-item">Member since ${dateOfMembership.toLocaleString()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="mb-3">Latest repos</h3>
            <div id="repos" class="mb-5"></div>
        `;
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-secondary">Stars ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers ${repo.watchers_count}</span>
                            <span class="badge badge-secondary">Forks ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        document.querySelector('#repos').innerHTML = output;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(msg, className) {
        this.alertContainer.className = `${className}`;
        this.alertContainer.innerHTML = `${msg}`;
        this.clearProfile();
    }

    removeAlert() {
        this.alertContainer.className = ``;
        this.alertContainer.innerHTML = '';
    }
}