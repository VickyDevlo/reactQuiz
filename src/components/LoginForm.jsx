import { useForm } from "@/hooks/useForm";
import React from "react";
import { Button } from "./ui/button";
import { FormCard } from "./FormCard";

const LoginForm = () => {
  const initialData = { email: "", password: "" };

  const { formData, setFormData, handleChange } = useForm(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Successfully...");
    setFormData(initialData);
  };
  return (
    <FormCard>
      <h3 className="text-center mb-4 text-2xl font-semibold">Login Form</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 justify-center"
      >
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border rounded px-2 py-0.5 placeholder:text-sm font-medium"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Your Password"
          className="border rounded px-2 py-0.5 placeholder:text-sm font-medium"
        />

        <Button
          type="submit"
          className={"cursor-pointer mt-4 uppercase tracking-wider"}
        >
          Login
        </Button>
      </form>
    </FormCard>
  );
};

export default LoginForm;
