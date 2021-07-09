import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/api';
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
  const [user, setUser] = useState(null);

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
    title: user ? 'Welcome Governor!' : 'Login With Magic link',
    paragraph: '',
  };

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser ?? null);
      }
    );

    return () => {
      if (authListener) {
        authListener.unsubscribe();
      }
    };
  }, [user]);

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          {user ? <Contributions user={user} /> : <Auth />}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
