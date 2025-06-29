import { Resend } from 'resend';
import { mainManInterface } from 'src/interfaces/mailmanInterface';

const resend = new Resend(process.env.RESEND_API_KEY!);


export async function sendMail(props: mainManInterface) {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: props.to,
    subject: 'Hello World',
    html : `
  <div style="background-color: #f4f4f4; padding: 40px 0; font-family: Arial, sans-serif;">
    <table align="center" cellpadding="0" cellspacing="0" width="600" 
      style="border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; 
      box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <tr>
        <td align="center" bgcolor="#4CAF50" style="padding: 40px 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 32px;">🎉 Welcome to Fit App!</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 40px 30px 30px 30px; text-align: center;">
          <p style="font-size: 18px; color: #333333; margin: 0 0 20px 0;">
            Congratulations on taking the first step towards a healthier lifestyle! 💪
          </p>
          <p style="font-size: 16px; color: #555555; margin: 0 0 30px 0;">
            <strong>Fit App</strong> is here to help you take care of your health, plan your workouts, and track your progress in an easy and motivating way.
          </p>
          <a href="https://yourfitapp.com" 
            style="display: inline-block; padding: 12px 24px; background-color: #4CAF50; color: #ffffff; 
            text-decoration: none; border-radius: 4px; font-size: 16px;">
            Get Started
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px; text-align: center; font-size: 12px; color: #aaaaaa;">
          &copy; 2025 Fit App. All rights reserved.
        </td>
      </tr>
    </table>
  </div>
`
  }); 

  if (error) {
    console.error({ error });
    return;
  }

  console.log({ data });
}