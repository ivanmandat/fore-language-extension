# IEtlPlainOutputs.MaxObjectCount

IEtlPlainOutputs.MaxObjectCount
-


# IEtlPlainOutputs.MaxObjectCount


## Синтаксис


MaxObjectCount: Integer;


## Описание


Свойство MaxObjectCount возвращает
 максимальное количество выходов объекта задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataSplit;

	    Outputs: IEtlPlainOutputs;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataSplit;

	    Outputs := Join.PlainOutputs;

	    i := Outputs.MaxObjectCount;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться максимальное
 количество выходов первого объекта задачи ETL. Тип объекта задачи ETL
 - Разделение. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainOutputs](IEtlPlainOutputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
