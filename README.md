# O Patusco
> esse desafio tecnico é de foi um processo seletivo de uma empresa de Portugal , ele foi adpatado para tecnologias diferentes mas o desafio ainda é o mesmo "Patusco"
## Desafio

Queremos ajudar na clínica veterinária "O Patusco". 

A clínica sofre de problemas com filas de espera longas pelos clientes. 

Entram na clínica sem marcação e não conseguimos ter planeamento com médicos a mais e médicos a menos, dependendo das entradas.

Precisamos de um website em Laravel 10/11 e VueJS 3 para:
- O utente poder agendar marcações
  - Nome da pessoa
  - Email
  - Nome do animal
  - Tipo de animal (cão, gato, etc)
  - Idade
  - Sintomas
  - Data (Manhã/Tarde)
- O recepionista da clínica poder
  - ver as marcações por datas e por tipo de animal
  - atribuir as marcações a médicos
  - criar, editar e apagar todas as marcações
- O médico poder
  - Ver as marcações que lhe estão atribuídas, por dias e por tipo de animal
  - Poder editar somente as marcações que lhe estão atribuídas
  - Não pode apagar nenhuma marcação

- Sugerimos usares no Front-End (Reactjs).
- Se quiseres separar frontend de backend.(server-side) (client-side)
- No backend, sugerimos separar bem as responsabilidades de cada componente.
- Bonus points: testes automatizados

### Planejamento do Projeto 
 vou desenvolver o projeto em 2 serviços sendo ele uma api e uma interface.

 O projeto será executado através da logica de perfis, onde cada usuario terá uma role que representará oque ele pode ver e as ações que pode tomar 
 por facilidade vou adotar as roles pre-definidas de forma que possamos prever previamente oq cada role pode fazer.

 


 
 
