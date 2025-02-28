
import DashboardWrapper from './DashboardWrapper'
import Header from './Header'
import React, { useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCJrtUbgc-pJGhfvO3itNvbFwSIKWxPAlE";

function Search() {

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const dropAreaRef = useRef(null);

  const genAI = new GoogleGenerativeAI(API_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() && !image) return;

    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      let parts = [{ text: input }];

      if (image) {
        const imagePart = {
          inlineData: {
            mimeType: image.type,
            data: image.base64,
          },
        };
        parts = [...parts, imagePart];
      }

      const result = await model.generateContent(parts);
      let text = result.response.text();

      // Format the response (replace new lines with <br>, bold with <b>, and bullets with <li>)
      text = text.replace(/\n/g, "<br>");
      text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"); // Bold text
      text = text.replace(/^- (.*?)$/gm, "<li>$1</li>"); // Bullet points
      if (text.includes("<li>")) {
        text = "<ul>" + text + "</ul>"; // Wrap bullets in <ul>
      }

      setResponse(text);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to fetch response. Check API Key and image.");
    }
    setLoading(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage({
          type: file.type,
          base64: reader.result.split(',')[1],
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage({
          type: file.type,
          base64: reader.result.split(',')[1],
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <DashboardWrapper>
        <div className="body h-full">
        <div className=' md:w-[1250px] md:absolute  top-6 md:left-[200px]  overflow-y-auto '>
        <div >
  <Header pagename="Agro-Chat"/>
  </div>
  <div className=" flex flex-col items-center p-6 ml-20 ">
    <div className="flex md:flex-row flex-col   p-6  w-full  ">
      
      <form onSubmit={handleSubmit} className="w-full max-w-md border shadow-xl border-gray-400 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Agro Connect Chatbot</h1>
        <textarea
          className="w-full p-2 border rounded mb-2 bg-transparent text-black"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          className="mb-2 p-4 h-60 border-dashed border-2 border-gray-400 rounded-lg cursor-pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          ref={dropAreaRef}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <button
            type="button"
            className="p-2 h-52 bg-gray-300 rounded w-full"
            onClick={handleButtonClick}
          >
            {image ? "Change Image" : "Upload or Drag Image Here"}
          </button>
          
        </div>
        {image && (
            <div className="mt-2 flex items-center justify-between">
              <span>Image Uploaded</span>
              <button type="button" className="text-red-600 bg-transparent" onClick={handleRemoveImage}>
                Remove
              </button>
            </div>
          )}
        <button
          type="submit"
          className="mt-2 p-2 bg-gray-500 text-white rounded w-full"
          disabled={loading}
        >
          {loading ? "Generating Response..." : "Generate Response"}
        </button>
      </form>
      <div className='border w-[600px] border-gray-400 rounded-lg ml-10 p-2 shadow-xl'>
      <h2 className="text-lg font-semibold">Response:</h2>
      {response && (
        <div className=" px-4   shadow rounded w-[550px] ">
          
          <div className='overflow-y-scroll h-[450px] w-[550px]' dangerouslySetInnerHTML={{ __html: response }}></div>
        </div>
      )}
      </div>
    </div>
  </div>
        </div>
        </div>
    </DashboardWrapper>
  )
}

export default Search