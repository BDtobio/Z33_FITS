import { useEffect, useState } from "react";
import { getCategories, ICategory } from "../../helpers/getCategories";

interface CategoryMenuProps {
  onSelectCategory: (id: string) => void;
}

const CategoryMenu = ({ onSelectCategory }: CategoryMenuProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {categories.map((cat) => (
        <button key={cat.id} onClick={() => onSelectCategory(cat.id)}>
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;
