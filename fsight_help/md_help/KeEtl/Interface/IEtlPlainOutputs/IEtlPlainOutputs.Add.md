# IEtlPlainOutputs.Add

IEtlPlainOutputs.Add
-


# IEtlPlainOutputs.Add


## Синтаксис


Add;


## Описание


Метод Add добавляет выход объекта
 задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataSplit;

	    Outputs: IEtlPlainOutputs;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataSplit;

	    Outputs := Join.PlainOutputs;

	    Outputs.Add;

	    Object.Save;

	End Sub UserProc;


После выполнения примера будет создан один выход у первого объекта задачи
 ETL. Тип объекта задачи ETL - Разделение. Объект репозитория имеет идентификатор
 ETL.


См. также:


[IEtlPlainOutputs](IEtlPlainOutputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
