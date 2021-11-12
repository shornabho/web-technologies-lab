<?php

if (isset($_POST['submit']) && $_POST['submit'] != '') {
    // require the db connection
    require_once 'includes/db.php';

    $description = (!empty($_POST['description'])) ? $_POST['description'] : '';
    $dueDate = (!empty($_POST['dueDate'])) ? $_POST['dueDate'] : '';
    $dueDate = date('Y-m-d', strtotime($dueDate));
    $id = (!empty($_POST['todo_id'])) ? $_POST['todo_id'] : '';

    if (!empty($id)) {
        // update the record
        $stu_query = "UPDATE `lab10` SET `description`='" . $description . "', `dueDate`='" . $dueDate . "' WHERE id ='" . $id . "'";
    } else {
        // insert the new record
        $stu_query = "INSERT INTO `lab10` (`description`, `dueDate`) VALUES ('" . $description . "', '" . $dueDate . "' )";
    }

    $result = mysqli_query($conn, $stu_query);

    if ($result) {
        header('location:/Lab10/index.php' . $msg);
    }

}

if (isset($_GET['id']) && $_GET['id'] != '') {
    // require the db connection
    require_once 'includes/db.php';

    $todo_id = $_GET['id'];
    $stu_query = "SELECT * FROM `lab10` WHERE id='" . $todo_id . "'";
    $stu_res = mysqli_query($conn, $stu_query);
    $results = mysqli_fetch_row($stu_res);
    $description = $results[1];
    $dueDate = $results[2];

} else {
    $description = "";
    $dueDate = "";
    $todo_id = "";
}

?>
<!DOCTYPE html>
<html lang="en">
<?php include 'partial/head.php';?>
<body>
   <?php include 'partial/nav.php';?>

    <div class="container pt-5">
        <h1 class="text-center mt-5">Add a Todo!</h1>
        <hr>
        <div class="formdiv">
        <div class="info"></div>
        <form method="POST" action="">
            <div class="form-group row">
                <label for="description" class="col-sm-3 col-form-label">Description</label>
                <div class="col-sm-7">
                <textarea type="text" name="description" class="form-control" id="description" placeholder="Description" required><?php echo $description; ?></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label for="dueDate" class="col-sm-3 col-form-label">Due Date</label>
                <div class="col-sm-7">
                    <input type="date" name="dueDate" id="dueDate" class="form-control" value="<?php echo $dueDate; ?>" required/>
                </div>
            </div>
            <div class="">
                <input type="hidden" name="todo_id" value="<?php echo $todo_id?>">
                <input type="submit" class="btn btn-success form-control" name="submit" value="Submit"/>
            </div>
        </form>
        </div>
    </div>
</body>
</html>