import React from "react";
import FlowChart from "../components/FlowChart";
import References from "../components/Refrences";

const DesignPage = () => {
  return (
    <div className="design-page">
      <h1>How to Better Design</h1>
      <p>
        Engineers are tasked with designing every life around society. From the
        tools we use to the roads we drive. An engineer is behind every
        decision. This is why there is a great responsibility in making these
        decisions and a lot of thought must go behind every design. Objects
        designed without the proper planning, thought, and revision can lead to
        misuse or harm.
      </p>

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
          adapt designs to be made safer when misused.
        </li>
        <li>
          <strong>Design for Ease of Use:</strong> Simplicity reduces user
          errors. Humans are error-prone so reducing complexity helps enhance
          safety. This is also a key point in The 7 Principles of Universal
          Design [1].
        </li>
        <li>
          <strong>Include Safeguards:</strong> Safety mechanisms should be built
          in to prevent harm. Don Norman’s Swiss Cheese Model suggests multiple
          layers of safety—each with small flaws, but collectively reducing
          risk. The more layers you add the better.
        </li>
        <li>
          <strong>Communicate with Users:</strong> Clear instructions and
          warnings can reduce misuse.
        </li>
      </ul>
      <p>
        If you are curious about some examples of misused items go check out the
        “Commonly Missued Products” page. Humans are prone to error. That's why
        there is the term “Human Error” and why products must have multiple
        safety features. Each layer has faults but if you have multiple layers
        then faults will be covered and lead to a safer design.
      </p>

      <h2>Environment</h2>
      <p>
        The third point to think of when designing is the environment. Engineers
        around the world have a responsibility to protect the environment to the
        best of their abilities. When designing products this can be in the
        material choices to the location of manufacturing or manufacturing
        processes. There are also factors of reducing and reusing. You do not
        always need to start a project. Sometimes it's better for the
        environment and society if the project does not happen. There are so
        many factors that affect the environment. In Alberta under the APEGA
        guidelines, it says that engineers must “go beyond meeting the minimum
        industry standards and regulations” [REF] in regards to protecting the
        environment. This is why it needs to be at the forefront when designing,
        especially in the 21st century.
      </p>

      <h2>Cost</h2>
      <p>
        The fourth point to think of when designing a product is cost. The cost
        of products and projects can greatly influence the world around us. From
        the cost of insulin pens for diabetics to how much the government spends
        on a bridge. Engineers are also responsible for thinking of this when
        designing products. Just like with the environment, in Alberta under
        APEGA, engineers are responsible for the “economic interests of the
        public” [REF].
      </p>
      <p>
        In society in general there is always a need and desire for growth. This
        is often times captured by governments by Gross domestic Product (GDP).
        This is because Simon Kuznets was tasked with creating an economic
        report for the US government in which he came up with the idea of GDP.
        This has since been heavily adopted by many governments to measure the
        well-being of a nation. However, there are multiple flaws with this
        concept. GDP does not take into account a lot of factors of living such
        as life expectancy, environmental well-being, equity, and much more.
        Making decisions to influence GDP is not necessary at the discretion of
        engineers but every decision made around designing products and projects
        can in turn have effect on it. Engineers must recognize the broader
        implications of their designs beyond economic growth alone no matter the
        scale.
      </p>
      <p>
        Functionality, safety, environment, and cost are 4 very important
        principles that all engineers must keep in mind when designing. These
        factors must be carefully balanced to ensure the designs they create
        positively impact society with minimum harm.
      </p>
      <h1>How to Better Design - Interactive Flowchart</h1>
      <FlowChart />
      <References />
    </div>
  );
};

export default DesignPage;
