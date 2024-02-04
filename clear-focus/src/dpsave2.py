// ... (your existing code)

const handleSave = async () => {
    // Check if both family member and task are filled before saving
    if (familyMember.trim() === '' || task.trim() === '') {
        alert('Please enter both family member and task.');
        return;
    }

    // Create an object with the data
    const newData = { familyMember, task };

    try {
        // Send a POST request to your Flask server
        const response = await fetch('http://127.0.0.1:5000/add_task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });

        if (!response.ok) {
            throw new Error('Failed to save data');
        }

        // Call the parent component's function to handle saving on success
        onAddTask(newData);

        // Clear the input fields after saving
        setFamilyMember('');
        setTask('');
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to save data. Please try again.');
    }
};

// ... (your existing code)
