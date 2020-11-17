import { Link } from 'gatsby';
import React from 'react';
import { FeatureContainer, FeatureButton , NavLink } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Most Popular Types Of Sushi</h1>
      <p>Makizushi is rolled sushi. For most of us, this is how we first experience sushi in restaurants. Makizushi includes some of the most popular dishes like the California Roll and the Dragon Roll. The California Roll features Crab, Nori (seaweed), cucumber and sesame seeds. A variation is the Rainbow Roll, which features an extra piece of fish on top of the California Roll. The Dragon Roll combines eel, crab and cucumber with an outer avocado wrap.</p>
      <NavLink to='https://momijimcminnville.hrpos.heartland.us/menu'>Order Now</NavLink>
    </FeatureContainer>
  );
};

export default Feature;