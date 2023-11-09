import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <div className="pb-24" id="services">
      <h3 className="text-3xl font-semibold pb-8">Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title={"Web design & Development"}
          description={
            "We design and create Websites for your Company that gets you more leads and actually converts "
          }
        />
        <ServiceCard
          title={"Google My Business"}
          description={
            "We help you with your Google My Business and Apple Business Connect Profile and make sure that you show up on the map"
          }
        />
        <ServiceCard
          title={"Hosting"}
          description={
            "Optional. Website is offline? Not with us. We keep your online Business running"
          }
        />
      </div>
    </div>
  );
}
