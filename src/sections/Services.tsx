import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section
      className="flex flex-wrap justify-center max-container gap-9"
      id="services"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          {...service}
        />
      ))}
    </section>
  )
}

export default Services