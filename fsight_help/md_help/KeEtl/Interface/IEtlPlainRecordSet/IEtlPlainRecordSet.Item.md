# IEtlPlainRecordSet.Item

IEtlPlainRecordSet.Item
-


# IEtlPlainRecordSet.Item


## Синтаксис


Item(Index: Integer): [IEtlPlainRecord](../IEtlPlainRecord/IEtlPlainRecord.htm);


## Параметры


Index.
 Индекс плоской записи.


## Описание


Свойство Item возвращает объект,
 содержащий плоскую запись, индекс которой передается посредством параметра
 Index.


## Пример


	Sub UserSub(Input: IEtlPlainRecordSets; Output: IEtlPlainRecordSets);

	Var

	    RecordIn, RecordOut: IEtlPlainRecordSet;

	    i: Integer;

	Begin

	    RecordSetIn := Input.Item(0);

	    RecordSetOut := Output.Item(0);

	    For i := 0 To RecordSetIn.Count - 1 Do

	        RecordSetOut.Add;

	        RecordSetOut.Item(i).Value(0) := RecordSetIn.Item(RecordSetIn.Count - 1-i).Value(0);

	    End For;

	End Sub UserSub;


Данный пример является макросом в модуле пользователя, который используется
 для преобразования данных в задаче ETL. После выполнения задачи ETL первой
 записи приёмника будет соответствовать последняя запись источника, второй
 записи приёмника - предпоследняя запись источника и т.д.


См. также:


[IEtlPlainRecordSet](IEtlPlainRecordSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
