import React from 'react';
import FeatureInfo from '../../components/featuredInfo/FeatureInfo';
import Chart from "../../components/chart/Chart"
import "./home.css";
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

const Home = () => {
  return (
    <div className='home'>
        <FeatureInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home