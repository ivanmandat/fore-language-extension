# ICubeMetaUpdateCallback.OnBeforeCommit

ICubeMetaUpdateCallback.OnBeforeCommit
-


# ICubeMetaUpdateCallback.OnBeforeCommit


## Синтаксис


OnBeforeCommit(Rubricator: [IRubricatorInstance](../IRubricatorInstance/IRubricatorInstance.htm);

                        Connection:
 [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm));


## Параметры


Rubricator. База данных временных
 рядов, в которую выполняется копирование;


Connection. Используемое соединение
 с сервером БД.


## Описание


Метод OnBeforeCommit реализует
 событие, возникающее перед закрытием транзакции и процесса копирования.


## Комментарии


Данное событие наступает перед окончанием копирования базы данных временных
 рядов.


## Пример


Использование свойства приведено в примере для [ICubeMetaUpdateEx.ForceEmptyValues](../ICubeMetaUpdateEx/ICubeMetaUpdateEx.ForceEmptyValues.htm).


См. также:


[ICubeMetaUpdateCallback](ICubeMetaUpdateCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
