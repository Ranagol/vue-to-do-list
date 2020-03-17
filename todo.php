<?php

//we are working with JSON, so we need to modifu the header

header('Content-Type: application/json');

$db = new PDO('mysql:host=127.0.0.1; dbname=vue-to-do-list', 'root', '');

$method = strtolower($_SERVER['REQUEST_METHOD']);

//die($method);//this returns get

if ($method === 'post') {
  if (!isset($_POST['task']) || empty(trim($_POST['task']))) {//we don't want to add empty tasks
    http_response_code(400);
    die('This is my custom error message. Something is wrong');
  }
}