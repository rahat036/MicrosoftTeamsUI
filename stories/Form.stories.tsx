import React from "react";
import range from "lodash/range";
import uniqueId from "lodash/uniqueId";
import fakerEN from "faker/locale/en_US";
import fakerFA from "faker/locale/fa";

const fake = (template: string) => {
  return { "en-US": fakerEN.fake(template), fa: fakerFA.fake(template) };
};

import { actions } from "@storybook/addon-actions";
import { object } from "@storybook/addon-knobs";

import { Form, TInputWidth, TFormErrors } from "../src/components/Form/Form";

export default {
  title: "UI Templates/Forms",
  component: Form,
};

const eventsFromNames = actions("onInteraction");

const formKnobGroupID = "Form";

const kitchenSinkConfig = {
  submit: {
    en: "Okay",
    fa: "تایید",
  },
  cancel: {
    en: "Cancel",
    fa: "لغو",
  },
  headerSection: {
    title: fake("{{company.catchPhrase}}"),
    preface: fake("{{lorem.sentences}}"),
  },
  sections: [
    {
      title: fake("{{company.catchPhrase}}"),
      preface: fake("{{lorem.sentence}}"),
      inputGroups: [
        {
          type: "text-inputs" as "text-inputs",
          fields: range(2).map((_) => ({
            type: "text" as "text",
            title: fake("{{commerce.productAdjective}} {{commerce.product}}"),
            width: "split" as TInputWidth,
            inputId: uniqueId("f"),
            placeholder: fake("{{commerce.productMaterial}}"),
          })),
        },
        {
          type: "text-inputs" as "text-inputs",
          fields: [
            {
              type: "dropdown" as "dropdown",
              title: fake("{{commerce.productAdjective}} {{commerce.product}}"),
              width: "split" as TInputWidth,
              inputId: uniqueId("f"),
              multiple: false,
              options: range(2 + Math.random() * 5).map(() => ({
                title: fake("{{commerce.productMaterial}}"),
                value: uniqueId("option__"),
              })),
            },
            {
              type: "text" as "text",
              title: fake("{{commerce.product}}"),
              width: "split" as TInputWidth,
              inputId: uniqueId("f"),
              ...(Math.random() > 0.5
                ? { placeholder: fake("{{commerce.productMaterial}}") }
                : {}),
            },
            {
              type: "text" as "text",
              title: fake("{{commerce.productAdjective}} {{commerce.product}}"),
              width: "split" as TInputWidth,
              inputId: uniqueId("f"),
              ...(Math.random() > 0.5
                ? { placeholder: fake("{{commerce.productMaterial}}") }
                : {}),
            },
          ],
        },
        {
          type: "checkboxes" as "checkboxes",
          title: fake("{{commerce.productAdjective}} {{commerce.product}}"),
          inputId: uniqueId("f"),
          options: range(2 + Math.random() * 5).map(() => ({
            title: fake("{{commerce.productMaterial}}"),
            value: uniqueId("option__"),
          })),
        },
        {
          type: "text-inputs" as "text-inputs",
          fields: range(1).map((_) => ({
            type: "text" as "text",
            title: fake("{{commerce.productAdjective}} {{commerce.product}}"),
            width: "full" as TInputWidth,
            inputId: uniqueId("f"),
            ...(Math.random() > 0.5
              ? { placeholder: fake("{{commerce.productMaterial}}") }
              : {}),
          })),
        },
        {
          type: "radio-buttons" as "radio-buttons",
          title: fake("{{commerce.productAdjective}} {{commerce.product}}"),
          inputId: uniqueId("f"),
          options: range(2 + Math.random() * 5).map(() => ({
            title: fake("{{commerce.productMaterial}}"),
            value: uniqueId("option__"),
          })),
        },
        {
          type: "dropdown" as "dropdown",
          title: fake("{{commerce.productAdjective}} {{commerce.product}}"),
          inputId: uniqueId("f"),
          multiple: true,
          options: range(2 + Math.random() * 5).map(() => ({
            title: fake("{{commerce.productMaterial}}"),
            value: uniqueId("option__"),
          })),
        },
      ],
    },
  ],
};

export const KitchenSink = () => {
  return (
    <Form
      {...object("Configuration", kitchenSinkConfig, formKnobGroupID)}
      {...eventsFromNames}
    />
  );
};

KitchenSink.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/EOsbapNvZgEwcA1mShswfh/?node-id=1%3A34",
  },
};

export const KitchenSinkWithErrors = () => {
  const kitchenSinkWithErrorsConfig = Object.assign(
    {
      errors: range(32).reduce((acc: TFormErrors, i) => {
        acc[`f${i}`] = fake("{{lorem.words}}");
        return acc;
      }, {}),
      topError: fake("{{lorem.sentence}}"),
    },
    kitchenSinkConfig
  );
  return (
    <Form
      {...object("Configuration", kitchenSinkWithErrorsConfig, formKnobGroupID)}
      {...eventsFromNames}
    />
  );
};

KitchenSinkWithErrors.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/EOsbapNvZgEwcA1mShswfh/?node-id=1%3A34",
  },
};
