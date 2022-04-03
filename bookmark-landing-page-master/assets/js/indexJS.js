function showHideRow(row) {
    $("#" + row).toggle();
}

$(document).ready(function () {
    var email_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Get value on button click and show alert
    $('#saveEmail').click(function () {
        var enteredEmail = $('#emailId').val();
        if (enteredEmail.match(email_format)) {
            alert('Thank you for your response, Our team will contact you soon!!');
            var textBox = document.getElementById('emailId');
            textBox.innerHTML = '';
        } else {
            alert('Sorry!, an invalid email');
        }
    });
});