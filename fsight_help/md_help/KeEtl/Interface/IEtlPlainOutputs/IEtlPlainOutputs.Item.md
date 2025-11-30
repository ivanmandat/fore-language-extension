# IEtlPlainOutputs.Item

IEtlPlainOutputs.Item
-


# IEtlPlainOutputs.Item


## Синтаксис


Item(Index: Integer): [IEtlPlainOutput](../IEtlPlainOutput/IEtlPlainOutput.htm);


## Параметры


Index.
 Индекс выхода.


## Описание


Свойство Item возвращает объект,
 содержащий в себе связь между исходящим и текущим объектом.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataSplit;

	    Outputs: IEtlPlainOutputs;

	    Output: IEtlPlainOutput;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataSplit;

	    Outputs := Join.PlainOutputs;

	    Output := Outputs.Item(0);

	End Sub UserProc;


После выполнения примера в переменной «Output» будет содержаться первый
 вход первого объекта задачи ETL. Тип объекта задачи ETL - Разделение.
 Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainOutputs](IEtlPlainOutputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
