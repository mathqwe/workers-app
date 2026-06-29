import type { LearningModule, Track, TrackPhase } from '@/types/learning';

export const phaseLabels: Record<TrackPhase, { title: string; description: string }> = {
  base: {
    title: 'Comece pela base',
    description: 'Postura, comunicação, organização e ferramentas essenciais para começar bem.',
  },
  pratica: {
    title: 'Pratique na rotina',
    description: 'Aplicação em tarefas reais, controles, registros e pequenos processos do dia a dia.',
  },
  autonomia: {
    title: 'Mostre que está pronto',
    description: 'Entregas com mais autonomia, evidências de aprendizado e visão de melhoria.',
  },
};

const materials = {
  excelBasico: {
    id: 'mat-excel-basico-fb',
    title: 'Microsoft Excel 2016 - Básico',
    provider: 'Fundação Bradesco',
    type: 'course' as const,
    url: 'https://www.ev.org.br/cursos/microsoft-excel-2016-basico',
    note: 'Boa porta de entrada para formatação, fórmulas simples, classificação de dados e gráficos.',
  },
  excelPratica: {
    id: 'mat-excel-pratica-fb',
    title: 'Excel na Prática',
    provider: 'Fundação Bradesco',
    type: 'course' as const,
    url: 'https://www.ev.org.br/cursos/excel-na-pratica',
    note: 'Ajuda a sair do básico e aplicar planilhas em controles reais.',
  },
  excelSantander: {
    id: 'mat-excel-santander',
    title: 'Excel - do básico ao intermediário',
    provider: 'Santander Open Academy',
    type: 'course' as const,
    url: 'https://www.santanderopenacademy.com/pt_br/courses/excel.html/index.f',
    note: 'Curso gratuito com certificado para reforçar análise e organização de dados.',
  },
  comunicacaoEmpresarial: {
    id: 'mat-comunicacao-empresarial-fb',
    title: 'Comunicação Empresarial',
    provider: 'Fundação Bradesco',
    type: 'course' as const,
    url: 'https://www.ev.org.br/cursos/comunicacao-empresarial',
    note: 'Base para postura, convivência profissional e comunicação no trabalho.',
  },
  comunicacaoEscrita: {
    id: 'mat-comunicacao-escrita-fb',
    title: 'Comunicação Escrita: Ortografia, Gramática e Texto',
    provider: 'Fundação Bradesco',
    type: 'course' as const,
    url: 'https://www.ev.org.br/cursos/comunicacao-escrita-ortografia-gramatica-e-texto',
    note: 'Reforça escrita clara para e-mails, registros e comunicados.',
  },
  atendimentoPublico: {
    id: 'mat-atendimento-publico-fb',
    title: 'Atendimento ao Público',
    provider: 'Fundação Bradesco',
    type: 'course' as const,
    url: 'https://www.ev.org.br/cursos/atendimento-ao-publico',
    note: 'Útil para aprender escuta, cordialidade e registro de solicitações.',
  },
  outlook: {
    id: 'mat-outlook-microsoft',
    title: 'Treinamento do Outlook',
    provider: 'Microsoft Suporte',
    type: 'guide' as const,
    url: 'https://support.microsoft.com/pt-br/office/treinamento-do-outlook-8a5b816d-9052-4190-a5eb-494512343cca',
    note: 'Guia prático para caixa de entrada, calendário, pesquisa e organização de rotina.',
  },
  gestaoDocumental: {
    id: 'mat-gestao-documental-evg',
    title: 'Gestão Documental',
    provider: 'Escola Virtual de Governo',
    type: 'course' as const,
    url: 'https://www.escolavirtual.gov.br/curso/703',
    note: 'Ajuda a entender classificação, controle, preservação e fluxo de documentos.',
  },
  gestaoInfoDocumentacao: {
    id: 'mat-gestao-info-doc-evg',
    title: 'Gestão da Informação e Documentação - Conceitos Básicos',
    provider: 'Escola Virtual de Governo',
    type: 'course' as const,
    url: 'https://www.escolavirtual.gov.br/curso/73',
    note: 'Complemento simples para quem trabalha com arquivos físicos e digitais.',
  },
  lgpd: {
    id: 'mat-lgpd-evg',
    title: 'Introdução à Lei Brasileira de Proteção de Dados Pessoais',
    provider: 'Escola Virtual de Governo',
    type: 'course' as const,
    url: 'https://www.escolavirtual.gov.br/curso/153/',
    note: 'Essencial para lidar com dados de colaboradores, candidatos, fornecedores e clientes internos.',
  },
  segurancaInfo: {
    id: 'mat-seguranca-info-evg',
    title: 'Segurança da Informação para Todos',
    provider: 'Escola Virtual de Governo',
    type: 'course' as const,
    url: 'https://www.escolavirtual.gov.br/curso/1256',
    note: 'Explica cuidados básicos com senhas, golpes, privacidade e dados da empresa.',
  },
  gestaoTempo: {
    id: 'mat-gestao-tempo-evg',
    title: 'Gestão do Tempo e Produtividade',
    provider: 'Escola Virtual de Governo',
    type: 'course' as const,
    url: 'https://www.escolavirtual.gov.br/curso/468',
    note: 'Ajuda a organizar prioridades, prazos e acompanhamento de tarefas.',
  },
  gestaoPessoas: {
    id: 'mat-gestao-pessoas-evg',
    title: 'Gestão de Pessoas',
    provider: 'Escola Virtual de Governo',
    type: 'course' as const,
    url: 'https://www.escolavirtual.gov.br/curso/1338',
    note: 'Base para entender rotinas de pessoas, liderança, equipes e papel do RH.',
  },
  powerBiMicrosoft: {
    id: 'mat-powerbi-microsoft',
    title: 'Treinamento do Power BI',
    provider: 'Microsoft Learn',
    type: 'course' as const,
    url: 'https://learn.microsoft.com/pt-br/training/powerplatform/power-bi',
    note: 'Roteiro oficial para começar a obter, tratar e visualizar dados no Power BI.',
  },
  powerBiBradesco: {
    id: 'mat-powerbi-fb',
    title: 'Introdução à Análise de Dados - Microsoft Power BI',
    provider: 'Fundação Bradesco',
    type: 'course' as const,
    url: 'https://www.ev.org.br/cursos/introducao-a-analise-de-dados-microsoft-power-bi',
    note: 'Introdução curta para entender o papel da análise de dados e do Power BI.',
  },
  estoqueSebrae: {
    id: 'mat-estoque-sebrae',
    title: 'Mantendo o estoque em dia',
    provider: 'Sebrae',
    type: 'course' as const,
    url: 'https://loja.sebrae.com.br/mantendo-o-estoque-em-dia-1-372000027020',
    note: 'Base prática para organização, controle e segurança na rotina de estoque.',
  },
  atendimentoSebrae: {
    id: 'mat-atendimento-sebrae',
    title: 'Atendimento ao cliente',
    provider: 'Sebrae',
    type: 'course' as const,
    url: 'https://loja.sebrae.com.br/atendimento-ao-cliente-1-372000017766',
    note: 'Ajuda na postura de atendimento e no registro correto de solicitações.',
  },
  fornecedoresSebrae: {
    id: 'mat-fornecedores-sebrae',
    title: 'Como comprar bem e de bons fornecedores',
    provider: 'Sebrae',
    type: 'course' as const,
    url: 'https://loja.sebrae.com.br/como-comprar-bem-e-de-bons-fornecedores-1-372000017779',
    note: 'Introdução útil para compras, negociação, qualidade, prazos e fornecedores.',
  },
  negociacaoSebrae: {
    id: 'mat-negociacao-sebrae',
    title: 'Negociação',
    provider: 'Sebrae',
    type: 'course' as const,
    url: 'https://loja.sebrae.com.br/negociac-o-1-372000027025',
    note: 'Ajuda a entender conversas com fornecedores, clientes internos e equipes.',
  },
  ciscoSupport: {
    id: 'mat-cisco-it-support',
    title: 'IT Support Specialist Career Path',
    provider: 'Cisco Networking Academy',
    type: 'course' as const,
    url: 'https://www.netacad.com/career-paths/it-support-specialist?courseLang=en-US',
    note: 'Trilha gratuita para help desk, troubleshooting e suporte de computadores.',
  },
  ciscoNetwork: {
    id: 'mat-cisco-network',
    title: 'Network Technician Career Path',
    provider: 'Cisco Networking Academy',
    type: 'course' as const,
    url: 'https://www.netacad.com/career-paths/network-technician',
    note: 'Boa base para redes, conectividade e certificação de entrada.',
  },
  ibmItSupport: {
    id: 'mat-ibm-it-support',
    title: 'IT Support Basics',
    provider: 'IBM SkillsBuild',
    type: 'course' as const,
    url: 'https://skillsbuild.org/students/course-catalog/it-support',
    note: 'Fundamentos de suporte, hardware/software e diagnóstico para iniciantes.',
  },
};

