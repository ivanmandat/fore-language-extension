# IRubricatorRecord.Record

IRubricatorRecord.Record
-


# IRubricatorRecord.Record


## Синтаксис


Record: [IMetaDataMemberRecord](KeRds.chm::/Interface/IMetaDataMemberRecord/IMetaDataMemberRecord.htm);


## Описание


Свойство Record возвращает данные
 записи.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должен существовать
 показатель с ключом 1.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    FactD: IRubricatorFactData;

    Record: IRubricatorRecord;

    a: Array;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    FactD := RubrInst.GetFactData(1);

    Record := FactD As IRubricatorRecord;

    a := Record.Record.Value As Array;

    If a <> Null Then

        For i := 0 To a.Length - 1 Do

            Debug.WriteLine(a[i] As String);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены данные записи,
 содержащей информацию о показателе с указанным ключом.


См. также:


[IRubricatorRecord](IRubricatorRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
