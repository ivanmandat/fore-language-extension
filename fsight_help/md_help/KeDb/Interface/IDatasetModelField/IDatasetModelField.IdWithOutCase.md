# IDatasetModelField.IdWithOutCase

IDatasetModelField.IdWithOutCase
-


# IDatasetModelField.IdWithOutCase


## Синтаксис


IdWithOutCase: String;


## Описание


Свойство IdWithOutCase возвращает
 идентификатор поля источника с учетом регистра.


## Комментарии


Свойство актуально, если производится работа с репозиторием, который
 создан на базе регистрозависимой СУБД. В текущей реализации регистрозависимость
 будет учитывается при работе с СУБД PostgreSQL, если задан соответствующий
 [параметр
 подключения](KeSom.chm::/Interface/IPrimaryPostgresSPLD/IPrimaryPostgresSPLD.CaseSensitive.htm).


См. также:


[IDatasetModelField](IDatasetModelField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
