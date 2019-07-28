import React from 'react';

function useToggle(initValue) {
  const [expanded, setExpanded] = React.useState(initValue);

  function toggle() {
    setExpanded(prevVal => !prevVal);
  }

  return { expanded, toggle };
}

export default useToggle;
