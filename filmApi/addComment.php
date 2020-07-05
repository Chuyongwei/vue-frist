<?php
error_reporting(0);
header("Access-Control-Allow-Origin:*");

require "dbutil/dbConnUtil.php";
$username = $_REQUEST["username"];
$userImg = $_REQUEST["userImg"];
$userSource = $_REQUEST["userSource"];
$userMsg = $_REQUEST["userMsg"];
$filmId = $_REQUEST["filmId"];

$sql = "insert into film_comment 
            values 
        (null,'$username','$userImg','$userSource','$userMsg',now(),'$filmId');
       ";

$result = mysqli_query($conn, $sql);

$resultArr = array();

if ($result && $result->num_rows >= 0) {

    //设置查询消息
    $resultArr["msg"] = "添加成功";
    //设置查询状态  true 表示查询成功
    $resultArr["resultState"] = true;
} else {

    $resultArr["msg"] = mysqli_error($conn);
    //设置查询状态  false  表示查询失败
    $resultArr["resultState"] = false;
}

echo json_encode($resultArr);
