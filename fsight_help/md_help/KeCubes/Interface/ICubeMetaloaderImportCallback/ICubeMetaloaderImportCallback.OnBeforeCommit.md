# ICubeMetaloaderImportCallback.OnBeforeCommit

ICubeMetaloaderImportCallback.OnBeforeCommit
-


# ICubeMetaloaderImportCallback.OnBeforeCommit


## Синтаксис


OnBeforeCommit(RubInst: [IRubricatorInstance](../IRubricatorInstance/IRubricatorInstance.htm);

                        SecurConn: [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm));


## Параметры


RubInst. База данных временных
 рядов, в которую выполняется импорт данных;


SecurConn. Параметры соединения
 с сервером БД.


## Описание


Метод OnBeforeCommit реализует
 событие, возникающее до фиксации транзакции.


## Комментарии


Для корректного использования метод должен быть переопределен в пользовательском
 классе, который является обработчиком событий. Также данный обработчик
 должен быть задан в параметрах объекта, используемых для импорта временных
 рядов.


## Пример


Использование свойства приведено в примере для [ICubeMetaloaderImportCallback.OnAfterStartTransaction](ICubeMetaloaderImportCallback.OnAfterStartTransaction.htm).


См. также:


[ICubeMetaloaderImportCallback](ICubeMetaloaderImportCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
