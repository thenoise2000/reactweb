import Cabecera from "./Cabecera";
import Galerias from "./Galerias";
import SeccionPasos from "./SeccionPasos";
import Info from "./Info";
import Pie from "./Pie";
import SeccionPrincipal from "./SeccionPrincipal";

const SeccionVenta = () => {
  return (
    <div className=" bg-white w-full h-[1200px] md:h-[1309px] flex flex-col justify-start md:justify-between items-center  text-left  text-black font-manrope">
      <Cabecera />
      <Info />

      <SeccionPrincipal />
      <SeccionPasos />
      <div className=" w-[85%]">
        <Galerias />
      </div>

      <Pie />
    </div>
  );
};

export default SeccionVenta;