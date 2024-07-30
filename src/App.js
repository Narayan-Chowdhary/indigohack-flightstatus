import HomeLayout from './page/HomeLayout/page';
import BgImage from "./assests/images/bgPlane.jpg"
import { Header } from './page/other/Other';

function App() {
  return (
    <>
      {/* <div  style={{
        backgroundImage: `url(${BgImage})`,
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",   
      }}>
      
      </div> */}
      <HomeLayout />

      {/* <Header /> */}

    </>
  );
}

export default App;
