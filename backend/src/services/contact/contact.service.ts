import { sendContactUsEmail } from "../../utils/utils";

class ContactService {

  async postMessage(req: any, res: any) {
    try {
      let msg = "Email:" + req.body.email;
      req.body?.company ? msg += "\n" + "Company: " + req.body.company : "";
      req.body?.fullName ? msg += "\n" + "FullName: " + req.body.fullName : "";
      req.body?.phone ? msg += "\n" + "Phone: " + req.body.phone : "";
      req.body?.department ? msg += "\n" + "Department: " + req.body.department : "";
      req.body?.orderNo ? msg += "\n" + "Order No: " + req.body.orderNo : "";
      req.body?.msg ? msg += "\n" + "Message: " + req.body.msg : "";
      const mail = await sendContactUsEmail(process.env.contactMail, "Contact From Customer", msg);

      return res.json({
        msg: "Contact mail is sent successfully",
        status: 1
      });
    } catch (err: any) {
      return res.status(400).json({
        message: err.toString(),
        success: false
      })
      // logger.postErrorLogger.log('error', 'Error User Lists', err.toString());
    }
  };

}

export const contactService = new ContactService();