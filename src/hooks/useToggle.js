import React from 'react';

function useToggle(initValue, userIsValid) {
  const [expanded, setExpanded] = React.useState(initValue);

  function toggle() {
    userIsValid && setExpanded(prevVal => !prevVal);
  }

  return { expanded, toggle };
}

export default useToggle;
