# IEtlPlainIndex.PlainInput

IEtlPlainIndex.PlainInput
-


# IEtlPlainIndex.PlainInput


## Синтаксис


PlainInput(Input: Integer): [IEtlPlainInput](../IEtlPlainInput/IEtlPlainInput.htm);


## Параметры


Input. Индекс источника данных.


## Описание


Свойство PlainInput возвращает
 объект, содержащий источник данных индекс которого передается посредством
 параметра Input.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Index: IEtlPlainIndex;

	    Input: IEtlPlainInput;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Index := Join.Index;

	    Input := Index.PlainInput(0);

	    s := Input.Id;

	End Sub UserProc;


После выполнения примера в переменной «Input» будет содержаться первый
 источник данных. Тип объекта задачи ETL - Соединение. Объект репозитория
 имеет идентификатор ETL.


См. также:


[IEtlPlainIndex](IEtlPlainIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
