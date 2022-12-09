import { useContext} from "react";
import { QuotesContext } from "../context/QuotesContext";
import List from "../components/List";

function QuotesList() {
  const { quotes } = useContext(QuotesContext); // here destructuring instead of writing const products = useContext(ProductsContext.products)

  return (
    <div>
      <List data={quotes} />
    </div>
  );
}

export default QuotesList;
