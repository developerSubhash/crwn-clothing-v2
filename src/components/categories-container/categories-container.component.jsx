import CategoryItem from "../directory-item/directory-item.component";

// import "./categories-container.styles.scss";

import { DirectoryContainer } from "./categories-container.styles";

function CategoriesContainer({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
}

export default CategoriesContainer;
