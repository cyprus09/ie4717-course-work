<?php
// Database connection
$hostname = "localhost";
$username = "root";
$password = "";
$database = "javajam_coffee";

$conn = new mysqli($hostname, $username, $password, $database);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Function to get coffee price
function getCoffeePrice($conn, $coffee)
{
  $stmt = $conn->prepare("SELECT price FROM prices WHERE coffee_type = ?");
  $stmt->bind_param("s", $coffee);
  $stmt->execute();
  $result = $stmt->get_result();

  $price = "NULL";
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $price = htmlspecialchars($row['price']);
  }
  return $price;
}

// Function to update order quantity
function updateOrders($conn, $coffee, $quantity)
{
  $stmt = $conn->prepare("UPDATE sales SET quantity = quantity + ? WHERE coffee_type = ?");
  $stmt->bind_param("is", $quantity, $coffee);
  return $stmt->execute();
}

// Function to update revenue
function updateRevenue($conn, $coffee, $revenue)
{
  $stmt = $conn->prepare("UPDATE sales SET revenue = revenue + ? WHERE coffee_type = ?");
  $stmt->bind_param("ds", $revenue, $coffee);
  return $stmt->execute();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (!empty($_POST['justJavaQty'])) {
    $coffee = 'justJava';
    $quantity = $_POST['justJavaQty'];
    updateorders($conn, $coffee, $quantity);
    $price = getCoffeePrice($conn, $coffee);
    $revenue = $price * $quantity;
    updaterevenue($conn, $coffee, $revenue);
  }

  // Update Café au Lait
  if (!empty($_POST['cafeAuLaitQty'])) {
    $category = $_POST['cafeAuLaitSize'];
    $coffee = ($category == getCoffeePrice($conn, 'cafeAuLaitSingle') ? 'cafeAuLaitSingle' : 'cafeAuLaitDouble');
    $quantity = $_POST['cafeAuLaitQty'];
    updateorders($conn, $coffee, $quantity);
    $price = getCoffeePrice($conn, $coffee);
    $revenue = $price * $quantity;
    updaterevenue($conn, $coffee, $revenue);
  }

  // Update Iced Cappuccino 
  if (!empty($_POST['icedCappuccinoQty'])) {
    $category = $_POST['icedCappuccinoSize'];
    $coffee = ($category == getCoffeePrice($conn, 'icedCappuccinoSingle') ? 'icedCappuccinoSingle' : 'icedCappuccinoDouble');
    $quantity = $_POST['icedCappuccinoQty'];
    updateorders($conn, $coffee, $quantity);
    $price = getCoffeePrice($conn, $coffee);
    $revenue = $price * $quantity;
    updaterevenue($conn, $coffee, $revenue);
  }

  echo "Order placed successfully!";
}

// Set security headers
header("X-XSS-Protection: 1; mode=block");
header("X-Frame-Options: SAMEORIGIN");
header("X-Content-Type-Options: nosniff");

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JavaJam Coffee House</title>
  <link rel="stylesheet" href="./styles.css" />
  <script type="text/javascript" src="./js/menu.js"></script>
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
            <br><br>
            <li><a href="update_pricing.php">Update Pricing</a></li>
            <li><a href="sales_report.php">Sales Report</a></li>
          </ul>
        </nav>
      </div>
      <div class="content" id="content-index">
        <h1>Coffee at JavaJam</h1>
        <form method="POST" action="">
          <table class="menu">
            <!-- Just Java -->
            <tr class="menu-item">
              <td class="drink">Just Java</td>
              <td class="description">
                Regular house blend, decaffeinated coffee, or flavor of the day.
                <br><b>Endless Cup $<?php echo getCoffeePrice($conn, 'justJava'); ?></b>
              </td>
              <td class="quantity">
                <label for="justJavaQty">Quantity:</label>
                <input type="number" id="justJavaQty" name="justJavaQty" value="0" min="0" onchange="updateSubtotal()">
              </td>
              <td class="subtotal" id="justJavaSubtotal">$0.00</td>
            </tr>
            <!-- Cafe au Lait -->
            <tr class="menu-item">
              <td class="drink">Cafe au Lait</td>
              <td class="description">
                House blended coffee infused into a smooth steamed milk.
                <br><b>Single $<?php echo getCoffeePrice($conn, 'cafeAuLaitSingle'); ?>
                  Double $<?php echo getCoffeePrice($conn, 'cafeAuLaitDouble'); ?></b>
              </td>
              <td class="quantity">
                <label for="cafeAuLaitQty">Quantity:</label>
                <input type="number" id="cafeAuLaitQty" name="cafeAuLaitQty" value="0" min="0" onchange="updateSubtotal()">
                <select id="cafeAuLaitSize" name="cafeAuLaitSize" onchange="updateSubtotal()">
                  <option value="<?php echo getCoffeePrice($conn, 'cafeAuLaitSingle'); ?>">Single</option>
                  <option value="<?php echo getCoffeePrice($conn, 'cafeAuLaitDouble'); ?>">Double</option>
                </select>
              </td>
              <td class="subtotal" id="cafeAuLaitSubtotal">$0.00</td>
            </tr>
            <!-- Iced Cappuccino -->
            <tr class="menu-item">
              <td class="drink">Iced Cappuccino</td>
              <td class="description">
                Sweetened espresso blended with icy-cold milk and served in a chilled glass.
                <br><b>Single $<?php echo getCoffeePrice($conn, 'icedCappuccinoSingle'); ?>
                  Double $<?php echo getCoffeePrice($conn, 'icedCappuccinoDouble'); ?></b>
              </td>
              <td class="quantity">
                <label for="icedCappuccinoQty">Quantity:</label>
                <input type="number" id="icedCappuccinoQty" name="icedCappuccinoQty" value="0" min="0" onchange="updateSubtotal()">
                <select id="icedCappuccinoSize" name="icedCappuccinoSize" onchange="updateSubtotal()">
                  <option value="<?php echo getCoffeePrice($conn, 'icedCappuccinoSingle'); ?>">Single</option>
                  <option value="<?php echo getCoffeePrice($conn, 'icedCappuccinoDouble'); ?>">Double</option>
                </select>
              </td>
              <td class="subtotal" id="icedCappuccinoSubtotal">$0.00</td>
            </tr>
          </table>
          <div class="total-container">
            <h3>Total: <span id="totalAmount">$0.00</span></h3>
            <input type="submit" value="Order Now!">
          </div>
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