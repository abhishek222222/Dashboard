import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShipping((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate()

  return (
    <div className="shipping">
      <button className="back-btn" onClick={() =>("/cart") }>
        <BiArrowBack />
      </button>
      <form>
        <h1>Shipping Address</h1>
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={shipping.address}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={shipping.city}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={shipping.state}
          onChange={changeHandler}
        />
        <select
          name="country"
          required
          value={shipping.country}
          onChange={changeHandler}
        >
          <option value="">Choose your country</option>
          <option value="India">India</option>
        </select>
        <input
          required
          type="number"
          placeholder="Pin Code"
          name="pincode"
          value={shipping.pincode}
          onChange={changeHandler}
        />
        <button type = "submit"> PAy Now </button>
      </form>
    </div>
  );
};

export default Shipping;
