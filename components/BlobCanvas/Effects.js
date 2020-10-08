import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "react-postprocessing";

const Effects = () => {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.25}
        bokehScale={5}
        height={800}
      />

      <Noise opacity={0.05} />
      <Vignette eskil={false} offset={0.1} darkness={0.5} />
    </EffectComposer>
  );
};

export default Effects;
