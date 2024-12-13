import SpotlightEffect from './SpotlightEffect';

const SpotlightCursor = ({ config = {}, className, ...rest }) => {
  // Provide default configuration if not specified
  const spotlightConfig = {
    radius: 200,    
    brightness: 0.05,
    color: '#2CFF9D',
    smoothing: 0.1,
    ...config
  };

  const canvasRef = SpotlightEffect(spotlightConfig);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className}`}
      {...rest}
    />
  );
};

export default SpotlightCursor;
