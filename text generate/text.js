// Select the button and output elements
const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');

// Asynchronous function to simulate fetching data from an API
async function generateText() {
    try {
        // Simulate a fetch request (you can replace this with an actual API call)
        const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=1'); // Placeholder API
        const data = await response.json(); // Convert response to JSON
        
        // Display part of the fetched data (title) as the generated text
        output.innerHTML = `Generated Text: ${data.response}`;
        if (Array.isArray(data) && data.length > 0) {
            output.innerHTML = data[0]; // Display the first paragraph
        } else {
            output.innerHTML = "No text generated.";
        }
    } catch (error) {
        output.innerHTML = "An error occurred while generating text.";
        console.error('Error fetching data:', error);
    }
}

// Add event listener to the button
generateBtn.addEventListener('click', generateText); 
