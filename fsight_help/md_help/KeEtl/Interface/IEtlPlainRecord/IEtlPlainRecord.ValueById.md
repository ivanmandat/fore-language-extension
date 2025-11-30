# IEtlPlainRecord.ValueById

IEtlPlainRecord.ValueById
-


# IEtlPlainRecord.ValueById


## Синтаксис


ValueById(Id: String): Variant;


## Параметры


Id. Идентификатор
 поля.


## Описание


Свойство ValueById определяет
 значение поля плоской записи, идентификатор которого передается посредством
 параметра Id.


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

	        RecordOut.ValueById("FIELD00") := RecordIn.ValueById("FIELD02");

	    End For;

	End Sub UserSub;


Данный пример является макросом, который используется для преобразования
 данных в задаче ETL. После выполнения задачи ETL полю приёмника с идентификатором
 «Field00» будет ставится в соответствие поле источника с идентификатором
 «Field02».


См. также:


[IEtlPlainRecord](IEtlPlainRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
