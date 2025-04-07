import {Questao} from "../interfaces/questoes.ts";

export const questoes: Questao[] = [
    {
        pergunta: "Qual foi o principal conceito oficializado durante a ECO-92?",
        opcoes: ["Sustentabilidade empresarial", "Desenvolvimento sustentável", "Economia verde", "Redução do desmatamento"],
        respostaCorreta: 1,
        explicacaoErro: ["O termo está relacionado à responsabilidade social das empresas, mas não foi o foco principal da ECO-92",
                         "Desenvolvimento sustentável foi oficializado na ECO-92 como um princípio para equilibrar crescimento econômico, proteção ambiental e bem-estar social",
                         "Embora esteja relacionada ao desenvolvimento sustentável, a economia verde não foi o conceito oficializado na conferência.",
                         "O desmatamento foi discutido na ECO-92, mas o principal conceito tratado foi o desenvolvimento sustentável."
                        ],
    },
    
    {
        pergunta: "Quais temas foram abordados na ECO-92?",
        opcoes: ["Mudanças climáticas e perda de biodiversidade", 
                 "Exploração espacial e energias renováveis",
                 "Comércio internacional e direitos humanos",
                 "Crescimento populacional e globalização"],
        respostaCorreta: 0,
        explicacaoErro: ["ECO-92 abordou temas urgentes como mudanças climáticas, perda de biodiversidade, justiça socioambiental e desenvolvimento sustentável, resultando em acordos e tratados internacionais.",
                         "A conferência focou em questões ambientais terrestres, não em exploração espacial. Energias renováveis foram mencionadas, mas não foram o foco principal.",
                         "Esses temas são discutidos em outros fóruns, mas não foram o centro da ECO-92.",
                         "Embora a população e a economia impactem o meio ambiente, a ECO-92 focou no desenvolvimento sustentável e na conservação ambiental."],
    },

    {
        pergunta: "Levando em conta o descarte correto de materiais eletrônicos, quais das maneiras a seguir é mais correta?",
        opcoes: ["Jogar em lixo comunitário",
                 "Jogar na rua",
                 "Levar a ponto de coletas ou empresas específicas de manuseio.",
                 "Colocar fogo"],
        respostaCorreta: 2,
        explicacaoErro: ["O lixo comunitário não possui separação de “tipos” mais rigorosos do que um ponto de coleta específico.",
                         "Jogar lixo eletrônico a céu aberto pode levar riscos sérios ao meio ambiente e à saúde do próprio ser humano.",
                         "Esta é a opção mais correta quando se trate de descarte de lixo eletrônico.",
                         "Esta é uma prática extremamente perigosa, devido aos produtos químicos e metais pesados que alguns eletrônicos levam."],
    },

    // {
    //     pergunta: "Quais dos materiais de descarte a seguir se configuram como lixo eletrônico?",
    //     opcoes: ["Pilhas, TV, celular, etc.",
    //              "Garrafa pet, pote de sorvete, etc.",
    //              "Casca de banana, casca de melancia, etc.",
    //              "Caco de vidro, copo de vidro, etc."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["Lixo eletrônico são aqueles que possuem partes rígidas eletrônicas.",
    //                      "Plásticos não são considerados eletrônicos pois não possuem partes rígidas eletrônicas e são derivados do petróleo.",
    //                      "Materiais orgânicos não são considerados eletrônicos pois não possuem partes rígidas eletrônicas e são formadas naturalmente sem interferência humana.",
    //                      "Vidros não são considerados eletrônicos pois não possuem partes rígidas eletrônicas e são produzidos através do temperamento da areia."],
    // },
    //
    // {
    //     pergunta: "O que é TI Verde?",
    //     opcoes: ["O uso de tecnologia para criar novos dispositivos eletrônicos.",
    //              "O uso de práticas e tecnologias para reduzir o impacto ambiental da TI.",
    //              "O desenvolvimento de software para melhorar a eficiência da indústria.",
    //              "O aumento da produção de equipamentos de TI para atender a mais consumidores."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Criar novos dispositivos eletrônicos não é o foco da TI Verde. Embora novos dispositivos possam ser desenvolvidos de maneira mais eficiente, TI Verde envolve práticas para reduzir o impacto ambiental da tecnologia existente e otimizar o uso de recursos.",
    //                      "TI Verde se refere justamente ao uso de tecnologias e práticas que buscam reduzir o impacto ambiental da Tecnologia da Informação. Isso inclui a eficiência energética, a redução de resíduos e o uso de recursos renováveis, entre outras iniciativas.",
    //                      "Embora o desenvolvimento de software eficiente seja importante, a TI Verde não se limita a melhorar a eficiência da indústria. Ela está mais focada na redução do impacto ambiental da TI em si, como a otimização do consumo de energia e a reciclagem de equipamentos eletrônicos.",
    //                      "A TI Verde não envolve o aumento da produção de equipamentos, mas sim a busca por soluções que reduzam o impacto ambiental da produção e operação de dispositivos de TI. A ênfase está na sustentabilidade e eficiência, não no aumento do consumo."],
    // },
    //
    // {
    //     pergunta: "Como as empresas podem reduzir o uso de papel com o apoio da TI Verde?",
    //     opcoes: ["Aumentando a quantidade de impressoras em seu escritório.",
    //              "Utilizando documentos digitais e processos automatizados.",
    //              "Imprimindo apenas em papel reciclado.",
    //              "Usando papel mais espesso para reduzir o número de impressões."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Aumentar o número de impressoras resulta em mais consumo de papel, o que vai contra o objetivo de reduzir o uso de papel. Isso não ajuda a reduzir o impacto ambiental.",
    //                      "A digitalização de documentos e a automação de processos ajudam a substituir o uso de papel. Quando as empresas passam a usar mais documentos digitais e sistemas automatizados, elas podem reduzir significativamente a necessidade de imprimir, economizando papel e recursos.",
    //                      "Embora o uso de papel reciclado seja uma boa prática ambiental, ele não resolve o problema do consumo de papel. A melhor solução é reduzir o consumo de papel em primeiro lugar, usando alternativas digitais.",
    //                      "Usar papel mais espesso não reduz o consumo de papel, apenas altera o tipo de papel utilizado. A solução mais eficaz é reduzir a quantidade de papel impresso, e isso pode ser feito com a digitalização e o uso de sistemas automáticos."],
    // },
    //
    // {
    //     pergunta: "Quais são os principais impactos do desmatamento na biodiversidade?",
    //     opcoes: ["Aumento da biodiversidade e criação de novos habitats.",
    //              "Extinção de espécies e desequilíbrio ecológico.",
    //              "Redução da poluição do ar e melhora da qualidade do solo.",
    //              "Aumento da umidade e melhoria do ciclo da água."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["O desmatamento reduz a biodiversidade, pois destrói habitats naturais e coloca espécies em risco de extinção.",
    //                      "O desmatamento elimina habitats essenciais para muitas espécies, levando à extinção de animais e plantas, além de causar desequilíbrios nos ecossistemas.",
    //                      "O desmatamento pode piorar a qualidade do ar devido à liberação de CO₂ e à redução da absorção de poluentes pelas árvores. Ele também pode causar erosão do solo.",
    //                      "O desmatamento reduz a umidade do solo e do ar, prejudicando o ciclo da água e podendo levar à desertificação."],
    // },
    //
    // {
    //     pergunta: "Como o uso de data centers verdes contribui para a sustentabilidade?",
    //     opcoes: ["Reduzindo o consumo de energia e utilizando fontes renováveis.",
    //              "Aumentando a emissão de gases poluentes para equilibrar a temperatura interna.",
    //              "Mantendo servidores ligados 24 horas sem otimização de consumo.",
    //              "Utilizando apenas equipamentos antigos para evitar a produção de novos."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["Data centers verdes utilizam fontes de energia renovável e sistemas eficientes de resfriamento para reduzir o consumo de eletricidade e minimizar a pegada de carbono.",
    //                      "Data centers sustentáveis buscam reduzir emissões, não aumentá-las. O resfriamento eficiente evita desperdícios e diminui os impactos ambientais.",
    //                      "A eficiência energética é um dos princípios da TI Verde, garantindo que os servidores operem com consumo reduzido sempre que possível.",
    //                      "A modernização dos data centers com equipamentos mais eficientes reduz o consumo de energia e melhora o desempenho, contribuindo para a sustentabilidade."],
    // },
    //
    // {
    //     pergunta: "Qual é o principal risco ambiental associado ao descarte inadequado de lixo eletrônico?",
    //     opcoes: ["Aumento da temperatura global de forma direta.",
    //              "Contaminação do solo e da água por metais pesados.",
    //              "Extinção imediata de espécies animais.",
    //              "Redução da camada de ozônio."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Embora o descarte incorreto contribui indiretamente para problemas climáticos, ele não causa um aumento direto da temperatura global.",
    //                      "O lixo eletrônico contém metais pesados como chumbo, mercúrio e cádmio, que podem infiltrar-se no solo e contaminar lençóis freáticos, afetando o meio ambiente e a saúde pública.",
    //                      "Não há uma relação imediata entre o descarte de lixo eletrônico e a extinção direta de espécies.",
    //                      "O lixo eletrônico não afeta diretamente a camada de ozônio.",]
    // },
    //
    // {
    //     pergunta: "Qual é a principal razão para reciclar o lixo eletrônico?",
    //     opcoes: ["Reduzir os custos de produção de novos eletrônicos.",
    //              "Recuperar materiais valiosos e evitar a contaminação ambiental.",
    //              "Garantir que todos os eletrônicos antigos sejam reutilizados.",
    //              "Diminuir o consumo de energia elétrica nas residências."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Embora a reciclagem possa reduzir custos em alguns casos, esse não é o objetivo principal, mas sim a proteção ambiental.",
    //                      "A reciclagem do lixo eletrônico permite recuperar metais preciosos, como ouro, prata e cobre, além de evitar que substâncias tóxicas poluem o meio ambiente.",
    //                      "Nem todos os eletrônicos antigos podem ser reutilizados; muitos precisam ser desmontados para a recuperação de materiais.",
    //                      "A reciclagem impacta o meio ambiente, mas não reduz diretamente o consumo doméstico de energia elétrica.",]
    // },
    //
    // {
    //     pergunta: "Qual dos seguintes é um exemplo de recurso natural renovável?",
    //     opcoes: ["Petróleo.",
    //              "Gás Natural.",
    //              "Energia Solar.",
    //              "Carvão Mineral."],
    //     respostaCorreta: 2,
    //     explicacaoErro: ["Recurso não renovável formado ao longo de milhões de anos.",
    //                      "Recurso não renovável formado ao longo de milhões de anos.",
    //                      "Recurso renovável proveniente do sol.",
    //                      "Recurso não renovável por motivos que demora muito tempo para se formar.",]
    // },
    //
    // {
    //     pergunta: "Qual é o principal gás de efeito estufa responsável pelo aquecimento global?",
    //     opcoes: ["Oxigênio.",
    //              "Nitrogênio.",
    //              "Dióxido de carbono.",
    //              "Hidrogênio."],
    //     respostaCorreta: 2,
    //     explicacaoErro: ["Essencial para a vida, mas não é um gás de efeito estufa.",
    //                      "O gás mais abundante na atmosfera, mas não é um gás de efeito estufa significativo.",
    //                      "Gás de efeito estufa que retém calor na atmosfera, contribuindo para o aquecimento global",
    //                      "Gás inflamável, mas não é um gás de efeito estufa significativo.",]
    // },
    //
    // {
    //     pergunta: "Os Objetivos de Desenvolvimento Sustentável, conhecidos como ODS, fazem parte da chamada “Agenda 2030”. Esse pacto global conta com 17 objetivos. Segundo a ODS 10 “Redução das desigualdades”, qual das alternativas NÃO ajuda a reduzir a desigualdade econômica?",
    //     opcoes: ["Implementar políticas que garantam igualdade de oportunidades",
    //              "Promover inclusão social e econômica para grupos vulneráveis",
    //              "Garantir acesso a serviços básicos, como saúde e educação de qualidade",
    //              "Impedir a mobilidade social por meio de leis mais rígidas"],
    //     respostaCorreta: 3,
    //     explicacaoErro: ["A ODS 10 enfatiza a necessidade de criar mecanismos que garantam que todas as pessoas tenham as mesmas chances de acesso a empregos, educação e desenvolvimento econômico. Isso pode ser feito por meio de políticas públicas, como ações afirmativas e programas de capacitação.",
    //                      "Reduzir desigualdades significa garantir que todos tenham participação ativa na sociedade e na economia, incluindo grupos historicamente marginalizados, como pessoas com deficiência, minorias étnicas e comunidades de baixa renda.",
    //                      "A desigualdade econômica está ligada à falta de acesso a serviços essenciais. Melhorar a educação e a saúde pública permite que mais pessoas tenham oportunidades para crescer economicamente.",
    //                      "Mobilidade social significa que uma pessoa pode melhorar sua condição de vida por meio do acesso à educação, empregos melhores e oportunidades econômicas. Logo criar leis que impeça isso vai contra a proposta da ODS 10",]
    // },
    //
    // {
    //     pergunta: "Qual é um dos desafios para garantir energia acessível e limpa para todos?",
    //     opcoes: ["O alto custo inicial de infraestrutura para energias renováveis",
    //              "A abundância de combustíveis fósseis tornando a transição desnecessária",
    //              "A falta de interesse global em fontes sustentáveis",
    //              "A energia renovável ser menos eficiente que os combustíveis fósseis"],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["O desenvolvimento de energias renováveis exige um investimento inicial significativo em infraestrutura, como painéis solares, turbinas eólicas e redes de distribuição. A implementação também é um desafio em muitas regiões, especialmente em países em desenvolvimento.",
    //                      "A existência de combustíveis fósseis não torna a transição desnecessária. Pois, existem políticas para diminuir o uso de combustíveis fósseis, como a ODS 7.",
    //                      "O aumento de políticas públicas, investimentos privados e inovações tecnológicas demonstram que a transição energética está em curso, demonstra que existe o interesse global.",
    //                      "Energias renováveis não são necessariamente menos eficientes. Tecnologias como painéis solares e turbinas eólicas estão se tornando cada vez mais eficientes e competitivas.",]
    // },
    //
    // {
    //     pergunta: "O uso da energia nuclear é frequentemente debatido em termos de sustentabilidade. Comparando-a com outras fontes de energia, qual das alternativas abaixo apresenta a principal vantagem da energia nuclear sobre fontes como carvão e gás natural?",
    //     opcoes: ["A energia nuclear não emite gases de efeito estufa durante sua operação, tornando-se uma opção de baixa emissão de carbono.",
    //              "A energia nuclear é uma fonte 100% renovável, assim como a solar e a eólica.",
    //              "A energia nuclear não gera resíduos, sendo completamente limpa.",
    //              "As usinas nucleares são mais baratas para construir e operar se comparadas às usinas eólicas e solares."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["A energia nuclear gera eletricidade sem emitir CO₂ durante sua operação, diferentemente do carvão e do gás natural, que são combustíveis fósseis e liberam grandes quantidades de gases de efeito estufa.",
    //                      "A energia nuclear não é considerada renovável, pois utiliza urânio, um recurso finito que produz energia ao sofrer o processo de fissão nuclear. Já fontes como solar e eólica são realmente renováveis, pois dependem do sol e do vento.",
    //                      "A energia nuclear gera resíduos radioativos que precisam ser armazenados com segurança por longos períodos, o que é um desafio ambiental.",
    //                      "A construção de usinas nucleares é extremamente cara e pode levar anos para ser concluída. Além disso, os custos operacionais e de descomissionamento são elevados em comparação com fontes renováveis.",]
    // },
    //
    // {
    //     pergunta: "Os carros elétricos são cada vez mais promovidos como alternativa sustentável aos veículos a combustão. Qual é um dos principais desafios ambientais associados ao uso desses veículos?",
    //     opcoes: ["A produção de baterias para carros elétricos exige a mineração de metais como lítio e cobalto, o que pode causar impactos ambientais significativos.",
    //              "Os carros elétricos emitem mais CO₂ durante sua operação do que os veículos a combustão.",
    //              "As baterias dos carros elétricos precisam ser substituídas a cada seis meses, gerando muito lixo eletrônico.",
    //              "Os carros elétricos não podem ser carregados usando energia solar ou eólica, apenas eletricidade de fontes fósseis."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["A mineração desses metais pode levar à degradação ambiental, poluição da água e exploração de trabalhadores em algumas regiões, tornando a produção de baterias um desafio ambiental.",
    //                      "Os carros elétricos não emitem CO₂ diretamente, pois não queimam combustíveis fósseis. Já os veículos a combustão liberam CO₂ e outros poluentes ao queimar gasolina ou diesel.",
    //                      "As baterias dos carros elétricos duram muitos anos, geralmente mais de 8 anos, antes de precisar de substituição ou reciclagem.",
    //                      "Os carros elétricos podem ser carregados com qualquer fonte de eletricidade, incluindo solar e eólica, tornando-os ainda mais sustentáveis.",]
    // },
    //
    // {
    //     pergunta: "Qual das ações a seguir mais contribui para a redução da pegada de carbono individual?",
    //     opcoes: ["Comprar produtos industrializados frequentemente.",
    //              "Utilizar transporte coletivo, bicicleta ou caminhar sempre que possível.",
    //              "Tomar banhos longos com água quente.",
    //              "Comprar roupas novas a cada estação."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Produtos industrializados geralmente demandam mais energia e transporte, aumentando a pegada de carbono.",
    //                      "Essas alternativas reduzem significativamente as emissões de CO₂ associadas ao transporte individual.",
    //                      "O aquecimento da água consome muita energia, especialmente em sistemas elétricos.",
    //                      "O consumo excessivo no setor da moda contribui com grande emissão de gases do efeito estufa e uso intensivo de recursos naturais.",]
    // },
    //
    // {
    //     pergunta: "Qual das alternativas representa uma prática de consumo consciente?",
    //     opcoes: ["Comprar produtos em excesso durante promoções.",
    //              "Escolher produtos com menor embalagem e origem local.",
    //              "Jogar fora itens em boas condições para comprar novos.",
    //              "Optar sempre pelo produto mais barato, sem considerar origem ou impacto."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Mesmo que mais baratos, produtos em excesso podem gerar desperdício.",
    //                      "Reduz o desperdício de materiais e o impacto ambiental do transporte.",
    //                      "Isso promove o descarte desnecessário e o consumo exagerado.",
    //                      "O preço baixo nem sempre representa sustentabilidade, considerar o impacto ambiental e social é essencial.",]
    // },
    //
    // {
    //     pergunta: "Qual das alternativas a seguir é uma vantagem do uso de energias renováveis em comparação com os combustíveis fósseis?",
    //     opcoes: ["Energias renováveis são mais eficientes em termos de produção de energia do que os combustíveis fósseis.",
    //              "As energias renováveis não emitem gases de efeito estufa durante sua operação, ajudando na mitigação das mudanças climáticas.",
    //              "As energias renováveis são sempre mais baratas do que os combustíveis fósseis.",
    //              "A energia gerada por fontes renováveis é mais abundante do que a produção de energia de carvão."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Embora as energias renováveis sejam vantajosas em termos de sustentabilidade, muitas delas, como solar e eólica, possuem eficiência menor em comparação com os combustíveis fósseis.",
    //                      "Fontes como solar, eólica e hidrelétrica não emitem CO₂ enquanto geram energia, ao contrário dos combustíveis fósseis, que emitem grandes quantidades de gases de efeito estufa.",
    //                      "Embora os custos de energia renovável tenham diminuído nos últimos anos, a construção de infraestruturas de energia renovável, como usinas solares ou eólicas, ainda pode ser mais cara em comparação com a instalação de usinas de combustíveis fósseis.",
    //                      "Embora a energia renovável tenha grande potencial, a disponibilidade de energia solar ou eólica depende das condições climáticas e geográficas, o que pode limitar sua abundância em determinadas áreas.",]
    // },
    //
    // {
    //     pergunta: "Qual é o principal desafio das políticas macroeconômicas atuais no que se refere ao meio ambiente?",
    //     opcoes: ["Promover o uso sustentável dos recursos naturais.",
    //              "Manter o crescimento econômico sem prejudicar o meio ambiente.",
    //              "Aumentar a produção sem causar degradação ambiental.",
    //              "Reduzir a exploração de recursos naturais sem afetar o emprego."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Embora o uso sustentável seja uma meta desejável, as políticas macroeconômicas atuais não focam principalmente nisso. O foco das políticas econômicas no presente é o crescimento rápido e o aumento do consumo, muitas vezes sem considerar os danos ambientais.",
    //                      "O principal desafio das políticas macroeconômicas hoje é conciliar o crescimento econômico com a preservação ambiental. Existe uma pressão crescente sobre os recursos naturais, mas o modelo atual de crescimento ainda não está suficientemente equilibrado com a sustentabilidade ambiental.",
    //                      "Embora essa seja uma meta importante, a realidade atual é que, muitas vezes, o aumento da produção leva à degradação ambiental. O foco das políticas econômicas tem sido mais em crescimento e consumo do que na redução de impactos ambientais.",
    //                      "A redução da exploração de recursos naturais não é uma prioridade das políticas econômicas atuais. De fato, muitas vezes a exploração de recursos continua em alta para sustentar o crescimento econômico, independentemente das consequências ambientais.",]
    // },
    //
    // {
    //     pergunta: "O que é necessário para que o modelo econômico do futuro seja mais sustentável?",
    //     opcoes: ["Manter as mesmas práticas de consumo e produção sem mudanças significativas.",
    //              "Internalizar os custos ambientais e adotar práticas econômicas responsáveis.",
    //              "Reduzir o consumo sem levar em consideração as necessidades de emprego.",
    //              "Aumentar a exploração de recursos naturais para garantir crescimento econômico."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Manter as mesmas práticas sem mudanças não é sustentável. O modelo econômico futuro precisa transformar a forma como consumimos e produzimos, incorporando mais responsabilidade ambiental, como a redução do impacto no meio ambiente e o uso sustentável dos recursos naturais.",
    //                      "Para que o modelo econômico seja sustentável, é necessário internalizar os custos ambientais, ou seja, fazer com que as empresas e o governo considerem os impactos ambientais nas decisões econômicas. Isso envolve a adoção de práticas econômicas responsáveis que minimizem danos ao meio ambiente, como o uso de tecnologias limpas e incentivos para a preservação ambiental.",
    //                      "Embora a redução do consumo possa ser necessária para garantir a sustentabilidade, ela precisa ser equilibrada com a criação de empregos e a manutenção do bem-estar social. Simplesmente reduzir o consumo sem considerar os impactos econômicos (como o desemprego) não seria uma abordagem equilibrada.",
    //                      "A exploração excessiva dos recursos naturais não é uma solução sustentável e, de fato, é uma das principais causas de degradação ambiental. O modelo do futuro deve ser mais focado no uso sustentável dos recursos, e não na exploração desenfreada, para garantir a preservação do meio ambiente a longo prazo.",]
    // },
    //
    // {
    //     pergunta: "Como a poluição do ar afeta a saúde humana e o meio ambiente?",
    //     opcoes: ["A poluição do ar não tem impactos diretos na saúde humana.",
    //              "A poluição do ar pode causar problemas respiratórios e contribuir para as mudanças climáticas.",
    //              "A poluição do ar melhora a fertilidade do solo e beneficia a biodiversidade.",
    //              "Apenas grandes cidades sofrem com a poluição do ar, áreas rurais não são afetadas."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["A poluição do ar pode causar diversos problemas de saúde, como doenças respiratórias e cardiovasculares, além de contribuir para o aquecimento global",
    //                      "A poluição do ar libera partículas e gases que afetam a saúde e aumentam o efeito estufa, contribuindo para o aquecimento global",
    //                      "Poluentes podem contaminar solos e águas, reduzindo a biodiversidade e prejudicando ecossistemas.",
    //                      "A poluição atmosférica pode se espalhar, afetando áreas rurais e até mesmo regiões remotas por meio de ventos e chuvas ácidas.",]
    // },
    //
    // {
    //     pergunta: "Qual é a importância da preservação das florestas tropicais?",
    //     opcoes: ["As florestas tropicais ajudam a regular o clima, armazenam carbono e abrigam grande biodiversidade.",
    //              "As florestas tropicais não são tão importantes quanto as áreas urbanas para a manutenção da vida no planeta.",
    //              "As florestas tropicais não são tão importantes quanto as áreas urbanas para a manutenção da vida no planeta.",
    //              "A destruição das florestas tropicais pode ser facilmente revertida com o plantio de novas árvores."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["As florestas tropicais absorvem CO₂, mantendo o equilíbrio climático, além de serem habitat de inúmeras espécies.",
    //                      "O desmatamento contribui para a perda de biodiversidade, altera o ciclo da água e intensifica as mudanças climáticas.",
    //                      "As florestas tropicais são essenciais para a estabilidade climática, produção de oxigênio e preservação da biodiversidade.",
    //                      "Embora o reflorestamento seja importante, a biodiversidade e os serviços ecológicos de uma floresta tropical levam séculos para se recuperar.",]
    // },
    //
    // {
    //     pergunta: "Qual o papel das energias renováveis na sustentabilidade ambiental?",
    //     opcoes: ["As energias renováveis ajudam a reduzir a emissão de gases do efeito estufa e a dependência de combustíveis fósseis.",
    //              "A energia renovável não é confiável porque depende de fatores climáticos, como sol e vento.",
    //              "A produção de energia renovável não precisa ser incentivada, pois os combustíveis fósseis são suficientes.",
    //              "A adoção de energias renováveis aumenta o consumo de recursos naturais e gera mais poluição."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["Fontes como solar, eólica e hidrelétrica são mais limpas e sustentáveis, diminuindo a poluição.",
    //                      "Embora dependam do clima, tecnologias avançadas, como armazenamento de energia, tornam essas fontes mais confiáveis.",
    //                      "Os combustíveis fósseis são finitos e altamente poluentes, tornando a transição para energias limpas essencial.",
    //                      "Apesar de exigir materiais para fabricação de painéis solares e turbinas eólicas, os impactos ambientais são menores em comparação aos combustíveis fósseis.",]
    // },
    //
    // {
    //     pergunta: "Qual é o impacto do descarte inadequado de resíduos sólidos no meio ambiente?",
    //     opcoes: ["O descarte inadequado pode causar poluição do solo, da água e do ar, além de prejudicar a fauna e a flora.",
    //              "Jogar lixo em locais inadequados não causa problemas ambientais significativos.",
    //              "O meio ambiente pode se adaptar rapidamente aos resíduos sólidos descartados de maneira incorreta.",
    //              "A reciclagem não contribui para a redução dos impactos ambientais do lixo."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["O lixo descartado incorretamente contamina os ecossistemas, afeta a saúde humana e pode levar a desastres ambientais, como enchentes.",
    //                      "O descarte irregular pode provocar poluição visual, contaminação de lençóis freáticos e propagação de doenças.",
    //                      "Muitos resíduos, como plásticos e metais, levam séculos para se decompor, causando impactos duradouros.",
    //                      "A reciclagem reduz o desperdício de materiais, diminui a extração de recursos naturais e evita a poluição.",]
    // },
    //
    // {
    //     pergunta: "Como a inteligência artificial pode contribuir para a redução das emissões de carbono?",
    //     opcoes: ["Por meio da otimização de sistemas de transporte e logística, reduzindo o consumo de combustíveis.",
    //              "Aumentando o uso de data centers, que são sustentáveis por natureza.",
    //              "Substituindo todas as fontes de energia renovável por modelos baseados em IA.",
    //              "Priorizando o desenvolvimento de redes sociais mais interativas."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["A IA pode analisar dados em tempo real para melhorar rotas, aumentar a eficiência energética e diminuir emissões em setores como transporte e indústria.",
    //                      "Data centers consomem grande quantidade de energia, e seu aumento indiscriminado pode elevar a demanda por eletricidade, muitas vezes gerada por fontes não renováveis.",
    //                      "A IA não substitui fontes de energia, mas pode gerenciar sua distribuição e eficiência. A substituição total é inviável e fora de seu escopo.",
    //                      "Redes sociais não têm relação direta com a redução de emissões, e seu uso excessivo pode até aumentar o consumo energético.",]
    // },
    //
    // {
    //     pergunta: "Qual é um dos principais desafios ambientais associados ao treinamento de modelos avançados de IA?",
    //     opcoes: ["O alto consumo energético requerido por servidores, que pode aumentar a pegada de carbono.",
    //              "A redução do lixo eletrônico devido ao uso de hardware ultrapassado.",
    //              "A IA elimina a necessidade de humanos trabalharem, reduzindo a poluição.",
    //              "O uso de IA em parques eólicos inviabiliza a geração de energia limpa."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["Modelos como GPT-4 demandam enormes quantidades de energia, muitas vezes proveniente de fontes não renováveis, gerando impactos climáticos.",
    //                      "O treinamento de IA exige hardware moderno e potente, o que pode acelerar a obsolescência de equipamentos e aumentar o lixo eletrônico.",
    //                      "A automação não está diretamente ligada à redução de poluição e pode até deslocar recursos para setores mais poluentes.",
    //                      "A IA é usada para otimizar a eficiência de energias renováveis, como eólica e solar, tornando-as mais viáveis.",]
    // },
    //
    // {
    //     pergunta: "Como a IA pode ajudar na preservação de espécies ameaçadas de extinção?",
    //     opcoes: ["Analisando padrões de migração e habitats por meio de sensores e imagens de satélite.",
    //              "Substituindo ecossistemas naturais por ambientes virtuais controlados.",
    //              "Aumentando a produção de animais em cativeiro para substituir populações selvagens.",
    //              "Utilizando chatbots para conscientização, sem ações práticas no meio ambiente."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["A IA processa grandes volumes de dados para monitorar espécies, identificar ameaças e propor ações de conservação.",
    //                      "Ambientes virtuais não replicam a complexidade dos ecossistemas reais e não resolvem problemas como caça ilegal ou desmatamento.",
    //                      "A criação em cativeiro não garante a preservação de habitats naturais e pode gerar desequilíbrios ecológicos.",
    //                      "Conscientização é importante, mas a IA tem aplicações diretas, como monitoramento e análise preditiva, que são mais impactantes.",]
    // },
    //
    // {
    //     pergunta: "O que é desenvolvimento sustentável?",
    //     opcoes: ["O uso ilimitado dos recursos naturais para atender às necessidades atuais.",
    //              "A prática de preservar a natureza sem permitir o desenvolvimento econômico.",
    //              "Um modelo que busca atender às necessidades do presente sem comprometer as futuras gerações.",
    //              "A exploração intensiva dos recursos para maximizar a produção industrial."],
    //     respostaCorreta: 2,
    //     explicacaoErro: ["O desenvolvimento sustentável busca equilibrar o uso dos recursos naturais, garantindo que as necessidades das futuras gerações também sejam atendidas. O uso ilimitado dos recursos pode levar ao esgotamento ambiental.",
    //                      "O desenvolvimento sustentável não significa impedir o crescimento econômico, mas sim promover um equilíbrio entre desenvolvimento, preservação ambiental e bem-estar social.",
    //                      "O conceito de desenvolvimento sustentável envolve o uso responsável dos recursos naturais, garantindo que as futuras gerações também possam usufruir deles.",
    //                      "Explorar intensivamente os recursos pode levar ao esgotamento e degradação ambiental, o que vai contra os princípios do desenvolvimento sustentável.",]
    // },
    //
    // {
    //     pergunta: "Qual é a importância da reciclagem para o meio ambiente?",
    //     opcoes: ["Reduz a quantidade de resíduos enviados para aterros e diminui a poluição.",
    //              "Aumenta o consumo de energia elétrica e recursos naturais.",
    //              "Não possui impacto ambiental significativo.",
    //              "Incentiva o descarte irregular de resíduos."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["A reciclagem ajuda a reduzir o volume de lixo descartado em aterros sanitários e diminui a poluição do solo, água e ar.",
    //                      "O processo de reciclagem, na maioria dos casos, consome menos energia e recursos do que a produção de novos materiais a partir de matérias-primas virgens.",
    //                      "A reciclagem tem um impacto positivo significativo, reduzindo a extração de recursos naturais e minimizando a degradação ambiental.",
    //                      "Pelo contrário, a reciclagem promove a destinação correta dos resíduos e incentiva práticas mais sustentáveis na sociedade.",]
    // },
    //
    // {
    //     pergunta: "O que é a economia circular?",
    //     opcoes: ["Modelo econômico baseado no consumo desenfreado.",
    //              "Reutilização, reciclagem e redução de resíduos.",
    //              "Aumento da produção de plásticos descartáveis.",
    //              "Uso exclusivo de energia não renovável."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["A economia circular promove a redução do consumo, não o aumento. Seu foco é otimizar o uso de recursos e reduzir resíduos.",
    //                      "A economia circular é um modelo que visa minimizar a produção de resíduos e maximizar a reutilização e reciclagem de materiais, promovendo um ciclo contínuo de uso de recursos.",
    //                      "A economia circular é contra o uso excessivo de plásticos descartáveis. Seu objetivo é reduzir a produção de produtos de uso único e promover alternativas mais sustentáveis.",
    //                      "A economia circular também busca promover o uso de fontes de energia renováveis, ao contrário das fontes não renováveis, que são finitas e prejudiciais ao meio ambiente.",]
    // },
    //
    // {
    //     pergunta: "Qual é o principal objetivo da Conferência das Nações Unidas sobre as Mudanças Climáticas de 2025 (COP30)",
    //     opcoes: ["Estabelecer um novo tratado para a exploração de combustíveis fósseis.",
    //              "Impulsionar a adoção de políticas para mitigar e adaptar os impactos das mudanças climáticas.",
    //              "Promover a construção de novas usinas nucleares como alternativa energética.",
    //              "Discutir a criação de um mercado global de carbono para países em desenvolvimento."],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Esta alternativa está incorreta, pois a COP30 foca em mitigar as mudanças climáticas e promover soluções sustentáveis, não em ampliar a exploração de combustíveis fósseis.",
    //                      "A principal meta da COP30 é promover ações para reduzir as emissões de gases de efeito estufa e ajudar os países a se adaptarem às consequências das mudanças climáticas, com foco em soluções sustentáveis.",
    //                      "A COP30 não foca na construção de usinas nucleares, mas na transição para fontes de energia limpa e renovável, além da redução das emissões de carbono.",
    //                      "Embora o mercado de carbono seja um tema discutido em várias conferências climáticas, o foco da COP30 não está exclusivamente em criar um mercado global de carbono, mas em ações mais amplas contra as mudanças climáticas.",]
    // },
    //
    // {
    //     pergunta: "Aponte algumas das maiores fontes de poluição do planeta.",
    //     opcoes: ["Queima de combustíveis fósseis, Agricultura intensiva, Desmatamento e Transporte rodoviário.",
    //              "Reciclagem de materiais, Poluição térmica, Resíduos sólidos e Fabricação de produtos eletrônicos.",
    //              "Atividades mineradoras, Poluição marinha, Energia solar e Agricultura sustentável.",
    //              "Indústrias químicas, Transmissão de energia elétrica, Resíduos domésticos e Atividades recreativas."],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["Estas são algumas das principais fontes de poluição, pois a queima de combustíveis fósseis emite gases poluentes, a agricultura intensiva gera contaminação do solo e da água, o desmatamento contribui para a redução da capacidade de absorção de CO₂ e o transporte rodoviário é responsável por grandes emissões de poluentes no ar.",
    //                      "A reciclagem de materiais é uma prática que ajuda a reduzir a poluição, não é uma fonte dela. Embora a fabricação de produtos eletrônicos gere algum impacto ambiental, ela não é uma das maiores fontes de poluição, especialmente se comparada a atividades como a queima de combustíveis fósseis ou o desmatamento.",
    //                      "Embora as atividades mineradoras e a poluição marinha sejam fontes significativas de poluição, a energia solar e a agricultura sustentável não são fontes de poluição, ao contrário, são alternativas mais limpas e sustentáveis para reduzir o impacto ambiental.",
    //                      "As indústrias químicas são uma grande fonte de poluição, mas a transmissão de energia elétrica (seja por linhas de transmissão ou por fontes renováveis) não é uma fonte significativa de poluição. Resíduos domésticos são uma preocupação, mas representam uma menor parte da poluição global em comparação com outras fontes. Atividades recreativas, como o turismo, em sua maioria, não são uma fonte significativa de poluição em larga escala.",]
    // },
    //
    // {
    //     pergunta: "Qual a forma correta de realizar uma denúncia ambiental?",
    //     opcoes: ["Registrar a denúncia diretamente em redes sociais, como Facebook ou Instagram, para alertar a população.",
    //              "Entrar em contato com órgãos competentes, como a Secretaria do Meio Ambiente ou o Ibama, fornecendo informações detalhadas sobre a infração.",
    //              "Enviar uma carta anônima para o governo, relatando a situação, sem fornecer dados específicos para evitar represálias.",
    //              "Publicar um vídeo sobre a infração ambiental e enviá-la diretamente para a mídia local para pressão pública.  "],
    //     respostaCorreta: 1,
    //     explicacaoErro: ["Embora o uso das redes sociais seja uma maneira eficaz de alertar a população sobre questões ambientais, elas não são a forma mais adequada de fazer uma denúncia formal. Denúncias ambientais devem ser feitas por meio de canais oficiais, onde há o compromisso de investigar e tomar medidas legais apropriadas.",
    //                      "A forma correta de realizar uma denúncia ambiental é entrar em contato com os órgãos responsáveis pela fiscalização ambiental, como o Ibama, a Secretaria do Meio Ambiente ou outros órgãos estaduais e municipais. Isso garante que a denúncia seja tratada de forma legal e formal.",
    //                      "Embora a anonimidade seja permitida em alguns casos, o envio de uma carta anônima sem dados específicos pode dificultar a investigação. Informações claras e precisas são essenciais para que a denúncia seja investigada adequadamente. A denúncia deve ser formal e detalhada, mesmo que seja anônima, para garantir uma ação efetiva.",
    //                      "Embora a mídia possa ser útil para alertar a população sobre questões ambientais, a forma mais eficaz e legal de lidar com uma infração ambiental é por meio de denúncia formal a órgãos competentes, como o Ibama ou as secretarias ambientais. A pressão pública pode ajudar, mas não substitui o processo legal e oficial de denúncia.",]
    // },
    //
    // {
    //     pergunta: "Qual das alternativas abaixo representa um dos principais objetivos da gestão ambiental nas organizações?",
    //     opcoes: ["Aumentar o lucro a qualquer custo",
    //              "Eliminar completamente todos os resíduos produzidos",
    //              "Reduzir os impactos ambientais das atividades organizacionais",
    //              "Impedir o crescimento econômico para preservar o meio ambiente"],
    //     respostaCorreta: 2,
    //     explicacaoErro: ["O lucro não deve vir “a qualquer custo”, especialmente se isso causar danos ambientais.",
    //                      "É praticamente impossível eliminar todos os resíduos, mas é possível reduzi-los e tratá-los adequadamente.",
    //                      "A gestão ambiental busca exatamente isso: minimizar os danos ao meio ambiente causados pelas atividades humanas e industriais, promovendo práticas sustentáveis.",
    //                      "O objetivo da gestão ambiental é equilibrar o desenvolvimento econômico com a proteção ambiental, não impedir o crescimento.",]
    // },
    //
    // {
    //     pergunta: "Qual dos itens abaixo faz parte de um Sistema de Gestão Ambiental (SGA) conforme a ISO 14001?",
    //     opcoes: ["Planejamento, Implementação, Verificação e Ação.",
    //              "Produção em massa, Consumo, Descarte e Lucro.",
    //              "Compra, Venda, Lucro e Expansão"],
    //     respostaCorreta: 0,
    //     explicacaoErro: ["Esses são os passos do ciclo PDCA, base do SGA da ISO 14001, que promove a melhoria contínua do desempenho ambiental.",
    //                      "Essa sequência representa um modelo linear e insustentável, sem considerar práticas ambientais responsáveis.",
    //                      "São etapas do processo comercial e financeiro, sem ligação direta com os princípios do SGA.",]
    // },
]