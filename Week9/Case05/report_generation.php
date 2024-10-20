<?php
// initiate db conn
$hostname = "localhost";
$username = "root";
$password = ""; // add your password if set in the config file
$database = "javajam_coffee";

$conn = new mysqli($hostname, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
  die("Failed to connect: " . $conn->connect_error);
}

// Function to generate sales report by product
function salesByProduct($conn)
{
  $sql = "SELECT product_name, SUM(quantity) as total_quantity, SUM(revenue) as total_revenue FROM sales GROUP BY product_name";
  $result = $conn->query($sql);

  if ($result === FALSE) {
    echo "Error: " . $conn->error;
    return;
  }

  echo '<table border="1">';
  echo '<tr><th>Product</th><th>Total Quantity</th><th>Total Revenue ($)</th></tr>';

  while ($row = $result->fetch_assoc()) {
    echo '<tr>';
    echo '<td>' . htmlspecialchars($row['product_name']) . '</td>';
    echo '<td>' . htmlspecialchars($row['total_quantity']) . '</td>';
    echo '<td>$' . number_format($row['total_revenue'], 2) . '</td>';
    echo '</tr>';
  }
  echo "</table>";
}


// Function to generate sales report by category
function salesByCategory($conn)
{
  $sql = "SELECT category, SUM(quantity) as total_quantity, SUM(revenue) as total_revenue FROM sales GROUP BY category";
  $result = $conn->query($sql);

  if ($result === FALSE) {
    echo "Error: " . $conn->error;
    return;
  }

  echo '<table border="1">';
  echo "<tr><th>Category</th><th>Total Quantity</th><th>Total Revenue ($)</th></tr>";

  while ($row = $result->fetch_assoc()) {
    echo '<tr>';
    echo '<td>' . htmlspecialchars($row['category']) . '</td>';
    echo '<td>' . htmlspecialchars($row['total_quantity']) . '</td>';
    echo '<td>$' . number_format($row['total_revenue'], 2) . '</td>';
    echo '</tr>';
  }
  echo "</table>";
}

function totalrevenue($conn)
{
  // Prepare and execute SQL query
  $sql = "SELECT SUM(revenue) AS total FROM sales;";
  $result = $conn->query($sql);

  $totalRevenue = "NULL";

  if ($result) {
    if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $totalRevenue = htmlspecialchars($row['total']);
    }
  }

  return $totalRevenue;
}

// Set security headers
header("X-XSS-Protection: 1; mode=block");
header("X-Frame-Options: SAMEORIGIN");
header("X-Content-Type-Options: nosniff");
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
      <div class="navbar navbar-generate-report">
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
        <div id="report-table">
          <div id="salestable">
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
              if (isset($_POST['sales_prod'])) {
                salesByProduct($conn);
              }
            ?>
          </div>
          <br>
          <div id="salestable">
          <?php
              if (isset($_POST['sales_cat'])) {
                salesByCategory($conn);
              }
            }
          ?>
          </div>
          <div id="total-value" class="total-sales">
            <h2 style="text-align:center;">Total Sales: $&nbsp;<?php echo totalrevenue($conn); ?></h2>
          </div>
        </div>
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