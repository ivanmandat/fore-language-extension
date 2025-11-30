# IMetaRdsLoader.GenerateBindingsBySource

IMetaRdsLoader.GenerateBindingsBySource
-


# IMetaRdsLoader.GenerateBindingsBySource


## Синтаксис


GenerateBindingsBySource;


## Описание


Метод GenerateBindingsBySource
 генерирует привязки параметры привязки атрибутов справочника на основании
 структуры источника.


## Комментарии


Данный метод доступен для использования, если источник задан в свойстве
 [IMetaRdsLoader.Source](IMetaRdsLoader.Source.htm)
 или [IMetaRdsLoader.TableSource](IMetaRdsLoader.TableSource.htm).
 При выполнении метода GenerateBindingsBySource
 для всех полей источника, заданных в коллекции [IMetaRdsLoader.Bindings](IMetaRdsLoader.Bindings.htm),
 будет создана отдельная привязка. Если идентификатор поля совпадает с
 идентификатором системного атрибута, то создается привязка с типом [RdsLoaderBindingType.Predefined](../../Enums/RdsLoaderBindingType.htm),
 иначе - с типом [RdsLoaderBindingType.UserAttribute](../../Enums/RdsLoaderBindingType.htm).
 В параметрах привязок будет выставлено свойство [IRdsBaseBinding.Field](../IRdsBaseBinding/IRdsBaseBinding.Field.htm),
 но не будет задано свойство [IRdsBaseBinding.Attribute](../IRdsBaseBinding/IRdsBaseBinding.Attribute.htm).


## Пример


Использование метода приведено в примере для [IMetaRdsLoader.Load](IMetaRdsLoader.Load.htm).


См. также:


[IMetaRdsLoader](IMetaRdsLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
