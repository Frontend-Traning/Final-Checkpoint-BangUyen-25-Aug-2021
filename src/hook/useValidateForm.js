import { useCallback, useState } from 'react';

const useValidateForm = ({ validate, initialValue = {} }) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState({});

  const handleOnchange = useCallback(
    (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
      setError(validate({ [e.target.name]: e.target.value }));
    },
    [value, validate]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (Object.keys().length) {
        setError(validate(value));
      } else {
        setError({ require: 'This field is required' });
      }
    },
    [value, validate]
  );
  return [value, error, handleOnchange, handleSubmit];
};

export default useValidateForm;