const adm: LearningModule[] = [
  {
    id: 'adm-comunicacao-profissional',
    phase: 'base',
    title: 'Comunicação profissional',
    shortTitle: 'Comunicação',
    summary: 'Aprenda a escrever, responder e registrar mensagens de trabalho com clareza.',
    whyItMatters:
      'No administrativo, muita coisa começa por um pedido, e-mail, mensagem ou ligação. Uma comunicação ruim gera retrabalho, atraso e informação perdida.',
    learnChecklist: [
      'Escrever assunto de e-mail claro e direto.',
      'Cumprimentar, contextualizar, pedir e encerrar uma mensagem corretamente.',
      'Confirmar entendimento antes de executar uma solicitação.',
      'Pedir informação pendente sem parecer grosseiro.',
      'Registrar combinados importantes por escrito.',
      'Encaminhar uma demanda para a pessoa certa com contexto suficiente.',
    ],
    practice:
      'Escreva um e-mail pedindo uma informação que está faltando para concluir uma planilha. Inclua assunto, saudação, contexto, pedido objetivo e encerramento.',
    evidencePrompt: 'Anexe um certificado de comunicação ou um exemplo de e-mail revisado por você.',
    materials: [materials.comunicacaoEmpresarial, materials.comunicacaoEscrita, materials.outlook],
  },
  {
    id: 'adm-documentos-arquivos',
    phase: 'base',
    title: 'Organização de documentos e arquivos',
    shortTitle: 'Documentos',
    summary: 'Monte uma lógica simples para guardar, nomear e encontrar arquivos sem depender de memória.',
    whyItMatters:
      'Assistentes administrativos lidam com documentos, comprovantes, listas, atas e cadastros. A empresa precisa confiar que a informação será encontrada depois.',
    learnChecklist: [
      'Separar documentos por tipo, mês, área e responsável.',
      'Criar nomes de arquivos padronizados e fáceis de buscar.',
      'Controlar status: recebido, conferido, pendente e finalizado.',
      'Identificar informação sensível antes de compartilhar.',
      'Manter versão final separada de rascunhos.',
    ],
    practice:
      'Monte uma pasta fictícia com nomes padronizados para contratos, notas, listas e comprovantes. Depois crie uma planilha de controle desses arquivos.',
    evidencePrompt: 'Anexe print ou PDF de uma estrutura de pastas/controle documental criada por você.',
    materials: [materials.gestaoDocumental, materials.gestaoInfoDocumentacao, materials.lgpd],
  },
  {
    id: 'adm-excel-controles',
    phase: 'pratica',
    title: 'Excel para controles administrativos',
    shortTitle: 'Excel administrativo',
    summary: 'Saia da planilha solta e aprenda a montar controles úteis para demandas, documentos e prazos.',
    whyItMatters:
      'Excel é uma das ferramentas mais cobradas para efetivação porque transforma informação espalhada em controle acompanhável.',
    learnChecklist: [
      'Montar tabela com cabeçalho claro e filtros.',
      'Usar formatação de data, moeda, texto e status.',
      'Aplicar fórmulas básicas: SOMA, CONT.SE, SE e PROCV/PROCX.',
      'Criar lista suspensa para status.',
      'Usar tabela dinâmica para resumir dados por área ou responsável.',
      'Criar gráfico simples para acompanhamento.',
    ],
    practice:
      'Crie uma planilha com 10 demandas administrativas contendo: data de abertura, solicitante, responsável, prazo, status e observação. Depois filtre pendências e gere um resumo por responsável.',
    evidencePrompt: 'Anexe certificado de Excel ou print da planilha com filtro, status e resumo.',
    materials: [materials.excelBasico, materials.excelPratica, materials.excelSantander],
  },
  {
    id: 'adm-outlook-agenda',
    phase: 'pratica',
    title: 'Outlook, agenda e tarefas',
    shortTitle: 'Outlook e agenda',
    summary: 'Organize caixa de entrada, calendário, reuniões e lembretes para não perder prazos.',
    whyItMatters:
      'Muitos erros administrativos acontecem por esquecimento, falta de resposta ou perda de e-mail. Organização digital passa confiança.',
    learnChecklist: [
      'Criar pastas ou categorias para organizar mensagens.',
      'Usar calendário para compromissos e prazos.',
      'Enviar convite de reunião com pauta e participantes corretos.',
      'Pesquisar e-mails antigos por palavra-chave, pessoa ou data.',
      'Transformar e-mail em tarefa acompanhável.',
    ],
    practice:
      'Simule a organização de uma reunião: escreva a pauta, convide participantes, defina horário e registre uma tarefa de acompanhamento.',
    evidencePrompt: 'Anexe print de uma agenda organizada ou certificado relacionado a Outlook/produtividade.',
    materials: [materials.outlook, materials.gestaoTempo],
  },
  {
    id: 'adm-suporte-rotinas',
    phase: 'autonomia',
    title: 'Apoio a rotinas internas',
    shortTitle: 'Rotinas internas',
    summary: 'Entenda como apoiar compras, materiais, reuniões, cadastros e solicitações internas.',
    whyItMatters:
      'O assistente administrativo precisa fechar pequenas rotinas com começo, meio e fim, sem depender de cobrança constante.',
    learnChecklist: [
      'Transformar pedido informal em solicitação registrada.',
      'Identificar dados mínimos antes de abrir uma demanda.',
      'Acompanhar prazo e cobrar retorno com educação.',
      'Atualizar status e informar conclusão.',
      'Separar o que você resolve do que precisa escalar.',
    ],
    practice:
      'Crie um mini fluxo para uma solicitação interna: pedido recebido, dados necessários, responsável, prazo, acompanhamento e conclusão.',
    evidencePrompt: 'Anexe checklist ou fluxo simples de uma rotina administrativa.',
    materials: [materials.atendimentoPublico, materials.atendimentoSebrae, materials.fornecedoresSebrae],
  },
  {
    id: 'adm-relatorio-entrega',
    phase: 'autonomia',
    title: 'Resumo, relatório e entrega final',
    shortTitle: 'Relatório simples',
    summary: 'Aprenda a transformar uma rotina em um resumo simples para gestor ou equipe.',
    whyItMatters:
      'Efetivação exige mostrar que você sabe entregar resultado, não só executar tarefas soltas.',
    learnChecklist: [
      'Separar informação principal de detalhe.',
      'Apresentar status: concluído, pendente, atrasado e próximo passo.',
      'Criar um resumo de uma página ou e-mail.',
      'Usar números simples para apoiar a decisão.',
      'Apontar risco ou pendência com clareza.',
    ],
    practice:
      'Usando a planilha de demandas, escreva um resumo com total de itens, pendências, atrasos e próximos passos.',
    evidencePrompt: 'Anexe um relatório simples em PDF, print ou documento.',
    materials: [materials.excelPratica, materials.comunicacaoEscrita, materials.powerBiBradesco],
  },
];

