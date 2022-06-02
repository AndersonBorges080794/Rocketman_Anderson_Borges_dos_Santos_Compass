const marcas = [
    {id:1, nome: 'Anderson'},
    {id:2, nome:'Maria'}  
  ];
  
  const marca = marcas.find(function(marca){
  return marca.nome === 'Anderson';
  });
  
  console.log(marca);