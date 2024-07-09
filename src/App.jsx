import { useState, useEffect } from 'react'

import Header from './components/Header'
import Category from './components/Category'
import FoodItems from './components/FoodItems'
import './App.css'

const App = () => {
  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [foodItems, setFoodItems] = useState([])
  const [restaurantName, setRestaurantName] = useState('')

  const fetchFoodItems = async () => {
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const options = {
      method: 'GET',
    }
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        console.log('there was an error while requesting data')
      }
      const data = await response.json()
      const restaurantInfo = data[0]
      setRestaurantName(restaurantInfo.restaurant_name)
      setCategory(
        restaurantInfo.table_menu_list.map(
          (menu_list) => menu_list.menu_category
        )
      )

      setFoodItems(
        restaurantInfo.table_menu_list.filter((menu_list) => {
          const filterCategory =
            selectedCategory === '' ? category[0] : selectedCategory
          if (menu_list.menu_category === filterCategory) {
            return menu_list.category_dishes
          }
        })
      )
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onClickCategory = (selected) => {
    setSelectedCategory(selected)
  }

  useEffect(() => {
    fetchFoodItems()
    setSelectedCategory(category[0])
  }, [])

  return (
    <div>
      <Header restaurantName={restaurantName} />
      <Category
        categories={category}
        setCategoryFunction={onClickCategory}
        selectedCategory={selectedCategory}
      />
      <FoodItems foodItems={foodItems} isLoading={isLoading} />
    </div>
  )
}

export default App
