# IAuditLog.OpenOperationTree

IAuditLog.OpenOperationTree
-


# IAuditLog.OpenOperationTree


## Синтаксис


OpenOperationTree(Session: Integer; Operation: Integer):
 [IAuditOperations](../IAuditOperations/IAuditOperations.htm);


## Параметры


Session. Ключ сессии, для которой
 необходимо получить список операций над объектами;


Operation. Номер операции,
 для которой необходимо получить список операций над зависимыми объектами.


## Описание


Метод OpenOperationTree возвращает
 список операций, произведенных в репозитории, представленный в древовидном
 виде.


## Комментарий


Для получения информации о соединениях с репозиторием используйте свойство
 [IAuditLog.OpenLogons](IAuditLog.OpenLogons.htm). Для получения
 ключа текущей сессии используйте свойство [ILogonSession.Key](../ILogonSession/ILogonSession.Key.htm).


Если в качестве значения параметра Operation
 передается «0», то метод возвращает список операций, совершенных в рамках
 сессии. Если в качестве значения передавать значение свойства [IAuditOperations.Operation](../IAuditOperations/IAuditOperations.Operation.htm)
 для какой-либо операции, то метод вернет список операций над зависимыми
 объектами того объекта, которому соответствует операция.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    ALogon: IAuditLogons;

    OperatTree, OperatTreeChild: IAuditOperations;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    Al := MS.OpenAuditLog;

    ALogon := AL.OpenLogons(False);

    // Выведем в консоль список операций, совершенных за время последнего подключения к репозиторию

    OperatTree := Al.OpenOperationTree(ALogon.Session, 0);

    While Not OperatTree.Eof Do

        Debug.WriteLine(OperatTree.ObjectId + " " + OperatTree.Name);

        OperatTreeChild := Al.OpenOperationTree(ALogon.Session, OperatTree.Operation);

        While Not OperatTreeChild.Eof Do

            If OperatTreeChild.Succeeded Then

                Debug.Indent;

                Debug.WriteLine(OperatTreeChild.ObjectId + " " + OperatTreeChild.Name + " " + OperatTreeChild.Level.ToString);

                Debug.Unindent;

                OperatTreeChild.Next;

            End If;

        End While;

        OperatTreeChild.Close;

        OperatTree.Next;

    End While;

    OperatTree.Close;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль будет выведен список операций, совершенных
 за время последнего подключения к репозиторию. Список операций будет представлен
 в виде дерева. Для каждой операции выведен идентификатор соответствующего
 объекта и наименование операции. Если имеются операции, связанные с объектами
 от которых зависит какой-либо другой объект, то для данных операций также
 будет выведен уровень вложенности.


См. также:


[IAuditLog](IAuditLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
