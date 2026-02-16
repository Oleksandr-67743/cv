import Orb from '@/components/orb';
import BlurText from '@/components/blur-text';

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-black">
      <Orb hoverIntensity={2} rotateOnHover hue={0} forceHoverState={false} backgroundColor="#000000" />
      <BlurText text="Hello World" animateBy="letters" className="text-white" />
    </main>
  );
}

export default App;
