<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Seguridad de información en la red
    p.mb-4 Tradicionalmente las redes cableadas o redes alámbricas se han considerado más seguras que las redes inalámbricas. El uso de internet y la evolución de las comunicaciones han hecho que las instalaciones no sean únicas, sino que pueden situarse a miles de kilómetros. A su vez una red privada virtual permite mediante el uso de Internet, establecer esta conexión realizando una inversión moderada. Una VPN o red privada es, básicamente, una red virtual que se crea dentro de otra red, habitualmente internet. Para un cliente VPN se trata de una conexión que se establece entre su equipo y el servidor, esta conexión es transparente para él, simplemente los datos le son enviados de la misma manera que si llegaran a través de la LAN a la que se conecta. 
    
    .row.justify-content-center.mb-4
      .col-lg-11
        .bloque-texto-a.color-acento-contenido--color2.p-4.p-md-5.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  p.mb-4 Por lo que los IDS [Intrusion Detection Systems - Sistemas de Detección de Intrusiones] son un paso adelante en las funciones que implementan los cortafuegos (firewalls). Existen varias herramientas de detección de intrusos, pero su uso es bastante complejo, algunos ejemplos más representativos son tripwire enterprise (permite detectar las acciones en la red que no se ajustan a la política de seguridad de la empresa, e informar de aquellos que necesitan especial atención) y snort (es una aplicación de código abierto que permite tanto la detección de intrusión como su prevención) (B2B Consultores, 2020).
                  p Este IDS escucha el tráfico de la red en tiempo real y lo relaciona con una serie de normas ya predefinidas, que pueden descargarse desde internet. Cuando encuentra alguna coincidencia alerta sobre ella, hace un log de dicho tráfico o lo ignora, según se ha indicado en la norma (B2B Consultores, 2020).
              .col-lg-4.mb-4.mb-lg-0.align-self-center
                figure
                  img(src='@/assets/curso/tema1/img1.svg', alt="Sistemas de Detección de Intrusiones").mx-auto

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2 1.1 Integridad

    .row.justi-content-center(style="padding-bottom:60px;")
      .col-lg-5.self-align-center
        figure
          img(src='@/assets/curso/tema1/img2.svg', alt="integridad").mx-auto
      .col-lg-7.self-align-center
        p.mb-4 Es una característica que permite mantener los datos sin modificaciones no autorizadas, que la información permanezca tal como fue generada, sin manipulación o alteraciones realizadas por personal no autorizado.
        .cajon.color-acento-contenido.p-4.mb-4
          p Hay violación de integridad cuando un empleado, proceso o programa borra o modifica datos importantes que pertenecen a la información. Para conservar la integridad de un mensaje se debe adjuntar los datos de comprobación de integridad, por ejemplo, la firma digital es uno de ellos.

    separador.mb-4

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2 1.2 Confidencialidad

    .row.justify-content-center.mb-5
      .col-lg-7.align-self-center
        p.mb-2 Según afirma Seguridad en redes (s.f.), es la propiedad de prevenir la divulgación de información a personas o sistemas no autorizados. A grandes rasgos, la confidencialidad es el acceso a la información únicamente por personas que cuenten con la debida autorización.
        p.mb-0 De acuerdo con Seguridad en la red (s.f.):
        .row.justify-content-center
          .col-lg-8
            .bloque-texto-b.color-secundario.p-2
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                span.mb-2 
                  strong … en una transacción por internet se requiere que el número de la tarjeta de crédito sea transmitida desde el comprador al comerciante y de este a una red de procesamiento de transacciones. El sistema intenta hacer valer la confidencialidad mediante el cifrado del número de la tarjeta y los datos que contiene la banda magnética durante la transmisión de estos. Si una parte no autorizada obtiene el número de la tarjeta en modo alguno, se ha producido una violación de la confidencialidad. <br>La pérdida de la confidencialidad de la información puede adoptar muchas formas. Cuando alguien mira por encima de su hombro, mientras tiene información confidencial en la pantalla, cuando se publica información privada, cuando una laptop con información sensible sobre una empresa es robada, cuando se divulga información confidencial a través del teléfono, etc. Todos estos casos pueden constituir una violación de la confidencialidad (s.p.).
                i.fas.fa-quote-right
      .col-lg-5.align-self-center
        figure
          img(src='@/assets/curso/tema1/img3.svg', alt="confidencialidad").mx-auto

    separador  

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2 1.3 Disponibilidad

    .row.justify-content-center
      .col-lg-11
        .bloque-texto-a.color-acento-contenido.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img4.svg', alt="disponibilidad", style="width:70%;").mx-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Se define como la capacidad de garantizar que tanto el sistema como los datos van a estar disponibles al usuario en todo momento, por ejemplo, el objetivo de la plataforma SENA Sofia Plus por el hecho de mantener disponible la información de los cursos disponibles. Constantemente está recibiendo consultas, acceso y peticiones, por lo que siempre deberá estar disponible para los usuarios. “La disponibilidad supone que el sistema informático se mantenga trabajando sin sufrir ninguna degradación en cuanto a accesos. Es necesario que se ofrezcan los recursos que requieran los usuarios autorizados cuando se necesiten” (www.pmg-ssi.com, 2018).

    separador

    #t_1_4.titulo-segundo.color-acento-contenido
      .h2 1.4 Ataques a la seguridad de la red

    figure(style="margin-bottom:70px;")
      .video
        iframe(width="734" height="413" src="https://www.youtube.com/embed/x56FT_OVARQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .h3.mb-4 Ataques pasivos
    p.mb-4 En lo referente a la Configuración de mecanismos de seguridad (ITCFA-Fepade, s.f.), se enuncia que:
    
    .row.mb-5.justify-content-center
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.color-secundario.p-0
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              span.mb-2 
                strong(style="font-size:20px;") [...] el atacante no altera la comunicación, sino que únicamente la escucha o monitoriza, para obtener información que está siendo transmitida. Sus objetivos son la intercepción de datos y el análisis de tráfico, una técnica más sutil para obtener información de la comunicación, que puede consistir en:
              i.fas.fa-quote-right
              //p.text-end.mb-0
                b -  Artículo 18,  Acuerdo 617 de 2018
    
    .row.justify-content-center.mb-5
      .col-lg-3.mb-4
        .bg1.p-3.h-100.text-center.brad
          img.img-a.img-t.mb-3(src='@/assets/curso/tema1/tarjetas/img1.svg', alt='')
          p.mb-0 Obtención del origen y destinatario de la comunicación, leyendo las cabeceras de los paquetes monitorizados.
      .col-lg-3.mb-4
        .bg1.p-3.h-100.text-center.brad
          img.img-a.img-t.mb-3(src='@/assets/curso/tema1/tarjetas/img2.svg', alt='')
          p.mb-0 Control del volumen de tráfico intercambiado entre las entidades monitorizadas, obteniendo así información acerca de actividad o inactividad inusuales.
      .col-lg-3.mb-4
        .bg1.p-3.h-100.text-center.brad
          img.img-a.img-t.mb-3(src='@/assets/curso/tema1/tarjetas/img3.svg', alt='')
          p.mb-0 Control de las horas habituales de intercambio de datos entre las entidades de la comunicación, para extraer información acerca de los períodos de actividad.
      .col-lg-3.mb-4
        .bg1.p-3.h-100.text-center.brad
          img.img-a.img-t.mb-3(src='@/assets/curso/tema1/tarjetas/img4.svg', alt='')
          p.mb-0 Los ataques pasivos son muy difíciles de detectar, ya que no provocan ninguna alteración de los datos. Sin embargo, es posible evitar su éxito mediante el cifrado de la información (s.p.). 
    
    .h3.mb-4 Ataques activos
    p.mb-4 Son aquellos que involucran modificaciones en la transmisión de datos, o creación de un flujo falso de datos, entre los cuales se pueden encontrar:

    //- TabsC debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Degradación")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/tabsC/img1.svg', alt='Degradación', style="width:70%;").mx-auto
              
          .col-md-6.align-self-center
            h2.mb-4 Degradación fraudulenta del servicio
            p Este ataque frena el desarrollo y gestión de recursos informáticos y de comunicaciones, causando interrupciones del servicio de una red, eliminación de mensajes específicos, parálisis temporal de servidores FTP, web o de correo. La imagen da una idea de lo que puede suceder con este ataque.

      .py-3.py-md-4(titulo="Modificación")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/tabsC/img2.svg', alt='Modificación', style="width:85%;").mx-auto
              
          .col-md-6.align-self-center
            h2.mb-4 Modificación de mensajes
            p Se efectúa alteración, reordenación o retardo de los mensajes produciendo una situación no autorizada. La figura ilustra una modificación de mensajes.

      .py-3.py-md-4(titulo="Repetición")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/tabsC/img3.svg', alt='Repetición', style="width:85%;").mx-auto
              
          .col-md-6.align-self-center
            h2.mb-4 Repetición
            p Se produce la captura y repetición de mensajes para producir un resultado no autorizado, un claro ejemplo es el de realizar consignaciones repetidas en una determinada cuenta.

      .py-3.py-md-4(titulo="Suplantación")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/tabsC/img4.svg', alt='Suplantación', style="width:85%").mx-auto
              
          .col-md-6.align-self-center
            h2.mb-4 Suplantación de identidad
            p  Aquí el intruso pretende ser otra entidad incluyendo otras formas activas de ataque y poder así capturar y repetir secuencias de autenticación, robar la contraseña de ingreso a una cuenta, permitiendo su acceso a los recursos especiales suplantando así al usuario que posee dichos privilegios. 

    separador

    #t_1_5.titulo-segundo.color-acento-contenido
      .h2 1.5 Herramientas de seguridad

    .row.justify-content-center
      .col-lg-11
        .bloque-texto-a.color-acento-contenido.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img5.svg', alt="Herramientas de seguridad", style="width:100%;").mx-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-4 Pueden utilizarse para revisar la seguridad de un sistema con buenas o con malas intenciones. Si no se revisa la seguridad del sistema, alguien lo hará. Por ejemplo, se encuentran los analizadores de red, que buscan equipos en la red, hacen barridos de puertos y descubrimiento de servicios, analizando los resultados para inferir información, como versión, tipo de sistema y/o servicios para exponer deficiencias de seguridad. Algunos de los más utilizados son nmap, SATAN y SAINT.


    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Herramientas de seguridad 
              p.mb-0 A continuación le invitamos a consultar el siguiente recurso donde se amplia la información sobre las herramientas de seguridad más utilizadas. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Herramientas_de_seguridad.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-5 Otro tipo de herramientas son los analizadores de seguridad para localizar todo tipo de posibles problemas que permiten detectar y exponer aplicaciones conocidas por su fragilidad, configuraciones particulares inseguras, uso de claves predefinidas y múltiples bugs y sus exploits. Uno de estos analizadores es Nessus:

    //- .bloque-texto-f debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.mb-5.text-center.text-regular.bloque-texto-f__texto Una aplicación gratuita para uso no comercial (en origen era libre). Sus desarrolladores producen decenas de nuevos análisis de vulnerabilidades a la semana. Estos análisis (llamados plugins) se publican para uso gratuito una semana después de su puesta a disposición de los clientes de pago. OpenVAS (inicialmente Nessus) es un analizador libre que nació como una ramificación del último Nessus libre. Los análisis de vulnerabilidades son llamados NVT (Network Vulnerability Tests) (Guimi.net, 2009).
          .bloque-texto-f__autor.mb-3
            h3.mb-0 - Nessus

    .row.mb-5.justify-content-center
      .col-lg-11
        .cajon.color-acento-contenido(style="background-color: #c0e2e36b;").p-4.mb-4
            p.mb-0(style="padding-left: 20px;") Finalmente, los programas de descubrimiento de claves analizan listados de claves cifradas o resumidas (mediante algoritmos como MD4) para intentar descubrirlas. La herramienta más utilizada es John The Ripper (JTR), que es libre y autodetecta el tipo de resumen de la clave y ataca claves de multitud de algoritmos como DES, MD5, Blowfish, Kerberos o LM Hash (Windows) tanto en ficheros de texto como en repositorios sobre LDAP o MySQL, puede trabajar con ataques de diccionario y alteraciones o mediante fuerza bruta usando tablas de caracteres frecuentes para marcar el orden (Guimi.net, 2009).


    .tarjeta.color-secundario.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema1/img7.svg", alt="autenticación", style="width:80%;").mx-auto
        .col-md.col-lg-6
          .titulo-segundo.color-acento-contenido.mb-4
            h3 Autenticación
          p.mb-4 El procedimiento de autenticación se lleva a cabo por parte del administrador de servicios quien autoriza los servicios a ejecutar en el dominio y los usuarios permitidos para utilizar las herramientas del sistema informático; los tipos de autenticación que se pueden configurar son los siguientes.
          a.boton.color-acento-botones(:href="obtenerLink('downloads/infografía_autenticación.pdf')" target="_blank" type="application/pdf")
            span.text-white Descargar
            i.text-white.fas.fa-file-download
    
    
    h3.mb-4 Autorización
    .row.mb-5
      .col-lg-7
        p.mb-4 Es el proceso por el cual se determina qué, cómo y cuándo, un usuario autenticado puede utilizar los recursos de la organización. El mecanismo o el grado de autorización puede variar dependiendo de qué sea lo que se está protegiendo, pues no toda la información de la organización es igual de crítica (Mifsud, 2012).
        p.mb-4 Al respecto:
        .row.mb-2.justify-content-center
          .col-lg-10.mb-5.mb-lg-0
            .bloque-texto-b.color-secundario.p-0
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  span.mb-5  Los recursos en general y los datos en particular, se organizan en niveles y cada nivel debe tener una autorización. Dependiendo del recurso la autorización puede hacerse por medio de la firma en un formulario o mediante una contraseña, pero siempre es necesario que dicha autorización quede registrada para ser controlada posteriormente. En el caso de los datos, la autorización debe asegurar la confidencialidad e integridad, ya sea dando o negando el acceso en lectura, modificación, creación o borrado de los datos. Por otra parte, solo se dará la autorización a acceder a un recurso a aquellos usuarios que lo requieran para la realización de su trabajo y si no se le negará.
                  br
                  p.text-end.mb-0
                    b - Mifsud, 2012
                    i.fas.fa-quote-right
      .col-lg-5.align-self-end
        figure
          img(src='@/assets/curso/tema1/img8.svg', alt="Autorización", style="width:510px;").mx-auto

    .h3.mb-4 Auditorías
    p.mb-4 Es el estudio que comprende el análisis y gestión de sistemas llevados a cabo por profesionales para identificar, enumerar y posteriormente describir las diversas vulnerabilidades que pudieran presentarse en una revisión exhaustiva de las estaciones de trabajo, redes de comunicaciones o servidores. Una vez obtenidos los resultados, se detallan, archivan y reportan a los responsables quienes deberán establecer medidas preventivas de refuerzo y/o corrección siguiendo siempre un proceso secuencial que permita a los administradores mejorar la seguridad de sus sistemas aprendiendo de los errores cometidos con anterioridad (Cómo administrar tu propio negocio, 2014).
    p.mb-5 De acuerdo con lo que afirma USS Seguridad (2019), dependiendo de los fines de la auditoría, es posible contratar profesionales externos con un objetivo concreto en el análisis informático, y este puede ser:
    .row.mb-5.justify-content-center
      .col-lg-10.mb-4
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 1
          .h4.text-center 
            | Auditoría forense
          p.text-center Es un servicio especializado para actuar ante un incidente de seguridad con el fin de recopilar evidencias digitales que permitan reunir la mayor información posible sobre el ilícito y sus operaciones.

      .col-lg-10.mb-4
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          .h4.text-center
            | Auditorías de código
          p.text-center Se refiere a pruebas de calidad del código fuente que permita identificar vulnerabilidades ante ataques informáticos y también ante el crecimiento de la demanda que la actividad realiza al software.

      .col-lg-10.mb-4
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          .h4.text-center 
            | Auditoría web
          p.text-center Este análisis está orientado a conocer las propiedades de las aplicaciones digitales y servicios web utilizados a diario en la estrategia de negocio para adelantarse a posibles riesgos y optimizar así la seguridad.

      .col-lg-10.mb-4
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 4
          .h4.text-center 
            | Actualización de dispositivos 
          p.text-center Hace referencia a verificar la actualización del software, antivirus y comprobar el cumplimiento de las reglas de firewalls.

      .col-lg-10.mb-4
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 5
          .h4.text-center 
            | Hacking ético
          p.text-center Se ponen a prueba las medidas de seguridad realizando un test de intrusión con técnicas de hacking, y tener así evidencia de la reacción.

      .col-lg-10.mb-4
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 6
          .h4.text-center 
            | Auditoría de redes
          p.text-center Se provee un mapeo de todos los dispositivos conectados a la red interna, el estado de las conexiones y la actividad de los dispositivos gestionados.
      
      .col-lg-10.mb-4
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 7
          .h4.text-center 
            | Auditoría física
          p.text-center Usado para proteger perimetralmente a la red a partir de controles físicos de entrada, alarmas contra incendios, sistemas de video vigilancia, el estado de las instalaciones de servicio de energía, agua y gas, entre otros.
      




    h3.mb-4 Cifrados

    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-texto-a.color-acento-contenido--color2.p-4.p-md-3.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-9(style="padding-left: 50px;").mb-2
                .bloque-texto-a__texto.p-4
                  p.mb-4 El cifrado de redes LAN inalámbricas se utiliza para añadir seguridad a una red inalámbrica mediante un protocolo de autenticación, que solicita una contraseña o clave de red cuando un usuario o dispositivo intenta conectarse. Si la red inalámbrica no está asegurada con algún tipo de cifrado, es posible que usuarios no autorizados accedan a ella y obtengan información personal, o que utilicen la conexión a Internet con fines maliciosos o ilegales. Además, también puede reducirse la velocidad o el rendimiento de la red si otras personas la utilizan sin conocimiento (Sony, 2021). 
                  p Entre los más conocidos se encuentran:
              .col-lg-3.mb-2.mb-lg-0.align-self-center
                figure
                  img(src='@/assets/curso/tema1/img9.svg', alt="Cifrados", style="width:206px;").mx-auto

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img10.svg', alt="Cifrados", style="width:70%;").mx-auto
      .col-lg-7
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Cifrado WEP") 
            .col-md-12.mb-4.mb-md-0
              p.mt-3.text-medium Este cifrado es vulnerable y débil y se considera un cifrado “inseguro”. WEP ofrece una insuficiente protección, por tanto, no se recomienda usarlo.
          .row(numero="2" titulo="Cifrado WPA")
            .col-md-12.mb-4.mb-md-0
              p.mt-3.text-medium Surgió de la necesidad de solucionar los inconvenientes del cifrado WEP, este cifrado ofrece diferentes variantes según la finalidad que se le dé, y estas variantes son:
              .row.justify-content-center
                .col-md-10
                  p Las principales ventajas que conlleva la logística de automatización son:
                  ol.fa-ol.lista-ol.lista-ol--separador
                    p #[strong WPA-Personal] 
                    li #[span.li--clr.fa-lo #[i.fas.fa-play]] Requiere un sistema de contraseñas PSK o claves precompartidas donde el administrador especifica su propia contraseña y todos los usuarios acceden a la red con ella, para que sea fácil recordarla.
                    p #[strong RADIUS]
                    li #[span.li--clr.fa-lo #[i.fas.fa-play]] Específico para empresas, se basa en un servidor donde los usuarios se autentican con un usuario y una contraseña diferente para cada uno y no con una contraseña global.
                    p #[strong Cifrado WPA2]
                    li #[span.li--clr.fa-lo #[i.fas.fa-play]] Es la actualización de WPA, mejora tanto el rendimiento como la seguridad, cuenta con variantes de claves personales PSK y sistemas RADIUS para gestionar la red, el cifrado es superior al de WPA.



    h3.mb-5 Filtros de paquete
    .cajon.color-acento-contenido.p-4.mb-5
      p Se trata de una función presente en los routers que mejora la seguridad, es el filtrado MAC, el cual permite restringir el acceso a recursos de un dispositivo específico, por ejemplo la red inalámbrica, acceso a Internet o servidor SAMBA.


    h3.mb-5 Firewalls
    p.mb-5 Sirven para proteger el equipo de conexiones salientes o entrantes a la red. Existen firewalls de software y de hardware; entre sus principales beneficios se encuentran:
    
    .bg11.mb-5
      .row.justify-content-center.align-items-center        
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/tema1/2.svg', alt='')
        .col-lg-8.my-3    
          SlyderF.text-center.px-3(columnas="col-lg-6")(data-aos="fade-left")
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/4.svg' alt='')
              p.mb-0 Evitan los ataques de otros servidores a la red privada. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/5.svg' alt='')
              p.mb-0 Permiten al administrador de la red definir un embudo, manteniendo al margen los usuarios no autorizados. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/6.svg' alt='')
              p.mb-0 Permiten monitorear la seguridad, cuando aparece alguna actividad sospechosa, esto generará una alarma.
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/7.svg' alt='')
              p.mb-0 Un hacker prefiere una computadora sin firewalls. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/8.svg' alt='')
              p.mb-0 Concentran la seguridad, centralizan los accesos.
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/9.svg' alt='')
              p.mb-0 Generan alarmas de seguridad. Traducen direcciones (NAT).
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/10.svg' alt='')
              p.mb-0 Monitorean y registran el uso de servicios de WWW y FTP. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/11.svg' alt='')
              p.mb-0 Controlan el uso de internet. Permiten bloquear el material no adecuado (Seguridad en la red, s.f.). 
    

    .row.mb-5.justify-content-end
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('downloads/Firewall.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Firewalls de software y de hardware



    h3.mb-5 Detección de intrusos
    .row.justify-content-center.mb-4
      .col-lg-11
        .bloque-texto-a.color-acento-contenido.p-2.p-md-3.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img12.svg', alt="Detección de intrusos", style="width:60%;").mx-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Un Sistema de Detección de Intrusos (IDS: Intrusion Detection System), se implementa para detectar actividades inadecuadas, incorrectas o irregulares, ocurridas en el interior o exterior de los dispositivos e infraestructura de la red.

    p.mb-5 El IDS está basado en el patrón de comportamiento del intruso que es diferente al del usuario legítimo, por medio de análisis de estadísticas de uso. El IDS utiliza el uso de programas, archivos y dispositivos, a corto, mediano y largo plazo para crear los patrones de comportamiento de usuarios que permitan realizar la detección efectiva; también usa un sistema de reglas predefinidas llamadas firmas o rúbricas para representar las violaciones conocidas.
    h3.mb-4 Funcionalidad

    .row.justify-content-center.mb-4
      .col-lg-9.align-self-center
        p.mb-4 Se enfoca en el análisis detallado del tráfico de red y el uso de los dispositivos. La evaluación se lleva a cabo comparando el suceso con comportamientos sospechosos o firmas de ataques conocidos. Las bases de datos de firmas de ataques conocidos de los IDS permiten distinguir entre el uso normal y el uso fraudulento de un terminal de red, y/o entre el tráfico normal de la red y el tráfico inusual debido a un ataque o intento del mismo.
        .cajon.color-acento-contenido.p-4.mb-5
          p Es importante para el IDS prestar atención si ocurre un escaneo de puertos, transmisión de paquetes de datos dañados, entre otros. El IDS generalmente se integra con el firewall, en la puerta de enlace de la red, uniendo así la inteligencia del IDS y el poder de bloqueo del firewall, en el lugar donde inevitablemente pasan los paquetes y se puedan bloquear antes de ingresar a la red.
      .col-lg-3.align-self-center
        figure
          img(src='@/assets/curso/tema1/img13.svg', alt="Funcionalidad", style="width:100%;").mx-auto

    h3.mb-4 Características
    p.mb-4 Según B2B Consultores (2020): <br> <br> Cualquier sistema de detección de intrusos, sea cual sea su tipo y base de funcionamiento, debería contar con las siguientes características:


    .row.justify-content-center.mb-3
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img14.svg', alt="Cifrados", style="width:100%;").mx-auto
      .col-lg-7
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 1
          .col
            .tarjeta.tarjeta--gris
              p Funcionar continuamente sin supervisión humana. El sistema debe ser lo suficientemente fiable para poder ser ejecutado en segundo plano como parte del dispositivo o la red que está siendo observada.
        
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 2
          .col
            .tarjeta.tarjeta--gris
              p Ser tolerante a fallos en el sentido de que debe ser capaz de sobrevivir a una caída del sistema.

        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 3
          .col
            .tarjeta.tarjeta--gris
              p Ser resistente a perturbaciones, en el sentido en que puede monitorizarse a sí mismo para asegurarse de que no ha sido perturbado.
        
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 4
          .col
            .tarjeta.tarjeta--gris
              p Imponer mínima sobrecarga sobre el sistema. Un sistema que consume muchos recursos computacionales no debe ser utilizado.
    
    .row
      .col-lg-12
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 5
          .col
            .tarjeta.tarjeta--gris
              p Observar desviaciones sobre el comportamiento estándar.
        
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 6
          .col
            .tarjeta.tarjeta--gris
              p Fácilmente adaptable al sistema operativo ya instalado, pues cada uno tiene un patrón de funcionamiento diferente y el mecanismo de defensa debe adaptarse de manera sencilla a esos patrones.

        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 7
          .col
            .tarjeta.tarjeta--gris
              p Hacer frente a los cambios de comportamiento del sistema según se añaden nuevas aplicaciones al mismo.
        
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 8
          .col
            .tarjeta.tarjeta--gris
              p Que ayude a identificar de dónde provienen los ataques que se sufren, y recoger evidencias que pueden ser usadas para identificar intrusos.

        .row.align-items-start.mb-5
          .col-auto        
            .round--number
              p 9
          .col
            .tarjeta.tarjeta--gris
              p Difícil de vulnerar y suministrar a los especialistas de seguridad cierta tranquilidad.
    
    .bg13.p-4    
      p.mb-0 Siguiendo este tema, Infotecs (2019) afirma que: "cada día se crean nuevas técnicas para exponer o vulnerar sistemas computacionales, y es un gran desafío para la seguridad de la información acompañar esta velocidad, e incluso estar al frente y no actuar de forma reactiva. La implementación de una buena política de IDS es fundamental en una arquitectura de seguridad, ya que este recurso, si se actualiza constantemente, es capaz de mantener la infraestructura distante de ataques oportunistas, ya sea desde una perspectiva de la red, o por la propia exposición de un dispositivo. Para poner en funcionamiento, un sistema de detección de intrusos se debe tener en cuenta que es posible optar por una solución de hardware, de software, o incluso una combinación de estos. La posibilidad de introducir un elemento hardware es debido al alto procesamiento de información en redes con mucho tráfico; a su vez, los registros de firmas y las bases de datos con los posibles ataques necesitan gran cantidad de almacenamiento. En la actualidad, además, el desarrollo de las estrategias de seguridades para los dispositivos y las redes de comunicación ha influido en el surgimiento de un nuevo tipo de defensa a tomar en consideración: los IPS o Sistemas de Prevención de Intrusiones, que en buena medida pueden interpretarse como una evolución de los IDS tradicionales".

    separador.mb-4


    #t_1_6.titulo-segundo.color-acento-contenido
      .h2 1.6 Vulnerabilidades y amenazas

    p.mb-4 De acuerdo con Mifsud (2012):
    .row.mb-5.justify-content-center
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.color-secundario.p-0
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              span.mb-2 
                | La vulnerabilidad es la debilidad de cualquier tipo que compromete la seguridad del sistema informático. Se define como amenaza el escenario en el que una acción o suceso, ya sea o no deliberado, compromete la seguridad de un elemento del sistema informático. Cuando a un sistema informático se le detecta una vulnerabilidad y existe una amenaza asociada a dicha vulnerabilidad, puede ocurrir que el suceso o evento se produzca y el sistema esté en riesgo. Si el evento se produce y el riesgo que era probable ahora es real, el sistema informático sufrirá daños que habrá que valorar cualitativa y cuantitativamente, y esto se llama 'impacto'. Es decir, un evento producido en el sistema informático que constituye una amenaza asociada a una vulnerabilidad del sistema produce un impacto sobre él. Si se quieren eliminar las vulnerabilidades del sistema informático o queremos disminuir el impacto que puedan producir sobre él, ha de proteger el sistema mediante una serie de medidas que se pueden llamar defensas o salvaguardas.
                p.text-end.mb-0
                  b -  Mifsud, 2012
                  i.fas.fa-quote-right
              //p.text-end.mb-0
                b -  Artículo 18,  Acuerdo 617 de 2018
    
    p.mb-4 Las vulnerabilidades se pueden agrupar en función de:

    .row.justify-content-center(style="margin-bottom:60px;")
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img15.svg', alt="vulnerabilidades", style="width:371px;").mx-auto
      .col-lg-7
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-acento-contenido   
          .row(numero="1" titulo="Diseño")
            .col-md-12.mb-4.mb-md-0
              .row.justify-content-center.mt-3
                .col-md-10
                  ol.fa-ol.lista-ol.lista-ol--separador

                    li #[span.li--clr.fa-lo #[i.fas.fa-play]] Debilidad en el diseño de protocolos utilizados en las redes.

                    li.align-items-baseline #[span.li--clr.fa-lo #[i.fas.fa-play]]  Políticas de seguridad deficiente e inexistente.

          .row(numero="2" titulo="Implementación")
            .col-md-12.mb-4.mb-md-0
              .row.justify-content-center.mt-3
                .col-md-10
                  
                  ol.fa-ol.lista-ol.lista-ol--separador

                    li.align-items-baseline #[span.li--clr.fa-lo #[i.fas.fa-play]] Errores de programación.

                    li #[span.li--clr.fa-lo #[i.fas.fa-play]] Existencia de “puertas traseras” en los sistemas informáticos.

                    li.align-items-baseline #[span.li--clr.fa-lo #[i.fas.fa-play]] Descuido de los fabricantes.

          .row(numero="3" titulo="Uso")
            .col-md-12.mb-4.mb-md-0
              .row.justify-content-center
                .col-md-10
                  ol.fa-ol.lista-ol.lista-ol--separador

                    li.align-items-baseline #[span.li--clr.fa-lo #[i.fas.fa-play]] Configuración inadecuada de los sistemas informáticos.

                    li #[span.li--clr.fa-lo #[i.fas.fa-play]] Desconocimiento y falta de sensibilización de los usuarios y de los responsables de informática.

                    li.align-items-baseline #[span.li--clr.fa-lo #[i.fas.fa-play]] Disponibilidad de herramientas que facilitan los ataques.

                    li.align-items-baseline #[span.li--clr.fa-lo #[i.fas.fa-play]] Limitación gubernamental de tecnologías de seguridad.

    h4.mb-4 Vulnerabilidad del día cero
    p.mb-5 Aquellas vulnerabilidades para las cuales no existe una solución “conocida”, pero se sabe cómo explotarla. (Mifsud, 2012).

    h4.mb-4 Vulnerabilidades conocidas
    p.mb-5 Estas vulnerabilidades están en las bases de datos de ataques conocidos usadas para comparar y detectar los posibles intrusos que quieran acceder al sistema informático, entre ellas se tienen:

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema1/cards/13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Desbordamiento de buffer
              p Ocurre cuando un programa no controla la cantidad de datos que se copian en buffer, si esa cantidad es superior a la capacidad del buffer los bytes sobrantes se almacenan en zonas de memoria adyacentes, sobrescribiendo su contenido original. Se aprovecha para ejecutar código que permita privilegios de administrador.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema1/cards/14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Condición de carrera (Race Condition)
              p Sucede cuando varios procesos acceden al mismo tiempo a recursos compartidos.

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema1/cards/15.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Error de formato de cadena (Format String Bugs)
              p Aquí se acepta la entrada de datos proporcionada por el usuario sin validar. Es un error de programación para el lenguaje C/C++. Un ataque con esta vulnerabilidad permite ejecutar código arbitrario y revelar información confidencial.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema1/cards/16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Cross Site Scripting (XSS)
              p Incluye ataques que permiten ejecutar scripts como VBScript o JavaScript, en el ambiente de otro sitio web. Este error se presenta en aplicaciones que presentan la información en navegadores web. Esta vulnerabilidad realiza phishing constante con el fin de obtener contraseñas de usuarios atacados.

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema1/cards/17.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Inserción SQL
              p Hay inserción de código SQL usurpador entre el código SQL programado, para alterar la marcha normal del programa y conseguir así que se ejecute la porción de código “invasor” introducido, en la base de datos.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema1/cards/18.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Vulnerabilidades de denegación del servicio
              p Se pierde el acceso a recursos y servicios por parte de los usuarios legítimos, hay pérdida de conectividad de la red por el consumo del ancho de banda de la red o sobrecarga de los recursos informáticos del sistema de la víctima.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema1/cards/19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Ventanas engañosas (Window Spoofing)
              p Estas ventanas ofrecen premios, rebajas, primicias mentirosas para capturar información y efectuar un ataque (Mifsud, 2012).

    separador.mb-4

    #t_1_7.titulo-segundo.color-acento-contenido
      .h2 1.7 Análisis de seguridad de la red

    .tarjeta.color-secundario.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema1/img7.svg", alt="Análisis de seguridad de la red", style="width:80%;").mx-auto
        .col-md.col-lg-6
          .titulo-segundo.color-acento-contenido.mb-4
            h3 Análisis de seguridad de la red
          p.mb-4 El análisis de la seguridad en la red se debe realizar para detectar irregularidades, comportamiento inusual de usuarios y demás amenazas. Para ello, se almacenan datos de la organización, se convierten en información accionable, de manera que los profesionales de tecnología de la información (TI) actúen con rapidez y se minimicen los riesgos.
          a.boton.color-acento-botones(:href="obtenerLink('downloads/Analisis_de_seguridad_de_la_Red.pdf')" target="_blank" type="application/pdf")
            span.text-white Descargar
            i.text-white.fas.fa-file-download

    separador.mb-4

    #t_1_8.titulo-segundo.color-acento-contenido
      .h2 1.8 Análisis de riesgos

    p.mb-5 La academia Cisco (2005), menciona que el análisis de riesgo tiene como objetivo determinar los componentes que requieren protección dentro del sistema, las amenazas que lo colocan en peligro y las vulnerabilidades que los debilitan con el fin de evaluar el grado de riesgo. En el campo de la seguridad informática, el método más usado para el análisis y valoración del riesgo está basado en la siguiente fórmula matemática:
    .row.justify-content-center.mb-5
      .col-lg-6.align-self-center(style="background-color:#00223d;").p-4
          .h4.mb-0.text-center(style="color:#ffff !important;") Riesgo = Magnitud de Daño * Probabilidad de Amenaza
    
    p.mb-4 Para presentar el resultado del análisis de riesgo se hace uso de una gráfica de dos dimensiones, donde, el eje #[strong x] horizontal representa la magnitud de daño y el eje #[strong y] vertical la probabilidad de amenaza. La probabilidad de amenaza y magnitud de daño pueden tomar condiciones entre insignificante (1) y muy alta (5). Aunque no es necesario dar valores numéricos a las condiciones de las variables, es útil porque, facilita el uso de hojas de cálculo en su representación. El análisis de riesgo permite ubicar los factores que influyen, positiva o negativamente.

    .cajon.color-acento-contenido.p-4.mb-5
          p Es importante reconocer que los riesgos son dinámicos, cambiantes, con diferentes caracteres de vulnerabilidad y con percepción distinta dependiendo del área que lo perciba, por tanto, deben participar los especialistas de todas las dependencias de la organización (gerencia, coordinación, administración financiera, técnicos, soporte técnico externo, etc.). Como conclusión de esta representación gráfica se puede observar que entre más alta la probabilidad de amenaza y magnitud de daño, más grande será el riesgo y el peligro al sistema, por lo cual se deben implementar medidas de protección. Esta representación se evidencia en la siguiente tabla:

    .titulo-sexto.color-acento-contenido.mb-2
      h5 Tabla 1.
      span Representación gráfica análisis

    .row.justify-content-center.mb-2
      .col-lg-10
        .tabla-b.color-secundario.mb-5
          .tabla-b__header
            h4.mb-0.text-black(style="font-size:25px;") Análisis de riesgo
          tbody.text-center
            tr
              th.text-center(colspan=8, style="border:none !important; font-size:20px;") Riesgo = Probabilidad de amenaza * Magnitud del daño
              
            tr
              th(colspan=3, style="background-color:#fff; border:none !important;")
              th.text-center(colspan=5, style="font-size:20px; background-color:#b6defd; border-top: 1px solid #000; border-right: 1px solid #000;") Magnitud del daño
            tr.text-center
              th(colspan=3, style="background-color:#fff; border:none !important;")
              th(style="font-size:20px;") 1
              th(style="font-size:20px;") 2
              th(style="font-size:20px;") 3
              th(style="font-size:20px;") 4
              th(style="border-right: 1px solid #000; font-size:20px;") 5
            tr
              
              th(rowspan=6, style="font-size:20px;background-color:#b6defd; border-top: 1px solid #000;") 
                p.mb-0.texto-vertical Probabilidad de amenaza
              th(style="font-size:20px;border-top: 1px solid #000;") Frecuente
              th(style="font-size:20px;border-top: 1px solid #000;") 5
              th(style="font-size:20px;background-color:#ff3;") 5
              th(style="font-size:20px;background-color:#ff9b04;") 10
              th(style="font-size:20px;background-color:#f00;") 15
              th(style="font-size:20px;background-color:#f00;") 20
              th(style="font-size:20px;border-right: 1px solid #000;background-color:#f00;") 25
              
            tr
            
              
              th(style="font-size:20px;") Probable
              th(style="font-size:20px;") 4
              th(style="font-size:20px;background-color:#0f0;") 4
              th(style="font-size:20px;background-color:#ff3;") 8
              th(style="font-size:20px;background-color:#ff9b04;") 12
              th(style="font-size:20px;background-color:#f00;") 16
              th(style="border-right: 1px solid #000; font-size:20px; background-color:#f00;") 20
            tr
              
              
              th(style="font-size:20px;") Mediana
              th(style="font-size:20px;") 3
              th(style="font-size:20px; background-color:#0f0;") 3
              th(style="font-size:20px; background-color:#ff3;") 6
              th(style="font-size:20px; background-color:#ff3;") 9
              th(style="font-size:20px; background-color:#ff9b04;") 12
              th(style="border-right: 1px solid #000;font-size:20px; background-color:#f00;") 15
            tr
              
              
              th(style="font-size:20px;") Baja
              th(style="font-size:20px;") 2
              th(style="font-size:20px; background-color:#0f0;") 2
              th(style="font-size:20px; background-color:#0f0;") 4
              th(style="font-size:20px; background-color:#ff3;") 6
              th(style="font-size:20px; background-color:#ff3;") 8
              th(style="border-right: 1px solid #000;font-size:20px; background-color:#ff9b04;") 10
            tr           
              th(style="font-size:20px;") Insignificante
              th(style="font-size:20px;") 1
              th(style="background-color:#0f0; font-size:20px;") 1
              th(style="background-color:#0f0; font-size:20px;") 2
              th(style="background-color:#0f0; font-size:20px;") 3
              th(style="background-color:#0f0; font-size:20px;") 4
              th(style="border-right: 1px solid #000; font-size:20px; background-color:#ff3;") 5
    
    .row.justify-content-center.mb-4
      .col-lg-10.align-self-center
        .tabla-b.color-secundario.mb-5(style="text-align: -webkit-center;")
          tbody.text-center
              
            tr
              td(style="font-size:20px;")
                .row.justify-content-center
                  .col-auto(style=" background-color:#f00;")
                    p.p-0.mb-0 
                      strong Riesgo  muy alto <br>(15 - 25)  
            
              td(style="font-size:20px; ")
                .row.justify-content-center
                  .col-auto(style="background-color:#ff9b04;")
                    p.p-0.mb-0 
                      strong Riesgo alto <br>(10 - 14)
                
              td(style="font-size:20px;")
                .row.justify-content-center
                  .col-auto(style=" background-color:#ff3;")
                    p.p-0.mb-0 
                      strong Riesgo medio<br>(5 - 9)

              td(style="font-size:20px;")
                .row.justify-content-center
                  .col-auto(style="background-color:#0f0;")
                    p.p-0.mb-0 
                      strong Riesgo bajo <br>(1 - 4)
              


    separador


    #t_1_9.titulo-segundo.color-acento-contenido
      .h2 1.9 Matriz de control

    .row.justify-content-center.mb-4
      .col-lg-11
        .bloque-texto-a.color-acento-contenido.p-5.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img19.svg', alt="Matriz de control", style="width:261px;").mx-auto
            .col-lg-9
              .bloque-texto-a__texto.p-4.me-md-3
                p.ps-3 Esta herramienta posibilita medir la efectividad de una gestión de riesgo adecuada, permite identificar las actividades de la organización, clasifica el tipo de riesgo según la intensidad y los diferentes factores que lo producen. A partir de la información documentada, se diagnostica la condición de riesgo de una entidad. El método debe incluir las diferentes áreas de negocio de la empresa con el fin de comparar los productos, proyectos y procesos. 

    p.mb-4 Al respecto, Mejía (2006) afirma que: 

    .row.mb-5.justify-content-center
      .col-lg-11.mb-5.mb-lg-0
        .bloque-texto-b.color-secundario.p-0
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              span.mb-2 
                strong(style="font-size:24px;") La ventaja principal de la matriz de control es la facilidad para identificar los riesgos, determinar los controles existentes y proponer nuevos. Su principal desventaja es la cantidad de información y cuadros que se deben desarrollar, pues pueden dificultar, complicar o demorar su aplicación. Esta desventaja se ha subsanado con el uso de herramientas computarizadas. 
              i.fas.fa-quote-right
              //p.text-end.mb-0
                b -  Artículo 18,  Acuerdo 617 de 2018
      
    p.mb-4 La matriz de control también permite identificar los riesgos y plantear estrategias enfocadas al desarrollo del modelo de gestión pertinente.
    p.mb-4 El método utilizado para el diseño de la matriz, es el Delphi, donde se consulta a los especialistas o expertos temáticos acerca del medio y las actividades de la organización o del proyecto. En la matriz se establecen y plasman los componentes, los recursos y las posibles amenazas sobre el objeto de análisis, tal como se muestra en la siguiente tabla.

    .titulo-sexto.color-acento-contenido.mb-2
      h5 Tabla 2.
      span Componentes matriz de control 

    .row.justify-content-center.mb-4
      .col-lg-12
        .tabla-b.color-secundario.mb-5
          .tabla-b__header
            h4.mb-0.text-black Matriz de riesgos graficada
          tbody.text-center
            tr
              th.text-center(colspan=8,style="background-color:#fff; border: none !important;")
              
            tr
              th(colspan=3, style="font-size:16px; background-color:#fff; border-top: 1px solid #000;") Matriz de control de riesgo
              th.text-center(colspan=5, style="font-size:16px; background-color:#b6defd;border-top: 1px solid #000; border-right: 1px solid #000;") Probabilidad de  amenaza

            tr.text-center
              th(colspan=1,rowspan=2, style="font-size:16px; background-color:#fff;") Elementos de información
              th(rowspan=2, style="font-size:16px; background-color:#ffffc4;") Magnitud de daño
              th(colspan=2, style="font-size:16px; background-color:#fff;") Criminalidad
              th(colspan=2, style="font-size:16px; background-color:#fff;") Sucesos físicos 
              th(colspan=2, style="font-size:16px; background-color:#fff;border-right: 1px solid #000;") Negligencia
              
            tr
              th(style="font-size:16px; background-color:#fff;") Robo
              th(style="font-size:16px; background-color:#fff;") Virus
              th(style="font-size:16px; background-color:#fff;") Incendio
              th(style="font-size:16px; background-color:#fff;") Falta de corriente
              th(style="font-size:16px; background-color:#fff;") Compartir contraseñas
              th(style="font-size:16px; background-color:#fff;border-right: 1px solid #000;") No cifrar datos críticos
              
            tr(style="font-size:16px; background-color:#b6defd;")
              th(colspan=2,style="font-size:16px; background-color:#ffff;") Datos e información
              th(style="font-size:16px;") 3
              th(style="font-size:16px;") 4
              th(style="font-size:16px;") 2
              th(style="font-size:16px;") 3
              th(style="font-size:16px;") 5
              th(style="font-size:16px; border-right: 1px solid #000;") 3
              



            tr
              th(style="font-size:16px; background-color:#fff;") RR.HH
              th(style="font-size:16px; background-color:#ffffc4;")  3
              th(style="font-size:16px; background-color:#ff3;") 9
              th(style="font-size:16px; background-color:#ff9b04;") 12
              th(style="font-size:16px; background-color:#0f0;") 6
              th(style="font-size:16px; background-color:#ff3;") 9
              th(style="font-size:16px; background-color:#f00;") 15
              th(style="font-size:16px; border-right: 1px solid #000; background-color:#ff3;") 9
            tr
              th(style="font-size:16px;") Finanzas
              th(style="background-color:#ffffc4; font-size:16px;") 4
              th(style="font-size:16px; background-color:#ff9b04;") 12
              th(style="font-size:16px; background-color:#f00;") 16
              th(style="font-size:16px; background-color:#ff3;") 8
              th(style="font-size:16px; background-color:#ff9b04;") 12
              th(style="font-size:16px; background-color:#f00;") 20
              th(style="border-right: 1px solid #000; font-size:16px; background-color:#ff9b04;") 12
            tr
              th(colspan=2, style="font-size:16px; background-color:#fff;") Sistemas de información
              th(colspan=6,style="border-right: 1px solid #000;")
            tr
              th(style="font-size:18px;") Computadores
              th(style="font-size:18px; background-color:#ffffc4;")  2
              th(style="font-size:16px; background-color:#0f0;") 6
              th(style="font-size:16px; background-color:#ff3;") 8
              th(style="font-size:16px; background-color:#0f0;") 4
              th(style="font-size:16px; background-color:#0f0;") 6
              th(style="font-size:16px; background-color:#ff9b04;") 10
              th(style="font-size:16px; border-right: 1px solid #000; background-color:#0f0;") 6
            tr
              th(style="font-size:16px; background-color:#ffff;") Portátiles
              th(style="font-size:16px; background-color:#ffffc4;") 3
              th(style="font-size:16px; background-color:#ff3;") 9
              th(style="font-size:16px; background-color:#ff9b04;") 12
              th(style="font-size:16px; background-color:#0f0;") 6
              th(style="font-size:16px; background-color:#ff3;") 9
              th(style="font-size:16px; background-color:#f00;") 15
              th(style="border-right: 1px solid #000; font-size:16px; background-color:#ff3;") 9
            tr
              th(colspan=2, style="font-size:16px; background-color:#fff;") Personal
              th(colspan=6, style="border-right: 1px solid #000;")
            tr
              th(style="font-size:16px; background-color:#ffff;") Coordinador
              th(style="font-size:16px; background-color:#ffffc4;")  4
              th(style="font-size:16px; background-color:#ff9b04;") 12
              th(style="font-size:16px; background-color:#f00;") 16
              th(style="font-size:16px; background-color:#ff3;") 8
              th(style="font-size:16px; background-color:#ff9b04;") 12
              th(style="font-size:16px; background-color:#f00;") 20
              th(style="border-right: 1px solid #000; font-size:16px; background-color:#ff9b04;") 12
            tr
              th(style="font-size:16px;") Personal técnico
              th(style="font-size:16px; background-color:#ffffc4;") 5
              th(style="font-size:16px; background-color:#f00;") 15
              th(style="font-size:16px; background-color:#f00;") 20
              th(style="font-size:16px; background-color:#ff9b04;") 10
              th(style="font-size:16px; background-color:#f00;") 15
              th(style="font-size:16px; background-color:#f00;") 25
              th(style="border-right: 1px solid #000; font-size:16px; background-color:#f00;") 15

    .row.justify-content-center.mb-4
      .col-lg-8
        .tabla-b.color-secundario.mb-5
          tbody.text-start
              
            tr
              td(colspan=1, style="font-size:16px;")
                .row.justify-content-center
                  .col-auto(style=" background-color:#f00;")
                    p.p-4
              td(colspan=5, style="font-size:16px; background-color:#fff;") Riesgo muy grave. Requieren mitigación: planes de actuación correctivas. Requiere medidas correctivas urgentes. No se debe iniciar el proyecto sin la apicación de medidas preventivas urgentes y sin acotar sólidamente el riesgo.
            
            tr
              td(colspan=1, style="font-size:16px; ")
                .row.justify-content-center
                  .col-auto(style="background-color:#ff9b04;")
                    p.p-4 
              td(colspan=5, style="font-size:16px; background-color:#fff;") Riesgo importante. Medidas preventivas obligatorias. Se deben controlar fuertemente las variables de riesgo durante el proyecto.

            tr
              td(colspan=1, style="font-size:16px;")
                .row.justify-content-center
                  .col-auto(style=" background-color:#ff3;")
                    p.p-4 
              td(colspan=5, style="font-size:16px; background-color:#fff;") Riesgo apreciable. Necesitan investigación: planes de actuación  preventivos. Estudiar económicamente si es posible introducir medidas preventivas para reducir el nivel de riesgo. Si no fuera posible, mantener  las variables controladas.
            
            tr
              td(colspan=1, style="font-size:16px;")
                .row.justify-content-center
                  .col-auto(style="background-color:#0f0;")
                    p.p-4 
              td(colspan=5, style="font-size:16px; background-color:#fff;") Riesgo marginal. Necesitan monitoreo: planes de actuación detectivos. Se vigilará aunque no requiere medidas preventivas de partida.
            




    .cajon.color-acento-contenido.p-4.mb-4
      p La matriz se construye ubicando los recursos amenazados (componentes) encabezando las filas y las amenazas encabezando las columnas. Los componentes se refieren a los recursos que se quieren proteger y las amenazas a los eventos negativos que puedan generar pérdida o afectar los componentes. Cuando se han identificado los riesgos, se determina la probabilidad de ocurrencia y el valor de la misma, luego, se realizan los procesos de evaluación y estimación del riesgo.

    separador

    #t_1_10.titulo-segundo.color-acento-contenido
      .h2 1.10 Estimación de la vulnerabilidad

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img20.svg', alt="Estimación de la vulnerabilidad", style="width:80%;").mx-auto
      .col-lg-8.align-self-center
        p.mb-4 Es la probabilidad que tiene un sistema de sufrir probables pérdidas, pueden ser físicas o de software, esto debido a diferentes causas de acuerdo con el tipo de ataque que se realice. El riesgo se mide de acuerdo con la vulnerabilidad. Se estima con base en el período de recurrencia de los hechos. Teniendo en cuenta los diferentes componentes se mencionan:
        .row.justify-content-center
          .col-lg-4.my-2
            .bg1.p-3.h-100.text-center.brad
              img.img-a.img-t.mb-3(src='@/assets/curso/tema1/tarjetas/1.svg', alt='')
              h4.fst-italic Software 
              p.mb-0 Vulnerabilidades por parte de las aplicaciones instaladas en los equipos de la red. 
          .col-lg-4.my-2
            .bg1.p-3.h-100.text-center.brad
              img.img-a.img-t.mb-3(src='@/assets/curso/tema1/tarjetas/2.svg', alt='')
              h4.fst-italic Hardware  
              p.mb-0 Están descritas de acuerdo con las configuraciones realizadas por parte del administrador.
          .col-lg-4.my-2
            .bg1.p-3.h-100.text-center.brad
              img.img-a.img-t.mb-3(src='@/assets/curso/tema1/tarjetas/3.svg', alt='')
              h4 Topología 
              p.mb-0 Dentro de este grupo se menciona el cableado estructurado, basado en el estándar. 

    separador


    #t_1_11.titulo-segundo.color-acento-contenido
      .h2 1.11 Requisitos de la seguridad

    p.mb-5 La seguridad debe contar con requisitos mínimos entre los cuales se pueden enunciar los siguientes:
    .bg11.mb-5
      .row.justify-content-center.align-items-center        
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/tema1/13.svg', alt='')
        .col-lg-8.my-3    
          SlyderF.text-center.px-3(columnas="col-lg-6")(data-aos="fade-left")
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/14.svg' alt='')
              h4 Parche en sistema operativo 
              p.mb-0 Instalar las actualizaciones de #[i software], preferiblemente de forma automática, que permitan solucionar las fallas de seguridad en los sistemas operativos. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/15.svg' alt='')
              h4 Seguridad en los servicios de red 
              p.mb-0 Los servicios de red se deben limitar en necesidad, acceso, pertinencia y seguridad, haciendo uso del #[i firewall]. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/16.svg' alt='')
              h4 Contraseñas robustas 
              p.mb-0 Crear y usar contraseñas que cumplan con los requerimientos de la organización. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/17.svg' alt='')
              h4 Cifrado para autenticación 
              p.mb-0 La autenticación en el sistema informático, se debe proteger mediante el uso de cifrado. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/18.svg' alt='')
              h4 Protección de #[i software] 
              p.mb-0 Ejecutar y actualizar automáticamente y de forma regular, los antivirus y #[i firewall], para garantizar la seguridad del sistema. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/tema1/19.svg' alt='')
              h4 Seguridad física 
              p.mb-0 Proteger físicamente el sistema, medios fijos y portátiles, de manipulación, acceso no autorizado o robo. 


    separador.mb-4

    #t_1_12.titulo-segundo.color-acento-contenido
      .h2 1.12 Revisión y actualizaciones de la política de la seguridad


    .row.justify-content-center.mb-4
      .col-lg-7.align-self-center
        p.mb-4 Es una de las etapas necesarias una vez que las políticas ya están funcionando dentro de una organización, no obstante, el tiempo que transcurre desde que éstas ya están implementadas dentro de la organización hasta su primera revisión es variable, ya que no existe un tiempo determinado. Este periodo de tiempo no está estipulado, sin embargo, varios ingenieros y analistas de sistemas de seguridad informática opinan que la revisión de las políticas de seguridad debe estar dentro de un lapso de entre seis (6) meses y un año, por ser tiempo suficiente para encontrar patrones que requieren algún tipo de ajuste. 
        .cajon.color-acento-contenido.p-4.mb-4
          p El periodo de revisión de las políticas debe ser establecido por el comité de seguridad de manera empírica, dependiendo de diversos factores que afectan a la organización entre los que se encuentran la experiencia del personal de seguridad, las necesidades de seguridad que se tengan, cambios en la organización, el alza en número de incidentes, entre otros. 

      .col-lg-5.align-self-center
        igure
          img(src='@/assets/curso/tema1/img30.png', alt="Revisión y actualizaciones de la política de la seguridad", style="width:80%;").mx-auto

    p.mb-4 Para que cualquier metodología establecida funcione, todos los usuarios deben haber sido capacitados previamente en las PSI. Una vez capacitados, todos los usuarios pueden participar en la propuesta de modificaciones, ajustes o cambios para la mejora de las PSI. Las propuestas y observaciones deben pasar por un primer filtro, el cual consiste en la revisión de dicha propuesta por parte del administrador o responsable donde surgió la propuesta. Una vez que el personal responsable y administradores acuerdan que la propuesta es viable y que es en beneficio para la organización, acuerdan entregar el trabajo al personal de seguridad que revisa, evalúa, analiza y estudia las observaciones para elaborar una propuesta que será presentada al comité de seguridad para su aprobación.      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
