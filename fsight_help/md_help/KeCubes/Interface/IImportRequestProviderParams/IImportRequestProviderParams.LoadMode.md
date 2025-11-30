# IImportRequestProviderParams.LoadMode

IImportRequestProviderParams.LoadMode
-


# IImportRequestProviderParams.LoadMode


## Синтаксис


LoadMode: [CubeLoadClearMode](../../Enums/CubeLoadClearMode.htm);


## Описание


Свойство LoadMode определяет
 режим загрузки данных в базу данных временных рядов.


## Комментарии


По умолчанию свойству LoadMode
 установлено значение [CubeLoadClearMode.Default_](../../Enums/CubeLoadClearMode.htm),
 при этом будут обновлены данные и метаданные всех рядов, информация по
 которым содержится в источнике данных. Изменяя свойство LoadMode,
 можно изменить режим обновления объектов, отвечающих за хранение информации
 по рядам данных.


## Пример


Использование свойства приведено в примере для [IImportRequestProviderParams.DuplicateCheck](IImportRequestProviderParams.DuplicateCheck.htm).


См. также:


[IImportRequestProviderParams](IImportRequestProviderParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
