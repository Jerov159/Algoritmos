// Objeto para almacenar las estadísticas de atención
const estadisticasAtencion = {
    usuariosAtendidos: [],
    usuariosPorTipo: {
      llamadaTelefonica: 0,
      asesoriaEstudiante: 0,
      asesoriaDirectivo: 0,
    },
  
    // Método para registrar la atención de un usuario
    registrarAtencion(cedula, tipoAtencion) {
      this.usuariosAtendidos.push({ cedula, tipoAtencion });
      switch (tipoAtencion) {
        case "llamadaTelefonica":
          this.usuariosPorTipo.llamadaTelefonica++;
          break;
        case "asesoriaEstudiante":
          this.usuariosPorTipo.asesoriaEstudiante++;
          break;
        case "asesoriaDirectivo":
          this.usuariosPorTipo.asesoriaDirectivo++;
          break;
        default:
          console.log("Tipo de atención no válido.");
      }
    },
  
    // Método para mostrar las estadísticas
    mostrarEstadisticas() {
      console.log("Estadísticas de atención:");
      console.log("Cantidad total de usuarios atendidos:", this.usuariosAtendidos.length);
      console.log("Cantidad de usuarios por tipo:");
      console.log("Llamada Telefónica:", this.usuariosPorTipo.llamadaTelefonica);
      console.log("Asesoría Estudiante:", this.usuariosPorTipo.asesoriaEstudiante);
      console.log("Asesoría Directivo:", this.usuariosPorTipo.asesoriaDirectivo);
    },
  };
  
  // Ejemplo de uso
  estadisticasAtencion.registrarAtencion("123456789", "llamadaTelefonica");
  estadisticasAtencion.registrarAtencion("987654321", "asesoriaEstudiante");
  estadisticasAtencion.registrarAtencion("555555555", "asesoriaDirectivo");
  estadisticasAtencion.registrarAtencion("111111111", "llamadaTelefonica");
  
  estadisticasAtencion.mostrarEstadisticas();
  