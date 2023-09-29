import {Chart} from "chart.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { fetchDailyData } from "../Components/Data";

const baseURL = "http://localhost:3001";



const PieChart = () => {

    const dataSource = {
        datasets: [
            {
                data: [1,25,59,40],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                    '#1D8348',
                    '#7D3C98',
                    '#E74C3C',
                ],
                backend: ''
            }
        ],
        labels: ['one','two','three','four']
    };





    const [dailyData, setDailyData] = useState([]);


    const fetchData = () => {
         axios.get(baseURL+'/budget').then((response) => {
            for(var i = 0; i < response.data.myBudget.length; i++){
                dataSource.datasets[0].data[i] = response.data.myBudget[i].budget;
                dataSource.labels[i] = response.data.myBudget[i].title;
            }
            setDailyData(dataSource);
        });
    };

   
    
    useEffect(() => {
        fetchData();
        //console.log(dailyData);
    }, []);

    

   return (
    
       <Pie type="pie" data={dailyData} />
       
  );
}
export default PieChart;