# IEtlPlainIndex.PlainInputCount

IEtlPlainIndex.PlainInputCount
-


# IEtlPlainIndex.PlainInputCount


## Синтаксис


PlainInputCount: Integer;


## Описание


Свойство PlainInputCount возвращает
 количество источников данных для полей индекса.


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

	    i := Index.PlainInputCount;

	End Sub UserProc;


После выполнения пример в переменной «i» будет содержаться количество
 источников данных для полей индекса. Тип объекта задачи ETL - Соединение.
 Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainIndex](IEtlPlainIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
