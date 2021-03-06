import type { NextPage } from 'next';
import Container from '../components/Container';
import MainStats from '../components/MainStats';
import PaymentDetails from './../components/PaymentDetails';
import Plan from '../components/Plan';
import DataChart from './../components/DataChart';
import selectedImage from '../public/pexels-andre-cook-131723.jpg';
import SomeImage from '../components/SomeImage';

const Home: NextPage = () => {
  const chartData: any = {
    labels: [
      '01/2021',
      '02/2021',
      '03/2021',
      '04/2021',
      '05/2021',
      '06/2021',
      '07/2021',
      '08/2021',
      '09/2021',
      '10/2021',
      '11/2021',
      '12/2021',
    ],
    datasets: [
      {
        label: 'Subscribed',
        data: [12, 19, 55, 30, 35, 31],
        fill: 'origin',
        backgroundColor: 'pink',
        borderColor: 'pink',
      },
      {
        label: 'Unsubscribed',
        data: [2, 43, 5, 77, 23, 88],
        fill: 'origin',
        backgroundColor: 'lightgreen',
        borderColor: 'lightgreen',
      },
    ],
  };

  return (
    <div className="bg-[#eff3f8] min-h-screen">
      <div className="p-2 mb-[-1rem]">
        <Container>
          <div className="flex space-x-8 justify-between overflow-hidden overflow-x-auto">
            <MainStats title="Subscribers" value={5097} percentage={33.45} />
            <MainStats title="Streams" value={24456} percentage={-112} />
            <MainStats
              title="Engagement Rate"
              value={24.56}
              percentage={53.3}
            />
            <MainStats
              title="Avg Watch Time"
              value={32}
              percentage={4.96}
              unit="sec"
            />
          </div>
        </Container>
      </div>

      <div className="p-2 flex flex-col-reverse md:flex-row">
        <div className="w-full max-w-md">
          <PaymentDetails cardFlag="VISA" cardNumber={1234567890} />

          <Plan name="Premium Plan" price={55} />
        </div>
        <div className="w-full">
          <DataChart
            title="Average listening time"
            value={45.4}
            percentage={33.45}
            unit="min"
            chartData={chartData}
          />

          <SomeImage selectedImage={selectedImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
