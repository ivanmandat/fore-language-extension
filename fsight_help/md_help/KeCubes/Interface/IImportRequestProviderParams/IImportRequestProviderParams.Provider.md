# IImportRequestProviderParams.Provider

IImportRequestProviderParams.Provider
-


# IImportRequestProviderParams.Provider


## Синтаксис Fore


Provider: [IDatasetDataProvider](kedb.chm::/interface/idatasetdataprovider/idatasetdataprovider.htm);


## Описание


Свойство Provider определяет
 объект, являющийся источником данных.


## Комментарии


Если объект импорта загружен для чтения, т.е. для открытия был использован
 метод [IMetabaseObjectDescriptor.Bind](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Bind.htm),
 то значение свойства Provider
 недоступно. Для получения источника данных для редактирования используйте
 свойство [IImportRequestInstance.Provider](../IImportRequestInstance/IImportRequestInstance.Provider.htm).


## Пример


Использование свойства приведено в примере для [IImportRequestProviderParams.DuplicateCheck](IImportRequestProviderParams.DuplicateCheck.htm).


См. также:


[IImportRequestProviderParams](IImportRequestProviderParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
