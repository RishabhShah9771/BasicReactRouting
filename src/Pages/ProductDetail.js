import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  // Realtive Prop is used to navigate to the parent route just one level up if it is a nested path or else it will redirect to the parent route.
  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
export default ProductDetail;
