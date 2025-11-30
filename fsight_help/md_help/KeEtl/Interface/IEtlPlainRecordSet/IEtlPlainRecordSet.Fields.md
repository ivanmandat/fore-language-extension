# IEtlPlainRecordSet.Fields

IEtlPlainRecordSet.Fields
-


# IEtlPlainRecordSet.Fields


## Синтаксис


Fields: [IEtlPlainFields](../IEtlPlainFields/IEtlPlainFields.htm);


## Описание


Свойство Fields возвращает объект,
 содержащий набор полей плоских данных.


## Пример


	Sub UserSub(Input: IEtlPlainRecordSets; Output: IEtlPlainRecordSets);

	Var

	    RecordSetIn, RecordSetOut: IEtlPlainRecordSet;

	    i: Integer;

	Begin

	    RecordIn := Input.Item(0);

	    RecordOut := Output.Item(0);

	    For i := 0 To RecordIn.Fields.Count - 1 Do

	        RecordSetOut.Add;

	        RecordSetOut.Item(i).Value(0) := RecordSetIn.Fields.Item(i).Id;

	    End For;

	End Sub UserSub;


Данный пример является макросом в модуле пользователя, который используется
 для преобразования данных в задаче ETL. После выполнения задачи ETL в
 первом поле приёмника будут содержаться идентификаторы всех полей источника
 данных.


См. также:


[IEtlPlainRecordSet](IEtlPlainRecordSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
