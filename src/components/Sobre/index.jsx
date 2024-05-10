import Img7 from '../../../public/img7.png';
export default function Sobre() {
  return (
    <section  className="flex justify-between items-center max-lg:flex-col items-center max-lg:flex-col gap-10 w-full max-container">
      
      <div id="sobre" className="flex flex-col text-dark xl:w-1/1 max-w-[1400px] p-6 mx-auto py-8">
      <h1  className="lg:w-2/1 text-dark font-bold font-palanquin text-3xl capitalize font-bold lg:max-w-lg">Sobre Nós</h1>
        <div>
          <h2 className="lg:w-2/1 text-dark font-bold font-palanquin py-7 text-3xl capitalize font-bold lg:max-w-lg">
            Visão
            <br />
          </h2>
          <p className="p-4 lg:max-w-lg">
            A colaboração Crocs x Nike é mais do que apenas um lançamento de calçados.
            Para nós da style Cloud é um movimento que celebra a individualidade,
            a quebra de estereótipos e a busca por um futuro mais confortável e estiloso.
          </p>
          <h2 className="lg:w-2/1 text-dark font-bold font-palanquin text-3xl capitalize font-bold lg:max-w-lg">
            Missão
            <br />
          </h2>
          <p className="p-4 lg:max-w-lg info-text">
            Nossa missão é oferecer calçados que proporcionem bem-estar em qualquer situação,
            sem abrir mão do estilo.

          </p>
        </div>

      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={Img7}
          alt="crocs-verde"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )

}