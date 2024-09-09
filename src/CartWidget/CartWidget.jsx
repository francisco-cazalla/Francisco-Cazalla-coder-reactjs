import { GiShoppingCart } from "react-icons/gi";

const CartWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "20px",
        alignItems: "center",
        width: "30%",
        justifyContent: "space-between",
      }}
    >
      <GiShoppingCart size={30} />
      10
    </div>
  );
};

export default CartWidget;
