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
    {
      id: 4,
      texto: "Slider 4",
    },
    {
      id: 5,
      texto: "Slider 5",
    },
    {
      id: 6,
      texto: "Slider 6",
    },
  ];

  return (
    <div>
      <Slider sliders={sliders} />
    </div>
  );
}

export default App;
