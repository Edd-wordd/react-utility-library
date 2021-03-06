import React from "react";
import "./style/master.scss"; //applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
   constructor() {
      super();
      console.log(uiData);

      this.state = {
         isFavoritesChecked: false,
         allFuncs: orderBy(uiData, "order", "desc"),
         displayFuncs: orderBy(uiData, "order", "desc"),
         orderBy: '["order", "desc"]',
      };
   }

   filterFuncs(e) {
      const allFuncs = [...this.state.allFuncs];
      const isFavoritesChecked = document.getElementById("viewMode-favorites")
         .checked;
      const searchInput = document
         .getElementById("search input")
         .value.toLowerCase();

      if (isFavoritesChecked) {
         this.setState({ isFavoritesChecked: true });

         console.log(isFavoritesChecked);
         const favoriteFuncs = allFuncs.filter((func) => {
            return func.isFavorite;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr: ", orderArr);
         console.log(favoriteFuncs);
         const filteredFuncs = favoriteFuncs.filter((func) => {
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
         this.setState({ displayFuncs: orderedFuncs });
      } else {
         this.setState({ isFavoritesChecked: false });

         const filteredFuncs = allFuncs.filter((func) => {
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr: ", ...orderArr);
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);

         this.setState({ displayFuncs: orderedFuncs });
         console.log(isFavoritesChecked);
      }
   }
   changeOrder(e) {
      this.setState({ orderBy: e.target.value }, () => {
         this.filterFuncs();
      });
   }
   render() {
      const getFunctionsNum = () => {
         return uiData.length;
      };

      return (
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Utility Library
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()} functions documented
                  </p>
                  <div className="custom-control custom-radio custom-control-inline ">
                     <input
                        type="radio"
                        id="viewMode-all"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked}
                        onChange={(e) => this.filterFuncs(e)}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-all"
                     >
                        Show All
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline ">
                     <input
                        type="radio"
                        id="viewMode-favorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked}
                        onChange={(e) => this.filterFuncs(e)}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-favorites"
                     >
                        Favorites
                     </label>
                  </div>
                  <div className="row mt-3">
                     <div className="col-6">
                        <input
                           type="text"
                           className="form-control "
                           placeholder="Search All Functions"
                           aria-label="search all functions "
                           aria-describedby="search-input"
                           id="search input"
                           onChange={(e) => this.filterFuncs(e)}
                        />
                     </div>
                     <div className="col-6">
                        <select
                           value={this.state.orderBy}
                           className="form-control"
                           onChange={(e) => this.changeOrder(e)}
                        >
                           <option value='["order","desc"]'>Most Recent</option>
                           <option value='["order","asc"]'>Oldest</option>
                           <option value='["name","asc"]'>A-Z</option>
                           <option value='["name","desc"]'>Z-A</option>
                        </select>
                     </div>
                  </div>
               </div>
               {this.state.displayFuncs.map((functionUI) => {
                  const { name, desc, inputs } = functionUI;

                  return (
                     <FunctionUI
                        key={name}
                        name={name}
                        desc={desc}
                        inputs={inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
