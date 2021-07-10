import React from 'react';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';

const Rules = ({
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
    title: 'Rules',
    paragraph:
      'These are our kingdom rules. By staying in our Kingdom you are agreeing to follow them.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div>
            <ol>
              <li>No city hitting at any time.</li>
              <li>
                No farmer hitting. Exception is if they are mining gold in your
                alliance territory. (Yes, only gold)
                <br />
                Can I please ask everyone to be tolerant. Communicate and
                message before resorting to attack.
              </li>
              <li>
                Everyone can farm Gems, food, stone and wood anywhere in the
                map. (Even in other alliance territory)
              </li>
              <li>Do not farm gold in other alliance territory.</li>
              <li>
                MGE: Stage 5 has a limit of 3 million and Stage 6 has a limit of
                3 million.
              </li>
              <li>
                Only personal duel are allowed during MGE killing stage.{' '}
                <i>Do not exceed the 3m limit.</i>
              </li>
              <li>
                Anyone who exceeds the 3 million limit will need to pay
                compensation. The fines are 5 million in RSS for each 100k
                points above the limit.
              </li>
              <li>
                Must participate and fight during KvK. This is the fun part of
                this game, everyone should participate.
              </li>
              <li>
                There are set times for guardians. Please follow those times and
                leader.
              </li>
              <li>Do not attack any flag or fortress</li>
            </ol>
            <strong>
              Contact king or your own leader if you have any questions about
              the kingdom rules.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
