import React from "react";
import FlowChart from "../components/FlowChart";
import References from "../components/Refrences";
import functionalityImg from "../components/Functionality.png";

const DesignPage = () => {
  return (
    <div className="design-page">
      <h1>How to Better Design</h1>
      <p>
        Engineers are tasked with designing every life around society. From the
        tools we use to the roads we drive. An engineer is behind every
        decision. This is why there is a great responsibility in making these
        decisions and a lot of thought must go behind every one.
      </p>

      {/* diagram image */}
      <figure>
        <img
          src={functionalityImg}
          alt="Design Diagram"
          style={{ width: "100%", height: "auto", margin: "2rem 0" }}
        />
        <figcaption
          style={{
            fontSize: "0.9rem",
            color: "#555",
            marginTop: "0.5rem",
            textAlign: "center",
          }}
        >
          Diagram of Design Principles drawn my me (Tom Stephen)
        </figcaption>
      </figure>

      <h2>Functionality</h2>
      <p>
        When designing a product there are a few main points to hit. The first
        is the functionality. Designing a product to be functional is clearly an
        important part of the process. If you are working on a project then the
        main goal is going to be to solve some sort of problem and if what you
        design does not solve this problem then it is not useful.
      </p>

      <h2>Safety</h2>
      <p>
        The second point to think of is designing for safety. Products must be
        as safe as possible for the user. There are multiple ways of
        incorporating safety into a design. Leroy Sibanda talks about a few of
        them in the article “How Design for Misuse Creates Safer Products“ [2]
      </p>
      <ul>
        <li>
          <strong>Predict Misuse with User Research:</strong> Engineers must
          anticipate potential misuse and account for it in design. As well as
          adapt designs to be made safer when misused. [2]
        </li>
        <li>
          <strong>Design for Ease of Use:</strong> Simplicity reduces user
          errors. Humans are error-prone so reducing complexity helps enhance
          safety. [1].
        </li>
        <li>
          <strong>Include Safeguards:</strong> Safety mechanisms should be built
          in to prevent harm. Don Norman’s Swiss Cheese Model suggests multiple
          layers of safety—each with small flaws, but collectively reducing
          risk. The more layers you add the better.
        </li>
        <li>
          <strong>Communicate with Users:</strong> Clear instructions and
          warnings can reduce misuse.[2]
        </li>
      </ul>
      <p>
        If you are curious about some examples of misused items go check out the
        “Commonly Missued Products” page.
      </p>

      <h2>Environment</h2>
      <p>
        The third point to think of when designing is the environment. Engineers
        around the world have a responsibility to protect the environment to the
        best of their abilities. When designing products this can be in the
        material choices to the location of manufacturing or manufacturing
        processes. There are so many factors that affect the environment. In
        Alberta under the APEGA guidelines, it says that engineers must “go
        beyond meeting the minimum industry standards and regulations” [7] in
        regards to protecting the environment. This is why it needs to be at the
        forefront of design, especially in the 21st century.
      </p>

      <h2>Cost</h2>
      <p>
        The fourth point to think of when designing a product is cost. The cost
        of products and projects can greatly influence the world around us. From
        the cost of insulin pens for diabetics to how much the government spends
        on a bridge. Engineers are also responsible for thinking of this when
        designing products. Just like with the environment, in Alberta under
        APEGA, engineers are responsible for the “economic interests of the
        public” [7].
      </p>
      <p>
        When reading the <i>“How to Desighn for misuse”</i> and <i>“The 7 Principles of Universal Design
        ”</i> i thought a lot about cost and how much it effects the
        world and designs that engineers produce. In so many aspects. From
        accessibility to external pressures on design. Cost and finances can
        effect designs in negative and positive ways.
      </p>
      <p>
        Functionality, safety, environment, and cost are 4 very important
        principles that all engineers must keep in mind when designing. These
        factors must be carefully balanced to ensure the designs they create
        positively impact society with minimum harm. Through reading these 
        case studies, I gained a deeper understanding of the design process 
        and how critical each step truly is. I also learned about the many 
        factors that must be considered at every stage, from functionality to
        ethics. This experience will definitely help me in the future when 
        working through my own design challenges. 
      </p>
      <h1>How to Better Design - Interactive Flowchart</h1>
      <FlowChart />
      <References />
    </div>
  );
};

export default DesignPage;
