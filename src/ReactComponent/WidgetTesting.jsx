import React, { useEffect } from "react";

const WidgetTest = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src ="https://callshivai.com/widget2.js?agentId=696797885985f238d02cc4de";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="shivai-widget-container"></div>;
};

export default WidgetTest;
