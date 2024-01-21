import React, { useEffect } from 'react';

const DataFetcher = () => {
useEffect(() => {
    const fetchData = async () => {
    try {
        // Make API call
        const response = await fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');

        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response to JSON
        const data = await response.json();

        // Store the response in local storage
        localStorage.setItem('projectData', JSON.stringify(data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Call the fetchData function
    fetchData();
}, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

return (
    <div>
    {/* Your component content goes here */}
    </div>
);
};

export default DataFetcher;
