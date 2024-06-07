# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra pagina pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan de credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

-[ x ] O organizador deve poder cadastrar um novo evento;
-[ x ] O organizador deve poder visualizar dados de um evento;
-[ x ] O organizador deve poder visualizar a lista de participantes;
-[ x ] O participante debe poder se inscrever em um evento;
-[ x ] O participanye deve poder visualizar seu crachá de inscrição;
-[ x ] O participante deve poder realizar check-in no evento;

### Regras de negócio

-[ x ] O participante só pode se inscrever en um evento uma unica vez;
-[ x ] O participante só pode se inscrever em eventos com vagas disponiveis;
-[ x ] O paricipante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

-[ x ] O check-in no evento será realizado através de um QRcode;