const rh: LearningModule[] = [
  {
    id: 'rh-etica-lgpd',
    phase: 'base',
    title: 'Ética, sigilo e dados de pessoas',
    shortTitle: 'Ética e sigilo',
    summary: 'Entenda os cuidados ao lidar com currículos, documentos, salários, avaliações e dados pessoais.',
    whyItMatters:
      'RH trabalha com informações sensíveis. Um aprendiz de RH precisa demonstrar responsabilidade antes de ganhar mais autonomia.',
    learnChecklist: [
      'Reconhecer informações confidenciais de candidatos e colaboradores.',
      'Evitar compartilhar documentos fora dos canais corretos.',
      'Entender o básico da LGPD no ambiente de trabalho.',
      'Guardar arquivos com organização e segurança.',
      'Saber quando perguntar antes de enviar uma informação.',
    ],
    practice: 'Crie uma lista de cuidados para manipular currículos, documentos admissionais e planilhas de colaboradores.',
    evidencePrompt: 'Anexe certificado de LGPD, segurança da informação ou ética profissional.',
    materials: [materials.lgpd, materials.segurancaInfo, materials.gestaoPessoas],
  },
  {
    id: 'rh-comunicacao-candidatos',
    phase: 'base',
    title: 'Comunicação com candidatos e colaboradores',
    shortTitle: 'Comunicação RH',
    summary: 'Aprenda a responder, orientar e registrar contatos com respeito e clareza.',
    whyItMatters:
      'O RH representa a empresa em muitos contatos. Mensagens confusas prejudicam a experiência de candidatos e colaboradores.',
    learnChecklist: [
      'Escrever mensagens de convocação e retorno com clareza.',
      'Confirmar dados antes de agendar entrevista ou integração.',
      'Responder dúvidas sem prometer o que não sabe.',
      'Registrar contato realizado, data, canal e próximo passo.',
      'Manter cordialidade mesmo em situações delicadas.',
    ],
    practice:
      'Escreva uma mensagem convidando um candidato para entrevista e outra pedindo documentação pendente para admissão.',
    evidencePrompt: 'Anexe certificado de comunicação ou exemplo de mensagem de RH revisada.',
    materials: [materials.comunicacaoEmpresarial, materials.comunicacaoEscrita, materials.atendimentoPublico],
  },
  {
    id: 'rh-planilhas-controles',
    phase: 'pratica',
    title: 'Excel para controles de RH',
    shortTitle: 'Excel RH',
    summary: 'Monte bases simples para candidatos, documentos, treinamentos, integração e prazos.',
    whyItMatters:
      'RH usa planilhas para acompanhar processos. O diferencial é manter dados limpos, atualizados e fáceis de filtrar.',
    learnChecklist: [
      'Criar base com nome, área, status, responsável e prazo.',
      'Usar filtros para encontrar pendências.',
      'Aplicar validação de dados para status padronizado.',
      'Usar CONT.SE para contar candidatos por etapa.',
      'Usar tabela dinâmica para resumir admissões, treinamentos ou documentos.',
      'Cuidar para não expor dados sensíveis sem necessidade.',
    ],
    practice:
      'Crie uma planilha fictícia de processo seletivo com 12 candidatos e status: triagem, entrevista, aprovado, reprovado e documentação.',
    evidencePrompt: 'Anexe certificado de Excel ou print da base com filtros e resumo por status.',
    materials: [materials.excelBasico, materials.excelPratica, materials.lgpd],
  },
  {
    id: 'rh-triagem-selecao',
    phase: 'pratica',
    title: 'Triagem e apoio ao processo seletivo',
    shortTitle: 'Triagem',
    summary: 'Entenda como apoiar seleção sem decidir sozinho: organizar currículos, critérios e encaminhamentos.',
    whyItMatters:
      'Assistentes de RH ajudam a dar velocidade ao processo seletivo quando sabem organizar informações e registrar etapas.',
    learnChecklist: [
      'Separar requisitos obrigatórios e desejáveis da vaga.',
      'Organizar currículos por aderência inicial.',
      'Registrar motivo de avanço ou reprovação de forma objetiva.',
      'Agendar entrevista com dados corretos.',
      'Atualizar status do candidato sem perder histórico.',
    ],
    practice:
      'Monte uma tabela de triagem para uma vaga fictícia de assistente, com critérios, status e observação resumida.',
    evidencePrompt: 'Anexe uma planilha ou checklist de triagem fictícia.',
    materials: [materials.gestaoPessoas, materials.comunicacaoEmpresarial],
  },
  {
    id: 'rh-integracao-documentos',
    phase: 'autonomia',
    title: 'Integração e documentos admissionais',
    shortTitle: 'Integração',
    summary: 'Aprenda a acompanhar documentos, orientações iniciais e checklist de entrada de colaboradores.',
    whyItMatters:
      'Onboarding bem controlado evita atrasos, retrabalho e experiência ruim para quem está entrando.',
    learnChecklist: [
      'Montar checklist de documentos admissionais.',
      'Acompanhar pendências sem expor dados sensíveis.',
      'Organizar datas de integração e responsáveis.',
      'Enviar orientações iniciais com clareza.',
      'Registrar conclusão da etapa e pendências.',
    ],
    practice:
      'Crie um checklist de integração para novo colaborador com documentos, reunião inicial, acesso, treinamento e responsável.',
    evidencePrompt: 'Anexe checklist de integração ou certificado relacionado a gestão de pessoas.',
    materials: [materials.gestaoDocumental, materials.lgpd, materials.outlook],
  },
  {
    id: 'rh-indicadores',
    phase: 'autonomia',
    title: 'Indicadores simples de RH',
    shortTitle: 'Indicadores RH',
    summary: 'Transforme controles de RH em números simples para acompanhar volume, prazo e pendências.',
    whyItMatters:
      'Mesmo em nível júnior, saber mostrar dados ajuda o RH a priorizar ações e explicar resultados.',
    learnChecklist: [
      'Contar candidatos por etapa do processo.',
      'Acompanhar documentos pendentes por pessoa ou área.',
      'Calcular prazo médio simples de retorno.',
      'Criar gráfico básico de status.',
      'Explicar o resultado em texto curto.',
    ],
    practice:
      'Use a planilha de triagem para criar um resumo com total por status e principais pendências.',
    evidencePrompt: 'Anexe relatório simples ou print de gráfico/indicador de RH.',
    materials: [materials.excelPratica, materials.powerBiBradesco],
  },
];

