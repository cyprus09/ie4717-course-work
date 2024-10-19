<?php
// initiate db conn
$hostname = "localhost";
$username = "root";
$password = ""; // add your password if set in the config file
$database = "javajam_coffee";

$conn = new mysqli($hostname, $username, $password, $database);

// fallback to check the conn
if ($conn->connect_error) {
  die("Failed to connect: " . $conn->connect_error);
}

function popular($conn)
{
  $sql = "SELECT product_name, category, quantity FROM sales WHERE quantity = (SELECT max(quantity) FROM sales);";
  $result = $conn->query($sql);

  $product = "NULL";
  $category = "NULL";
  $quantity = 0;

  if ($result) {
    if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $product = htmlspecialchars($row['product_name']);
      $product = htmlspecialchars($row['category']);
      $product = htmlspecialchars($row['quantity']);
    }
  }
  if ($quantity == 0) {
    echo "no sales recorded";
  } else {
    echo $product . '(' . $category . ')';
  }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaJam Coffee House</title>
  <link rel="stylesheet" href="./styles.css" />
</head>

<body>
  <div class="wrapper">
    <header>
      <img alt="JavaJam Coffee House" id="banner" src="assets/banner.png" />
    </header>
    <div class="content-wrapper">
      <div class="navbar navbar-sales-report">
        <nav>
          <ul>
            <li><a href="index.html" id="current">Home</a></li>
            <li><a href="menu.php">Menu</a></li>
            <li><a href="music.html">Music</a></li>
            <li><a href="jobs.html">Jobs</a></li>
            <br><br>
            <li><a href="update_pricing.php">Update Pricing</a></li>
            <li><a href="sales_report.php" class="active-home">Sales Report</a></li>
          </ul>
        </nav>
      </div>
      <div class="content" id="content-index">
        <h1>Sales Report</h1>
        <div id="salestable">
          <form method="POST" action="./report_generation.php">
            <table>
              <tr>
                <td class="check-box">
                  <label><input type="checkbox" name="sales_prod" /><span class="custom-checkbox"></span></label>
                </td>
                <td class="report_desc"><b>Total $ and quantity sales by products.</b></td>
              </tr>
              <tr>
                <td class="check-box">
                  <label><input type="checkbox" name="sales_cat"><span class="custom-checkbox"></span></label>
                </td>
                <td class="report_desc"><b>Total $ and quantity sales by categories.</b></td>
              </tr>
            </table>
        </div>
        <h2>Popular option of the best-selling product: <u><?php echo popular($conn); ?></u></h2>
        <input type="submit" value="Generate">
        </form>
      </div>
    </div>
    <footer>
      <p>
      <div class="copyright">
        <i>Copyright &copy; 2014 JavaJam Coffee House</i>
      </div>
      <div class="contact">
        <a href="mailto:mayank@pallai.com">mayank@pallai.com</a>
      </div>
      </p>
    </footer>
  </div>
</body>

</html>