document.getElementById("summarize").addEventListener("click", async () => {
    const inputText = document.getElementById("userInput").value;

    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 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 ",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ inputs: inputText })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        document.getElementById("opSummary").innerText = result[0].summary_text;
    } catch (error) {
        console.error("Error:", error);
    }
});
