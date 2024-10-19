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
function generateSalesByProduct($conn)
{
  $sql = "SELECT product, SUM(quantity) AS total_quantity, SUM(total_price) AS total_sales FROM sales GROUP BY product";
  $result = $conn->query($sql);

  if ($result && $result->num_rows > 0) {
    echo "<h3>Total Sales by Product</h3>";
    echo "<table>";
    echo "<tr><th>Product</th><th>Total Quantity</th><th>Total Sales ($)</th></tr>";
    while ($row = $result->fetch_assoc()) {
      echo "<tr><td>" . htmlspecialchars($row['product']) . "</td><td>" . htmlspecialchars($row['total_quantity']) . "</td><td>" . htmlspecialchars($row['total_sales']) . "</td></tr>";
    }
    echo "</table>";
  } else {
    echo "No sales data found for products.";
  }
}

// Function to generate sales report by category
function generateSalesByCategory($conn)
{
  $sql = "SELECT category, SUM(quantity) AS total_quantity, SUM(total_price) AS total_sales FROM sales GROUP BY category";
  $result = $conn->query($sql);

  if ($result && $result->num_rows > 0) {
    echo "<h3>Total Sales by Category</h3>";
    echo "<table>";
    echo "<tr><th>Category</th><th>Total Quantity</th><th>Total Sales ($)</th></tr>";
    while ($row = $result->fetch_assoc()) {
      echo "<tr><td>" . htmlspecialchars($row['category']) . "</td><td>" . htmlspecialchars($row['total_quantity']) . "</td><td>" . htmlspecialchars($row['total_sales']) . "</td></tr>";
    }
    echo "</table>";
  } else {
    echo "No sales data found for categories.";
  }
}

// Process the form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if (isset($_POST['sales_prod'])) {
    generateSalesByProduct($conn);
  }

  if (isset($_POST['sales_cat'])) {
    generateSalesByCategory($conn);
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaJam Sales Report</title>
  <link rel="stylesheet" href="./styles.css" />
</head>

<body>
  <div class="wrapper">
    <header>
      <h1>JavaJam Coffee House Sales Report</h1>
    </header>
    <div class="content-wrapper">
      <div class="content">
        <?php
        // Include the logic to generate the report
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
          if (!isset($_POST['sales_prod']) && !isset($_POST['sales_cat'])) {
            echo "<p>No report options selected. Please go back and choose a report type.</p>";
          }
        }
        ?>
      </div>
    </div>
    <footer>
      <p>&copy; 2014 JavaJam Coffee House</p>
    </footer>
  </div>
</body>

</html>