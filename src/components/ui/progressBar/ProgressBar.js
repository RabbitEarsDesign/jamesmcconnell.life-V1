import React, { useEffect } from "react";
import useStorage from "../../../hooks/use-storage";

// CSS
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div
      className={classes.progressBar}
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></div>
  );
};

export default ProgressBar;
