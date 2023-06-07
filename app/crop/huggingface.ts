import {
  ObjectDetectionOutputValue,
  objectDetection,
} from "@huggingface/inference";
import { mockHFInference } from "./mockInference";

const imgToArrayBuffer = async (img: HTMLImageElement) => {
  const response = await fetch(img.src);
  const arrayBuffer = await response.arrayBuffer();
  return arrayBuffer;
};

const detectObjects = async () => {
  // const start = performance.now();
  const img = document.getElementById("myImage") as HTMLImageElement;

  // const imgAsBuffer = await imgToArrayBuffer(img);
  // const timeToBuffer = performance.now() - start;

  // const detectionOutput = await objectDetection({
  //   data: imgAsBuffer,
  //   model: "hustvl/yolos-tiny",
  // });

  // const timeInference = performance.now() - start;
  // console.log(`Time to buffer: ${timeToBuffer} ms`);
  // console.log(`Inference time: ${timeInference} ms`);

  const detectionOutput = mockHFInference;

  for (const detectedObject of detectionOutput) {
    const { score, label, box } = detectedObject;
  }

  const firstLine = new Path2D();

  console.log(detectionOutput);
};

export { detectObjects };
