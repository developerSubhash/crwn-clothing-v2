import CategoryItem from "../category-items/category-items.component";
import "./categories-container.styles.scss";

function CategoriesContainer({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoriesContainer;
