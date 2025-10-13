import AppDevelopment from "./AppDevelopment";
import ProductDesign from "./ProductDesign";
import TechnicalLeadership from "./TechnicalLeadership";

const index = () => {
  return (
    <div id="about" className="py-18">
      <AppDevelopment />
      <ProductDesign />
      <TechnicalLeadership />
    </div>
  );
};

export default index;
