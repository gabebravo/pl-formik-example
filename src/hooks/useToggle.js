import React from 'react';

function useToggle(initValue, userIsValid, resetForm) {
  const [expanded, setExpanded] = React.useState(initValue);

  const resetExpanded = React.useCallback(() => {
    setExpanded(initValue);
  }, [initValue]);

  React.useEffect(() => {
    resetExpanded();
  }, [resetForm, resetExpanded]);

  function toggle() {
    userIsValid && setExpanded(prevVal => !prevVal);
  }

  return { expanded, toggle };
}

export default useToggle;
