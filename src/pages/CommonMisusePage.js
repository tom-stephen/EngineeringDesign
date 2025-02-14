import React, { useState } from "react";
import VapingCharts from "../components/VapingCharts";
import "./CommonMisusePage.css";

const CommonMisusePage = () => {
  // Example data to show how you might toggle the chart based on user selection
  // You can adapt this to real data if you like
  const [graphCategory, setGraphCategory] = useState("ever-vaped");
  const [dataSet, setDataSet] = useState("total-sample");

  const handleDropdownChange = (e) => {
    setGraphCategory(e.target.value);
  };

  const handleDropdownChange2 = (e) => {
    setDataSet(e.target.value);
  };

  // A placeholder chart (you could swap this out with chart library code)
  const renderChart = () => {
    return (
      <div style={{ padding: "1rem" }}>
        <VapingCharts graphCategory={graphCategory} dataSet={dataSet} />
      </div>
    );
  };

  return (
    <div className="misuse-page">
      <h1>Commonly Misused Products</h1>

      {/* ----------- The Vape ----------- */}
      <section className="misuse-section">
        <div className="content-wrapper">
          <div className="section-text">
            <h2>The Vape</h2>
            <p>
            E-cigarettes were initially marketed as a “healthier” alternative 
            to smoking, but studies have shown that this claim is questionable. 
            The design choices—such as flavored options and high nicotine— 
            attracted younger audiences, raising ethical concerns about whether 
            potential misuse was adequately considered during development. This 
            highlights the broader responsibility of engineers to anticipate unintended 
            consequences in product design.
            </p>
            <p>
            A key ethical issue is the high nicotine content in e-cigarettes, 
            making them highly addictive. By 2019, more e-cigarette users consumed 
            nicotine within five minutes of waking than users of cigarettes or 
            other tobacco products [3]. This addiction crisis greatly affects minors, 
            as seen in data from 2017 to 2019, which shows a high persentage of 
            e-cigarette use among 16 to 19-year-olds. The widespread impact of this 
            design underscores the ethical obligation to prioritize public health over 
            market expansion.
            </p>
            <label>
              Select Data Set: &nbsp;
              <select value={dataSet} onChange={handleDropdownChange2}>
                <option value="total-sample">Total sample</option>
                <option value="never-smoked">Never Smoked</option>
                <option value="smoking-experimentally">
                  Smoking Experimentally
                </option>
                <option value="smoking-currently">Smoking Currently</option>
              </select>
              <br />
              Select Graph Category: &nbsp;
              <select value={graphCategory} onChange={handleDropdownChange}>
                <option value="ever-vaped">Ever Vaped</option>
                <option value="never-vaped-past-30">
                  Vaped in past 30 Days
                </option>
                <option value="vaped-past-week">Vaped in past week</option>
                <option value="vaped-20-in-20">
                  Used e-cigarettes ≥20 days in past 30 days
                </option>
              </select>
            </label>
          </div>
          <div className="section-graphic">
            <figure>
              {renderChart()}
              <figcaption
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  marginTop: "0.5rem",
                  textAlign: "center",
                }}
              >
                Graph from data sourced from:
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7199169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#007bff",
                    marginLeft: "5px",
                  }}
                >
                  Source
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ----------- Whippets ----------- */}
      <section className="misuse-section reverse">
        <div className="content-wrapper reverse">
          <div className="section-text">
            <h2>Whippets</h2>
            <p>
            Whipped cream chargers, or "whippets," are designed for culinary 
            use but are frequently misused for recreational inhalation, leading 
            to severe health risks such as neurological damage, vitamin B12 deficiency, 
            and oxygen deprivation [5]. The emergence of large, flavored nitrous oxide 
            containers, like those from Galaxy Gas, further raises ethical concerns, as 
            their design facilitates direct recreational use despite being marketed for 
            whipped cream preparation.
            </p>
            <p>
            This case exemplifies the ethical responsibility of engineers and designers 
            to anticipate misuse. Were key design principles—such as safety and societal 
            impact—adequately considered? The ease of misuse suggests otherwise, highlighting 
            a critical gap in ethical decision-making during product development. This issue 
            drew my attention because it underscores the unintended consequences of design 
            choices and the importance of accountability in engineering.
            </p>
          </div>
          <div className="section-graphic">
            {/* You could insert an actual image if you have one */}
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/61-OL4FzwBL.jpg"
                alt="Galaxy Gas Container"
                style={{ maxWidth: "300px" }}
              />
              <figcaption
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  marginTop: "0.5rem",
                  textAlign: "center",
                }}
              >
                Image from:
                <a
                  href="https://www.amazon.com/Galaxy-Gas-Dispenser-Cartridge-Cylinder/dp/B0BZTH6H6M"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#007bff",
                    marginLeft: "5px",
                  }}
                >
                  Source
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CommonMisusePage;

      {/* ----------- Dietary Supplements ----------- */}
      <section className="misuse-section">
        <div className="content-wrapper">
          <div className="section-text">
            <h2>Dietary Supplements</h2>
            <p>
              Certain dietary supplements, originally intended for health and
              wellness are frequently misused, often by adolescents. A study
              titled "Abuse and Misuse of Selected Dietary Supplements Among
              Adolescents: A Look at Poison Center Data" [3] analyzed cases from
              2003 to 2014, highlighting four commonly misused supplements:
            </p>
            <ul>
              <li>
                <strong>Salvia divinorum</strong> – hallucinogenic properties
                widely abused.
              </li>
              <li>
                <strong>Garcinia cambogia</strong> – marketed for weight-loss,
                excessive doses can harm.
              </li>
              <li>
                <strong>Paullinia cupana (Guarana)</strong> – source of
                caffeine, abused for its stimulant effects.
              </li>
              <li>
                <strong>Hypericum perforatum (St. John’s Wort)</strong> – mood
                enhancement but risky interactions.
              </li>
            </ul>
            <p>
              While these supplements are widely available and marketed as
              natural health aids, their misuse and abuse pose serious health
              risks. The study emphasizes the need for better education on
              supplement safety and the importance of monitoring adolescent use.
              While these medications have beneficial health effects and should
              not be banned the importance of communication about the risks and
              proper use of these medications is vital. This communication is a
              key point of design addressed under said in the{" "}
              <a
                href="/"
                style={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {" "}
                “How to Better Design”
              </a>{" "}
              section.
            </p>
          </div>
          <div className="section-graphic">
            <figure>
              <img
                src="https://cdn.ncbi.nlm.nih.gov/pmc/blobs/36ae/5736249/619f72301f20/i1551-6776-22-6-385-f01.jpg"
                alt="Supplements"
              />
              <figcaption
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  marginTop: "0.5rem",
                  textAlign: "center",
                }}
              >
                Image from:
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5736249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#007bff",
                    marginLeft: "5px",
                  }}
                >
                  Source
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ----------- McDonald’s Cocaine Spoon ----------- */}
      <section className="misuse-section reverse">
        <div className="content-wrapper reverse">
          <div className="section-text">
            <h2>McDonald’s Cocaine Spoon</h2>
            <p>
              When one thinks of McDonalds cocane is definitely not something
              that comes to mind for the majority of us. However, it is for
              some. In the 1970’s McDonalds came out with a coffee spoon. This
              spoon was used as a tool by drug dealers to consume cocaine. The
              small scooper on the end made for the perfect size and the long
              handle made it easy to use for the job. In the early 1980s
              McDonalds redesigned the spoon to have a flat head to still work
              as a stir stick but not for any other cocane-related purposes.
            </p>
          </div>
          <div className="section-graphic">
            <figure>
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiMdozj05fSWMRjjpWYCO17PXbQnJj6fWJJFAOQ1w0Dmzj2DCVeyhpsyMkyRWlA1o5_zEpih37Mf1N3iSzQzx3-8xac55UkJoOHxlIdeRas_QFt2oQ4Ckw8cQnjy17G34Q1F90DAfg7KM/s1600/wong+tobias-wong-coke-spoon-mcdonalds.jpg"
                alt="McDonald’s Cocaine Spoon"
                style={{ maxWidth: "300px" }}
              />
              <figcaption
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  marginTop: "0.5rem",
                  textAlign: "center",
                }}
              >
                Image from:
                <a
                  href="https://artistsbooksandmultiples.blogspot.com/2012/09/tobias-wong-and-jut-another-rich-kid.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#007bff",
                    marginLeft: "5px",
                  }}
                >
                  Source
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>