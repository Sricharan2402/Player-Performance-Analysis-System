import React, { useEffect, useRef } from "react";

export const PlayerStats = () => {
  const vizContainerRef = useRef();
  const url =
    "https://public.tableau.com/views/CFprofiletemplate/Playerprofile";
  const initViz = () => {
    new window.tableau.Viz(vizContainerRef.current, url);
  };
  useEffect(() => {
    initViz();
  }, []);
  return <div className="vizContainer" ref={vizContainerRef}></div>;
};

export const TeamStats = () => {
  const vizContainerRef = useRef();
  const url =
    "https://public.tableau.com/views/CFprofiletemplate/Playerprofile";
  const initViz = () => {
    new window.tableau.Viz(vizContainerRef.current, url);
  };
  useEffect(() => {
    initViz();
  }, []);
  return <div className="vizContainer" ref={vizContainerRef}></div>;
};

export const MatchReport = () => {
  const vizContainerRef = useRef();
  const url =
    "https://public.tableau.com/views/CFprofiletemplate/Playerprofile";
  const initViz = () => {
    new window.tableau.Viz(vizContainerRef.current, url);
  };
  useEffect(() => {
    initViz();
  }, []);
  return <div className="vizContainer" ref={vizContainerRef}></div>;
};