const logistica: LearningModule[] = [
  {
    id: 'log-organizacao-estoque',
    phase: 'base',
    title: 'Organização e segurança do estoque',
    shortTitle: 'Organização de estoque',
    summary: 'Entenda endereçamento, identificação, limpeza, segurança e lógica de armazenamento.',
    whyItMatters:
      'Um estoque desorganizado gera perda, retrabalho, atraso e erro de separação. A base da logística é encontrar o item certo no lugar certo.',
    learnChecklist: [
      'Identificar materiais por tipo, código, descrição e localização.',
      'Diferenciar área de recebimento, armazenagem, separação e expedição.',
      'Entender noções de 5S e organização visual.',
      'Sinalizar item divergente ou danificado.',
      'Respeitar segurança ao movimentar materiais.',
    ],
    practice:
      'Desenhe um layout simples de almoxarifado com áreas de recebimento, estoque, separação e expedição.',
    evidencePrompt: 'Anexe desenho, checklist ou certificado de estoque/logística.',
    materials: [materials.estoqueSebrae, materials.atendimentoSebrae],
  },
  {
    id: 'log-recebimento-conferencia',
    phase: 'base',
    title: 'Recebimento e conferência',
    shortTitle: 'Recebimento',
    summary: 'Aprenda a conferir material recebido, documento, quantidade, avaria e divergência.',
    whyItMatters:
      'A conferência é o primeiro filtro contra erro de estoque. Se entra errado, todo o processo seguinte fica comprometido.',
    learnChecklist: [
      'Comparar pedido, nota ou romaneio com o material recebido.',
      'Conferir quantidade, descrição e condição física.',
      'Registrar avaria, falta ou sobra.',
      'Separar item pendente para validação.',
      'Comunicar divergência com evidência simples.',
    ],
    practice:
      'Monte um checklist de recebimento com campos para fornecedor, documento, item, quantidade, divergência e observação.',
    evidencePrompt: 'Anexe checklist de recebimento ou certificado de estoque/logística.',
    materials: [materials.estoqueSebrae, materials.gestaoDocumental],
  },
  {
    id: 'log-excel-inventario',
    phase: 'pratica',
    title: 'Excel para estoque e inventário',
    shortTitle: 'Excel logística',
    summary: 'Monte controles simples de entrada, saída, saldo, inventário e divergência.',
    whyItMatters:
      'Muitas empresas usam planilhas junto com sistemas. Um bom assistente precisa conferir dados e identificar inconsistências.',
    learnChecklist: [
      'Criar tabela com código, descrição, unidade, localização, entrada, saída e saldo.',
      'Usar filtros e classificação por item ou localização.',
      'Aplicar SOMA, SOMASE, CONT.SE e SE.',
      'Destacar estoque baixo ou divergência com formatação condicional.',
      'Usar tabela dinâmica para resumir por categoria ou localização.',
    ],
    practice:
      'Crie uma planilha com 15 itens, entradas, saídas e saldo. Marque automaticamente itens com saldo baixo.',
    evidencePrompt: 'Anexe certificado de Excel ou print da planilha de estoque.',
    materials: [materials.excelBasico, materials.excelPratica, materials.excelSantander],
  },
  {
    id: 'log-inventario-acuracidade',
    phase: 'pratica',
    title: 'Inventário e acuracidade',
    shortTitle: 'Inventário',
    summary: 'Entenda como comparar físico x sistema/planilha e registrar divergências.',
    whyItMatters:
      'Acuracidade mostra se o controle é confiável. Empresas valorizam quem registra divergência com clareza e ajuda a corrigir causa.',
    learnChecklist: [
      'Contar item físico com critério.',
      'Comparar quantidade física com quantidade registrada.',
      'Registrar diferença e possível motivo.',
      'Separar divergência por falta, sobra, localização incorreta ou avaria.',
      'Atualizar controle somente com validação.',
    ],
    practice:
      'Simule um inventário de 10 itens com quantidade esperada e quantidade encontrada. Calcule divergência por item.',
    evidencePrompt: 'Anexe planilha ou checklist de inventário fictício.',
    materials: [materials.estoqueSebrae, materials.excelPratica],
  },
  {
    id: 'log-expedicao-transporte',
    phase: 'autonomia',
    title: 'Expedição, separação e transporte',
    shortTitle: 'Expedição',
    summary: 'Aprenda a organizar saída de materiais, documentação e acompanhamento de entrega.',
    whyItMatters:
      'Expedição errada gera atraso e custo. O aprendiz pronto para efetivação entende o fluxo e registra cada etapa.',
    learnChecklist: [
      'Separar item conforme solicitação ou pedido.',
      'Conferir quantidade antes da saída.',
      'Registrar responsável, data, destino e comprovante.',
      'Acompanhar status de entrega ou retirada.',
      'Comunicar atraso ou divergência rapidamente.',
    ],
    practice:
      'Crie um modelo de controle de saída com item, quantidade, destino, responsável, data, transportadora e comprovante.',
    evidencePrompt: 'Anexe modelo de controle de saída ou certificado relacionado à logística.',
    materials: [materials.gestaoDocumental, materials.atendimentoSebrae],
  },
  {
    id: 'log-indicadores-operacionais',
    phase: 'autonomia',
    title: 'Indicadores operacionais simples',
    shortTitle: 'Indicadores logística',
    summary: 'Transforme controles de estoque em números: pendências, divergências, atrasos e saldo crítico.',
    whyItMatters:
      'Indicadores ajudam a explicar problemas e priorizar correções. Isso mostra maturidade de assistente.',
    learnChecklist: [
      'Contar itens com divergência.',
      'Separar pendências por tipo.',
      'Identificar materiais com saldo baixo.',
      'Criar gráfico simples por categoria.',
      'Escrever resumo objetivo dos principais riscos.',
    ],
    practice:
      'Use a planilha de estoque para gerar um resumo com itens críticos, divergências e materiais pendentes.',
    evidencePrompt: 'Anexe relatório simples ou print de dashboard/indicador.',
    materials: [materials.excelPratica, materials.powerBiBradesco],
  },
];

