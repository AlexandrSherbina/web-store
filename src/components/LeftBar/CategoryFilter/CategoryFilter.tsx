import { useEffect, useRef, useState } from "react";
import useProductsContext from "../../../hooks/Products/Products";
import useFilterProductsContext from "../../../hooks/FilterProducts/FilterProducts";
import CheckBox from "../../UI/CheckBox/CheckBox";

const CategoryFilter = () => {
  const { products } = useProductsContext();
  const [uniqueCategory, setUniqueCategory] = useState<string[]>([]);
  const [checkBoxChoose, setCheckBoxChoose] = useState<string[]>([]);
  const [checkedAllCategory, setCheckedAllCategory] = useState<boolean>(false);
  const refCheckBoxAllCategory = useRef<HTMLInputElement>(null);
  console.log("checkBoxChoose", checkBoxChoose);
  const {} = useFilterProductsContext("category", products, checkBoxChoose);

  const handleChangeCategory = (event: { target: any }) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked && !checkBoxChoose.includes(value)) {
      setCheckBoxChoose((prev) => [...prev, value]);
    }
    if (!checked && checkBoxChoose.includes(value)) {
      setCheckBoxChoose(
        checkBoxChoose.filter((category) => category !== value)
      );
    }
  };

  const handleChangeAllCategory = (event: { target: any }) => {
    const checked = event.target.checked;
    const inputAllCheckBox = window.document.querySelectorAll(".checked-class");
    if (checked) {
      inputAllCheckBox.forEach((input) => {
        (input as HTMLInputElement).checked = true;
      });
      setCheckBoxChoose(uniqueCategory);
    } else {
      inputAllCheckBox.forEach((input: Element) => {
        (input as HTMLInputElement).checked = false;
      });
      setCheckBoxChoose([]);
    }
  };

  useEffect(() => {
    const uniqueCategorySet: Set<string> = new Set();
    [...products].forEach((product) => uniqueCategorySet.add(product.category));
    setUniqueCategory([...uniqueCategorySet]);
  }, []);

  return (
    <div className="ms-1">
      <legend>Category</legend>
      <CheckBox
        ref={refCheckBoxAllCategory}
        onChange={handleChangeAllCategory}
        labelText="All categories"
      />
      {uniqueCategory.map((category, i) => {
        return (
          <div
            key={`${category}-filter-category-${i}`}
            className="form-check mb-1"
          >
            <input
              className="form-check-input checked-class"
              type="checkbox"
              value={category}
              id={"flexCheckDefault" + i}
              onChange={handleChangeCategory}
            />
            <label
              className="form-check-label"
              htmlFor={"flexCheckDefault" + i}
            >
              {category}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
