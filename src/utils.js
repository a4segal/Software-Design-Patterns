import React from "react";

export function useStickyState(defaultValue, key) {
  const keyPrefix = "RS_"; //React State's prefix
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(keyPrefix + key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(keyPrefix + key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
