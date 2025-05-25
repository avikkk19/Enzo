import React, { useEffect } from "react";
import Section from "../components/Section";

const Tech = () => {
  useEffect(() => {
    const initTwitterWidgets = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.ready(() => {
          console.log("✅ Twitter widgets ready");
          window.twttr.widgets.load();
        });
      } else {
        console.warn("❌ Twitter widgets not ready yet");
      }
    };

    const existingScript = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);

      script.onload = () => {
        console.log("✅ Twitter widget script loaded");
        initTwitterWidgets();
      };

      script.onerror = () => {
        console.error("❌ Failed to load Twitter script");
      };
    } else {
      initTwitterWidgets();
    }
  }, []);

  return (
    <Section>
      <div className="container relative mx-auto lg:my-20 p-4" id="Tech">
        <h1 className="text-3xl font-bold mb-5">Twitter Timeline</h1>

       <a className="twitter-timeline" href="https://twitter.com/enzofordddddd">
  Tweets by @enzofordddddd
</a>
        <p className="text-lg text-gray-700 mb-10">
          Follow me on Twitter to stay updated with my latest projects and thoughts.        

        </p>
        <div className="w-[19rem] max-lg:w-full h-2 px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"></div>
      </div>
    </Section>
  );
};

export default Tech;
