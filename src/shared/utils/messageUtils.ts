import { message } from "ant-design-vue";

export const successMessage = (detail: string) => message.success(detail, 2);
export const errorMessage = (detail: string) => message.error(detail, 4);
