# IAuditOperations.Position

IAuditOperations.Position
-


# IAuditOperations.Position


## Синтаксис


Position: Integer;


## Описание


Свойство Position возвращает
 номер выполнения операции, относительно операции связанной с зависимым
 объектом.


## Комментарии


Актуально для операции, произошедшей над каким-либо объектом, в результате
 выполнения операций над зависимым от него объектом. Список операций должен
 рассматриваться [в
 виде дерева](../IAuditLog/IAuditLog.OpenOperationTree.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    ALogon: IAuditLogons;

    OperatTree: IAuditOperations;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    Al := MS.OpenAuditLog;

    ALogon := AL.OpenLogons(False);

    OperatTree := Al.OpenOperationTree(ALogon.Session, 0);

    // Выведем в консоль описание операции, выполненной над объектом

    While Not OperatTree.Eof Do

        Debug.WriteLine(OperatTree.ObjectId + " " + OperatTree.Name);

        Debug.Indent;

            Debug.WriteLine("Номер сессии: " + OperatTree.Session.ToString);

            Debug.WriteLine("Наименование объекта: " + OperatTree.ObjectName);

            Debug.WriteLine("Класс объекта: " + OperatTree.ObjectClass.ToString);

            Debug.WriteLine("Ключ объекта: " + OperatTree.ObjectKey.ToString);

            Debug.WriteLine("Номер операции: " + OperatTree.Operation.ToString);

            Debug.WriteLine("Примечание к операции: " + OperatTree.Comment);

            Debug.WriteLine("Маска операции: " + OperatTree.Mask.ToString);

            Debug.WriteLine("Номер операции относительно операции, связанной с зависимым объектом: " + OperatTree.Position.ToString);

            Debug.WriteLine("Уровень вложенности: " + OperatTree.Level.ToString);

        Debug.Unindent;

        OperatTree.Next;

    End While;

    OperatTree.Close;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены список
 операций протокола доступа, совершенных за время последнего подключения
 к платформе. Список операций будет представлен в виде дерева. Для каждой
 операции будет выведен идентификатор соответствующего объекта, наименование
 операции, и другие параметры.


См. также:


[IAuditOperations](IAuditOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
