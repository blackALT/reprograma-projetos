# Banco de Dados

  - Entidades e Atributos
  - SGDBs
  - SQL e NoSQL
  - MongoDB

Nós estamos rodeados de dados em toda parte. Um dado é um valor atribuído a algo ou alguma coisa. O dado isoladamente não possui um significado relevante e não nos leva a nenhuma compreensão pois, a princípio, não representa carrega um sentido. A partir dai entra o conceito de informação, que nada mais é do que a ordenação e organização dos dados visando transmitir significado e compreensão dentro de um determinado contexto. Atualmente o campo que estuda os dados chama-se ciencia de dados (Data Science) e que permite a extração de informações valiosas a partir dos dados contidos em uma corporação ou empresa.

> Mas onde esses dados ficam armazenados? e como podem ser manipulados?

### O que é banco de dados?

E aqui que apresentamos o conceito de Banco de Dados. E sim, ele é o que parece. Um banco (local) onde os dados podem ser armazenados. Segundo Korth, um banco de dados “é uma coleção de dados inter-relacionados, representando informações sobre um domínio específico”, ou seja, sempre que for possível agrupar informações que se relacionam e tratam de um mesmo assunto, posso dizer que tenho um banco de dados ¹.
Uma lista telefônica, um catálogo de CDs ou um sistema de controle de RH de uma empresa são exemplos de bancos de dados.

### Entidades e Atributos

Descendo no detalhe, dentro do conceito de banco de dados temos o conceito de entidade e atributo. Uma entidade é um objeto que é distinguível dos outros objetos, como dados agrupados sobre pessoas, por exemplo. Uma entidade é representada por um conjunto de atributos. No exemplo, a entidade Pessoa pode ter os atributos nome, cpf e endereço enquanto uma entidade Empresa pode ter os atributos razão social, cnpj e sócios, por exemplo. 

### SGDBs

Um sistema de gerenciamento de banco de dados (SGBD) é um software que possui recursos capazes de manipular as informações contidas no banco de dados permitindo a interação com o usuário. Oracle, SQL Server, DB2, PostgreSQL, MySQL são exemplos de SGBD.

### SQL e NoSQL

SQL é a sigla em inglês para “Linguagem de Consulta Estruturada” e trata-se de uma linguagem de consulta a banco de dados relacionais. Um banco de dados relacional é dito desta forma pois são baseados no fato de que todos seus dados possuem uma relação estruturada entre si e são armazenados em tabelas ². 

Já o NoSQL (Not Only SQL) é o termo utilizado para banco de dados não relacionais onde, geralmente, o SQL não é utilizado como linguagem de consulta. O NoSQL foi criado sob a premissa de ter uma melhor performance e escalabilidade para suprir necessidades onde os bancos relacionais não são eficazes. Bancos de dados NoSQL podem armazenar dados sob a forma de colunas, documentos, grafos ou Chave-valor.

### MongoDB

O mais popular banco de dados NoSQL é o MongoDB com mais de sete milhões de downloads e centenas de milhares de implantações. O MongoDB é open source, orientado a documentos, multiplataforma e escrito na linguagem C++, sendo de fácil desenvolvimento e manejo de dados sendo muito utilizado em aplicações de redes sociais web e móvel.
 
No mongoDB os dados são armazenados em documentos e os documentos por sua vez armazenados em collections. O conceito de collection é similar ao conceito de tabelas em bancos de dados relacionais ³.
```
├── Banco de Dados
│   ├── Collections
│       ├── Documeto
```

#### Principais comandos no MongoDB

* Criar um banco de dados

```sh
$ use databaseName
```

* Exibir bancos de dados criados
```sh
$ show databases
```
* Excluir um banco de dados
```sh
db.dropDatabase databaseName
```
* Criar uma collection
```sh
$ db.createCollection("collectionName")
```
* Exibir collections criadas
```sh
show collections
```
* Popular collection inseririndo um valor por vez use o insertOne(). Para vários valores use o insertMany().
```sh
$ db.collectionCurso.insertMany([{"key":"value","key":"value"},{"key":"value","key":"value"}])
```
* Selecionar todos os registros de uma collection. O Find pode ser usado para criar buscas por chaves específicas dentro de uma collection. Com o findOne() pode-se buscar por apenas um unico registro.

```sh
$ db.collectionCurso.find()
$ db.collectionCurso.find({"key":"value"})
```
* Com o auxílio do pretty() a saída dos comandos pode ser obtida de forma mais "elegante".

```sh
$ db.collectionCurso.find().pretty()
```
* Para criar uma busca com múltiplus parâmetros basta incluí-los dentro do find()
* Sintaxe Operador AND: "valor 1" E "valor 2". Basta separar por vírgulas.
```
$ db.collectionCurso.find({"key":"value"},{"key":"value"}).pretty()
```
* Sintaxe Operador OR: "valor 1" OU "valor 2". Além de separar por vírgulas, deve-se incluir o parâmetro $or na busca.

```
db.collectionCurso.find({$or:[{"key":"value"}, {"key":"value"}]).pretty()
```

* Também é possível manipular a quantidade de resultados na saída de uma consulta usando o limit().
```
db.collectionCurso.find({"key":"value"}).limit(3).pretty()
```
* Por fim, para se retornar a quantidade de registros que existem no banco a partir de um parâmetro específico basta usar o count().
```
db.collectionCurso.find({"key":"value"}).count()
```

#### Referências

¹ https://www.devmedia.com.br/conceitos-fundamentais-de-banco-de-dados/1649
² https://blog.geekhunter.com.br/sql-nosql-newsql-qual-banco-de-dados-usar/
³ https://www.mongodb.com/