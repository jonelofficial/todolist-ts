import { useState } from "react";

const useDisclosure = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(false);
  };

  const stopLoading = () => {
    setLoading(true);
  };
  return { loading, startLoading, stopLoading };
};

export default useDisclosure;
