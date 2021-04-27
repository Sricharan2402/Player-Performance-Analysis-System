import React, { useEffect, useRef } from "react";

export const PlayerStats = () => {
  const vizContainerRef = useRef();
  const url =
    "https://public.tableau.com/views/CFprofiletemplate/Playerprofile?:language=en&:embed=y&:toolbar=n&:embed_code_version=3&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link";
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
    "https://public.tableau.com/views/IndianSuperLeagueteamrankingacrossvariousmetrics/MainMenu?:language=en&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link";
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
    "https://public.tableau.com/views/UCL2015FINAL-Barcelonapassmap/Dashboard1?:language=en&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link";
  const initViz = () => {
    new window.tableau.Viz(vizContainerRef.current, url);
  };
  useEffect(() => {
    initViz();
  }, []);
  return <div className="vizContainer" ref={vizContainerRef}></div>;
};
