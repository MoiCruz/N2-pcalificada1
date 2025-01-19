import {bill} from "./assets/images/BillMahoney.png"


export default function App() {
  return (
    <>
      <div className="container p-12">
        <div className="flex flex-row">
          <h1 className="font-extrabold font text-2xl text-center">El equipo creativo</h1>
        </div>
        <div className="">
          <h2 className="text-start font-black">¿Quiénes somos?</h2>
          <p className="text-balance">Somos un equipo de personas creativamente diversas, motivadas e innovadoras que trabajan en varios lugares del mundo.</p>
        </div>
        <div className="flex flex-row p-12">
          <span className="font-black h-72 w-44">DUEÑO DEL PRODUCTO</span>
          <img src={bill} alt="" className="h-72 w-44" />
          <p>Bill Mahoney</p>
          <span className="font-black h-72 w-44">DIRECTORA DE ARTE</span>
          <img src="./assets/images/SabaCabrera.png" alt="" className="h-72 w-44" />
          <p>Saba Cabrera</p>
          <span className="font-black h-72 w-44">DUEÑO DEL PRODUCTO</span>
          <img src="./assets/images/ShaeLe.png" alt="" className="h-72 w-44" />
          <p>Shae Le</p>
        </div>
        <div className="flex flex-row p-12">
          <span className="font-black h-72 w-44">DISEÑADORA UX</span>
          <img src="./assets/images/SkylahLu.png" alt="" className="h-72 w-44" />
          <p>Skylah Lu</p>
          <span className="font-black h-72 w-44">DESARROLLADOR</span>
          <img src="./assets/images/GriffRichards.png" alt="" className="h-72 w-44" />
          <p>Griff Richards</p>
          <span className="font-black h-72 w-44">DESARROLLADOR</span>
          <img src="./assets/images/StanJohn.png" alt="" className="h-72 w-44" />
          <p>Stan John</p>

        </div>
      </div>
    </>
  )
}
