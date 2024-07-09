import './index.css'

const Category = (props) => {
  const { selectedCategory, categories, setCategoryFunction } = props

  return (
    <ul className="category-container">
      {categories.map((category) => {
        return (
          <li key={category} onClick={() => setCategoryFunction(category)}>
            {category === selectedCategory ? (
              <button className="category-button selected-button" type="button">
                {category}
              </button>
            ) : (
              <button className="category-button" type="button">
                {category}
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Category
