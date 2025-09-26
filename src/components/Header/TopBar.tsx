import { Check, Service, Verify } from '../../Icons/index';

export const TopBar = () => {
  return (
    <div className="w-screen">
        <div className="bg-black  flex items-center justify-center gap-4 px-2 py-2 text-white">
            <section className='flex items-center justify-center gap-2'>
                <Check />
               <p className='text-[10px] text-center'>Diagnóstico Gratuito</p>
            </section>
            <section className='flex items-center justify-center gap-2'>
                <Service />
                <p className='text-[10px] text-center'>Reparaciones con Garantía</p>
            </section>
            <section className='flex items-center justify-center gap-2'>
                <Verify />
                <p className='text-[10px] text-center'>Técnicos Calificados</p>
            </section>
        </div>
    </div>
  )
}
