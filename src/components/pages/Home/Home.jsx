import Chart from '../../Chart/Chart'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../../dummyData';
import Widgetsm from '../../widgetSm/Widgetsm';
import Widgetlg from '../../widgetLg/Widgetlg';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <Widgetsm/>
        <Widgetlg/>
      </div>
    </div>
  )
}
