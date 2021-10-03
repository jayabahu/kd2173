import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, getIdToken } from 'firebase/auth';
import CircularProgress from '@material-ui/core/CircularProgress';

import Auth from '../components/Auth';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';
import Contributions from '../components/Contributions';

const Dashboard = ({
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth();

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
    title: user ? 'Welcome Governor!' : 'Login or Create an Account',
    paragraph: '',
  };

  useEffect(async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await getIdToken(user);
        setUser({ ...user, token });
      } else {
        setUser(null);
      }
      setIsLoaded(true)
    });
  }, []);

  const getContent = () => {
    if (!isLoaded) {
      return <CircularProgress />;
    }
    return (
      <>
        <SectionHeader data={sectionHeader} className="center-content" />
        {user ? <Contributions user={user} /> : <Auth />}
      </>
    );
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>{getContent()}</div>
      </div>
    </section>
  );
};

export default Dashboard;
