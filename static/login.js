
function login() {
        var user = $('#txtUsername').val();
        var pass = $('#txtPassword').val();
        $.ajax({
            url: '/login',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                e.preventDefault();
                console.log(response;
            },
            error: function(error) {
                e.preventDefault();
                console.log(error);
            }
        });

}

