import { useCallback, useState } from "react";
import { toast } from "react-toastify";

const useSendRequestForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequestFormByEmail = useCallback(async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send-request-form-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "New Contact Request Form: ",
          html: "<pre>" + JSON.stringify(formData) + "</pre>",
        }),
      });

      if (response.status === 200) {
        toast.success(
          "Your request has been successfully sent. We will get back to you soon."
        );
        return true;
      } else {
        const errorData = await response.json();

        if (response.status === 400) {
          setError("Bad Request. Please check your form data.");
        } else if (response.status === 408) {
          setError("Request Timed Out. Looks like you are offline.");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
        return false;
      }
    } catch (err) {
      setError("Error: " + err.message);
      toast.error("Error: " + err.message);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, sendRequestFormByEmail };
};

export default useSendRequestForm;
