# IMetaRdsLoader.Bindings

IMetaRdsLoader.Bindings
-


# IMetaRdsLoader.Bindings


## Синтаксис


Bindings: [IRdsLoaderBindings](../IRdsLoaderBindings/IRdsLoaderBindings.htm);


## Описание


Свойство Bindings возвращает
 коллекцию привязок атрибутов справочника к полям источника данных.


## Комментарии


Если задано свойство [IMetaRdsLoader.Dictionary](IMetaRdsLoader.Dictionary.htm),
 то в коллекции Bindings необходимо
 сформировать привязки для всех атрибутов указанного справочника. Если
 создается новый справочник, то на основании коллекции привязок при выполнении
 метода [IMetaRdsLoader.CreateObject](IMetaRdsLoader.CreateObject.htm)
 в справочнике будут созданы атрибуты. Также в соответствии с заданными
 привязками осуществляется загрузка данных при выполнении метода [IMetaRdsLoader.Load](IMetaRdsLoader.Load.htm).


Если источник данных задан в свойстве [IMetaRdsLoader.Source](IMetaRdsLoader.Source.htm)
 или [IMetaRdsLoader.TableSource](IMetaRdsLoader.TableSource.htm),
 то привязки атрибутов могут быть сформированы автоматически при вызове
 метода [IMetaRdsLoader.GenerateBindingsBySource](IMetaRdsLoader.GenerateBindingsBySource.htm).


## Пример


Пример использования свойства приведен в примере для [IRdsLoaderBindings.Add](../IRdsLoaderBindings/IRdsLoaderBindings.Add.htm),
 [IRdsLoaderBindings.AddByAttribute](../IRdsLoaderBindings/IRdsLoaderBindings.AddByAttribute.htm).


См. также:


[IMetaRdsLoader](IMetaRdsLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
