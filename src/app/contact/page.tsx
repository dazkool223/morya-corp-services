import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSer7cxXJhI_FoY_6y_eOpTCLweVnNY2gMbtvzNcnhmyDikctg/viewform?embedded=true"
        className="contact-form"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Contact;
