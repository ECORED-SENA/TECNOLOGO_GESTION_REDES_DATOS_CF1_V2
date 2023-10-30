export default {
  global: {
    componenteFormativo:
      '<i>Hardware</i> y <i>software</i> de seguridad en la red',
    descripcionCurso:
      'El aprendiz debe apropiar los conocimientos y actividades que le permitan interpretar e implementar el plan de seguridad de las redes utilizadas y los datos que circulan a través de ellas, cumpliendo las normas establecidas vigentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Seguridad de información en la red',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Integridad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Confidencialidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Disponibilidad',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ataques a la seguridad de la red',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Herramientas de seguridad',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Vulnerabilidades y amenazas',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Análisis de seguridad de la red',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Análisis de riesgos',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Matriz de control',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Estimación de la vulnerabilidad',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Requisitos de la seguridad',
            hash: 't_1_11',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Revisión y actualizaciones de la política de la seguridad',
            hash: 't_1_12',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Parámetros para establecer políticas de seguridad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: ' Plan de trabajo para establecer políticas de seguridad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Recomendaciones para implementar políticas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Normas y procedimientos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Norma Técnica Colombiana NTC-ISO/IEC 27001',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228183_CF01_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Seguridad de información en la red',
      referencia:
        'Alonso, C. G., Gabriel, D., O., Ignacio, A., A., y Elio, S., R. (2014). <i>Procesos y herramientas para la seguridad de redes</i>. UNED.',
      tipo: 'Libro',
      link:
        'https://pdfcoffee.com/procesos-y-herramientas-para-la-daaz-orueta-gabrielcb-3-pdf-free.html ',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'circunstancia que tiene el potencial de causar daños o pérdidas, puede ser en forma de robo, destrucción, divulgación, modificación de datos o denegación de servicio (DOS).',
    },
    {
      termino: 'Auditoría',
      significado:
        'proceso que se realiza para verificar que una organización cumple con normas, políticas o estándares.',
    },
    {
      termino: '<i>Backup</i>',
      significado:
        'copia de respaldo de la información existente para evitar pérdidas.',
    },
    {
      termino: 'Biométrico',
      significado:
        'sistema que utiliza rasgos humanos únicos como medio de seguridad.',
    },
    {
      termino: '<i>Bug</i>',
      significado: 'propiedad no deseada de un sistema.',
    },
    {
      termino: 'Capex',
      significado:
        'gasto de capital, costo de desarrollo o el suministro de componentes no consumibles para el producto o sistema.',
    },
    {
      termino: 'Carga destructiva',
      significado:
        'actividad maliciosa que realiza el <i>malware</i>. Una carga destructiva es independiente de las acciones de instalación y propagación que realiza el <i>malware</i>.',
    },
    {
      termino: 'Ciberdelincuente',
      significado: 'persona que se dedica a cometer delitos en internet.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'condición caracterizada por un mínimo de riesgos y amenazas a la infraestructura tecnológica, los componentes lógicos de la información y las interacciones en el ciberespacio.',
    },
    {
      termino: 'Cifrado',
      significado:
        'proceso de codificación de información sensible para poder evitar que esta llegue a personas no autorizadas.',
    },
    {
      termino: 'Delito informático',
      significado:
        'comportamientos ilícitos que se llevan a cabo mediante herramientas electrónicas para atacar contra la seguridad de los datos informáticos.',
    },
    {
      termino: 'DevOps',
      significado:
        'metodología de desarrollo de <i>software</i> que integra las capas de desarrollo, pruebas, implementación, calidad y gestión.',
    },
    {
      termino: 'Encriptación',
      significado:
        'proceso para volver ilegible información considerada importante. La información una vez encriptada solo puede leerse aplicando una clave.',
    },
    {
      termino: 'Fuga de datos',
      significado:
        'salida no controlada de información que hace que esta llegue a personas no autorizadas.',
    },
    {
      termino: '<i>Hacker</i>',
      significado:
        'persona experta en tecnología dedicada a intervenir y/o realizar alteraciones técnicas con buenas o malas intenciones.',
    },
    {
      termino: 'ISO',
      significado: ' International Organization for Standardization.',
    },
    {
      termino: 'Opex',
      significado:
        'costo permanente para el funcionamiento de un producto, negocio o sistema.',
    },
    {
      termino: 'Programa malicioso',
      significado:
        'también conocidos como <i>malware</i> que contienen virus, <i>spyware</i> y otros programas indeseados que se instalan sin consentimiento.',
    },
  ],
  referencias: [
    {
      referencia: 'B2B Consultores. (2020). Intrusion Detection System.',
      link:
        'https://btob.com.mx/ciberseguridad/que-es-ids-intrusion-detection-system/ ',
    },
    {
      referencia:
        'Cisco. (2005). Política de seguridad de la red: informe oficial de mejores prácticas.',
      link:
        'https://www.cisco.com/c/es_mx/support/docs/availability/high-availability/13601-secpol.html',
    },
    {
      referencia:
        'Coite, A., y Romero, H. (s.f.). Auditoría de sistema y políticas de seguridad informática.',
      link: 'http://www.monografias.com/trabajos12/fichagr/fichagr.shtml#POLIT',
    },
    {
      referencia:
        'Cómo administrar tu propio negocio. (2014). Auditoría informática y seguridad informática. Cómo administrar tu propio negocio.',
      link:
        'https://administratunegocioencasa.blogspot.com/p/cual-es-la-relacion-entre-la-auditoria.html',
    },
    {
      referencia:
        'Gb-advisor. (2019). 5 recomendaciones para potenciar la seguridad informática de tu empresa.',
      link:
        'https://www.gb-advisors.com/es/5-recomendaciones-para-potenciar-la-seguridad-informatica-de-tu-empresa/',
    },
    {
      referencia: 'Guimi.net. (2009). Herramientas de seguridad de redes.',
      link:
        'https://guimi.net/monograficos/G-Redes_de_comunicaciones/G-RCnode64.html',
    },
    {
      referencia:
        'Informática. (2021). Autenticación y seguridad de infraestructura.',
      link:
        'https://docs.informatica.com/es_es/data-engineering/shared-content-for-data-engineering/10-5/guia-de-seguridad/introduccion-a-la-seguridad-de-informatica/seguridad-de-infraestructura/autenticacion.html',
    },
    {
      referencia: 'Infotecs. (2019). Sistema de detección de intrusos.',
      link: 'https://infotecs.mx/blog/sistema-de-deteccion-de-intrusos.html',
    },
    {
      referencia:
        'ISOTools Excellence (s.f.). Plataforma tecnológica para la gestión de la excelencia.',
      link: 'https://www.isotools.com.co/normas/ntc-iso-27001 ',
    },
    {
      referencia:
        'ITCFA-Fepade. (s.f.). Configuración de mecanismos de seguridad U4.6 Ataques pasivos vs ataques activos.',
      link:
        'https://virtual.itca.edu.sv/Mediadores/cms/u46_ataques_pasivos_vs_ataques_activos.html',
    },
    {
      referencia:
        'Mejía, R. (2006). Administración de riesgos: un enfoque empresarial. Universidad Eafit.',
    },
    {
      referencia: 'Mifsud, E. (2012). Introducción a la seguridad informática.',
      link:
        'http://recursostic.educacion.es/observatorio/web/ca/software/software-general/1040-introduccion-a-la-seguridad-informatica?showall=1',
    },
    {
      referencia:
        'Noriega, C. (2016). Sistemas operativos de software libre para servidores.',
      link:
        'https://sites.google.com/site/isctallerdesistemasoperativos1/unidad-3---sistemas-operativos-de-software-libres-para-servidores',
    },
    {
      referencia:
        'Seguinfo. (2008). Políticas, normas, procedimientos de seguridad y otros documentos de un SGSI',
      link:
        'https://seguinfo.wordpress.com/2008/07/31/politicas-normas-procedimientos-de-seguridad-y-otros-documentos-de-un-sgsi/',
    },
    {
      referencia: 'Seguridad en la red. (s.f.). Seguridad en la red.',
      link:
        'https://sites.google.com/site/seguridadenlaared/concepcion-de-la-seguridad-de-la-informacion/integridad',
    },
    {
      referencia:
        'Sony. (2021). ¿Qué es el cifrado de redes LAN inalámbricas y por qué se utiliza? ',
      link: 'https://www.sony.es/electronics/support/articles/00009475',
    },
    {
      referencia:
        'USS Seguridad. (2019). ¿Qué tipos de auditorías de seguridad informática se realizan?',
      link:
        'https://uss.com.ar/corporativo/auditoria-de-seguridad-informatica/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios y Gestión Empresarial Regional Antioquia',
        },
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial Regional Antioquia',
        },
        {
          nombre: 'Claudia López Arboleda',
          cargo: 'Experta temática',
          centro:
            'Centro de Teleinformática y Producción Industrial Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'John Andres Ayala Angarita',
          cargo: 'Desarrollo front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: ['Ángela María Maldonado Jaime'],
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: ['Carlos Eduardo Garavito Parada'],
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: ['Gilberto Junior Rodríguez Rodríguez'],
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: ['Lina Marcela Pérez Manchego'],
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: ['María Carolina Tamayo López'],
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: ['Víctor Raúl Cárdenas Cáceres'],
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: ['Wilson Andrés Arenales Cáceres'],
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: ['Zuleidy Maria Ruiz Torres'],
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Jenny Paola Montillo Gélvez',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
