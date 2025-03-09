import Homepage from "./Bgvideo"
import Booking from "./Booking"
import Gridimage from "./Gridimage"
import Servicepage from "./ServicesSection"
import SubscribeSection from "./SubscribeSection"
import TeamMember from "./TeamMember"


const HomeSection = () => {
  return (
    <div>
        {/* bgvideo/hero section first */}
        <Homepage />

        {/* World tour section */}
        <Gridimage />

        {/* We provide Services section */}
        <Servicepage />

        {/* Our professonal team Member */}
        <TeamMember />
        {/* Bookin section  */}
        <Booking />
        {/* subscribe section */}
        <SubscribeSection />
    </div>
  )
}

export default HomeSection
