const 
    gitHub = new GitHub(),
    ui = new UI(),
    userInput = document.querySelector('#username-input');

userInput.addEventListener('keyup', (e) => {
    const username = e.target.value;
    if(username) {
        gitHub.getUser(username)
        .then(({profile, repos}) => {
            if (profile.message) {
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                ui.showProfile(profile);
                ui.showRepos(repos);
            }
        })
        .catch(e => ui.showAlert('User not found', 'alert alert-danger'));
    } else {
        ui.clearProfile();
    }
});