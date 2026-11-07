# tecinfo-app
tecinfo-app feito por SamuelJHit
Especificação de Tickets: Front-End React & TypeScript
Disciplina: Front-End (FFE) | Turma: TecInfo FCS 2026
Professor: Winnícius de Moura Alves 
 Atividade: Avaliação Prática Integrada (Tickets 01 a 03)
Entrega: Google Classroom / email link repositório github

1. Diretrizes Gerais
Esta atividade simula um ambiente real de desenvolvimento de software. Você atuará como desenvolvedor(a) Front-End junior executando três tickets de backlog estruturados com User Stories, Requisitos Técnicos, Critérios de Aceite e Definition of Done (DoD).

1.1 Ambiente e Tecnologias
Framework & Ferramental: React (v18+) criado via ViteJS com template TypeScript (react-ts).
Linguagem: TypeScript (com tipagem estática explícita usando interfaces).
Controle de Versão: Git e GitHub.
1.2 Padrão de Versionamento (Git Flow)
Crie uma branch dedicada a partir da main para cada ticket e utilize commits semânticos:
Ticket 01: feat/fcs-primeiro-componente-react
Ticket 02: feat/fcs-props-typescript
Ticket 03: feat/fcs-desafio-integrado-03

2. Ticket 01 — Primeiro Componente e Reatividade Local
User Story
Como aluno desenvolvedor, quero criar um componente reativo em React com estado local, para que eu possa entender a sintaxe JSX, a manipulação de eventos e a renderização condicional.

Descrição e Requisitos Técnicos
Crie um componente de perfil interativo que gerencie a quantidade de curtidas recebidas usando o hook useState.
Projeto: Inicializado com npm create vite@latest (template react-ts).
JSX: Uso correto de tags auto-fecháveis, Fragment (<></>) e o atributo className.
Estado: Hook useState(0) para controlar o número de curtidas.
Eventos: Evento onClick no botão para incrementar as curtidas.
Renderização Condicional: Exibir a mensagem em destaque "TECINFO 2026 🔥" apenas quando curtidas forem estritamente maiores que 5 (curtidas > 5).

Critérios de Aceite & DoD
O projeto executa sem erros (npm run dev).
O contador atualiza em tempo real a cada clique.
A mensagem destaque aparece imediatamente no 6º clique.
DoD: Código publicado na branch feat/fcs-primeiro-componente-react com o commit: feat: implementa primeiro componente react com useState e condicional. ✅

3. Ticket 02 — Componentização e Props Tipadas com TypeScript
User Story
Como desenvolvedor, quero dividir a interface em componentes pai e filho e transferir dados usando props tipadas, para que a aplicação seja modular, reutilizável e segura.

Descrição e Requisitos Técnicos
Organize a aplicação separando responsabilidades entre componentes. O componente pai gerencia o estado e passa dados e callbacks aos componentes filhos.
Arquitetura: Componentes filhos localizados na pasta src/components/.
Tipagem Estática: Uso obrigatório de interface para definir a estrutura das props (tipos: string, number, boolean, arrays e funções callback). É proibido usar o tipo any.
Imutabilidade: Tratar props nos componentes filhos como somente leitura (read-only).
Callbacks: Passar funções de manipulação de evento do pai para o filho via props.

Critérios de Aceite & DoD
Nenhum parâmetro de prop utiliza o tipo any.
Componente filho exibe corretamente as informações enviadas pelo pai.
Chamar a função passada via prop altera o estado mantido no pai.
DoD: Código publicado na branch feat/fcs-props-typescript com o commit: feat: adiciona componente com props tipadas em typescript. ✅
