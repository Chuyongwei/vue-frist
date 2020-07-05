<?php
// 根据电影ID查询评论
error_reporting(0); // 忽略 非重要错误
header("Access-Control-Allow-Origin:*");

require "dbutil/dbConnUtil.php";
$filmId = $_REQUEST["filmId"];  // 从请求中获取电影ID

$sql = "select * from film_comment where filmId = $filmId order by createTime desc";

$result = mysqli_query($conn, $sql); // 连接数据库并执行sql语句

$resultArr = array();  // 准备用于返回数据的变量

if ($result && $result->num_rows >= 0) {  // 判断语句是否执行成功，且是否存在数据

    //设置查询消息
    $resultArr["msg"] = "查询成功";
    //设置查询状态  true 表示查询成功
    $resultArr["resultState"] = true;

    $comentArr = array();  // [{},{},{}]

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        array_push($comentArr, $row);
    }
    // $comentArr = mysqli_fetch_array($result, MYSQLI_ASSOC);

    // 将查询结果放置在关联数组中
    $resultArr["result"] = $comentArr;
} else {

    $resultArr["msg"] = mysqli_error($conn);
    //设置查询状态  false  表示查询失败
    $resultArr["resultState"] = false;

    $resultArr["result"] = null;

}

echo json_encode($resultArr);