const facilities: LearningModule[] = [
  {
    id: 'fac-atendimento-solicitacoes',
    phase: 'base',
    title: 'Atendimento interno e solicitações',
    shortTitle: 'Solicitações',
    summary: 'Aprenda a transformar pedidos informais em solicitações registradas, acompanháveis e claras.',
    whyItMatters:
      'Facilities recebe pedidos de manutenção, salas, materiais, limpeza, viagens e serviços. Se a solicitação não for bem registrada, o problema volta.',
    learnChecklist: [
      'Identificar quem solicitou, local, urgência e impacto.',
      'Descrever o problema sem exagero e sem falta de detalhe.',
      'Pedir foto, evidência ou informação complementar quando necessário.',
      'Classificar demanda: manutenção, limpeza, material, viagem, acesso ou apoio.',
      'Acompanhar status até retorno ao solicitante.',
    ],
    practice:
      'Crie um formulário simples de solicitação interna com campos obrigatórios e status de acompanhamento.',
    evidencePrompt: 'Anexe formulário, checklist ou certificado de atendimento/comunicação.',
    materials: [materials.atendimentoPublico, materials.atendimentoSebrae, materials.comunicacaoEmpresarial],
  },
  {
    id: 'fac-servicos-checklists',
    phase: 'base',
    title: 'Serviços prediais e checklists',
    shortTitle: 'Checklists prediais',
    summary: 'Entenda como acompanhar limpeza, manutenção, salas, materiais e rotina do ambiente de trabalho.',
    whyItMatters:
      'Facilities mantém o ambiente funcionando. Checklists reduzem esquecimento e ajudam a cobrar fornecedores com base em evidências.',
    learnChecklist: [
      'Criar checklist por ambiente ou serviço.',
      'Registrar problema, local, data e responsável.',
      'Diferenciar rotina preventiva de correção urgente.',
      'Usar foto/evidência quando necessário.',
      'Acompanhar pendência até conclusão.',
    ],
    practice:
      'Monte um checklist semanal de Facilities para recepção, salas, banheiros, copa, estoque e manutenção simples.',
    evidencePrompt: 'Anexe checklist predial ou exemplo de acompanhamento de pendências.',
    materials: [materials.gestaoDocumental, materials.atendimentoPublico, materials.segurancaInfo],
  },
  {
    id: 'fac-excel-controles',
    phase: 'pratica',
    title: 'Excel para controles de Facilities',
    shortTitle: 'Excel Facilities',
    summary: 'Monte controles de solicitações, fornecedores, custos, viagens, materiais e prazos.',
    whyItMatters:
      'Em Facilities, quase tudo vira controle: demandas, contratos, pagamentos, materiais, reservas, veículos, viagens e indicadores.',
    learnChecklist: [
      'Criar tabela com solicitante, local, tipo, responsável, prazo, status e custo.',
      'Usar filtros por status, área, fornecedor e prioridade.',
      'Aplicar SE, CONT.SE, SOMASE e PROCV/PROCX.',
      'Criar lista suspensa de status e prioridade.',
      'Usar tabela dinâmica para resumir demandas por tipo ou fornecedor.',
      'Criar gráfico simples de pendências por status.',
    ],
    practice:
      'Crie uma planilha com 12 solicitações de Facilities e gere um resumo por tipo de serviço, status e responsável.',
    evidencePrompt: 'Anexe certificado de Excel ou print da planilha de controle de Facilities.',
    materials: [materials.excelBasico, materials.excelPratica, materials.excelSantander],
  },
  {
    id: 'fac-fornecedores-contratos',
    phase: 'pratica',
    title: 'Fornecedores, orçamentos e contratos',
    shortTitle: 'Fornecedores',
    summary: 'Aprenda a comparar propostas, acompanhar serviço e registrar informações básicas de fornecedores.',
    whyItMatters:
      'Facilities depende de terceiros. Saber organizar orçamento, prazo e qualidade do serviço evita custo extra e retrabalho.',
    learnChecklist: [
      'Registrar fornecedor, contato, serviço, valor, prazo e condição.',
      'Comparar pelo menos três informações: preço, prazo e escopo.',
      'Entender diferença entre orçamento, pedido, contrato e nota.',
      'Acompanhar execução do serviço com evidência.',
      'Registrar avaliação simples do atendimento/entrega.',
    ],
    practice:
      'Monte uma tabela comparativa de 3 fornecedores fictícios para um serviço de manutenção ou limpeza.',
    evidencePrompt: 'Anexe tabela comparativa, checklist de fornecedor ou certificado de compras/negociação.',
    materials: [materials.fornecedoresSebrae, materials.negociacaoSebrae, materials.comunicacaoEmpresarial],
  },
  {
    id: 'fac-viagens-recursos',
    phase: 'autonomia',
    title: 'Viagens, reservas e recursos de obra',
    shortTitle: 'Viagens e recursos',
    summary: 'Entenda como controlar pedidos de viagem, alojamento, veículos, materiais e recursos de apoio.',
    whyItMatters:
      'Essa rotina exige atenção a prazo, dados corretos e comunicação com áreas diferentes. Pequenos erros podem gerar custo e impacto operacional.',
    learnChecklist: [
      'Coletar dados mínimos antes de solicitar viagem ou reserva.',
      'Conferir datas, local, centro de custo, responsável e justificativa.',
      'Acompanhar status de aprovação, compra, reserva ou pendência.',
      'Comunicar mudança de forma clara e registrada.',
      'Manter histórico para prestação de contas.',
    ],
    practice:
      'Crie um fluxo de solicitação de viagem: pedido, dados obrigatórios, aprovação, compra/reserva, confirmação e acompanhamento.',
    evidencePrompt: 'Anexe fluxo, checklist ou certificado de organização/produtividade.',
    materials: [materials.outlook, materials.gestaoTempo, materials.gestaoDocumental],
  },
  {
    id: 'fac-indicadores',
    phase: 'autonomia',
    title: 'Indicadores de Facilities',
    shortTitle: 'Indicadores Facilities',
    summary: 'Transforme solicitações e controles em números simples para mostrar volume, prazo e pendências.',
    whyItMatters:
      'Um assistente pronto para efetivação não só executa: ele ajuda a mostrar o que está acontecendo na operação.',
    learnChecklist: [
      'Contar demandas abertas, concluídas e atrasadas.',
      'Separar pendências por tipo de serviço ou fornecedor.',
      'Acompanhar custo simples por mês ou centro de custo.',
      'Criar gráfico de status ou volume por área.',
      'Escrever resumo objetivo com próximos passos.',
    ],
    practice:
      'Use a planilha de solicitações para montar um resumo com total por status, atrasos e principais fornecedores envolvidos.',
    evidencePrompt: 'Anexe dashboard simples, print de tabela dinâmica ou certificado de Power BI/Excel.',
    materials: [materials.excelPratica, materials.powerBiBradesco, materials.powerBiMicrosoft],
  },
];

