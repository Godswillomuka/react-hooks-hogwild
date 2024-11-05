import React from 'react';

const FilterSort = ({ greased, toggleGreased, handleSortChange }) => {
    return (
        <div style={styles.container}>
            <label style={styles.label}>
                <input 
                    type="checkbox" 
                    checked={greased} 
                    onChange={() => toggleGreased()} // Simplified toggle
                    style={styles.checkbox}
                />
                Show Greased
            </label>
            <select 
                onChange={(e) => handleSortChange(e.target.value)} 
                style={styles.select}
            >
                <option value="">Sort by</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    );
};

// Simple styles for better presentation
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '20px 0',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    label: {
        display: 'flex',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: '8px',
    },
    select: {
        padding: '5px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
};

export default FilterSort;