export async function carDetails() {
    try {
        const response = await fetch(`https://run.mocky.io/v3/545db8fd-f908-4943-94da-1823013fb892`);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON data from the response
        const data = await response.json();
        console.log('Car Details:', data);

        // Return the data for further use
        return data;
    } catch (error) {
        // Handle errors that occurred during the fetch or JSON parsing
        console.error('Error fetching car details:', error);
        throw error; // Optionally rethrow the error for the caller to handle
    }
}
