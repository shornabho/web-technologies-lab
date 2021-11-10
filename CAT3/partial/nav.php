<style>
.navbar-brand > img {
  height: 8vh;
}
</style>

<div class="bg-light">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="./">
          <img src="https://journals.christuniversity.in/public/site/pageHeaderTitleImage_en_US.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="./">List<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="add.php">Add New</a>
            </li>
          </ul>
        </div>

        <form class="d-flex" method="GET" action="index.php">
            <input class="form-control me-2" type="search" name="searchById" id="searchById" value="<?php echo $_GET['searchById']; ?>" placeholder="Search" aria-label="Search">
            <button class="btn btn-sm btn-outline-secondary" type="submit">Search</button>
          </form>
      </nav>
    </div>
</div>