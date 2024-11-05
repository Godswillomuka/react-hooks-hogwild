import React, { useState } from 'react';

const HogTile = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const { name, image, specialty, weight, greased, 'highest medal achieved': highestMedal } = hog;

    const toggleDetails = () => setShowDetails(prev => !prev);

    return (
        <div style={styles.card}>
            <div style={styles.cardContent}>
                <h3>{name}</h3>
                <div style={styles.cardDescription}>
                    <img src={image} alt={name || "Hog image"} style={styles.image} />
                </div>
                <button onClick={toggleDetails} style={styles.button}>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
            {showDetails && (
                <div style={styles.extraContent}>
                    <p><strong>Specialty:</strong> {specialty}</p>
                    <p><strong>Weight:</strong> {weight}</p>
                    <p><strong>Greased:</strong> {greased ? 'Yes' : 'No'}</p>
                    <p><strong>Highest Medal:</strong> {highestMedal}</p>
                    <button onClick={() => setIsVisible(false)} style={styles.hideButton}>
                        Hide
                    </button>
                </div>
            )}
        </div>
    );
};



const styles = {
  card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      width: '300px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
  },
  cardContent: {
      textAlign: 'center',
  },
  cardDescription: {
      marginBottom: '12px',
  },
  image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '4px',
  },
  button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px',
  },
  extraContent: {
      marginTop: '16px',
      paddingTop: '12px',
      borderTop: '1px solid #eee',
      textAlign: 'left',
  },
  hideButton: {
      backgroundColor: '#f44336',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '12px',
  }
};

export default HogTile;