const ti: LearningModule[] = [
  {
    id: 'ti-chamados-atendimento',
    phase: 'base',
    title: 'Atendimento ao usuário e chamados',
    shortTitle: 'Chamados',
    summary: 'Aprenda a registrar, classificar e acompanhar solicitações de suporte sem perder informação.',
    whyItMatters:
      'Suporte de TI começa pelo atendimento. Um chamado mal descrito atrasa diagnóstico e frustra o usuário.',
    learnChecklist: [
      'Registrar usuário, equipamento, erro, local e impacto.',
      'Separar incidente, solicitação e dúvida.',
      'Classificar prioridade sem exagerar urgência.',
      'Pedir evidência: print, mensagem de erro ou contexto.',
      'Atualizar o chamado com cada ação realizada.',
      'Escalar quando o problema ultrapassar seu nível.',
    ],
    practice:
      'Crie um modelo de chamado para problema de impressora, acesso bloqueado e internet lenta.',
    evidencePrompt: 'Anexe modelo de chamado ou certificado de atendimento/suporte.',
    materials: [materials.ciscoSupport, materials.atendimentoPublico, materials.ibmItSupport],
  },
  {
    id: 'ti-hardware-software',
    phase: 'base',
    title: 'Hardware, software e ambiente de trabalho',
    shortTitle: 'Hardware e software',
    summary: 'Entenda os componentes básicos de computador, sistema operacional, aplicativos e periféricos.',
    whyItMatters:
      'Antes de resolver problemas, o aprendiz de TI precisa reconhecer peças, sintomas e limites de atuação.',
    learnChecklist: [
      'Identificar CPU, memória, armazenamento, monitor, mouse, teclado e periféricos.',
      'Entender diferença entre hardware, sistema operacional e aplicativo.',
      'Reconhecer sintomas comuns: lentidão, travamento, falta de espaço e erro de login.',
      'Fazer perguntas básicas para isolar o problema.',
      'Registrar o que foi testado.',
    ],
    practice:
      'Monte uma ficha de diagnóstico inicial para computador lento, incluindo perguntas e verificações básicas.',
    evidencePrompt: 'Anexe certificado de suporte ou uma ficha de diagnóstico criada por você.',
    materials: [materials.ciscoSupport, materials.ibmItSupport, materials.segurancaInfo],
  },
  {
    id: 'ti-redes-impressoras',
    phase: 'pratica',
    title: 'Redes, Wi-Fi e impressoras',
    shortTitle: 'Redes básicas',
    summary: 'Aprenda noções de conexão, IP, Wi-Fi, cabo de rede, impressoras e testes simples.',
    whyItMatters:
      'Muitos chamados de entrada são conectividade e impressão. Saber testar o básico reduz tempo de atendimento.',
    learnChecklist: [
      'Diferenciar problema local, rede, Wi-Fi e sistema.',
      'Verificar cabo, conexão, sinal e impressora padrão.',
      'Entender noções de IP, roteador, switch e ponto de rede.',
      'Coletar erro ou print antes de escalar.',
      'Registrar teste feito e resultado.',
    ],
    practice:
      'Crie um checklist de diagnóstico para “sem internet” e “impressora não imprime”.',
    evidencePrompt: 'Anexe checklist de diagnóstico ou certificado de redes/suporte.',
    materials: [materials.ciscoNetwork, materials.ciscoSupport],
  },
  {
    id: 'ti-microsoft365-acessos',
    phase: 'pratica',
    title: 'Microsoft 365, acessos e segurança',
    shortTitle: 'Acessos e segurança',
    summary: 'Entenda contas, e-mail, senha, MFA, permissões e cuidados com dados corporativos.',
    whyItMatters:
      'Acesso é uma das rotinas mais sensíveis de TI. O aprendiz precisa ser cuidadoso, registrar tudo e seguir procedimento.',
    learnChecklist: [
      'Entender diferença entre conta, senha, MFA, grupo e permissão.',
      'Reconhecer pedido de acesso incompleto ou inseguro.',
      'Orientar troca de senha sem solicitar senha do usuário.',
      'Registrar autorização antes de alterar acesso.',
      'Aplicar cuidados básicos contra phishing e vazamento.',
    ],
    practice:
      'Escreva um fluxo de atendimento para “usuário não consegue acessar e-mail”, incluindo o que pedir e quando escalar.',
    evidencePrompt: 'Anexe certificado de segurança da informação ou fluxo de acesso criado por você.',
    materials: [materials.segurancaInfo, materials.outlook, materials.ciscoSupport],
  },
  {
    id: 'ti-documentacao-base',
    phase: 'autonomia',
    title: 'Documentação técnica simples',
    shortTitle: 'Documentação',
    summary: 'Aprenda a escrever passo a passo, registrar solução e criar base de conhecimento para problemas repetidos.',
    whyItMatters:
      'TI melhora quando problemas resolvidos viram documentação. Isso evita depender sempre da mesma pessoa.',
    learnChecklist: [
      'Escrever título claro do procedimento.',
      'Registrar pré-requisitos, passos e resultado esperado.',
      'Usar prints ou exemplos quando necessário.',
      'Separar solução temporária de solução definitiva.',
      'Atualizar documento quando o processo mudar.',
    ],
    practice:
      'Crie um tutorial simples: “como abrir chamado de TI” ou “como conectar impressora padrão”.',
    evidencePrompt: 'Anexe um tutorial em PDF, print ou documento.',
    materials: [materials.comunicacaoEscrita, materials.gestaoDocumental, materials.ibmItSupport],
  },
  {
    id: 'ti-diagnostico-escalonamento',
    phase: 'autonomia',
    title: 'Diagnóstico inicial e escalonamento',
    shortTitle: 'Diagnóstico',
    summary: 'Aprenda a fazer testes básicos, registrar evidências e encaminhar para o nível correto.',
    whyItMatters:
      'O assistente de TI não precisa resolver tudo. Ele precisa testar com método e escalar com informação suficiente.',
    learnChecklist: [
      'Reproduzir o erro quando possível.',
      'Testar hipóteses simples antes de escalar.',
      'Registrar ambiente, usuário, horário e evidência.',
      'Indicar impacto: um usuário, equipe ou sistema inteiro.',
      'Encaminhar com resumo do que já foi feito.',
    ],
    practice:
      'Monte um relatório curto de escalonamento para um problema de acesso, incluindo evidências e testes já feitos.',
    evidencePrompt: 'Anexe relatório de escalonamento ou certificado de suporte/redes.',
    materials: [materials.ciscoSupport, materials.ciscoNetwork, materials.segurancaInfo],
  },
];

