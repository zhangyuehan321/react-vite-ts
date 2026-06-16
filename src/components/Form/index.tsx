import { useState } from 'react';

export const Form = () => {
    const [formData, setFormData] = useState<{ name: string; password: string }>({ 
        name: '',
        password: ''
    });
    const handleSubmit = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        console.log('formData:', formData);
    }
    return(
        <form>
            <label>
                Name:
                <input type="text" name="name" onChange={(ev) => setFormData({ ...formData, name:ev.target.value})}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={(ev) => setFormData({ ...formData, password: ev.target.value})}/>
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}