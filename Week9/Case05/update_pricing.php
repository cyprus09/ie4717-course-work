<?php
// initiate db conn
$hostname = "localhost";
$username = "root";
$password = "12345"; // add your password if set in the config file
$database = "javajam_coffee";

$conn = new mysqli($hostname, $username, $password, $database);

// fallback to check the conn
if ($conn->connect_error) {
  die("Failed to connect: " . $conn->connect_error);
}

// array to fetch the coffee variant prices
$coffeeVariants = [
  'justJava',
  'cafeAuLaitSingle',
  'cafeAuLaitDouble',
  'icedCappuccinoSingle',
  'icedCappuccinoDouble',
];

// function to execute sql query to fetch all coffee prices
function getAllCoffeeValues($conn)
{
  $sql = "SELECT coffee_type, price FROM prices WHERE coffee_type IN ('" . implode("','", $GLOBALS['coffeeVariants']) . "')";
  $result = $conn->query($sql);

  $prices = [];

  if ($result) {
    while ($row = $result->fetch_assoc()) {
      $prices[$row['coffee_type']] = htmlspecialchars($row['price']);
    }
  }

  return $prices;
}

// function to execute sql query to fetch all coffee prices
function updateCoffeePrice($conn, $coffeeType, $price)
{
  $stmt = $conn->prepare("UPDATE prices SET price = ? WHERE coffee_type = ?");
  $stmt->bind_param("ds", $price, $coffeeType);
  $result = $stmt->execute();
  $stmt->close();

  return $result;
}

$prices = getAllCoffeeValues($conn);

// handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  foreach ($coffeeVariants as $variant) {
    if (isset($_POST[$variant]) && !empty($_POST[$variant . 'Price'])) {
      $price = floatval($_POST[$variant . 'Price']);
      if (updateCoffeePrice($conn, $variant, $price)) {
        $prices[$variant] = $price;
      }
    }
  }
}

$conn->close();

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
  <script type="text/javascript" src="./js/update_pricing.js"></script>

</head>

<body>
  <div class="wrapper">
    <header>
      <img alt="JavaJam Coffee House" id="banner" src="assets/banner.png" />
    </header>
    <div class="content-wrapper">
      <div class="navbar navbar-update-pricing">
        <nav>
          <ul>
            <li><a href="index.html" id="current">Home</a></li>
            <li><a href="menu.php">Menu</a></li>
            <li><a href="music.html">Music</a></li>
            <li><a href="jobs.html">Jobs</a></li>
            <br><br>
            <li><a href="update_pricing.php" class="active-home">Update Pricing</a></li>
            <li><a href="sales_report.php">Sales Report</a></li>
          </ul>
        </nav>
      </div>
      <div class="content" id="content-index">
        <h1>Update Product Prices</h1>
        <form method="POST" action="">
          <table class="menu">
            <tr class="menu-item">
              <td class="check-box"><input id="justJavaCheckbox" type="checkbox" name="justJava" onclick="toggleInput('justJavaCheckbox', 'justJavaPrice')"></td>
              <td class="drink">Just Java</td>
              <td class="description">
                Regular house blend, decaffeinated coffee, or flavor of the day.
                <br><b>Endless Cup $<?php echo $prices['justJava']; ?> <input type="number" id="justJavaPrice" name="justJavaPrice" class="price" step="0.01" style="display:none" value="<?php echo $prices['justJava'] ?>" /></b>
              </td>
            </tr>
            <tr class="menu-item">
              <td class="check-box"><input id="cafeAuLaitCheckbox" type="checkbox" name="cafeAuLait" onclick="toggleInputs('cafeAuLaitCheckbox', 'cafeAuLaitSinglePrice', 'cafeAuLaitDoublePrice')"></td>
              <td class="drink">Cafe au Lait</td>
              <td class="description">
                House blended coffee infused into a smooth steamed milk.
                <br><b>Single $<?php echo $prices['cafeAuLaitSingle']; ?> <input type="number" id="cafeAuLaitSinglePrice" name="cafeAuLaitSinglePrice" class="price" step="0.01" min="0" style="display:none" value="<?php echo $prices['cafeAuLaitSingle']; ?>" />
                  Double $<?php echo $prices['cafeAuLaitDouble']; ?> <input type="number" id="cafeAuLaitDoublePrice" name="cafeAuLaitDoublePrice" class="price" step="0.01" min="0" style="display:none" value="<?php echo $prices['cafeAuLaitDouble']; ?>" /></b>
              </td>
            </tr>
            <tr class="menu-item">
              <td class="check-box"><input id="icedCappuccinoCheckbox" type="checkbox" name="icedCappuccino" onclick="toggleInputs('icedCappuccinoCheckbox', 'icedCappuccinoSinglePrice', 'icedCappuccinoDoublePrice')"></td>
              <td class="drink">Iced Cappuccino</td>
              <td class="description">
                Sweetened espresso blended with icy-cold milk and served in a chilled glass.
                <br><b>Single $<?php echo $prices['icedCappuccinoSingle']; ?> <input type="number" id="icedCappuccinoSinglePrice" name="icedCappuccinoSinglePrice" class="price" step="0.01" min="0" style="display:none" value="<?php echo $prices['icedCappuccinoSingle']; ?>" />
                  Double $<?php echo $prices['icedCappuccinoDouble']; ?> <input type="number" id="icedCappuccinoDoublePrice" name="icedCappuccinoDoublePrice" class="price" step="0.01" min="0" style="display:none" value="<?php echo $prices['icedCappuccinoDouble']; ?>" /></b>
              </td>
            </tr>
          </table>
          <div class="total-container">
            <input type="submit" class="update-prices" value="Update Prices">
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
        <a href="mailto:mayank@pallai.com">mayank@pallai.com </a>
      </div>
      </p>
    </footer>
  </div>
</body>

</html>