import React from 'react';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';

const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Story of our kingdom',
    paragraph: '',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="messages">
            <div className="message-text send">
              They say in any lifetime there are defining decisions that change
              the course of history and from our perspective in Eng X 2 occurred
              in the first 8 hours. The first was to chnage starting zones which
              is no mean feat when you cant teleport there and no passes are
              open but hey we are problem solvers.The second and more difficult
              decision was war. Another alliance had control of the prime spot
              and would not negotiate, so guess what happened next .... yup put
              the idiot panda up front we are going to war (so much for lets
              keep it peaceful this time!
            </div>
            <div className="contact message-sender">
              Engine Panda (R4 from EngX)
            </div>
            <div className="message-text send">
              This was truely a race against time to build a fort and rally
              theirs to take it down before it completed and became a whole
              thing. I have to say in all our Kvk's, nothing was more intense
              than those first few hours. we were working with literally minutes
              to get it right. Only at this point did we have time to look
              around us and see what else was happening, like with PL and
              Redenix.
            </div>
            <div className="contact message-sender">
              Engine Panda (R4 from EngX)
            </div>
            <div className="message-text receive">
              Our alliance was able to grow peacefully in the southwest and
              quickly we were the strongest alliance in our area. All the
              alliances in our area worked together. Then we entered Zone 2, and
              things got exciting! How peaceful were the strongest alliances? I
              and my friends had already experienced many things in this game
              and expected the worst. For me it was clear, no matter what, I
              will fight for this kingdom and my alliance! No matter against
              whom. But everything went well. Decisions were made and
              implemented together. Alan from EngX became our king, with whom we
              then moved into our KVK 1, eager to fight and motivated.
            </div>
            <div className="contact message-receiver">
              PL Redenix (R5 from PL73)
            </div>
            <div className="message-text send">
              Engine Panda (R4 from EngX) How to sum up KVK1 in a few words? it
              took a while to get going but that first 12 hours after pass 5
              opened and we went head to head with 76 was intense. for the
              longest time it looked like we were outgunned but it came down to
              the 4 T's - trying, teamwork, tenacity & triumph. It was in those
              12 hours 4 alliances became 1 team and one kingdom. What i took
              away from that day was how willing everyone was to commit troops
              to die. Truely inspired!
            </div>
            <div className="contact message-sender">
              Engine Panda (R4 from EngX)
            </div>
            <div className="message-text receive">
              PL Redenix (R5 from PL73) I can only confirm that. After KVK 1,
              the kingdom was characterised by mutual cohesion. All the players
              changed alliances as a matter of course. It was all one family.
              But a new challenge came to the kingdom: the immigration of new
              players. And with it came a restlessness and a reorganisation in
              the kingdom. And this is where it showed how well the top
              alliances could really trust each other. Together they overcame
              this challenge and together we are now going into KVK 2. Some of
              them had a vision at the beginning: to build a kingdom that works
              together, trusts each other and is dangerous in the KVK. Right now
              we are living that vision and I am happy to be a part of that
              kingdom.
            </div>
            <div className="contact message-receiver">
              PL Redenix (R5 from PL73)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTiles;
