# IEtlPlainDataSplit.Delete

IEtlPlainDataSplit.Delete
-


# IEtlPlainDataSplit.Delete


## Синтаксис


Delete(N: Integer);


## Параметры


N. Индекс
 условия.


## Описание


Метод Delete осуществляет удаление
 условия, отражающее привязку входных полей с выходными.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MBObject: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Object: IEtlPlainDataSplit;

	Begin

	    MB := MetabaseClass.Active;

	    MBObject := MB.ItemById("ETL").Edit;

	    EtlTask := MBObject As IEtlTask;

	    Object := EtlTask.Item(0) As IEtlPlainDataSplit;

	    Object.Delete(0);

	    MBObject.Save;

	End Sub UserProc;


После выполнения примера будет удалено первое условие объекта «Разделение».


См. также:


[IEtlPlainDataSplit](IEtlPlainDataSplit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
