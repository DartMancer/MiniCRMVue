import { Rule } from "ant-design-vue/es/form";

export const validateRules: Record<string, Rule[]> = {
  name: [
    {
      required: true,
      trigger: "change",
      message: "Поле обязательно для заполнения",
    },
  ],

  email: [
    {
      type: "email",
      trigger: ["change", "blur"],
      message: "Некорректный Email",
    },
    {
      required: true,
      trigger: ["change", "blur"],
      message: "Поле обязательно для заполнения",
    },
  ],
};