const administrativoIcon = require('../../assets/images/tracks/administrativo.png');
const rhIcon = require('../../assets/images/tracks/rh.png');
const logisticaIcon = require('../../assets/images/tracks/logistica.png');
const facilitiesIcon = require('../../assets/images/tracks/facilities.png');
const tiIcon = require('../../assets/images/tracks/ti.png');

export const tracks: Track[] = [
  {
    id: 'administrativo',
    title: 'Administrativo',
    targetRole: 'Assistente Administrativo',
    area: 'Rotinas administrativas',
    description: 'Organização, atendimento, documentos, e-mails, controles e apoio às áreas internas.',
    audience: 'Para aprendizes que atuam com escritório, documentos, atendimento interno e planilhas.',
    icon: administrativoIcon,
    modules: adm,
  },
  {
    id: 'rh',
    title: 'Recursos Humanos',
    targetRole: 'Assistente de RH',
    area: 'Pessoas e processos',
    description: 'Comunicação com pessoas, sigilo, triagem, integração, documentos e controles de RH.',
    audience: 'Para aprendizes que apoiam candidatos, colaboradores, integração, documentos e planilhas de pessoas.',
    icon: rhIcon,
    modules: rh,
  },
  {
    id: 'logistica',
    title: 'Logística',
    targetRole: 'Assistente de Logística',
    area: 'Estoque e operação',
    description: 'Recebimento, conferência, inventário, expedição, transporte e acuracidade operacional.',
    audience: 'Para aprendizes que atuam com estoque, almoxarifado, materiais, recebimento e expedição.',
    icon: logisticaIcon,
    modules: logistica,
  },
  {
    id: 'facilities',
    title: 'Facilities',
    targetRole: 'Assistente de Facilities',
    area: 'Ambiente, serviços e fornecedores',
    description: 'Solicitações internas, serviços prediais, fornecedores, recursos, viagens e indicadores.',
    audience: 'Para aprendizes que apoiam a operação do ambiente de trabalho e serviços internos.',
    icon: facilitiesIcon,
    modules: facilities,
  },
  {
    id: 'ti',
    title: 'TI / Suporte',
    targetRole: 'Assistente de TI',
    area: 'Suporte e tecnologia',
    description: 'Atendimento, chamados, diagnóstico básico, Microsoft 365, redes e documentação técnica.',
    audience: 'Para aprendizes que querem atuar com suporte técnico, usuários, equipamentos e chamados.',
    icon: tiIcon,
    modules: ti,
  },
];

export function getTrackById(id?: string | null) {
  if (!id) return undefined;
  return tracks.find((track) => track.id === id);
}

export function getModuleById(moduleId?: string | null) {
  if (!moduleId) return undefined;

  for (const track of tracks) {
    const module = track.modules.find((item) => item.id === moduleId);
    if (module) {
      return { track, module };
    }
  }

  return undefined;
}

export function getPhaseModules(track: Track, phase: TrackPhase) {
  return track.modules.filter((module) => module.phase === phase);
}
