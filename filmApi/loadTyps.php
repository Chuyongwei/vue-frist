<?php
error_reporting(0);
header("Access-Control-Allow-Origin:*");
require "dbutil/dbConnUtil.php";

$sql = "select typeId , typeName from film_type";

$result = mysqli_query($conn, $sql);

$resultArr = array();

if ($result && $result->num_rows >= 0) {

    //设置查询消息
    $resultArr["msg"] = "查询成功";
    //设置查询状态  true 表示查询成功
    $resultArr["resultState"] = true;

    $typeArr = array();

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        array_push($typeArr, $row);
    }

    // 将查询结果放置在关联数组中
    $resultArr["result"] = $typeArr;
} else {

    $resultArr["msg"] = mysqli_error($conn);
    //设置查询状态  false  表示查询失败
    $resultArr["resultState"] = false;

    $resultArr["result"] = array();

}

echo json_encode($resultArr);
