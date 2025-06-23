import { orderCreated, orderDelivered, orderShipped, OTPemailTemplate, userActivatedEmailTempalate } from "./email.template.js";
import { eTransporter } from "./email.transport.js";

export const userActivatedEmail = async (obj) => {
    const info = await eTransporter().sendMail(
        userActivatedEmailTempalate(obj)
    );
    console.log(info.messageId);
    return info.messageId;
};

export const OTPemail = async (obj) => {
    const info = await eTransporter().sendMail(OTPemailTemplate(obj))
    return info.messageId;
}


export const createOrderEmail = async (obj) => {
    const info = await eTransporter().sendMail(orderCreated(obj))
    return info.messageId;
}


export const shipOrderEmail = async (obj) => {
    const info = await eTransporter().sendMail(orderShipped(obj))
    return info.messageId;
}

export const deliveredOrderEmail = async (obj) => {
    const info = await eTransporter().sendMail(orderDelivered(obj))
    return info.messageId;
}