<?php
if (!empty($_GET['id'])) {
    // require connection
    require_once 'includes/db.php';

    $student_id = $_GET['id'];
    $del_query = "DELETE FROM `stuinfo` WHERE id = '" . $student_id . "'";
    $result = mysqli_query($conn, $del_query);
    if ($result) {
        header('Location:/CAT3/index.php?msg=del');
    }
}
