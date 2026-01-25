import { z } from 'astro:schema';
import { defineAction } from 'astro:actions';
import { Resend } from 'resend';
import { RESEND_API_KEY,FROM_EMAIL, TO_EMAIL } from 'astro:env/server';

const resend = new Resend(RESEND_API_KEY);


export const server = {
    send: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string().min(2, 'Name too short.').max(50, 'Name too long.'),
            mail: z.string().email('Invalid email.').max(75),
            message: z.string().min(10, 'Min 10 characters.').max(200, 'Max 200 characters.'),
            website: z.string().optional()
        }),
        handler: async ( input ) => {
            try{
                const { name, mail, message, website } = input;
                
                
                // dentro del handler
                console.log('website recibido:', JSON.stringify(website));
                if (website && website.trim() !== '') {
                    console.log('🪤 Honeypot activado → mail NO enviado');
                    return { success: false, message: 'Honeypot activado' };
                  }


                function sanitizeText ( text: string ): string {
                    return text.trim()
                                    .replace(/[<>]/g, '')  
                                    .replace(/['"]/g, '')  
                                    .replace(/javascript:/gi, '')  
                                    .replace(/on\w+=/gi, '')  
                                    .slice(0, 200);  
                }

                
                const cleanedName = sanitizeText(name);
                const cleanedMail = sanitizeText(mail);
                const cleanedMessage = sanitizeText(message);

                await resend.emails.send({
                    from: FROM_EMAIL,
                    to: TO_EMAIL,
                    subject: `${cleanedName} desea negociar.`,
                    html: `<strong>Mail: </strong>${cleanedMail} <br/> <strong>Mensaje: </strong> <br/> ${cleanedMessage}`,
                });
                
                return { success: true, message: 'Message sent successfully.' };
            } catch ( err ) {
                console.log('❌ Error al enviar mail:', err);
                
                return { success: false, message: 'An error occurred while sending the message.'}
            }

        }

    })
}