# ICubeCallbackSaveArgument.SecurityConnections

ICubeCallbackSaveArgument.SecurityConnections
-


# ICubeCallbackSaveArgument.SecurityConnections


## Синтаксис


		SecurityConnections: Array;


## Описание


Свойство SecurityConnections
 возвращает массив соединений с серверами баз данных, в которые были сохранены
 данные.


## Комментарии


Если куб построен на нескольких источниках, данные которых расположены
 в разных СУБД, то при сохранении свойство SecurityConnections
 вернёт массив соединений с этими СУБД. Каждый элемент массива описывает
 интерфейс [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm).


## Пример


Пример использования приведён в описании [ICubeInstanceStorage.SaveMatrixCallback](../ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixCallback.htm).


См. также:


[ICubeCallbackSaveArgument](ICubeCallbackSaveArgument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
