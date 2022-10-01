import React from "react";
import exclamation from "../../icons/exclamation.svg";
import clock from "../../icons/clock.svg";
import bell from "../../icons/bell.svg";

function Notifications() {
  return (
    <div className="Notifications">
      <div className="errors">
        <img src={exclamation} alt="Exclamation" />
      </div>
      <div className="notify">
        <img src={clock} alt="Clock" />
        <img src={bell} alt="Notifications" />
      </div>
    </div>
  );
}

export default Notifications;
