import categoryData from "../../Data/Category.json";
function Category() {
  return (
    <section className="wrap">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {categoryData.map((category) => (
          <div key={category.id} className="rounded-md relative">
          <h2 className="font-extrabold rounded-md text-white absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            {category.title}
          </h2>
          <img src={category.image} className="rounded-md" alt={category.title} />
        </div>
        
        ))}
      </div>
    </section>
  );
}

export default Category;
