import Pantalla from '../../../assets/images/repair/back.jpg'
import Bateria from '../../../assets/images/repair/bateria2.jpg'
import Agua from '../../../assets/images/repair/AGUA.jpeg'
import Software from '../../../assets/images/repair/error-software.jpg'
import Pcs from '../../../assets/images/pc/pc3.jpg'


export const secction = [
  { key: 'pantallas', label: 'Pantallas Rotas' },
  { key: 'baterias', label: 'Cambio de Batería' },
  { key: 'agua', label: 'Daño por Agua' },
  { key: 'software', label: 'Problemas de Software' },
  { key: 'computadoras', label: 'Reparación de Computadoras' },
];

export const serviceData = {
  pantallas: {
    title: 'Pantallas Rotas',
    description:
      'Ofrecemos reemplazos de pantalla de alta calidad para celulares y tablets de todas las marcas, con garantía y rapidez.',
    image: Pantalla,
  },
  baterias: {
    title: 'Cambio de Batería',
    description:
      'Reemplazamos baterías desgastadas por nuevas, mejorando la autonomía y el rendimiento de tu dispositivo. Servicio rápido y confiable.',
    image: Bateria,
  },
  agua: {
    title: 'Daño por Agua',
    description:
      'Expertos en reparación de dispositivos dañados por líquidos. Realizamos un diagnóstico detallado y un proceso de limpieza para recuperar tu equipo.',
    image: Agua,
  },
  software: {
    title: 'Problemas de Software',
    description:
      'Solucionamos fallos de sistema, eliminamos virus, actualizamos sistemas operativos y recuperamos dispositivos que no inician correctamente.',
    image: Software,
  },

  computadoras: {
    title: 'Reparación de Computadoras',
    description: 'Diagnóstico y reparación de laptops y equipos de escritorio. Solucionamos problemas de hardware, software, formateo y más.',
    image: Pcs,
  },
};


export type ServiceKey = keyof typeof serviceData; 