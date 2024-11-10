import { useState } from "react";
import { Screen } from "../../core/design/Screen";
import { QRTextField } from "../../core/design/TextField";
import { QRCard } from "../../core/design/Card";
import { QRButton } from "../../core/design/Button";
import QRCode from "qrcode";

export function QRScreen() {
  const [text, setText] = useState("");

  const generate = async () => {
    const canvas = document.getElementById("qr-canvas") as HTMLCanvasElement;
    QRCode.toCanvas(canvas, text, (error) => {
      console.log(error);
    });
  };
  return (
    <Screen title="QR">
      <QRCard style={{ margin: "16px", padding: "16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <QRTextField label="text" value={text} onChange={setText} />
          <QRButton onClick={generate}>Generate QR</QRButton>
        </div>
        <div>
          <canvas id="qr-canvas" />
        </div>
      </QRCard>
    </Screen>
  );
}
