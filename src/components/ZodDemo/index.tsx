import { z } from 'zod';

const userSchema = z.object({
    name: z.string().min(1),
    age: z.number().min(18),
    email: z.string().email(),
});

try{
    userSchema.parse({
        name: 'John',
        age: 20,
        email: 'john@example.com',
    });
}catch(error){
    console.log(error);
}

export const ZodDemo = () => {
    return <div>ZodDemo</div>
}