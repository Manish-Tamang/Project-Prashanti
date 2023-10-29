import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const AdmissionForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Fill the required field for Admission
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Parent's Full Name"
            name="Parents Name"
            autoComplete="name"
          />
          <TextInput label="Mobile Number" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message (Optional)" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Grade</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="PG – Nursery" name="Class" value="25" />
              <RadioInput label="LKG – One" name="Class" value="50" />
              <RadioInput label="Two – Five" name="Class" value="100" />
              <RadioInput label="Six - Nine" name="Class" value="150" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Submit
        </Button>
      </form>
    </FadeIn>
  );
};

export default AdmissionForm;
