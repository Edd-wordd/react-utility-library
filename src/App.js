import React from "react";
import "./style/master.scss"; //applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
   constructor() {
      super();
      console.log(uiData);
   }
   render() {
      const sortedData = uiData.sort((a, b) => {
         return b.order - a.order;
      });

      const getFunctionsNum = () => {
         return uiData.length;
      };

      const orderedData = orderBy(uiData, "name", "asc");
      return (
         <div className="container">
            <div className="row">
               <div class="col-12">
                  <h1 class="d-flex justify-content-center">
                     JavaScript Functions: Functional
                  </h1>
                  <p class="text-center lead mb-4">
                     {getFunctionsNum()} functions documented
                  </p>
               </div>
               {orderedData.map((functionUI) => {
                  return (
                     <FunctionUI
                        name={functionUI.name}
                        desc={functionUI.desc}
                        inputs={functionUI.inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
