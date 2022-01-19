import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [nameInt, setNameInt] = useState(null);

  const { name } = file;

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    // remove the .jpg
    const fileNum = parseInt(name.split("").splice(0, 4).join(""));

    if (name.length === 8) {
      // PUT file on storage
      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          // remove the .jpg
          // const fileNum = parseInt(name.split("").splice(0, 4).join(""));
          const createdAt = timestamp();
          // Add to the collection of urls
          await collectionRef.add({ url, createdAt, fileNum });
          setNameInt(fileNum);
          setUrl(url);
        }
      );
    }
  }, [file, name]);

  return { progress, url, error, nameInt };
};

export default useStorage;
