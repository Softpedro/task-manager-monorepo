"use client";

import { Form, FormProvider } from "ui";

export default function HomePage() {
  return (
    <div className="p-6">
      <FormProvider>
        <Form
          fields={[
            { name: "name", placeholder: "Name" },
            { name: "email", placeholder: "Email" }
          ]}
          onSubmit={(data) => console.log(data)}
        />
      </FormProvider>
    </div>
  );
}
