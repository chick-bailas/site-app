"use client";

import WebVitals from "@/components/WebVitals";
import { GoogleAnalytics } from "@next/third-parties/google";

const Analytics = () => {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <WebVitals />
    </>
  );
};

export default Analytics;
