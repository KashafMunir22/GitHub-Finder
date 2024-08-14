$(document).ready(function() {
    $('#searchBtn').on('click', function() {
        const username = $('#username').val();
        
        if (username) {
            $.ajax({
                url: `https://api.github.com/users/${username}`,
                type: 'GET',
                success: function(data) {
                    $('#userInfo').html(`
                        <div class="card">
                            <div class="card-body text-center">
                                <img src="${data.avatar_url}" alt="${data.login}" class="img-fluid rounded-circle" style="width: 150px;">
                                <h3 class="card-title">${data.name}</h3>
                                <p class="card-text">${data.bio ? data.bio : 'No bio available.'}</p>
                                <a href="${data.html_url}" target="_blank" class="btn btn-primary">View Profile</a>
                                <p class="mt-3"><strong>Public Repos:</strong> ${data.public_repos}</p>
                                <p><strong>Followers:</strong> ${data.followers}</p>
                                <p><strong>Following:</strong> ${data.following}</p>
                            </div>
                        </div>
                    `);
                },
                error: function(xhr) {
                    $('#userInfo').html(`
                        <div class="alert alert-danger" role="alert">
                            User not found or an error occurred. Please try again.
                        </div>
                    `);
                }
            });
        } else {
            $('#userInfo').html(`
                <div class="alert alert-warning" role="alert">
                    Please enter a username.
                </div>
            `);
        }
    });
});
