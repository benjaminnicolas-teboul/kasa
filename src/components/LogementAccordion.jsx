import AboutAccordion from './AboutAccordion';

const LogementAccordion = ({ description, equipments }) => (
  <div className="accordions-row">
    <AboutAccordion
      data={[{ title: "Description", content: description }]}
    />
    <AboutAccordion
      data={[{
        title: "Équipements",
        content: (
          <ul>
            {equipments.map((eq, i) => <li key={i}>{eq}</li>)}
          </ul>
        )
      }]}
    />
  </div>
);

export default LogementAccordion;
