$(document).ready(function(){
    // Retrieve user data from localStorage
    var userDataList = JSON.parse(localStorage.getItem('users'));
    
    // Display user data list
    if (userDataList) {
        userDataList.forEach(function(user){
            $('#userDataList').append('<li>Name: ' + user.name + ', Email: ' + user.email + '</li>');
        });
    }

    // AJAX POST method to send data to the server
    $.ajax({
        type: 'POST',
        url: 'save_data.php', // Assuming this is the PHP file to handle the request
        data: { userDataList: userDataList },
        success: function(response){
            console.log('Data sent successfully.');
        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });
});
