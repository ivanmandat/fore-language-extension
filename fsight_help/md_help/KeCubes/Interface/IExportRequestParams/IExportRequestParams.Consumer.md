# IExportRequestParams.Consumer

IExportRequestParams.Consumer
-


# IExportRequestParams.Consumer


## Синтаксис


Consumer: Object;


## Описание


Свойство Consumer определяет объект, являющийся приёмником данных.


## Комментарии


Если объект экспорта загружен для чтения, т.е. для открытия был использован метод [IMetabaseObjectDescriptor.Bind](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Bind.htm), то значение свойства Consumer недоступно. Для получения приёмника данных для редактирования используйте свойство [IExportRequestInstance.Consumer](../IExportRequestInstance/IExportRequestInstance.Consumer.htm).


## Пример


Использование свойства приведено в примере для [IExportRequestParams.Bindings](IExportRequestParams.Bindings.htm).


См. также:


[IExportRequestParams](IExportRequestParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
