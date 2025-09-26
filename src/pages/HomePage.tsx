import { Footer, TopBar, CardDouble, CardLarge, Featured, Benefits, SpecialServices } from "../pages/index"

export const HomePage = () => {
  return (
    <>
      <div className="mb-20">
        <Featured />
      </div>
      <div className="mb-20">
        <SpecialServices />
      </div>
      <div className="mb-12">
        <CardDouble />
      </div>
      <div className="mb-12">
        <TopBar />
      </div>
      <div className="mb-20">
        <CardLarge />
      </div>
      <div className='mb-20'>
        <Benefits />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
