import Slider from "./components/slider/Slider";

function App() {
  const sliders = [
    {
      id: 1,
      texto: "Motivos que eu seja o seu próximo DEV FrontEnd Junior",
    },
    {
      id: 2,
      texto:
        "Estou com React fresquinho na cabeça!! E a cada dia que passa estou aprendendo mais sobre ele.",
    },
    {
      id: 3,
      texto:
        "Tenho muita facilidade em aprender e busco todos os dias aprender cada vez mais",
    },
    {
      id: 4,
      texto:
        "Sonho em entrar na área de desenvolvimento, mas nunca me senti pronto/confiante, porém, agora me sinto muito mais preparado e confiante!",
    },
    {
      id: 5,
      texto: "Este site aqui foi feito em React, simulando um slider de fotos",
    },
    {
      id: 6,
      texto: "Acessa meu linkedin! Tem ele e meu github ali embaixo :D",
    },
  ];

  return (
    <div>
      <Slider sliders={sliders} />
    </div>
  );
}

export default App;
