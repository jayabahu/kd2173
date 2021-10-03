import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';

const useStyles = makeStyles((theme) => ({
  videoPlaylist: {
    maxWidth: '700px',
    margin: '0px auto',
  },
}));

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

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const classes = useStyles();

  const sectionHeader = {
    title: 'What you need to know about our kingdom',
    paragraph: '',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Rules</h4>
                  <p className="m-0 text-sm">
                    Rules you have to follow in our kingdom.
                  </p>
                  <br />
                  <Button tag={Link} color="primary" wideMobile to="/rules">
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Alliances</h4>
                  <p className="m-0 text-sm">
                    Origin stories and intro to our top alliances.
                  </p>
                  <br />
                  <Button tag={Link} color="primary" wideMobile to="/alliances">
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Immigrations</h4>
                  <p className="m-0 text-sm">
                    Immigrations are currently closed. Please check back later.
                  </p>
                  {/*<br />*/}
                  {/*<Button*/}
                  {/*  tag="a"*/}
                  {/*  color="primary"*/}
                  {/*  wideMobile*/}
                  {/*  href="https://cruip.com/"*/}
                  {/*>*/}
                  {/*  Read More*/}
                  {/*</Button>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={innerClasses}>
          <SectionHeader
            data={{
              title: 'Our KVK Season 2 Journey',
              paragraph: '',
            }}
            className="center-content"
          />
          <div className={classes.videoPlaylist}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/videoseries?list=PLEHJV9VELM5s9fk3twyUvo3HOcv6_wS8C"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTiles;
