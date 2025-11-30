# IAdhocSyncParams.Add

IAdhocSyncParams.Add
-


# IAdhocSyncParams.Add


## Синтаксис


Add(Source: [IAdhocDataSourceObject](../IAdhocDataSourceObject/IAdhocDataSourceObject.htm);
 ParamId: String): [IAdhocParamSyncItem](../IAdhocParamSyncItem/IAdhocParamSyncItem.htm);


## Параметры


Source. Источник данных аналитической
 панели, содержащий параметры.


ParamId. Идентификатор добавляемого
 параметра.


## Описание


Метод Add добавляет параметр
 в коллекцию.


## Комментарии


Для проверки, присутствует ли параметр с определенным идентификатором
 в коллекции, используйте метод [IAdhocSyncParams.FindById](IAdhocSyncParams.FindById.htm).


## Пример


Использование свойства приведено в примере для [IAdhocSynchronization.Params](../IAdhocSynchronization/IAdhocSynchronization.Params.htm).


См. также:


[IAdhocSyncParams](IAdhocSyncParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
