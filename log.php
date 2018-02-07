<?php

//GETTING DATA FROM DATABASE
$conn = mysqli_connect("localhost", "root", "", "test");

//get data from employee table 
$result = mysqli_query($conn, "SELECT * FROM user");

//storing in array()
while($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}

echo json_encode($data);

