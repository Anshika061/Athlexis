// Search functionality
function searchCondition() {
    const query = document.getElementById('search').value.toLowerCase();

    if (query.includes('meditation')) {
        window.location.href = 'condition.html?condition=meditation';
    } else if (query.includes('physiotherapy')) {
        window.location.href = 'condition.html?condition=physiotherapy';
    } else {
        alert('Condition not found');
    }
}

// Load condition details dynamically
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const condition = urlParams.get('condition');

    if (condition) {
        const conditionTitle = document.getElementById('condition-title');
        const conditionDetails = document.getElementById('condition-details');

        if (condition === 'meditation') {
            conditionTitle.innerText = 'Meditation';
            conditionDetails.innerHTML = `
                Meditation is a practice where an individual uses a technique – such as mindfulness or focusing the mind on a particular object – to train attention and awareness.<br><br>
                <strong>Benefits:</strong><br>
                - Reduces stress and anxiety<br>
                - Improves focus and emotional health<br>
                - Enhances self-awareness and promotes relaxation<br><br>
                <strong>How to Practice:</strong><br>
                Start with deep breathing, focus on your breath, and practice mindfulness by observing your thoughts without judgment.
            `;
        } else if (condition === 'physiotherapy') {
            conditionTitle.innerText = 'Physiotherapy';
            conditionDetails.innerHTML = `
                Physiotherapy is a healthcare practice focused on restoring movement and function when someone is affected by injury, illness, or disability.<br><br>
                <strong>Benefits:</strong><br>
                - Improves mobility and strength<br>
                - Aids in rehabilitation from surgery or injury<br>
                - Helps in managing pain and preventing injury<br><br>
                <strong>Treatment:</strong><br>
                Physiotherapists use techniques like exercise, manual therapy, and advice to help patients restore movement and function.
            `;
        }
    }
});