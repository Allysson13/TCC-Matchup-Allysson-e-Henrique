$('#toggle-password').on('click', function() {
    var passwordInput = $('#txt-password');
    if (passwordInput.attr('type') === 'password') {
        passwordInput.attr('type', 'text');
        $(this).find('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    } else {
        passwordInput.attr('type', 'password');
        $(this).find('i').removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
    }
});
