<?php
  // require our connection file
  require 'connect.php';

  // establish our SQL statement for retrieval
  $fetch = $conn->prepare("SELECT * FROM person");
  $fetch->execute();
  // get all results found
  $result = $fetch->fetchALL(PDO::FETCH_OBJ);
  // sends the result in JSON to angular script
  echo json_encode($result);

 ?>
