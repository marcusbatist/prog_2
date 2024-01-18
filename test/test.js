const curriculo = {
    nome: "João Silva",
    idade: 30,
    experiencia: [
      {
        cargo: "Desenvolvedor Web",
        empresa: "Tech Solutions",
        periodo: "2018 - Presente",
        descricao: "Desenvolvimento e manutenção de aplicativos web.",
      },
      {
        cargo: "Analista de Sistemas",
        empresa: "SoftWareWare",
        periodo: "2015 - 2018",
        descricao: "Análise de requisitos e desenvolvimento de soluções.",
      },
    ],
    habilidades: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    educacao: [
      {
        instituicao: "Universidade Tech",
        curso: "Ciência da Computação",
        periodo: "2011 - 2015",
      },
    ],
  };
  
  // Exibir informações do currículo
  console.log(`Nome: ${curriculo.nome}`);
  console.log(`Idade: ${curriculo.idade}`);
  console.log("\nExperiência:");
  
  curriculo.experiencia.forEach((job) => {
    console.log(`- ${job.cargo} na ${job.empresa}, ${job.periodo}`);
    console.log(`  ${job.descricao}`);
  });
  
  console.log("\nHabilidades:");
  curriculo.habilidades.forEach((habilidade) => {
    console.log(`- ${habilidade}`);
  });
  
  console.log("\nEducação:");
  curriculo.educacao.forEach((educacao) => {
    console.log(`- ${educacao.curso} na ${educacao.instituicao}, ${educacao.periodo}`);
  });





const candidatura = (curriculo, Empresa_selecionada) => {


    if (Empresa_selecionada){
        console.log("Candidatura recebida para a empresa interessada");
    } else {
        console.log("Candidatura não aceita, empresa não interessada");
    }

    console.log(`Currículo do candidato: ` + curriculo);
    console.log(`Resposta Empresa:  ` + Empresa_selecionada)
};

const Empresa = true;

candidatura(curriculo, Empresa_selecionada);
console.log("ola");

