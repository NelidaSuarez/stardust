import './CheckoutForm.css'
import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        };
        onConfirm(userData);
    };

    return (
        <form onSubmit={handleConfirm} className="form-container">
            <label>
                Nombre:
                <input
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
            </label>

            <label>
                Teléfono:
                <input
                    type="text"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                />
            </label>

            <label>
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
            </label>

            <div>
                <button type="submit">Crear Orden</button>
            </div>
        </form>
    );
};

export default CheckoutForm;
