import axios from "axios";
import React from "react";
import PieChart from "../Components/PieChart";
import PieChartD3 from "../Components/PieChartD3";
import BarChart from "../Components/BarChart";



const baseURL = "http://localhost:3001";


function HomePage() {

    const [post, setPost] = React.useState([]);
    // const dataSource = {
    //     datasets: [
    //         {
    //             data: [],
    //             backgroundColor: [
    //                 '#ffcd56',
    //                 '#ff6384',
    //                 '#36a2eb',
    //                 '#fd6b19',
    //                 '#1D8348',
    //                 '#7D3C98',
    //                 '#E74C3C',
    //             ],
    //             backend: ''
    //         }
    //     ],
    //     labels: []
    // };


    


    React.useEffect(() => {
        axios.get(baseURL+'/budget').then((response) => {
            //console.log(response.data);
            console.log(response.data);
           setPost(response.data);
        });
      }, []);

    
    
    
    return (
      <div className="container center" id="main">

      <div className="page-area">
      {/* <!-- This is a Semantic HTML Change --> */}
          <article className="text-box">
              <h1>Stay on track</h1>
              <p>
                  Do you know where you are spending your money? If you really stop to track it down,
                  you would get surprised! Proper budget management depends on real data... and this
                  app will help you with that!
              </p>
          </article>
      {/* <!-- This is a Semantic HTML Change --> */}
          <article className="text-box">
              <h1>Alerts</h1>
              <p>
                  What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
              </p>
          </article>
      {/* <!-- This is a Semantic HTML Change --> */}
          <article className="text-box">
              <h1>Results</h1>
              <p>
                  People who stick to a financial plan, budgeting every expense, get out of debt faster!
                  Also, they to live happier lives... since they expend without guilt or fear... 
                  because they know it is all good and accounted for.
              </p>
          </article>
  
          <article className="text-box">
              <h1>Free</h1>
              <p>
                  This app is free!!! And you are the only one holding your data!
              </p>
          </article>
  
          <article className="text-box">
              <h1>Stay on track</h1>
              <p>
                  Do you know where you are spending your money? If you really stop to track it down,
                  you would get surprised! Proper budget management depends on real data... and this
                  app will help you with that!
              </p>
          </article>
  
          <article className="text-box">
              <h1>Alerts</h1>
              <p>
                  What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
              </p>
          </article>
  
          <article className="text-box">
              <h1>Results</h1>
              <p>
                  People who stick to a financial plan, budgeting every expense, get out of debt faster!
                  Also, they to live happier lives... since they expend without guilt or fear... 
                  because they know it is all good and accounted for.
              </p>
          </article>
  
          <article className="text-box">
              <h1>Chart</h1>
                <PieChart/>
                  
              
          </article>

          <article className="text-box">
              <h1>Chart2</h1>
              <p id="myChart2">
                <PieChartD3></PieChartD3>
              </p>
          </article>

    </div>
   
      
  </div>
    );
  }
  
  export default HomePage;
  