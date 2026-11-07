# tecinfo-app
tecinfo-app feito por SamuelJHit

User Story
Como aluno desenvolvedor, quero criar um componente reativo em React com estado local, para que eu possa entender a sintaxe JSX, a manipulação de eventos e a renderização condicional.

Descrição e Requisitos Técnicos
Crie um componente de perfil interativo que gerencie a quantidade de curtidas recebidas usando o hook useState.
Projeto: Inicializado com npm create vite@latest (template react-ts).
JSX: Uso correto de tags auto-fecháveis, Fragment (<></>) e o atributo className.
Estado: Hook useState(0) para controlar o número de curtidas.
Eventos: Evento onClick no botão para incrementar as curtidas.
Renderização Condicional: Exibir a mensagem em destaque "TECINFO 2026 🔥" apenas quando curtidas forem estritamente maiores que 5 (curtidas > 5).

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
DoD: Código publicado na branch feat/fcs-props-typescript com o commit: feat: adiciona componente com props tipadas em typescript.

