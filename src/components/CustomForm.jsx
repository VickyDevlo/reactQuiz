import React from "react";
import { Button } from "./ui/button";
import { useForm } from "@/hooks/useForm";
import { FormCard } from "./FormCard";

const CustomForm = ({ setIsLogin }) => {
  const initialData = { name: "", email: "", password: "" };

  const { formData, setFormData, handleChange, handleReset } =
    useForm(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLogin(true);
    setFormData(initialData);
  };

  return (
    <FormCard>
      <h3 className="text-center mb-4 text-2xl font-semibold">Sign Up Form</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 justify-center"
      >
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border rounded px-2 py-0.5 w-full placeholder:text-sm font-medium"
        />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border rounded px-2 py-0.5 w-full placeholder:text-sm font-medium"
        />
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="Your Password"
          className="border rounded px-2 py-0.5 w-full placeholder:text-sm font-medium"
        />
        <Button
          type="submit"
          className={"cursor-pointer mt-4 uppercase tracking-wider"}
        >
          Sign In
        </Button>
        <Button
          onClick={handleReset}
          variant={"destructive"}
          type="reset"
          className={"cursor-pointer uppercase tracking-wider"}
        >
          Reset
        </Button>
      </form>
    </FormCard>
  );
};

export default CustomForm;
