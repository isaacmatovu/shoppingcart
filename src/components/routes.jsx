
//import { element } from "prop-types";
//import { element } from "prop-types";
//import { element } from "prop-types";
import HomePage from "./HomePage";
import Shop from "./shopPage";
import Cart from "./cart";
import Layout from "./layout";







const routes=[


    {
        path:"/",
        element:<Layout/>,
        children: [

            {
               index: true,
               element: <HomePage/>

            },

            {
                path:"shop",
                element:<Shop/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
           
          
        ],
        
       
    }
    
   
    
]

export default routes;