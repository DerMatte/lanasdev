// import Head from "next/head";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import cn from "classnames";
import i18n from "lib/i18n";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contactform = ({ locale }) => {
  const [state, handleSubmit] = useForm("mgedprdn");
  if (state.succeeded) {
    return (
      <p>
        <span className="underline decoration-amber-500 underline-offset-1">
          {i18n.contact.success[locale]}
        </span>{" "}
        {i18n.contact.success2[locale]}
      </p>
    );
  }
  const buttonClass =
    " border px-4 rounded-md py-2 border-midnight hover:bg-midnight hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-midnight transition-all duration-300";
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-72 flex-col dark:text-midnight"
    >
      <fieldset className="flex flex-col ">
        {/* <label className="" htmlFor="name">
          {i18n.contact.name[locale]}
        </label> */}
        <input
          id="name"
          type="name"
          name="name"
          placeholder={i18n.contact.name[locale]}
          minLength={2}
          autoComplete="name"
          className="form-input my-2 rounded-md px-4 py-3 invalid:ring-red-500 placeholder:focus:italic focus:valid:ring-green-400"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </fieldset>
      <fieldset className="flex flex-col">
        {/* <label className="" htmlFor="email">
          {i18n.contact.email[locale]}
        </label> */}
        <input
          id="email"
          type="email"
          name="email"
          placeholder={i18n.contact.email[locale]}
          minLength={3}
          autoComplete="email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          className="form-input my-2 rounded-md px-4 py-3 invalid:ring-red-500 placeholder:focus:italic focus:valid:ring-green-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </fieldset>
      <fieldset className="flex flex-col">
        {/* <label className="" htmlFor="message">
          {i18n.contact.message[locale]}
        </label> */}
        <textarea
          id="message"
          name="message"
          placeholder={i18n.contact.message[locale]}
          minLength={4}
          className="form-textarea mt-2 mb-4 rounded-md pt-3 pb-12 placeholder:focus:italic focus:valid:ring-green-400 focus:invalid:ring-red-500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </fieldset>
      <button
        type="submit"
        disabled={state.submitting}
        className={cn(buttonClass)}
      >
        {i18n.contact.submit[locale]}
      </button>
    </form>
  );
};

export default Contactform;
