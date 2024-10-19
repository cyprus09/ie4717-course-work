<?php
// initiate db conn
$hostname = "localhost";
$username = "root";
$password = ""; // add your password if set in the config file
$database = "javajam_coffee";

$conn = new mysqli($hostname, $username, $password, $database);

// fallback to check the conn
if ($conn->connect_error) {
  die("Failed to connect: " . $conn->connect_error);
}
?>