import React, { useEffect } from "react";

const WidgetTest = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://callshivai.com/widget2.js?agentId=6937bff1222bfd06ebdf0194&agentName=ShivAI+Assistant&language=Multi-lingual&primaryColor=%234b5563&secondaryColor=%236b7280&accentColor=%23374151&position=bottom-right&chatWidth=380px&chatHeight=320px&autoOpen=false&voiceEnabled=true&companyName=Marketing+Agent&companyDescription=AI-Powered+Support+-+We+offer+24%2F7+voice+support+to+handle+your+business+calls+efficiently+and+professionally.&welcomeMessage=Hi%21+I%27m+Marketing+Agent.+How+can+I+help+you+today%3F&v=1768222759598";

    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="shivai-widget-container"></div>;
};

export default WidgetTest;

