import { useControls } from "leva";

export const useUniforms = () => {
  const uniforms = useControls({
    uBigWaveElevation: {
      value: 0.2,
      step: 0.01,
      min: 0.1,
      max: 2,
    },
    uBigWaveFrequencyX: {
      value: 4,
      step: 0.5,
      min: 0.1,
      max: 30.0,
    },

    uBigWaveFrequencyY: {
      value: 1.5,
      step: 0.5,
      min: 0.1,
      max: 30.0,
    },

    uBigWaveSpeed: {
      value: 0.75,
      step: 0.1,
      min: 0.1,
      max: 2.0,
    },

    uDepthColor: {
      value: "#306880",
    },

    uSurfaceColor: {
      value: "#8eb1c7",
    },

    uColorMultiplier: {
      value: 2.5,
      step: 0.5,
      min: 1,
      max: 10.0,
    },

    uColorOffset: {
      value: 0,
      step: 0.1,
      min: 0,
      max: 5,
    },

    uSmallWaveElevation: {
      value: 0.15,
      step: 0.1,
      min: 0.1,
      max: 2.0,
    },

    uSmallWaveFrequency: {
      value: 3,
      step: 0.1,
      min: 0.1,
      max: 2.0,
    },

    uSmallWaveSpeed: {
      value: 0.2,
      step: 0.1,
      min: 0.1,
      max: 2.0,
    },

    uSmallWaveIteration: {
      value: 4,
      step: 1,
      min: 0.1,
      max: 10.0,
    },
  });

  return uniforms;
};
