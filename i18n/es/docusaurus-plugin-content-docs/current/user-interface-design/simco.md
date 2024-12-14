---
sidebar_position: 1
tags: [.NET, d3, dataviz, museums]
---

# SIMCO

📆 2020 - Sistema de Información de Museos

## El encargo

Rediseñar e implementar el front end del Sistema de Información de Museos Colombiano –SIMCO–, mejorando la experiencia de usuario y el diseño visual en el marco de actividades que permitan la difusión del patrimonio cultural para el año 2020.

## El desafío

Realizar el diagnóstico del sitio [SIMCO](http://simco.museoscolombianos.gov.co/), vigencia de la información publicada, navegación, visualización en dispositivos móviles, diseño visual, contenidos audiovisuales y de texto.

Además, elaborar un rediseño que tenga como alcance: propuesta gráfica, usabilidad, accesibilidad AA y AAA, tipografía y color, contenidos visuales, audiovisuales y de texto para pantallas de PC y dispositivos móviles.

Desarrollar la página maestra del sitio web, páginas de inicio de cada sitio, páginas internas y subsitios. Creación de listas y bibliotecas de contenido y páginas de consultas de contenido.

## La solución

Dando prioridad a la accesibilidad de la información, la propuesta de rediseño es tener una interfaz sobria y funcional, agregando además los lineamientos de gobierno en línea.

![UX/UI Design for SIMCO](https://jcarroyos-uploads.s3.amazonaws.com/docs/simco-jcarroyos.jpg)
![UX/UI Design for SIMCO](https://jcarroyos-uploads.s3.amazonaws.com/docs/simco-home.png)
![UX/UI Design for SIMCO](https://jcarroyos-uploads.s3.amazonaws.com/docs/simco-dashboard.png)

## El código

Aplicación web .NET, código front-end en https://github.com/jcarroyos/simco-web

### Módulo de visualización de datos públicos

Este módulo devuelve el servicio de informes de SIMCO a gráficos con los datos agregados. Código encargado a [@laurajunco](https://github.com/laurajunco). Ver el código d3.js en [https://github.com/jcarroyos/simco-dataviz](https://github.com/jcarroyos/simco-dataviz)

![Screencapture of dataviz module](https://jcarroyos-uploads.s3.amazonaws.com/docs/dataviz-d3-laurajunco.png)
