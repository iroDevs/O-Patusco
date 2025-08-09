src/
├── core/                    # Camada de domínio (entidades e regras de negócio)
│   ├── entities/            # Entidades de domínio
│   ├── interfaces/          # Interfaces/contratos
│   ├── exceptions/          # Exceções customizadas
│   └── utils/               # Utilitários de domínio
│
├── application/            # Camada de aplicação (casos de uso)
│   ├── use-cases/           # Casos de uso da aplicação
│   ├── dtos/                # Objetos de transferência de dados
│   └── mappers/             # Mapeadores entre camadas
│
├── infrastructure/          # Camada de infraestrutura
│   ├── config/              # Configurações (inclui seu env.ts)
│   ├── database/            # Tudo relacionado a banco de dados
│   │   ├── migrations/      # Migrações do Prisma
│   │   ├── repositories/    # Implementações concretas dos repositórios
│   │   └── prisma/          # Schema e client do Prisma
│   ├── http/                # Configurações HTTP
│   │   ├── controllers/     # Controladores
│   │   ├── middlewares/     # Middlewares
│   │   ├── routes/          # Definição de rotas
│   │   └── errors/          # Tratamento de erros HTTP
│   └── providers/           # Provedores externos (email, storage, etc)
│
├── presentation/            # Camada de apresentação (opcional, pode ser parte do http)
│   ├── views/               # Views (se necessário)
│   └── serializers/         # Serializadores de resposta
│
├── shared/                  # Código compartilhado entre camadas
│   ├── types/               # Tipos compartilhados
│   └── utils/               # Utilitários gerais
│
├── app.ts                   # Configuração principal da aplicação
└── server.ts                # Ponto de entrada do servidor