import React from 'react';
import PropTypes from 'prop-types';

const AddApp = ({ handleAddApp }) => {
    const [form, setForm] = React.useState({
        id: -1,
        name: '',
        company: '',
    });

    const setFormInput = (name, event) => setForm((form) => ({
        ...form,
        [name]: event.target.value
    }));

    const resetForm = () => setForm({
        id: -1,
        name: '',
        company: ''
    })

    

    return <div>
        <form onSubmit={(ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            handleAddApp(form);
            resetForm();
        }}>
            <div>
                Id:
            <input type="number" value={form.id} onChange={(event) => setFormInput("id", event)} required />
            </div>
            <div>
                Name:
            <input type="text" value={form.name} onChange={(event) => setFormInput("name", event)} required />
            </div>
            <div>
                Company:
            <input type="text" value={form.company} onChange={(event) => setFormInput("company", event)} required />
            </div>
            <button type="submit">Send</button>
        </form>
    </div>;
};

AddApp.propTypes = {
    handleAddApp: PropTypes.func.isRequired
};

export default AddApp;