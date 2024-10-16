import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Coffee, Milk, IceCream } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const MenuPage = () => {
  // State for quantities
  const [justJavaQty, setJustJavaQty] = useState(0);
  const [cafeAuLaitQty, setCafeAuLaitQty] = useState(0);
  const [icedCappuccinoQty, setIcedCappuccinoQty] = useState(0);

  // State for sizes (prices)
  const [cafeAuLaitSize, setCafeAuLaitSize] = useState(2.0);
  const [icedCappuccinoSize, setIcedCappuccinoSize] = useState(4.75);

  // Prices
  const justJavaPrice = 2.0;

  // Calculate Subtotals
  const justJavaSubtotal = justJavaQty * justJavaPrice;
  const cafeAuLaitSubtotal = cafeAuLaitQty * cafeAuLaitSize;
  const icedCappuccinoSubtotal = icedCappuccinoQty * icedCappuccinoSize;

  // Total Calculation
  const total = justJavaSubtotal + cafeAuLaitSubtotal + icedCappuccinoSubtotal;

  return (
    <div className="bg-[#F3E8D3] min-h-screen font-sans text-[#4A362A]">
      <Card className="max-w-6xl mx-auto shadow-lg my-auto bg-white border border-[#B08D57]">
        <Link to="/HomePage">
          <CardHeader className="bg-[#8C4B23] text-white mx-auto my-auto rounded-md">
            <CardTitle className="text-4xl font-bold text-center">JavaJam Coffee House</CardTitle>
            <CardDescription className="text-center text-[#F1D1B5]">Follow the Winding Road to JavaJam</CardDescription>
          </CardHeader>
        </Link>

        <Navbar />
        <CardContent className="p-6 bg-gray-50">
          <table className="table-auto w-full text-left border-separate border-spacing-y-4">
            {/* Just Java */}
            <tr className="menu-item">
              <td className="drink flex items-center gap-2 font-semibold text-lg text-gray-800">
                <Coffee className="w-5 h-5 text-gray-600" /> Just Java
              </td>
              <td className="description text-sm text-gray-500">
                Regular house blend, decaffeinated coffee, or flavor of the day.
                <br />
                <b className="text-gray-700">Endless Cup $2.00</b>
              </td>
              <td className="quantity flex items-center gap-2">
                <label htmlFor="justJavaQty" className="text-gray-600">
                  Quantity:
                </label>
                <Input
                  type="number"
                  id="justJavaQty"
                  min="0"
                  value={justJavaQty}
                  onChange={e => setJustJavaQty(parseInt(e.target.value))}
                  className="w-20 ml-2 border border-gray-300 rounded-md"
                />
              </td>
              <td className="subtotal font-bold text-gray-800">$ {justJavaSubtotal.toFixed(2)}</td>
            </tr>

            {/* Cafe au Lait */}
            <tr className="menu-item">
              <td className="drink flex items-center gap-2 font-semibold text-lg text-gray-800">
                <Milk className="w-5 h-5 text-gray-600" /> Cafe au Lait
              </td>
              <td className="description text-sm text-gray-500">
                House blended coffee infused into a smooth steamed milk.
                <br />
                <b className="text-gray-700">Single $2.00 Double $3.00</b>
              </td>
              <td className="quantity flex items-center gap-4">
                <label htmlFor="cafeAuLaitQty" className="text-gray-600">
                  Quantity:
                </label>
                <Input
                  type="number"
                  id="cafeAuLaitQty"
                  min="0"
                  value={cafeAuLaitQty}
                  onChange={e => setCafeAuLaitQty(parseInt(e.target.value))}
                  className="w-20 border border-gray-300 rounded-md"
                />
                <Select onValueChange={value => setCafeAuLaitSize(parseFloat(value))}>
                  <SelectTrigger className="ml-2 w-24 border border-gray-300 rounded-md">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2.00">Single</SelectItem>
                    <SelectItem value="3.00">Double</SelectItem>
                  </SelectContent>
                </Select>
              </td>
              <td className="subtotal font-bold text-gray-800">$ {cafeAuLaitSubtotal.toFixed(2)}</td>
            </tr>

            {/* Iced Cappuccino */}
            <tr className="menu-item">
              <td className="drink flex items-center gap-2 font-semibold text-lg text-gray-800">
                <IceCream className="w-5 h-5 text-gray-600" /> Iced Cappuccino
              </td>
              <td className="description text-sm text-gray-500">
                Sweetened espresso blended with icy-cold milk and served in a chilled glass.
                <br />
                <b className="text-gray-700">Single $4.75 Double $5.75</b>
              </td>
              <td className="quantity flex items-center gap-4">
                <label htmlFor="icedCappuccinoQty" className="text-gray-600">
                  Quantity:
                </label>
                <Input
                  type="number"
                  id="icedCappuccinoQty"
                  min="0"
                  value={icedCappuccinoQty}
                  onChange={e => setIcedCappuccinoQty(parseInt(e.target.value))}
                  className="w-20 border border-gray-300 rounded-md"
                />
                <Select onValueChange={value => setIcedCappuccinoSize(parseFloat(value))}>
                  <SelectTrigger className="ml-2 w-24 border border-gray-300 rounded-md">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4.75">Single</SelectItem>
                    <SelectItem value="5.75">Double</SelectItem>
                  </SelectContent>
                </Select>
              </td>
              <td className="subtotal font-bold text-gray-800">$ {icedCappuccinoSubtotal.toFixed(2)}</td>
            </tr>
          </table>

          <div className="total-container mt-6 text-right">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: <span>$ {total.toFixed(2)}</span>
            </h3>
          </div>
        </CardContent>

        <CardFooter className="bg-[#8C4B23] text-white text-center py-4 rounded-b-md">
          <div className="w-full">
            <p className="mb-2">Copyright © 2024 JavaJam Coffee House</p>
            <Button variant="link" className="text-white hover:text-[#F1D1B5] p-0 h-auto">
              mayank@pallai.com
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MenuPage;
