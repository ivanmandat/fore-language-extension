# IEtlPlainRecord.Value

IEtlPlainRecord.Value
-


# IEtlPlainRecord.Value


## Синтаксис


Value(Index: Integer): Variant;


## Параметры


Index.
 Индекс поля плоской записи.


## Описание


Свойство Value определяет значение
 поля плоской записи, индекс которого передается посредством параметра
 Index.


## Пример


	Sub UserSub(Input: IEtlPlainRecordSets; Output: IEtlPlainRecordSets);

	Var

	    RecordSetIn, RecordSetOut: IEtlPlainRecordSet;

	    RecordIn, RecordOut: IEtlPlainRecord;

	    i: Integer;

	Begin

	    RecordSetIn := Input.Item(0);

	    RecordSetOut := Output.Item(0);

	    For i := 0 To RecordSetIn.Count - 1 Do

	        RecordSetOut.Add;

	        RecordIn := RecordSetIn.Item(i);

	        RecordOut := RecordSetOut.Item(i);

	        RecordOut.Value(0) := RecordIn.Value(0);

	    End For;

	End Sub UserSub;


Данный пример является макросом в модуле пользователя, который используется
 для преобразования данных в задаче ETL. После выполнения задачи ETL первому
 полю приёмника ставится в соответствие первое поле источника.


См. также:


[IEtlPlainRecord](IEtlPlainRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
