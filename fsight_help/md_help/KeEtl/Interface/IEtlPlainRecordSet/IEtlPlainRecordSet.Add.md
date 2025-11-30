# IEtlPlainRecordSet.Add

IEtlPlainRecordSet.Add
-


# IEtlPlainRecordSet.Add


## Синтаксис


Add: Integer;


## Описание


Метод Add добавляет запись в
 набор данных.


## Пример


	Sub UserSub(Input: IEtlPlainRecordSets; Output: IEtlPlainRecordSets);

	Var

	    RecordSetIn, RecordSetOut: IEtlPlainRecordSet;

	    i: Integer;

	Begin

	    RecordSetIn := Input.Item(0);

	    RecordSetOut := Output.Item(0);

	    For i := 0 To RecordSetIn.Count - 1 Do

	        RecordSetOut.Add;

	        RecordSetOut.Item(i).Value(0) := RecordSetIn.Item(i).Value(0);

	    End For;

	End Sub UserSub;


Данный пример является макросом в модуле пользователя, который используется
 для преобразования данных в задаче ETL. После выполнения задачи ETL в
 приёмнике данных будет создано столько же записей сколько и в источнике.


См. также:


[IEtlPlainRecordSet](IEtlPlainRecordSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
