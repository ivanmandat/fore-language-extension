# ICubeMetaloaderImportCallback.OnAfterStartTransaction

ICubeMetaloaderImportCallback.OnAfterStartTransaction
-


# ICubeMetaloaderImportCallback.OnAfterStartTransaction


## Синтаксис


OnAfterStartTransaction(RubInst: [IRubricatorInstance](../IRubricatorInstance/IRubricatorInstance.htm);

                        SecurConn: [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm));


## Параметры


RubInst. База данных временных
 рядов, в которую выполняется импорт данных;


SecurConn. Параметры соединения
 с сервером БД.


## Описание


Метод OnAfterStartTransaction
 реализует событие, возникающее после открытия транзакции.


## Комментарии


Для корректного использования метод должен быть переопределен в пользовательском
 классе, который является обработчиком событий. Также данный обработчик
 должен быть задан в параметрах объекта, используемых для импорта временных
 рядов.


## Пример


В примере приведено описание пользовательского класса, являющегося обработчиком
 событий.


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Class ImportCallBack: object, ICubeMetaloaderImportCallback

    // Процедура реализует событие, возникающее после открытия транзакции

    Public Sub OnAfterStartTransaction(RubInst: IRubricatorInstance; SecurConn: ISecurityConnection);

    Begin

        Debug.WriteLine("Транзакция начата на
 сервере пользователем: '" + SecurConn.UserNameLo + "' ");

    End Sub OnAfterStartTransaction;


    // Процедура реализует событие, возникающее до
 фиксации транзакции

    Public Sub OnBeforeCommit(RubInst: IRubricatorInstance; SecurConn: ISecurityConnection);

    Begin

        Debug.WriteLine("Транзакция будет зафиксирована на
 сервере пользователем: '" + SecurConn.UserNameLo + "' ");

    End Sub OnBeforeCommit;


End Class ImportCallBack;


Использование данного класса для обработки событий приведено в примере
 для [ICubeMetaLoader.ImportCallback](../ICubeMetaLoader/ICubeMetaLoader.ImportCallback.htm).


См. также:


[ICubeMetaloaderImportCallback](ICubeMetaloaderImportCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
