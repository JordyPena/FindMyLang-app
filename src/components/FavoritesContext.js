  import { getDefaultNormalizer } from "@testing-library/react"
import React from "react"

  const FavoritesContext = React.createContext({
    Favorites: [],
    HomeFavs: () => {

    }
  })

  export default FavoritesContext;