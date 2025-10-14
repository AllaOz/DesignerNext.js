import React, { useState } from 'react';
import styles from '../Form/form.module.scss';

export default function CreateForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agree: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.agree) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields and agree to the privacy policy.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will contact you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          agree: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (

    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label className={styles.formLabel} htmlFor="name">Name<span className={styles.required}>*</span>:</label>
      <input className={styles.input}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <label className={styles.formLabel} htmlFor="email">Email<span className={styles.required}>*</span>:</label>
      <input className={styles.input}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@gmail.com"
      />
      <label className={styles.formLabel} htmlFor="phone">Phone:</label>
      <input className={styles.input}
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        I have read and agree to the Privacy Policy
      </label>

      {/* Status message */}
      {submitStatus && (
        <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
          {submitStatus.message}
        </div>
      )}

      <button
        className={styles.learnMoreBtn}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  )
}