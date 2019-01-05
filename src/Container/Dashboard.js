/**
 * NPM imports
 */
import React, { Component } from "react";
import "./Dashboard.css";
import Card from "../Components/card";
import Categories from "../Components/Categories/Categories";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.cardClick = this.cardClick.bind(this);
  }

  componentWillMount = () => {
    let self = this;
    fetch("http://temp.dash.zeta.in/food.php")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        self.setState(
          {
            filter: false,
            data: myJson,
            categories: myJson.categories,
            recipes: myJson.recipes,
            favourite: self.getFavourites(myJson.recipes)
          },
          () => {
            console.log(self.state);
          }
        );
      });
  };

  getFavourites = list => {
    return list.filter(item => {
      if (item.isFavourite) return item;
    });
  };

  /**
   *
   */
  cardClick = item => {
    this.props.history.push({
      pathname: "/card",
      loggedInUser: item // this is hardcoded value
    });
  };

  renderRecipie = () => {
    if (this.state) {
      const { recipes, filterRec, recipesF } = this.state; //
      const recipesList = filterRec ? recipesF : recipes;

      const cards = recipesList.map(item => {
        return (
          <Card
            key={item.name}
            name={item.name}
            image={item.image}
            price={item.price}
            btntext="ADD To BAG"
            width="600px"
            onCardClick={() => {
              this.cardClick(item);
            }}
          />
        );
      });
      return cards;
    } else {
      return null;
    }
  };

  renderFavourites = () => {
    if (this.state) {
      const { favourite, favouriteF, filter } = this.state;
      const favList = filter ? favouriteF : favourite;
      const cards = favList.map(item => {
        return (
          <Card
            key={item.name}
            name={item.name}
            image={item.image}
            price={item.price}
            btntext="REORDER"
            width="400px"
            imgH="300px"
            imgW="300px"
          />
        );
      });
      return cards;
    } else {
      return null;
    }
  };

  rederCategories = () => {
    if (this.state) {
      const { categories } = this.state;

      return categories.map(item => {
        return (
          <Categories
            key={item.name}
            name={item.name}
            image={item.image}
            filter={this.filter}
          />
        );
      });
    }
  };

  filterByText = event => {
    debugger;
    const inputText = event.target.value;
    const { recipes, favourite, categories } = this.state;
    const filteredSet = recipes.filter(item => {
      if (item.category.indexOf(inputText) != -1) {
        return item;
      }
    });
    this.setState({
      filterRec: true,
      recipesF: filteredSet
    });
  };

  filter = filterItem => {
    const { recipes, favourite, categories } = this.state;
    const filteredSet = recipes.filter(item => {
      if (item.category == filterItem) {
        return item;
      }
    });

    const FavFilteredSet = favourite.filter(item => {
      if (item.category == filterItem) {
        return item;
      }
    });

    this.setState({
      filterRec: true,
      filterFav: true,
      recipesF: filteredSet,
      favouriteF: FavFilteredSet
    });
  };

  render() {
    return (
      <div className="dashContainer">
        <div className="title"> Best Food App</div>
        {/* Dashboard/Hello */}
        {/* <button onClick={this.change}>Change</button> */}
        <h3>Favourites</h3>
        <div className="favourites">{this.renderFavourites()}</div>
        <h3>Select Categories</h3>
        <input type="text" onChange={this.filterByText} />
        <div className="categories">{this.rederCategories()}</div>

        <hr />

        <div className="list">{this.renderRecipie()}</div>
      </div>
    );
  }
}
