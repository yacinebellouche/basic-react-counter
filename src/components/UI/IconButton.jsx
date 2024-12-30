import { memo } from "react";
import { log } from "../../log.js";

const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log("<IconButton /> rendered", 2);

  const Icon = icon;
  //allows to compare the old prop value woth the new value passed by the parent component, if there is a different the component will re-render else it wouldn't (unless there is a change in the component itself) always be carful of the functions because when re-rendring a component the functions get re-created which will give them new pointers
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});
export default IconButton;
