import { component, select } from '../dist/index.js';

// Define a custom component
component('user-card', (props) => {
    return `
        <div style="border: 1px solid #ccc; padding: 20px; margin: 10px; border-radius: 8px; font-family: sans-serif; max-width: 300px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${props.avatar || ''}" alt="${props.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
                <div>
                    <h3 style="margin: 0; font-size: 1.2rem;">${props.name || 'Unknown User'}</h3>
                    <p style="margin: 5px 0 0; color: #666;">${props.role || 'No Role'}</p>
                </div>
            </div>
        </div>
    `;
}, ['name', 'role', 'avatar']);

// Add interactivity
const btn = select('#update-btn');
if (btn) {
    btn.addEventListener('click', () => {
        const janeCard = select('user-card[name="Jane Smith"]');
        if (janeCard) {
            janeCard.setAttribute('role', 'Senior Product Manager');
            alert('Updated Jane\'s role!');
        }
    });
}
