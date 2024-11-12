import Image from "next/image"
import { Rating, ThinStar } from '@smastrom/react-rating'

const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#FF912C',
    inactiveFillColor: '#fbf1a9'
  }
const Products = () => {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <h3 className="text-primary font-bold">Popular Products</h3>
        <h1 className="text-3xl font-bold">Browse Our Products</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don&lsquo;t look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => {
          return (
            <div key={index} className="card shadow-md border">
              <div className="p-4">
                <figure className=" border rounded-lg p-6 h-[199.6px] bg-[#F3F3F3]">
                  <Image
                    src={`/assets/images/products/${index + 1}.png`}
                    alt="product"
                    width={150}
                    height={120}
                    style={{width: 'auto', height: 'auto'}}
                  />
                </figure>
              </div>
              <div className="card-body items-center text-center">
                {/* <h2 className="card-title">Shoes!</h2> */}
                <Rating style={{ maxWidth: 150 }} value={product.rating} itemStyles={myStyles} readOnly />
                <p className="text-3xl font-bold mt-4">{product.name}</p>
                <p className="font-semibold text-primary">
                  ${product.price}.00
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-lg">More Products</button>
      </div>
    </div>
  );
};

const products = [
  {
    name: "Cools Led Light",
    price: 20,
    rating: 3.5,
  },
  {
    name: "Cools Led Light",
    price: 20,
    rating: 5,
  },
  {
    name: "Car Air Filter",
    price: 20,
    rating: 5,
  },
  {
    name: "Cools Led Light",
    price: 20,
    rating: 5,
  },
  {
    name: "Cools Led Light",
    price: 20,
    rating: 5,
  },
  {
    name: "Car Engine Plug",
    price: 20,
    rating: 5,
  },
];
export default Products;
