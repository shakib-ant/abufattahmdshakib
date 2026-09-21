"use client";

import { useState, useEffect, useRef } from "react";

// Email Regex
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Alert Variants
export const alertVariants = {
  initial: { opacity: 0, y: -10, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.98 },
  transition: { duration: 0.35, ease: "easeOut" },
};

// Copy Hook
export const useCopyClipboard = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (e, id, text) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return { copiedId, handleCopy };
};

// Form Hook
export const useContactForm = (endpoint = "https://formsubmit.co/ajax/eb8f00b23a68eb55528e90ae53eb13f9") => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    secondaryEmail: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [responseMsg, setResponseMsg] = useState("");
  const timeoutRef = useRef(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearTimer();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearTimer();

    // Email Validation
    const trimmedEmail = formData.email.trim();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setStatus("error");
      setResponseMsg("Please enter a valid email address (e.g. name@example.com).");
      timeoutRef.current = setTimeout(() => {
        setStatus("idle");
        setResponseMsg("");
      }, 5000);
      return;
    }

    const trimmedSecondary = formData.secondaryEmail.trim();
    if (trimmedSecondary && !EMAIL_REGEX.test(trimmedSecondary)) {
      setStatus("error");
      setResponseMsg("Please enter a valid secondary email address (e.g. name@example.com).");
      timeoutRef.current = setTimeout(() => {
        setStatus("idle");
        setResponseMsg("");
      }, 5000);
      return;
    }

    setStatus("loading");
    setResponseMsg("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: trimmedEmail,
          secondaryEmail: trimmedSecondary || "N/A",
          _subject: formData.subject
            ? `Portfolio Message: ${formData.subject}`
            : `New Contact Form Message from ${formData.fullName}`,
          message: formData.message,
          _captcha: "false",
          _template: "table",
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus("success");
        setResponseMsg("Thank you! Your message has been sent successfully to abufattahmdshakib21@gmail.com.");
        setFormData({
          fullName: "",
          email: "",
          secondaryEmail: "",
          subject: "",
          message: "",
        });

        timeoutRef.current = setTimeout(() => {
          setStatus("idle");
          setResponseMsg("");
        }, 5000);
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setResponseMsg(
        "Oops! Something went wrong. You can also send an email directly to abufattahmdshakib21@gmail.com."
      );

      timeoutRef.current = setTimeout(() => {
        setStatus("idle");
        setResponseMsg("");
      }, 6000);
    }
  };

  return {
    formData,
    status,
    setStatus,
    responseMsg,
    clearTimer,
    handleChange,
    handleSubmit,
  };
};
