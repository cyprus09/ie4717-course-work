<?php
// initiate db conn
$hostname = "localhost";
$username = "root";
$password = ""; // add your password if set in the config file
$database = "javajam_coffee";

$conn = new mysqli($hostname, $username, $password, $database);

// fallback to check the conn
if ($conn->connect_error) {
  echo "Failed to connect: " . $conn->connect_error;
  exit();
}

// function to execute sql query to fetch the coffee prices
function getCoffeeValue($conn, $coffeeType)
{
  $sql = "select price FROM prices where coffee_type = '$coffeeType'";
  $result = $conn->query($sql);

  $price = "NULL";

  if ($result) {
    if (mysqli_num_rows($result) > 0) {
      $row = $result->fetch_assoc();
      $price = htmlspecialchars($row['price']);
    }
  }

  return $price;
}

function updateOrders($conn, $coffeeType, $quantity)
{
  $sql = "update sales set quantity = quantity + '$quantity' where coffee_type = '$coffeeType'";
  $result = $conn->query($sql);

  if (!$result) {
    return false;
  }

  return true;
}

function updateRevenue($conn, $coffeeType, $revenue)
{
  $sql = "update sales set revenue = revenue + '$revenue' where coffee_type = '$coffeeType'";
  $result = $conn->query($sql);

  if (!$result) {
    return false;
  }

  return true;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // for just java
  if (isset($_POST['java']) && !empty($_POST['quantity_java'])) {
    $coffee = $_POST['java'];
    $quantity = $_POST['quantity_java'];
    updateOrders($conn, $coffee, $quantity);
    $price = getCoffeeValue($conn, $coffee);
    $revenue = $price * $quantity;
    updateRevenue($conn, $coffee, $revenue);
  }

  // for cafe au lait
  if (isset($_POST['cafe']) && !empty($_POST['quantity_cafe'])) {
    $coffee = $_POST['cafe'];
    $quantity = $_POST['quantity_cafe'];
    updateOrders($conn, $coffee, $quantity);
    $price = getCoffeeValue($conn, $coffee);
    $revenue = $price * $quantity;
    updateRevenue($conn, $coffee, $revenue);
  }

  // for iced cappuccino
  if (isset($_POST['cappuccino']) && !empty($_POST['quantity_cappuccino'])) {
    $coffee = $_POST['cappuccino'];
    $quantity = $_POST['quantity_cappuccino'];
    updateOrders($conn, $coffee, $quantity);
    $price = getCoffeeValue($conn, $coffee);
    $revenue = $price * $quantity;
    updateRevenue($conn, $coffee, $revenue);
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CaseStudy04</title>
  <link rel="stylesheet" href="styles.css" />
  <script type="text/javascript" src="menu.js"></script>
</head>

<body>
  <div class="wrapper">
    <header>
      <img alt="JavaJam Coffee House" id="banner" src="assets/banner.png" />
    </header>
    <div class="content-wrapper">
      <div class="navbar navbar-menu">
        <nav>
          <ul>
            <li><a href="index.html" id="current">Home</a></li>
            <li><a href="menu.php" class="active-home">Menu</a></li>
            <li><a href="music.html">Music</a></li>
            <li><a href="jobs.html">Jobs</a></li>
            <br>
            <li><a href="update_pricing.php">Update Pricing</a></li>
            <li><a href="sales_report.php">Sales Report</a></li>
          </ul>
        </nav>
      </div>
      <div class="content" id="content-index">
        <h1>Coffee at JavaJam</h1>
        <table class="menu">
          <tr class="menu-item">
            <td class="drink">Just Java</td>
            <td class="description">
              Regular house blend, decaffeinated coffee, or flavor of the day.
              <br><b>Endless Cup $<?php echo getCoffeeValue($conn, 'justJava'); ?></b>
            </td>
            <td class="quantity">
              <label for="justJavaQty">Quantity:</label>
              <input type="number" id="justJavaQty" value="0" min="0" onchange="updateSubtotal()">
            </td>
            <td class="subtotal" id="justJavaSubtotal">$0.00</td>
          </tr>
          <tr class="menu-item">
            <td class="drink">Cafe au Lait</td>
            <td class="description">
              House blended coffee infused into a smooth steamed milk.
              <br><b>Single $<?php echo getCoffeeValue($conn, 'cafeAuLaitSingle'); ?>
                Double $<?php echo getCoffeeValue($conn, 'cafeAuLaitDouble');
                        $price ?></b>
            </td>
            <td class="quantity">
              <label for="cafeAuLaitQty">Quantity:</label>
              <input type="number" id="cafeAuLaitQty" value="0" min="0" onchange="updateSubtotal()">
              <select id="cafeAuLaitSize" onchange="updateSubtotal()">
                <option value="2.00">Single</option>
                <option value="3.00">Double</option>
              </select>
            </td>
            <td class="subtotal" id="cafeAuLaitSubtotal">$0.00</td>
          </tr>
          <tr class="menu-item">
            <td class="drink">Iced Cappuccino</td>
            <td class="description">
              Sweetened espresso blended with icy-cold milk and served in a chilled glass.
              <br><b>Single $<?php echo getCoffeeValue($conn, 'icedCappucinoSingle');
                              $price ?> Double $<?php echo getCoffeeValue($conn, 'icedCappucinoSingle'); ?> </b>
            </td>
            <td class="quantity">
              <label for="icedCappuccinoQty">Quantity:</label>
              <input type="number" id="icedCappuccinoQty" value="0" min="0" onchange="updateSubtotal()">
              <select id="icedCappuccinoSize" onchange="updateSubtotal()">
                <option value="4.75">Single</option>
                <option value="5.75">Double</option>
              </select>
            </td>
            <td class="subtotal" id="icedCappuccinoSubtotal">$0.00</td>
          </tr>
        </table>
        <div class="total-container">
          <h3>Total: <span id="totalAmount">$0.00</span></h3>
        </div>
      </div>

    </div>
    <footer>
      <p>
      <div class="copyright">
        <i>Copyright &copy; 2014 JavaJam Coffee House</i>
      </div>
      <div class="contact">
        <a href="mailto:mayank@pallai.com">mayank@pallai.com </a>
      </div>
      </p>
    </footer>
  </div>
</body>

</html>