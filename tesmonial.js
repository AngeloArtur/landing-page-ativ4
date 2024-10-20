const testimonials = [
    {
        name: "Lucas Almeida",
        company: "Dev Solutions",
        testimonial:
            "Utilizar os serviços desta empresa transformou completamente nossa maneira de gerenciar dados. A equipe de suporte foi extremamente atenciosa e eficiente. Recomendado!",
    },
    {
        name: "Mariana Costa",
        company: "Innovatech",
        testimonial:
            "A plataforma é intuitiva e muito poderosa. Conseguimos aumentar a produtividade da nossa equipe em mais de 30% após implementar essa solução.",
    },
    {
        name: "Ricardo Martins",
        company: "CyberFlow",
        testimonial:
            "O serviço é impecável e superou todas as nossas expectativas. O atendimento é rápido, e as atualizações constantes mantêm o sistema seguro e confiável.",
    },
    {
        name: "Fernanda Oliveira",
        company: "ByteWare Solutions",
        testimonial:
            "A integração das nossas ferramentas com o sistema foi simples e eficiente. Estamos impressionados com a performance e o suporte técnico prestado.",
    },
    {
        name: "João Pedro Freitas",
        company: "Cloudify Tech",
        testimonial:
            "Nunca imaginamos que seria tão fácil migrar para a nuvem. O suporte técnico foi excelente e nos ajudou a superar todos os desafios.",
    },
    {
        name: "Larissa Mendes",
        company: "DataPrime",
        testimonial:
            "A flexibilidade da plataforma é o que mais nos impressionou. Conseguimos customizar várias soluções para atender às necessidades específicas do nosso negócio.",
    },
    {
        name: "Gustavo Moreira",
        company: "Nexa Labs",
        testimonial:
            "O desempenho dos serviços de monitoramento superou nossas expectativas. Agora conseguimos identificar e resolver problemas antes mesmo que eles afetem nossos clientes.",
    },
    {
        name: "Beatriz Farias",
        company: "TechNet Global",
        testimonial:
            "Desde que começamos a usar esta solução, nossa infraestrutura está muito mais estável. O sistema de automação facilita todo o processo, o que economiza tempo e recursos.",
    },
    {
        name: "André Luiz Barbosa",
        company: "CoreTech Systems",
        testimonial:
            "O suporte ao cliente foi fenomenal, sempre disponíveis para resolver qualquer questão. A ferramenta é fácil de usar e altamente eficiente.",
    },
    {
        name: "Camila Rocha",
        company: "DigiSoft",
        testimonial:
            "Recomendo sem dúvidas! A integração com nossas plataformas foi rápida e o suporte que recebemos foi excepcional. A solução proporcionou resultados rápidos e claros.",
    },
];

const cardsContainer = document.querySelector(".cards");

testimonials.forEach((item) => {
  const card = document.createElement("div");

  card.classList.add("card");
  card.style.width = "18rem";
  card.style.minHeight = "16rem";

  card.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "p-3");

  const cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = item.name;

  const cardSubtitle = document.createElement("span");
  cardSubtitle.classList.add("card-subtitle", "mb-2", "text-body-secondary", "achievements-span");
  cardSubtitle.innerHTML = item.company;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = item.testimonial;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  cardsContainer.appendChild(card);
});