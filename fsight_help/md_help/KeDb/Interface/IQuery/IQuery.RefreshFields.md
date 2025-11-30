# IQuery.RefreshFields

IQuery.RefreshFields
-


# IQuery.RefreshFields


## Синтаксис


RefreshFields : (Connection: [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm));


## Параметры


Connection. Параметр определяет соединение, которое будет использоваться при подключении к репозиторию. Может быть указано уже открытое соединение с базой данных. Если параметр имеет значение Null, соединение производится через объект базы данных запроса (указывается в мастере редактирования запроса в поле «База данных»).


## Описание


Метод RefreshFields обновляет список полей запроса по информации из базы данных.


См. также:


[IQuery](IQuery.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
