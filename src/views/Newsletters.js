import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { BLOG_ID, GOOGLE_API_KEY } from '../lib/constants';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '15px',
  },
}));

const Newsletters = ({
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
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

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
    title: 'Newsletters',
    paragraph: 'Read our latest newsletters here',
  };

  useEffect(() => {
    if (BLOG_ID && GOOGLE_API_KEY)
      axios
        .get(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${GOOGLE_API_KEY}`
        )
        .then(function (response) {
          if (response.data.items) {
            setPosts(
              response.data.items.map(({ id, title, content }) => ({
                id,
                title,
                content,
              }))
            );
          }
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
  }, []);

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div>
            {posts.map(({ id, title, content }) => (
              <Accordion key={id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletters;
