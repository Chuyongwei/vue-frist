<?php
    define("HOST", "127.0.0.1");
    define("USERNAME", "root");
    define("PASSWORD", "");
    define("DATABASE", "films");

    $conn = mysqli_connect(HOST,USERNAME,PASSWORD,DATABASE);
    if (!$conn) {
        die("数据库连接失败: " . mysqli_connect_error());
    }
    //设置数据库返回值 和 php脚本一致
    mysqli_set_charset($conn, 'utf8');
    