# IEtlPlainIndex.FieldCount

IEtlPlainIndex.FieldCount
-


# IEtlPlainIndex.FieldCount


## Синтаксис


FieldCount: Integer;


## Описание


Свойство FieldCount возвращает
 количество полей индекса.


## Комментарии


Под полем индекса понимается столбец записей в которых содержатся идентификаторы
 полей источников данных по которому будет производиться индексирование.
 В каждом поле индекса может содержатся идентификатор одного поля источника
 данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Index: IEtlPlainIndex;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Index := Join.Index;

	    i := Index.FieldCount;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 полей индекса. Тип объекта задачи ETL - Соединение. Объект репозитория
 имеет идентификатор ETL.


См. также:


[IEtlPlainIndex](IEtlPlainIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
