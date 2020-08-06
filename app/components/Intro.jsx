const React = require("react");

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const Intro = function() {
  return (
    <div class="intro">
      <p>
        The Holy Grail of effective collaboration is in creating shared
        understanding about the problem and shared commitment to the possible
        solutions. Shared understanding is when stakeholders understand each
        other’s positions well enough to have intelligent dialog about the
        different interpretations of the problem, and to exercise collective
        intelligence about how to solve it.
      </p>
      <p>
        Research has shown that members working on complex projects are “less
        likely to share knowledge freely, to learn from one another, to shift
        workloads flexibly to break up unexpected bottlenecks, to help one
        another complete jobs and meet deadlines, and to share resources - in
        other words, to collaborate.”
      </p>
      <p>
        This playbook is made up of internal and external{" "}
        <span class="category_color activity">activities</span>,{" "}
        <span class="category_color article">articles</span> and{" "}
        <span class="category_color framework">frameworks</span> to help you
        through the 6 phases of the collaboration process efficiently and
        effectively. These 6 phases of collaboration were identified through
        various discussions and retrospectives about what facilitates and
        impedes collaboration.
      </p>
    </div>
  );
};

module.exports = Intro;
