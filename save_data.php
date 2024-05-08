<?php
// Retrieve user data sent via AJAX
$userDataList = $_POST['userDataList'];

// Here you can perform any necessary processing with the received data,
// such as saving it to a database or performing some other action.

// For demonstration purposes, we'll simply output the received data.
echo json_encode($userDataList);
?>