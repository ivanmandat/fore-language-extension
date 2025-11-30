# IAuditFilterCondition.ObjectKey

IAuditFilterCondition.ObjectKey
-


# IAuditFilterCondition.ObjectKey


## Синтаксис


ObjectKey(Index: Integer): Integer;


## Параметры


Index. Индекс позиции.


## Описание


Свойство ObjectKey определяет
 ключ объекта, для которого будут отображаться записи протокола.


## Комментарий


Количество ключей определяется свойством [IAuditFilterCondition.ObjectKeyCount](IAuditFilterCondition.ObjectKeyCount.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории отчета с
 идентификатором REPORT.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Log: IAuditLog;

    Con: IAuditFilterCondition;

    Fil: IAuditFilter;

    objectKey: Integer;

    operations: IAuditOperations;

    Lic: Object;

    d: DateTime;

Begin

    Mb := MetabaseClass.Active;

    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

    Log := Mb.Security.OpenAuditLog;

    Fil := Log.Filter;

    If Fil.Count <= 0 Then

        Con := Fil.Add;

    Else

        Con := Fil.Item(0);

    End If;

    Con.IncludeFailedLogons := False;

    Con.IncludeSucceededLogons := False;

    objectKey := MB.ItemById("Report").Key;

    Con.ObjectKeyCount := 1;

    Con.ObjectKey(0) := objectKey;

    operations := Log.OpenOperationTree(-1, -1);

    While Not operations.Eof Do

        Debug.Write(operations.Name + "; ");

        d := DateTime.FromDouble(operations.Stamp);

        Debug.WriteLine(d.ToString + ";");

        operations.Next;

    End While;

    operations.Eof;

End Sub UserProc;


После выполнения примера в консоли будет отображен список операций,
 производимых над объектом. Для каждой операции будет выведено название,
 дата и время.


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
