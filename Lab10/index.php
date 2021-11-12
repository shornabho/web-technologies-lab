<?php
// mysql connection
require_once 'includes/db.php';
$query = "SELECT * FROM `lab10` ORDER BY dueDate ASC";

$results = mysqli_query($conn, $query);
$records = mysqli_num_rows($results);

?>
<!DOCTYPE html>
<html lang="en">
<?php include 'partial/head.php';?>
<body>
   <?php include 'partial/nav.php';?>
    <div class="container pt-5">
        <h1 class="text-center mt-5">To-do List</h1>
        <hr>
        <div class="info"></div>
        <table class="table table-dark">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Description</th>
                <th scope="col">Due Date</th>
                <th scope="col">Action</th>

                </tr>
            </thead>
            <tbody>
                <?php
if (!empty($records)) {
    while ($row = mysqli_fetch_assoc($results)) {
        ?>
                                <tr>
                                    <th scope="row"><?php echo $row['id']; ?></th>
                                    <td><?php echo $row['description']; ?></td>
                                    <td><?php echo $row['dueDate']; ?></td>
                                    <td>
                                        <a href="/Lab10/add.php?id=<?php echo $row['id']; ?>" class="btn btn-primary">EDIT</a>
                                        <a href="/Lab10/delete.php?id=<?php echo $row['id']; ?>" class="btn btn-danger" onClick="javascript:return confirm('Do you really want to delete?');" >DELETE</a>
                                    </td>
                                </tr>

                            <?php
}
}
?>



            </tbody>
        </table>
    </div>
</body>
</html>