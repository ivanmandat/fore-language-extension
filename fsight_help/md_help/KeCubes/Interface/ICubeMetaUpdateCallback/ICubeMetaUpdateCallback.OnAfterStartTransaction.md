# ICubeMetaUpdateCallback.OnAfterStartTransaction

ICubeMetaUpdateCallback.OnAfterStartTransaction
-


# ICubeMetaUpdateCallback.OnAfterStartTransaction


## Синтаксис


OnAfterStartTransaction(Rubricator: [IRubricatorInstance](../IRubricatorInstance/IRubricatorInstance.htm);

                        Connection:
 [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm));


## Параметры


Rubricator. База данных временных
 рядов, в которую выполняется копирование;


Connection. Используемое соединение
 с сервером БД.


## Описание


Метод OnAfterStartTransaction
 реализует событие, возникающее при открытии транзакции и ревизии.


## Комментарии


Данное событие наступает перед началом копирования базы данных временных
 рядов.


## Пример


Использование свойства приведено в примере для [ICubeMetaUpdateEx.ForceEmptyValues](../ICubeMetaUpdateEx/ICubeMetaUpdateEx.ForceEmptyValues.htm).


См. также:


[ICubeMetaUpdateCallback](ICubeMetaUpdateCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
