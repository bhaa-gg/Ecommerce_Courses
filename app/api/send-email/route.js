import { Resend } from 'resend';
import { EmailTemplate } from '../../_component/email-template';

const resend = new Resend(process.env.NEXT_PULBIC_SEND_MAIL);

export const POST = async (request) => {
  const { to, userName } = await request.json();
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [to],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: userName }),
    });
    return Response.json(data);
  } catch (err) {
    return Response.json(err);
  }

};
