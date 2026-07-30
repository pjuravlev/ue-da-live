import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "../hpe-input-group/hpe-input-group.js";
import "../hpe-inputs/hpe-checkbox/hpe-checkbox.js";
import "../hpe-inputs/hpe-input/hpe-input.js";
import "../hpe-inputs/hpe-radio/hpe-radio.js";
import "../hpe-inputs/hpe-select/hpe-select.js";
import "../hpe-inputs/hpe-textarea/hpe-textarea.js";
import "./hpe-form.js";

type FieldType =
  | "input"
  | "select"
  | "textarea"
  | "checkbox-group"
  | "radio-group";

type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type ChoiceOption = {
  label: string;
  value: string;
  checked: boolean;
  disabled: boolean;
};

type FieldConfig = {
  type: FieldType;
  name: string;
  label: string;
  placeholder?: string;
  descriptionText?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  options?: SelectOption[];
  choices?: ChoiceOption[];
  orientation?: "horizontal" | "vertical";
};

type StoryArgs = {
  heading: string;
  description: string;
  submitLabel: string;
  fields: FieldConfig[];
};

const defaultFields: FieldConfig[] = [
  {
    type: "input",
    name: "full-name",
    label: "Full name",
    placeholder: "Value...",
    descriptionText: "Description (Optional)",
    required: true,
    disabled: false,
  },
  {
    type: "select",
    name: "country",
    label: "Country",
    descriptionText: "Description (Optional)",
    options: [
      { label: "Select an option", value: "" },
      { label: "United States", value: "us" },
      { label: "United Kingdom", value: "uk" },
      { label: "Canada", value: "ca" },
    ],
    disabled: false,
  },
  {
    type: "textarea",
    name: "details",
    label: "Additional details",
    placeholder: "Value...",
    descriptionText: "Description (Optional)",
    required: true,
    disabled: false,
  },
  {
    type: "checkbox-group",
    name: "updates",
    label: "Updates",
    orientation: "horizontal",
    choices: [
      {
        label: "Email updates",
        value: "email",
        checked: true,
        disabled: false,
      },
      {
        label: "Event invites",
        value: "events",
        checked: false,
        disabled: false,
      },
    ],
  },
  {
    type: "radio-group",
    name: "contact-method",
    label: "Contact method",
    orientation: "horizontal",
    choices: [
      {
        label: "Email",
        value: "email",
        checked: true,
        disabled: false,
      },
      {
        label: "Phone",
        value: "phone",
        checked: false,
        disabled: false,
      },
    ],
  },
];

const meta: Meta<StoryArgs> = {
  title: "Elements/Form",
  component: "hpe-form",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text", description: "Form heading text" },
    description: { control: "text", description: "Form description text" },
    submitLabel: {
      control: "text",
      description: "Default primary action label",
    },
    fields: {
      control: { type: "object" },
      description:
        "Array of form field configs. Add, remove, or edit items in Storybook controls to change the rendered form.",
      table: {
        defaultValue: {
          summary: JSON.stringify(defaultFields),
        },
      },
    },
  },

  parameters: {
    docs: {
      description: {
        component: "Form is an HPE Web Design System component. Use these stories to explore its public API, variants, slots, and interaction behavior. Forms are used to collect structured user input for submission or configuration. Combine clear labels, helper text, and validation to support accurate completion.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  args: {
    heading: "Heading",
    description:
      "Description text providing context for the form and its fields. This can be a few sentences long.",
    submitLabel: "Submit",
    fields: defaultFields,
  },
  render: (args) => html`
    <div style="width: 100%; max-width: 992px; margin: 0 auto;">
      <hpe-form
        heading=${args.heading}
        description=${args.description}
        submit-label=${args.submitLabel}
      >
        ${args.fields.map((field, index) => {
          const descriptionText =
            field.descriptionText ?? "Description (Optional)";
          const isRequired = field.required ?? true;
          const isDisabled = field.disabled ?? false;

          switch (field.type) {
            case "input":
              return html`
                <hpe-input
                  name=${field.name}
                  label=${field.label}
                  value=${field.value ?? ""}
                  placeholder=${field.placeholder ?? "Value..."}
                  description-text=${descriptionText}
                  ?required=${isRequired}
                  ?disabled=${isDisabled}
                ></hpe-input>
              `;
            case "select":
              return html`
                <hpe-select
                  name=${field.name}
                  label=${field.label}
                  value=${field.value ?? ""}
                  description-text=${descriptionText}
                  ?required=${isRequired}
                  ?disabled=${isDisabled}
                >
                  ${(field.options ?? []).map(
                    (option) => html`
                      <option
                        value=${option.value}
                        ?disabled=${option.disabled ?? false}
                      >
                        ${option.label}
                      </option>
                    `,
                  )}
                </hpe-select>
              `;
            case "textarea":
              return html`
                <hpe-textarea
                  name=${field.name}
                  label=${field.label}
                  value=${field.value ?? ""}
                  placeholder=${field.placeholder ?? "Value..."}
                  description-text=${descriptionText}
                  ?required=${isRequired}
                  ?disabled=${isDisabled}
                ></hpe-textarea>
              `;
            case "checkbox-group":
              return html`
                <hpe-input-group
                  orientation=${field.orientation ?? "horizontal"}
                >
                  ${(field.choices ?? []).map(
                    (choice) => html`
                      <hpe-checkbox
                        name=${field.name}
                        value=${choice.value}
                        label=${choice.label}
                        ?checked=${choice.checked}
                        ?disabled=${choice.disabled}
                      ></hpe-checkbox>
                    `,
                  )}
                </hpe-input-group>
              `;
            case "radio-group":
              return html`
                <hpe-input-group
                  orientation=${field.orientation ?? "horizontal"}
                >
                  ${(field.choices ?? []).map(
                    (choice) => html`
                      <hpe-radio
                        name=${field.name || `radio-group-${index}`}
                        value=${choice.value}
                        label=${choice.label}
                        ?checked=${choice.checked}
                        ?disabled=${choice.disabled}
                      ></hpe-radio>
                    `,
                  )}
                </hpe-input-group>
              `;
            default:
              return html``;
          }
        })}
      </hpe-form>
    </div>
  `,
};
