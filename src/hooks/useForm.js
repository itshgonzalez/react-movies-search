import { useState } from "react";

function useForm({ inputKeywords = "" }) {
  const [keywords, setKeywords] = useState(inputKeywords);

  function changeKeywords({ keywords }) {
    setKeywords(keywords);
  }
  return [keywords, changeKeywords];
}

export default useForm;
