import { z } from 'astro:schema';
import { defineAction } from 'astro:actions';
import { Resend } from 'resend';
import { RESEND_API_KEY,FROM_EMAIL, TO_EMAIL } from 'astro:env/server';

const resend = new Resend(RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string().min(2, 'Nombre demasiado corto.').max(50, 'Nombre demasiado largo.'),
            mail: z.string().email('Email inválido').max(75),
            message: z.string().min(10, 'Mensaje demasiado corto.').max(200, 'Mensaje demasiado largo.'),
            website: z.string().optional()
        }),
        handler: async ( input ) => {
            try{
                const { name, mail, message, website } = input;

                if (website && website.trim() !== '') {
                    return { success: true, message: 'OK' };
                }

                await resend.emails.send({
                    from: FROM_EMAIL,
                    to: TO_EMAIL,
                    subject: `${name} desea negociar.`,
                    text: `Nuevo mensaje de ${name}.\n Mail: ${mail}\n Mensaje: ${message}`,
                });
                
                return { success: true, message: 'Mensaje enviado correctamente.' };
            } catch ( err ) {
                console.error('Error sending contact email: ', err);
                return { success: false, message: 'Ha ocurrido un error al enviar el mensaje.'}
            }

        }
    })
}