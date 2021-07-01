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
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div>
            <p>In the beginning, God said 'let there be light, then he said and did a bunch of other stuff but what they don't tell you is that on the 8th day while he was smoking his pipe and musing on how long it would take for protoplasm to invent quantum computers so he could play some interesting mobile games in his downtime from running all existence ever he said...let there be Engine...and so we were born. Now I have absolutely no doubt in my mind this is all true but an alternative version says we were born in our current version around 7ish years ago in a game called Pirates where a strange fellow called AlanMilk was beating the crap outta everyone. There were quite a few of us that met there with peg legs and parrots and an odd fascination with gold but the story is too long to tell about their who, what and why and so we moved on to another game called the dawn of Gods where we stayed for a year or so before landing in King of Avalon (KOA) for about 3 years and gathered together some of the players you will know now, such as King Grey, Buff Dude, Lari, Dell Troll, Nacho, Suntzu Panda (me, me, I pick me!) and AlanMilk.</p>
            <p>I'll spend a bit of time on what happened in this game as this is where Engine was really forged in fire. if you haven't played KOA then my advice is in 2 parts...1 it is amazing. 2. don't play it, it's fucking expensive you don't realise how much cheaper ROKis until you played there.</p>
            <p>Engine arrived in the kingdom, like the new kid all eager and doe-eyed and basically, the more established big bullies came over a raped us daily for a couple of weeks without offering lube or dinner so as you can imagine we were both a bit sore and slightly pissed. So the credit cards were pulled out by one and all and over the next couple of months we were like the prisoner in the shower that suddenly turns on big bubba and tells him maybe he should pick up the soap instead...Mwahahaha. So basically we were top dog, and top dog for a very long while playing with some very cool people. Among them was a young apprentice called 'Az Assasins' he had a big wallet but very little concept on how to grow his account and fight so being good people we took him in and taught him the dark arts of KOA. so to quote pretty woman, 'Big mistake, HUGE!' as this was the start of an internal kingdom war that lasts from Christmas to summer aka the 6-month war. This basically consisted of everyone living under peace shields 24/7, in the middle of enemy territory and striking any cities that had accidentally dropped their shield. what was worse is you could speed hit using gems so you could strike from the other side of the map and hit within 2 seconds, and one hit literally killed all your troops. too much fun lol. So our tactic wasn't to focus on Az (that was Alan's daily job and he had way too much fun doing it) we literally destroyed all of Az's allies (who were afraid of him which is why they joined) until they had either no troops, no RSS or literally no money left to keep trying to recover. Eventually, Az lost everyone and sold his account and peace reigned for a while until we were finally able to leave the kingdom when the devs allowed migration...which brings us to ROK and our first days in 1746.</p>
            <p>So remember we came from a game where losing huge amounts of troops was the norm, and being bullied is not in the Engine mentality. 1746 had 2 jumper groups a Korean and an international alliance land in it with huge alliance numbers. we landed with 6 of us....it was so unfair, those alliances didn't know what was going to hit them. So confession time here. we spent quite a lot of effort in 2173 trying to keep or broker peace but in 1746 I think we must have had 4 big wars in the first 20 days. They wanted us to be small and keep quiet and go along with the plans they had developed between them for the kingdom and well...we were Engine so we didn't care about their plans we had our own. so fought and grew and fought some more with other players wanting to join us as a fighting alliance and became the second biggest alliance. This is where we met Da lion, didi, boa, madeye charlie, loup, Engine G and many others because the Korean alliance were a bit like another Az and we had to stand our ground against them and force our way into contention. I will not lie KVK 1 was hard, we won but man we were outgunned by kingdoms that have since gone on to become imperium and leaned on our allies a lot. so why aren't you in kingdom 1746 now I hear you ask ( i have very good hearing) well the short answer is our kingdom was kinda stolen by a high migration of Korean players while we slept. So a good general knows when to fight and when to retreat and we went to chisgules restart kingdom in 1723. we learnt a lot there and KVK 2 was a lot of fun. Alan did his usual trick of TP into the enemies territory and then goading them to the point they lost their mind and rallied him over and over. so funny to watch and while they seemed to really hate Alan the rest of us had great banter with them lol. Again we won! At the end of that KVK we moved to dragothiens 916 project and had probably the worse war ever, we fought two kingdoms at the same time, it lasted 6 hours, then we fought another</p>
            <p>2173 will be the last Engine home and we are so excited with the new friends we have made here and the old friends who want to come and be Engine again. So my final thoughts on Engine are this...why is it so special you have spent nearly 7 years playing with them, well first is friendship but the important things are that we are respectful to everyone, we cannot be bullied and we play smart and fun. if you attack one Engine you have attacked all Engine and we will zero ourselves in defence of you if that's what it takes. Love you all and welcome to Engine!!!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesTiles;