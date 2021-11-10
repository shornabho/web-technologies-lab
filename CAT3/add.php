<?php

if (isset($_POST['submit']) && $_POST['submit'] != '') {
    // require the db connection
    require_once 'includes/db.php';

    $update_id = (!empty($_POST['update_id'])) ? $_POST['update_id'] : '';
    $id = (!empty($_POST['student_id'])) ? $_POST['student_id'] : '';
    $name = (!empty($_POST['student_name'])) ? $_POST['student_name'] : '';
    $gender = (!empty($_POST['gender'])) ? $_POST['gender'] : '';
    $age = (!empty($_POST['age'])) ? $_POST['age'] : '';
    $course = (!empty($_POST['course'])) ? $_POST['course'] : '';
    $address = (!empty($_POST['address'])) ? $_POST['address'] : '';

    if (!empty($update_id)) {
        // update the record
        $query = "UPDATE `stuinfo` SET `id`='" . $id . "', `name`='" . $name . "', `gender`='" . $gender . "', `age`= '" . $age . "', `course`='" . $course . "', `address`='" . $address  . "' WHERE id ='" . $update_id . "'";
        $msg = "update";
    } else {
        // insert the new record
        $query = "INSERT INTO `stuinfo` (`id`, `name`, `gender`, `age`, `course`, `address`) VALUES ('" . $id . "', '" . $name . "', '" . $gender . "', '" . $age . "', '" . $course . "', '" . $address . "' )";
        $msg = "add";
    }

    $result = mysqli_query($conn, $query);
    echo mysqli_error($conn);
    if ($result) {
        header('Location:/CAT3/index.php?msg=' . $msg);
    }

}

if (isset($_GET['id']) && $_GET['id'] != '') {
    // require the db connection
    require_once 'includes/db.php';

    $update_id = $_GET['id'];
    $query = "SELECT * FROM `stuinfo` WHERE id='" . $update_id . "'";
    $students_result = mysqli_query($conn, $query);
    $results = mysqli_fetch_row($students_result);

    $student_id = $results[0];
    $student_name = $results[1];
    $age = $results[2];
    $gender = $results[3];
    $course = $results[4];
    $address = $results[5];

} else {
    $update_id = "";
    
    $student_id;
    $student_name = "";
    $gender = "";
    $age = "";
    $course = "";
    $address = "";
}

?>
<!DOCTYPE html>
<html lang="en">
<?php include 'partial/head.php';?>
<body>
   <?php include 'partial/nav.php';?>

    <div class="container">

        <div class="formdiv">
        <div class="info"></div>
        <form method="POST" action="">
            <div class="form-group row">
                <label for="student_id" class="col-sm-3 col-form-label">Student ID</label>
                <div class="col-sm-7">
                <input type="text" name="student_id" class="form-control" id="student_id" placeholder="ID" value="<?php echo $student_id; ?>" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="student_name" class="col-sm-3 col-form-label">Name</label>
                <div class="col-sm-7">
                <input type="text" name="student_name" class="form-control" id="student_name" placeholder="Name" value="<?php echo $student_name; ?>" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="age" class="col-sm-3 col-form-label">Age</label>
                <div class="col-sm-7">
                <input type="number" min="0" value="<?php echo $age; ?>" name="age" class="form-control" id="age" placeholder="Age" required>
                </div>
            </div>
            <div class="form-group row">
            <label for="gender" class="col-sm-3 col-form-label">Gender</label>
            <div class="col-sm-7">
                <select class="form-control" name="gender" id="gender" required>
                <option value="">Select Gender</option>
                <option value="Male" <?php if ($gender == 'Male') {echo "selected";}?> >Male</option>
                <option value="Female" <?php if ($gender == 'Female') {echo "selected";}?>>Female</option>
                <option value="Other" <?php if ($gender == 'Other') {echo "selected";}?>>Other</option>
                <option value="Do not wish to disclose" <?php if ($gender == 'Do not wish to disclose') {echo "selected";}?>>Do not wish to disclose</option>
                </select>
                </div>
            </div>
            <div class="form-group row">
            <label for="course" class="col-sm-3 col-form-label">Course</label>
            <div class="col-sm-7">
                <select class="form-control" name="course" id="course" required>
                <option value="">Select Course</option>
                <option value="MBA" <?php if ($course == 'MBA') {echo "selected";}?>>MBA</option>
                <option value="BCom" <?php if ($course == 'BCom') {echo "selected";}?>>BCom</option>
                <option value="MCom" <?php if ($course == 'MCom') {echo "selected";}?>>MCom</option>
                <option value="BCA" <?php if ($course == 'BCA') {echo "selected";}?>>BCA</option>
                <option value="MCA" <?php if ($course == 'MCA') {echo "selected";}?>>MCA</option>
                <option value="MSC" <?php if ($course == 'MSC') {echo "selected";}?>>MSC</option>
                </select>
                </div>
            </div>
            <div class="form-group row">
            <label for="address" class="col-sm-3 col-form-label">Address</label>
            <div class="col-sm-7">
                <textarea class="form-control" placeholder="Address" name="address" rows="" required><?php echo $address; ?></textarea>
            </div>
            </div>
            <div class="mt-5">
                <input type="hidden" name="update_id" value="<?php echo $update_id?>">
                <input type="submit" name="submit" class="btn btn-success" value="Submit" />
            </div>
            </div>
        </form>
    </div>
</div>
</body>
</html>