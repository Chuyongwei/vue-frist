<?php
error_reporting(0);
header("Access-Control-Allow-Origin:*");

require "dbutil/dbConnUtil.php";
$size = $_REQUEST["size"];
$no = $_REQUEST["no"];
$typeId = $_REQUEST["typeId"];

$seach = $_REQUEST["seach"];

if ($no == "") {
    $no = 1;
}
if ($size == "") {
    $size = 6;
}
$no = ($no - 1) * $size;
$sql = "select
                f.sortId , f.filmId , f.filmName , f.filmImg , avg(fc.userSource) source
            from
                film f
            left join
                film_comment fc
            on
                f.filmId = fc.filmId
            where 1=1
           ";

if ($typeId != "") {
    $sql .= " and typeId = $typeId ";
}

if ($seach != "") {
    $sql .= " and filmName like '%$seach%' ";
}

$sql .= " group by f.filmId order by f.sortId limit $no,$size ";

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
