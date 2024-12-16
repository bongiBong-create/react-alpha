import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../entites/product";
import { BtnSubmit } from "../../../shared/ui/form/ui/btn-submit";

import styles from "./index.module.css";

export const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Очистка ошибок при изменении значений
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Проверка на пустое название товара
    if (!formData.title) {
      newErrors.title = "Название товара не может быть пустым";
    }

    // Проверка на цену товара
    if (!formData.price) {
      newErrors.price = "Цена товара не может быть пустой";
    } else if (isNaN(formData.price)) {
      newErrors.price = "Цена должна быть числом";
    }

    // Проверка на категорию
    if (!formData.category) {
      newErrors.category = "Выберите категорию";
    }

    // Проверка на описание
    if (!formData.description) {
      newErrors.description = "Описание товара не может быть пустым";
    }

    setErrors(newErrors);

    // Если есть ошибки, возвращаем false
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = (e) => {
    e.preventDefault();

    // Если форма валидна, отправляем данные
    if (validateForm()) {
      dispatch(createProduct(formData));
      setFormData({
        title: "",
        price: "",
        category: "",
        description: "",
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div>
        <label htmlFor="title">Название товара</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Введите название"
        />
        {errors.title && <p className={styles.error}>{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="price">Цена товара</label>
        <input
          name="price"
          type="text"
          value={formData.price}
          onChange={handleChange}
          placeholder="Введите цену"
        />
        {errors.price && <p className={styles.error}>{errors.price}</p>}
      </div>

      <div>
        <label htmlFor="category">Выберите категорию</label>
        <input
          list="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <datalist id="category">
          <option value="jewelery" />
          <option value="electronics" />
          <option value="men's clothing" />
          <option value="women's clothing" />
        </datalist>
        {errors.category && <p className={styles.error}>{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="description">Описание товара</label>
        <textarea
          name="description"
          id="description"
          cols="40"
          rows="5"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        {errors.description && (
          <p className={styles.error}>{errors.description}</p>
        )}
      </div>

      <BtnSubmit type="submit">Добавить</BtnSubmit>
    </form>
  );
};
