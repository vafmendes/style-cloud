import Img7 from '../../../public/img7.png';
export default function Sobre() {
  return (
    <section  className="flex items-center max-lg:flex-col items-center max-lg:flex-col gap-10 w-full max-container bg-gradient-to-r from-blue-500 to-sky-500/75">
      <div className="xl:w-4/4 max-w-[1400px] px-10 mx-auto py-7 justify-between">
      <div id="sobre" className="flex flex-col text-dark">
      <h1  className="lg:w-2/1 text-white font-bold font-palanquin text-3xl capitalize font-bold lg:max-w-lg">Sobre Nós</h1>
        <div>
          <h2 className="lg:w-2/1 text-white font-bold font-palanquin py-7 text-3xl capitalize font-bold lg:max-w-lg">
            Visão
            <br />
          </h2>
          <p className="p-4 lg:max-w-lg text-white font-bold">
            A colaboração Crocs x Nike é mais do que apenas um lançamento de calçados.
            Para nós da style Cloud é um movimento que celebra a individualidade,
            a quebra de estereótipos e a busca por um futuro mais confortável e estiloso.
          </p>
          <h2 className="lg:w-2/1 text-white font-bold font-palanquin text-3xl capitalize font-bold lg:max-w-lg">
            Missão
            <br />
          </h2>
          <p className="p-4 lg:max-w-lg info-text text-white font-bold">
            Nossa missão é oferecer calçados que proporcionem bem-estar em qualquer situação,
            sem abrir mão do estilo.

          </p>
        </div>
      </div>
    </div>
        <img
          src={Img7}
          alt="crocs-verde"
          width={570}
          height={522}
          className="object-contain"
        />
    </section>
  )

}