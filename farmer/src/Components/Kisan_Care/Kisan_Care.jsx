import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import './Kisan_Care.css'; // Changed CSS file name to match convention

const makeRequestAPI = async (prompt) => {
    const res = await axios.post("http://localhost:3500/generate", { prompt });
    return res.data;
};

const formatResponse = (response) => {
    const paragraphs = response.split("\n\n");
  
    return paragraphs.map((paragraph, index) => {
        const lines = paragraph.split("**");
        return (
            <div key={index}>
            {lines.map((line, idx) => {
                if (idx % 2 === 0) {
                return (
                    <p key={idx} className="response-paragraph"> 
                        {line}
                    </p>
                );
                } else {
                const numberedLines = line.split(/\*\*(\d+)\. /).filter(Boolean);
                return (
                    <ol key={idx} className="response-ordered-list"> 
                        {numberedLines.map((numberedLine, index) => (
                            <li key={index}>{numberedLine}</li>
                        ))}
                    </ol>
                );
                }
            })}
            </div>
        );
    });
};
  
function KisanCare() { // Changed function name to camelCase
    const [prompt, setPrompt] = useState("");
    //!mutation
    const mutation = useMutation({
        mutationFn: makeRequestAPI,
        mutationKey: ["gemini-ai-request"],
    });
    //!submit handler
    const submitHandler = (e) => {
        e.preventDefault();
        mutation.mutate(prompt);
    };
    console.log(mutation);
    return (
        <div className="kisan-care"> 
            <header>
                <h1>Ask our AI about your crops and fertilizers</h1>
            </header>
            <form className="kisan-care-form" onSubmit={submitHandler}> 
            <p>Enter a prompt and let our AI craft a unique solution for your problem.</p>
                <label htmlFor="Enter your prompt:"></label>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Write your problem here..."
                    className="kisan-care-input" 
                />
                
                <section className="kisan-care-response"> 
                    {mutation.isPending && <p>Generating solution for your problem...</p>}
                    {mutation.isError && <p>Cannot fulfill your request for this time</p>}
                    {mutation.isSuccess && formatResponse(mutation.data)}
                </section>
            </form>
            <button className="kisan-care-button" type="submit"> 
                    Generate Solution
                </button>
        </div>  
    );
}

export default KisanCare; // Changed export name to camelCase
