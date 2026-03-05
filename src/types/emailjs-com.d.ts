declare module "emailjs-com" {
  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, unknown>,
    userID: string,
  ): Promise<EmailJSResponseStatus>;

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement | string,
    userID: string,
  ): Promise<EmailJSResponseStatus>;

  export function init(userID: string): void;
}
