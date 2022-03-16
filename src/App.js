import Slider from "./components/slider/Slider";

function App() {
  const sliders = [
    {
      id: 1,
      texto: "Slider 1",
    },
    {
      id: 2,
      texto: "Slider 2",
    },
    {
      id: 3,
      texto: "Slider 3",
    },
  ];

  return (
    <div>
      <Slider sliders={sliders} />
    </div>
  );
}

export default App;
