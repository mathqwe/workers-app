import type { Track } from '@/types/learning';

export const tracks: Track[] = [
  {
    id: 'facilities',
    title: 'Facilities',
    targetRole: 'Assistente de Facilities',
    area: 'Facilities / Administrativo Operacional',
    description:
      'Trilha para aprendizes que querem apoiar controles de infraestrutura, viagens, alojamentos, fornecedores e indicadores.',
    modules: [
      {
        id: 'facilities-excel',
        title: 'Excel aplicado a controles',
        shortTitle: 'Excel',
        description:
          'Aprenda a montar controles simples, organizar bases, usar filtros, tabelas e fórmulas essenciais para rotinas administrativas.',
        whyItMatters:
          'Em Facilities, muitos processos dependem de planilhas: viagens, alojamentos, fornecedores, contratos, custos e acompanhamentos.',
        estimatedTime: '3 a 5 horas',
        skills: ['Tabelas', 'Filtros', 'PROCV/PROCX', 'Tabela dinâmica', 'Validação de dados'],
        materials: [
          {
            id: 'mat-excel-1',
            title: 'Buscar aulas gratuitas de Excel intermediário',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=excel+intermediario+tabela+dinamica+procv',
          },
          {
            id: 'mat-excel-2',
            title: 'Cursos gratuitos de produtividade e Excel',
            provider: 'Fundação Bradesco',
            type: 'course',
            url: 'https://www.ev.org.br/',
          },
        ],
      },
      {
        id: 'facilities-outlook',
        title: 'Outlook e comunicação profissional',
        shortTitle: 'Outlook',
        description:
          'Aprenda a escrever e-mails claros, organizar caixa de entrada, acompanhar retornos e registrar decisões importantes.',
        whyItMatters:
          'A comunicação com obras, gestores, fornecedores e áreas internas precisa ser objetiva, rastreável e profissional.',
        estimatedTime: '2 a 3 horas',
        skills: ['E-mail formal', 'Assunto claro', 'Follow-up', 'Agenda', 'Organização da caixa'],
        materials: [
          {
            id: 'mat-outlook-1',
            title: 'Buscar aulas de Outlook profissional',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=outlook+corporativo+agenda+reuni%C3%B5es+regras',
          },
          {
            id: 'mat-outlook-2',
            title: 'Materiais de apoio Microsoft 365',
            provider: 'Microsoft Learn',
            type: 'article',
            url: 'https://learn.microsoft.com/pt-br/training/',
          },
        ],
      },
      {
        id: 'facilities-organizacao',
        title: 'Organização de demandas e prazos',
        shortTitle: 'Organização',
        description:
          'Aprenda a priorizar atividades, controlar pendências, registrar solicitações e acompanhar prazos sem depender da memória.',
        whyItMatters:
          'O aprendiz que controla bem prazos e pendências passa mais confiança para a equipe e assume tarefas com mais autonomia.',
        estimatedTime: '2 horas',
        skills: ['Priorização', 'Checklist', 'Kanban', 'Gestão do tempo', 'Registro de pendências'],
        materials: [
          {
            id: 'mat-org-1',
            title: 'Buscar técnicas de organização no trabalho',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=organiza%C3%A7%C3%A3o+de+tarefas+kanban+gest%C3%A3o+do+tempo',
          },
        ],
      },
      {
        id: 'facilities-erp',
        title: 'Noções de ERP e sistemas internos',
        shortTitle: 'ERP',
        description:
          'Entenda a lógica de sistemas corporativos, cadastros, solicitações, aprovações, lançamentos e rastreabilidade de processos.',
        whyItMatters:
          'Mesmo sem dominar um ERP específico, entender o fluxo do processo ajuda o aprendiz a errar menos e compreender a operação.',
        estimatedTime: '2 a 4 horas',
        skills: ['Fluxo de aprovação', 'Solicitação de compra', 'Cadastro', 'Centro de custo', 'Rastreabilidade'],
        materials: [
          {
            id: 'mat-erp-1',
            title: 'Buscar introdução a ERP, SAP e TOTVS',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=o+que+%C3%A9+erp+sap+totvs+processos+administrativos',
          },
        ],
      },
      {
        id: 'facilities-powerbi',
        title: 'Power BI e indicadores',
        shortTitle: 'Power BI',
        description:
          'Aprenda a transformar dados de planilhas em indicadores visuais simples para acompanhar custos, volumes e desempenho.',
        whyItMatters:
          'Indicadores ajudam a área a sair do controle manual e mostrar resultados para gestores com mais clareza.',
        estimatedTime: '4 a 6 horas',
        skills: ['Dashboard', 'Indicadores', 'Gráficos', 'Power Query', 'Leitura de dados'],
        materials: [
          {
            id: 'mat-bi-1',
            title: 'Buscar Power BI para iniciantes',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=power+bi+para+iniciantes+dashboard+excel',
          },
          {
            id: 'mat-bi-2',
            title: 'Treinamentos Microsoft para Power BI',
            provider: 'Microsoft Learn',
            type: 'course',
            url: 'https://learn.microsoft.com/pt-br/training/powerplatform/power-bi',
          },
        ],
      },
      {
        id: 'facilities-fornecedores',
        title: 'Gestão básica de fornecedores',
        shortTitle: 'Fornecedores',
        description:
          'Entenda noções iniciais sobre negociação, contratação, acompanhamento de serviços e avaliação de fornecedores.',
        whyItMatters:
          'Facilities depende de fornecedores para serviços, viagens, alojamentos, manutenção e suporte às obras.',
        estimatedTime: '2 a 3 horas',
        skills: ['Negociação', 'Contrato', 'SLA', 'Orçamento', 'Avaliação de fornecedor'],
        materials: [
          {
            id: 'mat-forn-1',
            title: 'Buscar noções de gestão de fornecedores',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=gest%C3%A3o+de+fornecedores+negocia%C3%A7%C3%A3o+contratos+sla',
          },
        ],
      },
    ],
  },
  {
    id: 'administrativo',
    title: 'Administrativo',
    targetRole: 'Assistente Administrativo',
    area: 'Administrativo / RH / Financeiro',
    description:
      'Trilha para aprendizes que querem evoluir em rotinas administrativas, documentos, atendimento interno e controles.',
    modules: [
      {
        id: 'adm-excel',
        title: 'Excel intermediário para escritório',
        shortTitle: 'Excel',
        description: 'Base para organizar informações, gerar controles e acompanhar demandas administrativas.',
        whyItMatters: 'Excel aparece em praticamente toda rotina administrativa.',
        estimatedTime: '3 a 5 horas',
        skills: ['Fórmulas', 'Filtros', 'Tabela dinâmica'],
        materials: [
          {
            id: 'mat-adm-excel',
            title: 'Buscar Excel administrativo',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=excel+para+assistente+administrativo',
          },
        ],
      },
      {
        id: 'adm-redacao',
        title: 'Redação empresarial',
        shortTitle: 'Redação',
        description: 'Como escrever e-mails, comunicados e registros claros no ambiente corporativo.',
        whyItMatters: 'Boa comunicação reduz retrabalho e aumenta a confiança da equipe.',
        estimatedTime: '2 horas',
        skills: ['E-mail', 'Clareza', 'Objetividade'],
        materials: [
          {
            id: 'mat-adm-redacao',
            title: 'Buscar redação empresarial',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=redacao+empresarial+email+formal',
          },
        ],
      },
    ],
  },
  {
    id: 'logistica',
    title: 'Logística',
    targetRole: 'Assistente de Logística',
    area: 'Logística / Almoxarifado',
    description:
      'Trilha para aprendizes que atuam com estoque, inventário, recebimento, expedição e controles operacionais.',
    modules: [
      {
        id: 'log-estoque',
        title: 'Controle de estoque',
        shortTitle: 'Estoque',
        description: 'Conceitos básicos de entrada, saída, inventário e organização de materiais.',
        whyItMatters: 'Controle de estoque reduz perdas e melhora a operação.',
        estimatedTime: '3 horas',
        skills: ['Inventário', 'Entrada e saída', 'Organização'],
        materials: [
          {
            id: 'mat-log-estoque',
            title: 'Buscar controle de estoque para iniciantes',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=controle+de+estoque+para+iniciantes',
          },
        ],
      },
      {
        id: 'log-excel',
        title: 'Excel para inventário',
        shortTitle: 'Excel',
        description: 'Como usar planilhas para acompanhar itens, quantidades, datas e responsáveis.',
        whyItMatters: 'Muitas empresas ainda controlam parte do estoque em planilhas.',
        estimatedTime: '3 horas',
        skills: ['Tabela', 'Filtro', 'Conferência'],
        materials: [
          {
            id: 'mat-log-excel',
            title: 'Buscar Excel para controle de estoque',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=excel+controle+de+estoque+invent%C3%A1rio',
          },
        ],
      },
    ],
  },
  {
    id: 'ti',
    title: 'TI / Suporte',
    targetRole: 'Assistente de TI',
    area: 'Tecnologia da Informação',
    description:
      'Trilha para aprendizes que querem evoluir em suporte técnico, documentação, chamados e fundamentos de tecnologia.',
    modules: [
      {
        id: 'ti-chamados',
        title: 'Atendimento e chamados',
        shortTitle: 'Chamados',
        description: 'Como registrar, classificar, atender e documentar solicitações técnicas.',
        whyItMatters: 'Suporte de TI depende de organização, comunicação e registro técnico.',
        estimatedTime: '2 a 3 horas',
        skills: ['Service Desk', 'Registro', 'Prioridade'],
        materials: [
          {
            id: 'mat-ti-chamados',
            title: 'Buscar service desk para iniciantes',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=service+desk+para+iniciantes+chamados+ti',
          },
        ],
      },
      {
        id: 'ti-github',
        title: 'Git e GitHub básico',
        shortTitle: 'GitHub',
        description: 'Noções para versionar projetos, registrar alterações e colaborar em código.',
        whyItMatters: 'Mesmo em suporte, documentar e versionar scripts ou arquivos é um diferencial.',
        estimatedTime: '3 horas',
        skills: ['Git', 'Commit', 'Repositório'],
        materials: [
          {
            id: 'mat-ti-github',
            title: 'Buscar Git e GitHub para iniciantes',
            provider: 'YouTube',
            type: 'video',
            url: 'https://www.youtube.com/results?search_query=git+github+para+iniciantes',
          },
        ],
      },
    ],
  },
];

export function getTrackById(id?: string) {
  return tracks.find((track) => track.id === id);
}

export function getModuleById(moduleId?: string) {
  for (const track of tracks) {
    const module = track.modules.find((item) => item.id === moduleId);
    if (module) {
      return { track, module };
    }
  }

  return undefined;
}
