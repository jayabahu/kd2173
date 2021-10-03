import React from 'react';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '15px',
  },
}));

const Alliances = ({
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
    title: 'Alliances',
    paragraph: 'Origin stories and intro to our top alliances.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    [73CL] Cloud Legion
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    73CL also known as Cloud Legion is an Alliance with multi
                    nationalities brought together for one specific reason, to
                    have fun and grow together in Kingdom 2173. A little brief
                    history about us, we started off as an alliance named Dark
                    Legion, however due to internal rivalries, conflicts, and
                    dissatisfaction, we had to overhaul the alliance with a
                    total change in leadership to move forward. The end result
                    today, along with the dedication of our Leader and R4s,
                    we've grown to become one of the top 4 founding alliances in
                    2173 which we are extremely proud of. A world of
                    opportunities awaits if you join us and wish to progress
                    further along with an added benefit to mingle with people
                    from all around the world.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    [EngS] Legion de Odin
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Everything started in the year 2170 after Lilith, with the
                    wish of the Viking Samuel “El Intrepido” and various
                    Vikings. They sought to unify every Hispanic town onto one
                    banner, Legion of Odin. We receive the blessing of Odin and
                    the guidance of the very hand of Tyr started our Battle.
                    <br />
                    Over time, evil came to our lands showing us the future
                    coming of Ragnarok. in a magnificent battle, our kingdom was
                    destroyed by the hands of tyrants drunk by power. We lost
                    various of our Vikings in the trajectory, but they are
                    always remembered in our memories.
                    <br />
                    We sail to new waters looking for new lands, riches and
                    great wars guided by our father Odin. We find the great
                    kingdom called Osani in the year 2173 in where we met Floki
                    and his great fleet “Imperio Prusiano” he welcomes us with
                    open arms. That way started our great history in an unknown
                    kingdom, with great lands, new adventure and new allies.
                    <br />
                    Always in seek of a battle that we can die fighting with
                    ferocity and valour meanwhile with hear sword clashing and
                    seeing the blood of our enemies fall. We will keep going
                    until we can’t anymore and reach our dreams of drinking
                    hydromel with our fallen comrades in the eternal halls of
                    Valhall.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    [EngX] Engine
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    In a clear night sky, suddenly a very bright star appears
                    above kingdom 2173 sky in rise of kingdom. There are three
                    wise mem from far away who saw the stars and immediately
                    pack up food, wood, stone and GOLD and start their journey
                    to pay tribute to the New Star (King). They follow the Star,
                    and walk and walk and walk. It is a very far journey, and on
                    the way, many Panda, an Owl, a few Lion, a wolf, a sardine,
                    a bear join the 3 wise men to pay tribute to the king.
                    <br />
                    However, the journey is far, they have walked past the
                    jungle, mountain and desert and still have not arrived. The
                    3 wise men become very tired and can’t continue. Suddenly 1
                    of the wisemen come up with a new invention, ( an ENGINE).
                    With this new invention, they immediately build a truck and
                    put all the resources and animals onto the truck and drive
                    all the way to see the King
                    <br />
                    When they see the King, they give everything ( including
                    GOLD) to him , including the Engine. The King like the Panda
                    a lot and want to call his kingdom a Panda Kingdom. However,
                    one of the panda is very greedy for food , and eat all the
                    food. The King therefore become angry and decide to call the
                    kingdom “Engine” instead!!!!
                    <br />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    [PL73] Phoenix Legion
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    PL73 is a colorful bunch with many nationalities and from
                    different cultures. It is characterized by respect and
                    cohesion. With us the chat is active around the clock and
                    the ralleys are running. Activity, participation in alliance
                    events and in the KVK are important to me. It is a great
                    team in PL73 and I am very proud of all of them.
                    <br />
                    PL73 was founded by me and 4 good friends who had
                    experienced a lot in ROK before. And it was mostly not
                    positive. Enormous disputes within an alliance,
                    dictatorships and civil war. And we agreed, this one is our
                    last try. And it was worth it!
                    <br />
                    And the best thing is that the whole kingdom sticks
                    together! The foundation of PL73 was exactly the right
                    decision.
                    <br />- PL Redenix
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    [73SD] Send Dudes
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    There once was an alliance called heroic hunters
                    <br />
                    But then our leader….he kind of dumped us
                    <br />
                    So our reluctant new boss was a guy called Honkyy
                    <br />
                    Who let’s be honest is a bit of a donkey
                    <br />
                    (Although he would say he’s hung like a horse
                    <br />
                    But we all know that’s lies of course)
                    <br />
                    And then thankfully in the leadership team
                    <br />
                    We gained our very own White Queen
                    <br />
                    And some random guy named Cane
                    <br />
                    (Although Candy is his actual name)
                    <br />
                    Anyway, one day we were smashing forts
                    <br />
                    And suddenly had an awesome thought
                    <br />
                    “What is it that we always shout
                    <br />
                    When asking others to help us out?”
                    <br />
                    As we’re racing around the map
                    <br />
                    Running rallies and all of that
                    <br />
                    That’s it! We cried, we’ll be called SEND DUDES!
                    <br />
                    Although people please don’t get confused
                    <br />
                    Because nobody wants you to send them nudes…..
                    <br />
                    -Sassy
                    <br />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    [VN73] Việt Nam
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Every adventure is a new beginning. We are a bunch of
                    players from 5 previous servers, all from kd 2031. We were
                    close to flying to 2172 but luckily I saw kd 2173 open for 1
                    or 2 hours, that's when I decided kd 2173 is our home. From
                    the very beginning, Vn73 faced many problems (HN73 was the
                    predecessor of Vn73), typically many members including R4
                    and R5 of the forerunner flew to 2176 or some other kd and
                    threw away responsibility for this alliance.
                    <br />
                    So we (Dwou, Homelander, MrTi, Ớt, Winter, Út, Nhung Nhí,
                    Mad Dog, Lộc and Phước) are responsible for the development
                    of HN73, we decided to remove the name and take it as Vn73
                    as our inspiration. Since then, Vn73 has grown stronger and
                    stronger, together with the top 4 alliances, leading to a
                    very successful kvk.
                    <br />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alliances;
