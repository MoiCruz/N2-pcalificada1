
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
          <span className="font-black h-72 w-44 bg-slate-700">DUEÑO DEL PRODUCTO</span>
          <img src="./assets/BillMahoney.png" alt="" className="h-72 w-44"/>
          <p>Bill Mahoney</p>
          <span className="font-black h-72 w-44 bg-red-500 ">DIRECTORA DE ARTE</span>
          <img src="./assets/SabaCabrera.png" alt="" />
          <p>Saba Cabrera</p>
          <span className="font-black h-72 w-44 bg-amber-400">DUEÑO DEL PRODUCTO</span>
          <img src="./assets/ShaeLe.png" alt="" />
          <p>Shae Le</p>
        </div>
        <div className="flex flex-row p-12">
          <span className="font-black h-72 w-44 bg-lime-500 ">DISEÑADORA UX</span>
          <img src="./assets/SkylahLu.png" alt="" />
          <p>Skylah Lu</p>
          <span className="font-black h-72 w-44 bg-teal-500">DESARROLLADOR</span>
          <img src="./assets/GriffRichards.png" alt="" />
          <p>Griff Richards</p>
          <span className="font-black h-72 w-44 bg-blue-600">DESARROLLADOR</span>
          <img src="./assets/StanJohn.png" alt="" />
          <p>Stan John</p>

        </div>
      </div>
    </>
  )
}
