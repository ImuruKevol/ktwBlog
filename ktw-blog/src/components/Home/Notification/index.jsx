import React, { useState } from "react";

import "./Notification.scss";

const Notification = () => {
  // todo store state로 바꾸기
  const [show, setShow] = useState(false);
  
  return (
    show && <section className="notification">
      <strong>Notification</strong>
      <div>
        {/* map으로 컴포넌트 뿌리기 */}
      </div>
    </section>
  );
}

export default Notification;
