export default function GradientBlobs() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div
        className="blob bg-primary/50 top-1/4 left-1/4 w-[30vw] h-[30vw] animate-[float1_20s_infinite_ease-in-out]"
        style={{animationDelay: '2s'}}
      />
      <div
        className="blob bg-secondary/50 top-1/2 left-2/3 w-[35vw] h-[35vw] animate-[float2_25s_infinite_ease-in-out]"
        style={{animationDelay: '5s'}}
      />
      <div
        className="blob bg-accent/50 bottom-0 left-1/2 w-[25vw] h-[25vw] animate-[float3_18s_infinite_ease-in-out]"
        style={{animationDelay: '0s'}}
      />
    </div>
  );
}
