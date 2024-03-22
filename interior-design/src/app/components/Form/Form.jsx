import React, { useState } from 'react';
import styles from '../Form/form.module.scss';

export default function CreateForm()
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        agree: false
      });
    
      const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    return (

<form className={styles.formContainer} onSubmit={handleSubmit}>
            <label htmlFor="name">Name<span className={styles.required}>*</span>:</label>
        <input className={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <label htmlFor="name">Email<span className={styles.required}>*</span>:</label>
        <input className={styles.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />
        <label htmlFor="name">Phone:</label>
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
        <button className={styles.learnMoreBtn} type="submit">Submit</button>
      </form>
    )
}