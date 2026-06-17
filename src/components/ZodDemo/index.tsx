import { z } from 'zod';

// 1. 定义zod schema
const userSchema = z.object({
    name: z.string().min(1),
    age: z.number().min(18),
    email: z.string().email(),
});

// 2. 运行时数据检查
try{
    userSchema.parse({
        name: 'John',
        age: 20,
        email: 'john@example.com',
    });
}catch(error){
    console.log(error);
}

// 3. 通过zod转为ts类型
type User = z.infer<typeof userSchema>;

export const ZodDemo = () => {
    return <div>ZodDemo</div>
}