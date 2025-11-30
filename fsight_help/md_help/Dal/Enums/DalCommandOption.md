# DalCommandOption

DalCommandOption
-


# DalCommandOption


## Описание


Перечисление DalCommandOption
 содержит параметры выполнения SQL-запроса.


Используется следующими свойствами и методами:


	- [ISQLComponents.DalCommandOption](KeDb.chm::/Interface/ISQLComponents/ISQLComponents.DalCommandOption.htm);


	- [ISecurityConnection.CreateCommandO](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.CreateCommandO.htm);


	- [IDalConnection.CreateCommandO](../Interface/IDalConnection/IDalConnection.CreateCommandO.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Используются
		 параметры, заданные по умолчанию.


		 1
		 NoLog. Запросы не выводятся
		 в отладочную информацию.


		 2
		 ExceptionIncludeSQL.
		 Текст SQL-запроса включается в текст исключительной ситуации.


		 4
		 WithoutException. Не
		 генерировать исключительную ситуацию при ошибке выполнения SQL-запроса.


		 8
		 CaseSensitive. Учитывать
		 регистр символов в SQL-запросе. Актуально при работе с регистрозависимыми
		 СУБД.


		 16
		 InsertIdentity. Использовать
		 значения источника для поля Identity.


		 32
		 FastInsert. По возможности
		 использовать команду FastInsert в обычном соединении.


		 64
		 HintOptimizeFetchAll.
		 Оптимизировать выборку всех данных из большого курсора, если это
		 возможно.


		 128
		 NoCursorInQuery. Не
		 использовать курсоры в SQL-запросах.


## Комментарии


Значение InsertIdentity используется при работе с СУБД Microsoft SQL
 Server.


Значения FastInsert, HintOptimizeFetchAll используются при работе с
 СУБД PostgreSQL.


Отключение использования курсоров в режиме NoCursorInQuery может повлиять
 на скорость выполнения SQL-запросов, актуально, если извлекаются небольшие
 объемы данных.


См. также:


[Перечисления сборки Dal](Dal_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
