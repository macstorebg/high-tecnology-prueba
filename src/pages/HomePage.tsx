import { Navbar } from "../components/Header/Navbar"
import { CardDouble } from "../components/main/banners/CardDouble"
import { CardLarge } from "../components/main/banners/CardLarge"
import { Featured } from "../components/main/featured/Featured"
import { SpecialServices } from "../components/main/secction/SpecialServices"


export const HomePage = () => {
  return (
    <div className="h-screen ">
      <div className="mb-20">
        <Featured />
      </div>
      <div className="mb-20">
        <SpecialServices />
      </div>
      <div>
        <CardDouble />
      </div>
      <div className="mb-20">
        <CardLarge />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}
