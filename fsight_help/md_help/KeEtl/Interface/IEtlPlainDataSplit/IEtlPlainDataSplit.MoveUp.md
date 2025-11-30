# IEtlPlainDataSplit.MoveUp

IEtlPlainDataSplit.MoveUp
-


# IEtlPlainDataSplit.MoveUp


## Синтаксис


MoveUp(N: Integer);


## Параметры


N. Индекс
 условия.


## Описание


Метод MoveUp осуществляет перемещение
 условия на одну позицию вверх.


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

	    Object.MoveUp(2);

	    MBObject.Save;

	End Sub UserProc;


После выполнения примера произойдет перемещение третьего условия объекта
 «Разделение» на вторую позицию.


См. также:


[IEtlPlainDataSplit](IEtlPlainDataSplit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
