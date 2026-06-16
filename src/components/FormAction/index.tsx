import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const SubmitButton = () => {
    const {pending, data, method, action} = useFormStatus()
    console.log('pending:', pending);
    console.log('data:', data);
    console.log('method:', method);
    console.log('action:', action);
    return(
            <button type="submit">
                {pending ? 'Loading...' : 'Submit'}
            </button>
    )
}

export const FormAction = () => {
    const handleAction = async (prevState: any, formData: FormData) => {
        console.log('prevState:', prevState);
        // console.log('formData-keys:', [...formData.keys()]);
        // console.log('formData-values:', Array.from(formData.values()));
        // console.log('formData-entries:', Array.from(formData.entries()));
        await delay(1000);
        return{
            success: true,
            data: {
                name: formData.get('name'),
                password: formData.get('password'),
            }
        }
    }
    const [state, formAction, isPending] = useActionState(handleAction, null)
    console.log('state:', state);
    console.log('isPending:', isPending);
    return(
        <form action={formAction}>
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <label>
                Password:
                <input type="password" name="password"/>
            </label>
            <SubmitButton />
            {/* <button type="submit">{isPending ? 'Loading...' : 'Submit'}</button> */}
        </form>
    )
}