import CategoryFilter from "./CategoryFilter/CategoryFilter";
import "./LeftBar.scss";
const LeftBar = () => {
  return (
    <>
      <nav className="leftBar border-end border-bottom pt-3">
        <form action="">
          <fieldset>
            <CategoryFilter />
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </fieldset>
        </form>
      </nav>
    </>
  );
};

export default LeftBar;
