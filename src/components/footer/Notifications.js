import React from "react";
import exclamation from "../../icons/exclamation.svg";
import bulb from "../../icons/bulb.svg";
import bell from "../../icons/bell.svg";

function Notifications() {
  return (
    <div className="Notifications">
      <div className="errors">
        <img src={exclamation} alt="Exclamation" />
      </div>
      <div className="notify">
        <img src={bulb} alt="Clock" />
        <img src={bell} alt="Notifications" />
      </div>
    </div>
  );
}

export default Notifications;
