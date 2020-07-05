<?php
error_reporting(0);
header("Access-Control-Allow-Origin:*");

require "dbutil/dbConnUtil.php";
$filmId = $_REQUEST["filmId"];

$sql = "select
                f.sortId , f.filmId , f.filmName , f.filmYear , f.filmTypes ,
                f.filmDesc , f.filmImg , f.castNames , f.castList , f.typeId ,
                avg(fc.userSource) source , count(fc.filmId) count
            from
                film f
            left join
                film_comment fc
            on
                f.filmId = fc.filmId
            where f.filmId = $filmId
           ";

$result = mysqli_query($conn, $sql);

$resultArr = array();

if ($result && $result->num_rows >= 0) {

    //设置查询消息
    $resultArr["msg"] = "查询成功";
    //设置查询状态  true 表示查询成功
    $resultArr["resultState"] = true;

    $typeArr = null;

    $typeArr = mysqli_fetch_array($result, MYSQLI_ASSOC);

    // 将查询结果放置在关联数组中
    $resultArr["result"] = $typeArr;
} else {

    $resultArr["msg"] = mysqli_error($conn);
    //设置查询状态  false  表示查询失败
    $resultArr["resultState"] = false;

    $resultArr["result"] = null;

}

echo json_encode($resultArr);
