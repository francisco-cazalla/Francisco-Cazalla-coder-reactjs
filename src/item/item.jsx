const ItemListContainer = ({ greeting }) => {
    return (
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          height: "40vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {greeting}
      </div>
    );
  };
  
  export default ItemListContainer;




