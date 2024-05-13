import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleQrCodeGenerator() {
    setQrCode(input);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl text-center bg-green-200">QRCode Generator</h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            name="qrcode"
            placeholder="Enter any value"
            onChange={(e) => setInput(e.target.value)}
            className="text-xl p-2 rounded-md"
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleQrCodeGenerator}
            className="bg-white text-black p-2 text-xl rounded-md"
          >
            Generate
          </button>
        </div>
        <QRCode value={qrCode} size={350} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
