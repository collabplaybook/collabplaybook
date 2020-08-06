const React = require('react');

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const TableOfContents = function(){
  return (
    <div class="table-of-contents">
        <div class="row">
          <div class="one-half column">
            <div class="contents-item">
              <h5 class="contents-title">
                <a href="#clarify">1. Clarify the problem </a>
              </h5>
              <div class="contents-description">
                When the problem and expected outcome are not clear or well
                defined this causes confusion for everyone involved. Before
                collaborating with other teams and stakeholders, make sure that
                everyone on the team shares the same vision.
              </div>
            </div>
          </div>

          <div class="one-half column">
            <div class="contents-item">
              <h5 class="contents-title">
                <a href="#identify">2. Identify stakeholders</a>
              </h5>
              <div class="contents-description">
                Identify the stakeholders and the level that they need to be
                involved early into the collaboration process in order to
                understand who owns what, to gain knowledge on the topic, to
                work together, and to communicate decisions.
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="one-half column">
            <div class="contents-item">
              <h5 class="contents-title">
                <a href="#manage">3. Manage stakeholders</a>
              </h5>
              <div class="contents-description">
                Getting and keeping stakeholders aligned throughout the process
                is hard work. At every key point (or at regular intervals),
                don’t forget to stop, drop, align, and document.
              </div>
            </div>
          </div>

          <div class="one-half column">
            <div class="contents-item">
              <h5 class="contents-title">
                <a href="#knowledge">4. Gain topic knowledge</a>
              </h5>
              <div class="contents-description">
                When exploring an unfamiliar topic related to your project, it
                is important to learn from the experts. The experts are able to
                point you towards the information that you need and to connect
                you with other experts quickly. Remember that you do not have to
                become an expert, but you need to make sure you work together
                with the experts.
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="one-half column">
            <div class="contents-item">
              <h5 class="contents-title">
                <a href="#work-together">5. Work together and get feedback </a>
              </h5>
              <div class="contents-description">
                When people work together with a shared vision, everyone’s
                efforts and expertise is combined to produce less duplication
                and overlap, increase efficiency and effectiveness, solve
                complex problems, and get projects done on time.
              </div>
            </div>
          </div>

          <div class="one-half column">
            <div class="contents-item">
              <h5 class="contents-title">
                <a href="#communicate">
                  6. Communicate decisions and share learnings{" "}
                </a>
              </h5>
              <div class="contents-description">
                If critical information is not properly shared, alignment will
                not be reached, others will not be able to build on top of the
                project, and others will not learn from your successes and
                mistakes. Documenting key decisions, learnings, and follow up
                plans will help everyone stay informed and will avoid
                overlapping initiatives.
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

module.exports = TableOfContents;