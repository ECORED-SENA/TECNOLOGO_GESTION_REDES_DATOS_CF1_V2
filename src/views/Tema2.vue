<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Implementación

    p.mb-4 El desarrollo de un plan de seguridad de red consiste en hacer las preguntas correctas y sus respuestas impulsarán la implementación. Al formular un plan de seguridad de red razonable, se pueden hacer preguntas importantes, tales como:
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4
        .bg1.p-3.h-100.text-center.brad
          img.img-a.img-t.mb-3(src='@/assets/curso/tema2/1.svg', alt='')
          p ¿Qué necesito proteger?
          p ¿Qué regulaciones gubernamentales debo seguir?
      .col-lg-4.mb-4
        .bg1.p-3.h-100.text-center.brad
          img.img-a.img-t.mb-3(src='@/assets/curso/tema2/2.svg', alt='')
          p ¿Cómo auditar mi plan de seguridad de red?
      .col-lg-4.mb-4
        .bg1.p-3.h-100.text-center.brad
          img.img-a.img-t.mb-3(src='@/assets/curso/tema2/3.svg', alt='')
          p ¿Qué herramientas pueden soportar mi plan de seguridad de red? 


    #t_2_1.titulo-segundo.color-acento-contenido
      .h2 2.1 Parámetros para establecer políticas de seguridad
    
    p.mb-4 Cuando se formulen las políticas de seguridad informática, es indispensable tener en cuenta, por lo menos, los aspectos siguientes:

    .row.justify-content-center.mb-5
      .col-lg-7.align-self-center

        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 1
          .col
            .tarjeta.tarjeta--gris
              p Realizar análisis de riesgo informático, valorar los activos y adecuar las políticas a la realidad de la organización.
        
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 2
          .col
            .tarjeta.tarjeta--gris
              p Programar reuniones con los departamentos dueños de los recursos, pues con su experiencia permiten establecer el alcance y definir las violaciones a la seguridad.

        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 3
          .col
            .tarjeta.tarjeta--gris
              p Informar al personal involucrado sobre el desarrollo de las políticas, los beneficios, riesgos relacionados con los bienes, recursos y elementos de seguridad.
        
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 4
          .col
            .tarjeta.tarjeta--gris
              p Identificar en cada departamento el personal que toma las decisiones, pues son los encargados de salvaguardar los activos críticos del área.

        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 5
          .col
            .tarjeta.tarjeta--gris
              p Monitorear periódicamente las operaciones y procedimientos de la empresa, para actualizar de forma oportuna las políticas ante los cambios ocurridos.
        
        .row.align-items-start
          .col-auto        
            .round--number
              p 6
          .col
            .tarjeta.tarjeta--gris
              p Detallar correcta y explícitamente el alcance de las políticas y así evitar tensiones cuando se establezcan los mecanismos de seguridad conforme con las políticas trazadas (Coite y Romero, s.f.).
      .col-lg-5.align-self-center
        figure
        img(src="@/assets/curso/tema2/img5.svg", style="width:70%").mx-auto    

    separador.mb-4

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2 2.2 Plan de trabajo para establecer políticas de seguridad

    .row.justify-content-center.mb-4
      .col-lg-11
        .bloque-texto-a.color-acento-contenido.p-2.p-md-3.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img6.svg', alt="plan de seguridad informática", style="width:70%;").mx-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p El plan de seguridad informática permite entender dónde pueden existir vulnerabilidades en los sistemas informáticos, para, una vez detectados, tomar las medidas necesarias que permitan prevenir dichos problemas. Este plan debe tener la capacidad de proteger los datos y los sistemas críticos del negocio, ajustándose a la Ley de Protección de Datos y a la legislación vigente; así mismo, el plan de seguridad contiene varios pasos que se deben dejar por escrito, a saber:


    
    TabsC.color-acento-botones.mb-5
      
      .tarjeta.color-acento-botones--borde.p-4.mb-4(titulo="Identificación")
        
        .row.justify-content-center
          .col-xl-8.align-self-center
            h2 Identificación
            p Se debe indagar por el conjunto de activos de la organización, incluido el #[i hardware], #[i software], personal, sistemas y datos, servidores, programas informáticos, y servicios externos como alojamiento web que conforman el sistema informático. 
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/tema2/img7.svg', alt='Texto que describa la imagen', style="width:100%;").mx-auto


      .tarjeta.color-acento-botones--borde.p-4.mb-4(titulo="Evaluación de riesgos")
        
        .row.justify-content-center
          .col-xl-8.align-self-center
            h2 Evaluación de riesgos
            p Establecer qué pone en peligro los activos anteriores. Por ejemplo, los virus informáticos, #[i hackers], daños físicos o errores de los funcionarios. 
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/tema2/img8.svg', alt='Texto que describa la imagen', style="width:100%;").mx-auto

      .tarjeta.color-acento-botones--borde.p-4.mb-4(titulo="Priorizar la protección IT")
        
        .row.justify-content-center
          .col-xl-8.align-self-center
            h2 Priorizar la protección IT
            p Decidir cuáles son las amenazas más relevantes e interesantes que se deban proteger, estableciendo jerarquías de acuerdo con la importancia de cada dispositivo.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/tema2/img9.svg', alt='Texto que describa la imagen', style="width:100%;").mx-auto


      .tarjeta.color-acento-botones--borde.p-4.mb-4(titulo="Tomar las precauciones adecuadas")
        
        .row.justify-content-center
          .col-xl-8.align-self-center
            h2 Tomar las precauciones adecuadas
            p Una vez identificados los riesgos, decidir los pasos a seguir para asegurar que el negocio operará normalmente si ocurre una crisis. Por ejemplo, restringir el acceso a servidores o instalar un #[i firewall] de #[i hardware] (Noriega, 2016). 
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/tema2/img10.svg', alt='Texto que describa la imagen', style="width:100%;").mx-auto

    separador.mb-4

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2 2.3 Recomendaciones para implementar políticas

    p.mb-4 Es fundamental implementar internamente una política de seguridad informática que permita resguardar las áreas importantes de la organización para evitar robos de información, para ello se pueden adoptar las siguientes medidas:

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema2/4.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Usar gestor de contraseñas
              p El uso de contraseñas es el modelo de autenticación más utilizado para proteger las cuentas de plataformas, programas y servicios, aunque los usuarios vean la importancia de establecer una contraseña robusta con cambio periódico que impida el robo de la misma. La solución de los problemas anteriores la puede dar un gestor de contraseñas, que permite tener una contraseña maestra para dar acceso a las cuentas.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema2/5.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Valorar la encriptación de datos
              p Para potenciar la seguridad informática de la empresa se puede usar la encriptación o cifrado que permite proteger los datos y archivos transportados a través de internet aplicando algoritmos de codificación para volver comprensible la información sensible.

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema2/6.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Utilizar el escaneo de credenciales
              p Permite detectar vulnerabilidades y evitar inconvenientes, rotando credenciales. Igualmente sirve para restringir, admitir o eliminar las credenciales compartidas para el acceso a otras áreas del sistema.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img        
            img.img-a.img-t(src='@/assets/curso/tema2/7.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Administrar bien las cuentas privilegiadas
              p Gestionar correctamente las cuentas es vital para evitar riesgos de seguridad informática. Es importante controlar los accesos a las cuentas privilegiadas de la organización y reducir al mínimo el número de cuentas, evitando así las brechas de seguridad (Gb-advisor, 2019).

    separador.mb-4

    #t_2_4.titulo-segundo.color-acento-contenido
      .h2 2.4 Normas y procedimientos

    .row.justify-content.center.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img15.svg' alt='')
      .col-lg-8
        p.mb-4 Se debe tener en cuenta que una norma de seguridad establece las condiciones de los elementos a proteger, así como los requisitos sustentados en la política y que regulan determinados aspectos de seguridad. Además, debe ser clara, concisa y no ser ambigua en su interpretación.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Estas normas se pueden agrupar con base en las diferentes áreas de la seguridad dentro de la organización: de seguridad física, de control de acceso a sistemas, de gestión de soportes, de clasificación de información, etc.


    .row.mb-5.justify-content-center
      .col-lg-10.mb-5.mb-lg-0
        p Al respecto:
        .bloque-texto-b.color-acento-botones.p-0
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              span.mb-2 #[b Un procedimiento de seguridad define las tareas o acciones a realizar en el desarrollo de un proceso relacionado con la seguridad y los grupos o personas responsables de su ejecución. Se especifican los pasos relacionados con la ejecución de un proceso o actividad que cumple con una norma o garantizar que en la ejecución de actividades cuenten con determinados aspectos de seguridad. Un procedimiento debe ser claro, sencillo de interpretar y sin ambigüedad en su ejecución.] 
                p.text-end.mb-0
                  span -  Seguinfo, 2008
                  i.fas.fa-quote-right
              //p.text-end.mb-0
                b -  Artículo 18,  Acuerdo 617 de 2018

    separador.mb-4

    #t_2_5.titulo-segundo.color-acento-contenido
      .h2 2.5 Norma Técnica Colombiana NTC-ISO/IEC 27001

    p.mb-4 La NTC ISO 27001 es una norma colombiana usada por las organizaciones con el fin de asegurar la confidencialidad e integridad de toda la información que poseen. La versión ISO 27001:2013 internacional es la que rige y está vigente, por lo cual debe ser el referente mundial en la implementación del Sistema de Gestión de Seguridad de la Información (SGSI).

    .row.justify-content-center
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.colorSecundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img16.svg', alt='Objetivo', style="width:200px").mx-auto
              
            .h2.text-center Objetivo
            p.text-center Implementar un SGSI con base en NTC ISO 27001, tiene como objetivo evaluar riesgos aplicando los controles existentes y, de ese modo, lograr su reducción o eliminación total. Las organizaciones que utilicen la ISO 27001 logran una ventaja competitiva y mejoran la imagen de marca.
          
          .col-md.tarjeta.color-acento-contenido.text-white.p-5
            .row.justify-content-center.mb-5
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img17.svg', alt='Estructura', style="width:200px").mx-auto
            .h2.text-center Estructura
            p.text-center La NTC ISO 27001, posee una estructura de alto nivel, llamada también Anexo SL, en la cual se abarcan diferentes aspectos que se pueden visualizar en la siguiente tabla.

    .titulo-sexto.color-acento-contenido
      h5 Estructura ISO-27001

    .tabla-a.mb-5 
      table
        
        thead
          tr
            th.h3(style='width: 50%; background-color: #01C3FD; color:#12263F;') Aspecto
            th.h3(style=' background-color: #01C3FD; color:#12263F;') Contenido    
        tbody
          tr
            td.text-center Objeto y campo de aplicación
            td 
              | Al inicio de la norma se establecen las orientaciones necesarias para el uso, finalidad y aplicación de la norma.
            
          tr
            td.text-center Referencias normativas
            td 
              | Indica los documentos a consultar relacionados con la seguridad de la información.
              
          tr
            td.text-center Términos y definiciones
            td 
              | Se describe la terminología que se utiliza a lo largo de la norma.
          
          tr
            td.text-center Contexto de la organización
            td 
              | Permite a las organizaciones conocer el contexto en el que se desarrolla la actividad, tanto externa como interna, conocer qué necesitan los clientes y adoptar medidas para cubrir estas necesidades.
            
          tr
            td.text-center Liderazgo
            td 
              | Permite que todo el personal involucrado en el SGSI participe activamente en la implementación de la norma ISO 27001.
              
          tr
            td.text-center Planificación
            td 
              | Identificar los riesgos, objetivos y forma de lograrlos.
          tr
            td.text-center Soporte
            td 
              | Tener los recursos suficientes, contar con las competencias, información y comunicación adecuada, que permitan al SGSI funcionar con éxito.
            
          tr
            td.text-center Operación
            td 
              | Realizando la planificación, implementación y control de los procesos organizacionales, llevando a cabo una valoración de los riesgos permite el cumplimiento de los requisitos de un SGSI a cabalidad.
              
          tr
            td.text-center Evaluación de desempeño 
            td 
              | Es importante realizar el seguimiento, medición, análisis, evaluación, auditoría interna y revisión por la dirección del SGSI para que se asegure el funcionamiento según lo planificado.
          
          tr
            td.text-center Mejora
            td 
              | Se establece la necesidad de las organizaciones a trabajar por la mejora continua, detectar no conformidades y adoptar medidas de solución, mejorando continuamente el SGSI.


    h3.mb-4 Novedades
    p.mb-4 Al realizar la comparación con la edición anterior, en la última revisión se modificaron algunos requerimientos de la norma ISO 27001, por lo que las organizaciones deben realizar un proceso de transición que les permita adaptarse a los requisitos de la versión vigente y así el SGSI siga operando eficazmente. A continuación, se mencionan algunas novedades importantes:
    
    .row.justify-content-center.mb-5
      .col-lg-5.align-self-center
        figure
          img(src="@/assets/curso/tema2/img18.svg", style="width:70%").mx-auto
      .col-lg-7.align-self-center

        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 1
          .col
            .tarjeta.tarjeta--gris
              p Desaparece el capítulo de enfoque a procesos, la ventaja actual permite mayor flexibilidad sin imponer la metodología PHVA.
        
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 2
          .col
            .tarjeta.tarjeta--gris
              p Se suprime el carácter obligatorio de ciertos documentos y solo es obligatoria la declaración de aplicabilidad. 

        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 3
          .col
            .tarjeta.tarjeta--gris
              p Hay cambios destacables en los requisitos y controles.
        
        .row.align-items-start.mb-2
          .col-auto        
            .round--number
              p 4
          .col
            .tarjeta.tarjeta--gris
              p Se opta por el enfoque del análisis del riesgo en la fase de planificación y operación del SGSI.

    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Las organizaciones deben cumplir con los requisitos establecidos por la NTC ISO 27001 y también con las buenas prácticas y controles definidos por la ISO 27002 (ISOTools Excellence, s.f.).
</template>

<script>
export default {
  name: 'Tema2',
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
