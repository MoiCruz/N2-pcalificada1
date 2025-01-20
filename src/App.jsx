
export default function App() {
  return (
    <>
      <div className="p-12 flex justify-between">
        <div className="flex">
          <h1 className="font-extrabold font text-4xl text-center">El equipo creativo</h1>
        </div>
        <div className="">
          <h2 className="text-start font-black text-2xl">¿Quiénes somos?</h2>
          <p className="text-balance">Somos un equipo de personas creativamente diversas, motivadas e innovadoras que trabajan en varios lugares del mundo.</p>
        </div>
      </div>
      <div>
        <div className="flex flex-row p-12 justify-center">
          <div className="flex">
            <span className="">
              <img src="../public/photos/BillMahoney.png" alt="" className="h-80 w-52" />
              <p className=" font-black">Bill Mahoney</p>
            </span>
            <h3 className=" h-5 flex rotate-90">DUEÑO DEL PRODUCTO</h3>
          </div>
          <div className="flex">
            <span className="">
              <img src="../public/photos/SabaCabrera.png" alt="" className="h-80 w-52" />
              <p>Saba Cabrera</p>
            </span>
            <h3 className=" h-5 flex rotate-90">DIRECTORA DE ARTE</h3>
          </div>
          <div className="flex">
            <span className="">
              <img src="../public/photos/ShaeLe.png" alt="" className="h-80 w-52" />
              <p>Shae Le</p>
            </span>
            <h3 className=" h-5 flex rotate-90">DUEÑO DEL PRODUCTO</h3>
          </div>

        </div>
        <div className="flex flex-row p-12 justify-center">
          <div className="flex">
            <span className="">
              <img src="../public/photos/SkylahLu.png" alt="" className="h-80 w-52" />
              <p>Skylah Lu</p>
            </span>
            <h3 className=" h-5 flex rotate-90">DISEÑADORA UX</h3>
          </div>
          <div className="flex">
            <span className="">
              <img src="../public/photos/GriffRichards.png" alt="" className="h-80 w-52" />
              <p>Griff Richards</p>
            </span>
            <h3 className=" h-5 flex rotate-90">DESARROLLADOR</h3>
          </div>
          <div className="flex">
            <span className="">
              <img src="../public/photos/StanJohn.png" alt="" className="h-80 w-52" />
              <p>Stan John</p>
            </span>
            <h3 className=" h-5 flex rotate-90">DESARROLLADOR</h3>
          </div>

        </div>
      </div >
    </>
  )
}
