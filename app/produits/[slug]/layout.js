'use client'
import CategoryList from "@components/CategoryList";

const ProductDetailsLayout = ({ children }) => (
  <div className="container mx-auto flex bg-white">
    
    
      <CategoryList />
    
   
    <div className="w-full md:w-3/4">
      {children}
    </div>
  </div>
);

export default ProductDetailsLayout;

