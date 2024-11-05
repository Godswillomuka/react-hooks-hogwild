import React, { useState } from 'react';

const AddHogForm = ({ setHogs }) => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [weight, setWeight] = useState('');
    const [greased, setGreased] = useState(false);
    const [medal, setMedal] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        if (!name || !specialty || !weight) {
            setError('All fields are required!');
            return;
        }

        const newHog = {
            name,
            specialty,
            weight: parseFloat(weight),
            greased,
            'highest medal achieved': medal || 'None',
        };

        setHogs(prevHogs => [...prevHogs, newHog]);
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setSpecialty('');
        setWeight('');
        setGreased(false);
        setMedal('');
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h3 style={styles.heading}>Add a New Hog</h3>
            {error && <p style={styles.error}>{error}</p>}

            <div style={styles.inputWrapper}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                    style={styles.input}
                />
            </div>
            <div style={styles.inputWrapper}>
                <input
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    placeholder="Specialty"
                    required
                    style={styles.input}
                />
            </div>
            <div style={styles.inputWrapper}>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight"
                    required
                    style={styles.input}
                />
            </div>

            <div style={styles.checkboxWrapper}>
                <label>
                    <input
                        type="checkbox"
                        checked={greased}
                        onChange={(e) => setGreased(e.target.checked)}
                        style={styles.checkbox}
                    />
                    Greased
                </label>
            </div>

            <div style={styles.inputWrapper}>
                <input
                    value={medal}
                    onChange={(e) => setMedal(e.target.value)}
                    placeholder="Highest Medal Achieved"
                    style={styles.input}
                />
            </div>

            <button type="submit" style={styles.button}>
                Add Hog
            </button>
        </form>
    );
};

// Styles for the form
const styles = {
    form: {
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        textAlign: 'center',
        fontSize: '1.5em',
        color: '#333',
        marginBottom: '15px',
    },
    error: {
        color: '#d9534f',
        textAlign: 'center',
        marginBottom: '15px',
        fontWeight: 'bold',
    },
    inputWrapper: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease',
    },
    input: {
        borderColor: '#ccc',
    },
    inputFocus: {
        borderColor: '#4CAF50',
    },
    checkboxWrapper: {
        marginBottom: '15px',
    },
    checkbox: {
        marginRight: '10px',
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.1em',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
};

export default AddHogForm;
