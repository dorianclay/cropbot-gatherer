import { ObjectDetectionOutput } from "@huggingface/inference";

export const mockHFInference: ObjectDetectionOutput = [
  {
    score: 0.9617673754692078,
    label: "apple",
    box: {
      xmin: 207,
      ymin: 2023,
      xmax: 566,
      ymax: 2377,
    },
  },
  {
    score: 0.9986972212791443,
    label: "bottle",
    box: {
      xmin: 310,
      ymin: 780,
      xmax: 638,
      ymax: 1763,
    },
  },
  {
    score: 0.9422410130500793,
    label: "dining table",
    box: {
      xmin: 0,
      ymin: 1369,
      xmax: 1920,
      ymax: 2373,
    },
  },
  {
    score: 0.9971083998680115,
    label: "cup",
    box: {
      xmin: 878,
      ymin: 1222,
      xmax: 1381,
      ymax: 1856,
    },
  },
];
