export class Evento {

  constructor(public Nomevento:string, public Lugar:string, public Direccion:string, public TipoModalidad: { llave:string; valor:number;}, public TipoCategoria: {llave:string; valor:number;})
  {

  }
  }
