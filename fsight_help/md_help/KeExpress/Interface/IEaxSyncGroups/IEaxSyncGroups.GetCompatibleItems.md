# IEaxSyncGroups.GetCompatibleItems

IEaxSyncGroups.GetCompatibleItems
-


# IEaxSyncGroups.GetCompatibleItems


## Синтаксис


GetCompatibleItems(Dimension: [IEaxDimensionDescriptor](../IEaxDimensionDescriptor/IEaxDimensionDescriptor.htm);
 SyncAttribute: String): [IEaxDimensionDescriptors](../IEaxDimensionDescriptors/IEaxDimensionDescriptors.htm);


## Параметры


Dimension. Описание измерения;


SyncAttribute. [Атрибут
 синхронизации](../IEaxSyncItem/IEaxSyncItem.SyncAttribute.htm).


## Описание


Метод GetCompatibleItems получает
 коллекцию описаний измерений, к которым подходит указанное описание измерения.


## Комментарии


Для получения признака возможности установления связи для измерений
 используйте [IEaxSyncGroups.IsDimensionsCompatible](IEaxSyncGroups.IsDimensions.htm).


## Пример


Использование метода приведено в примере для [IEaxSyncGroups.CreateGroup](IEaxSyncGroups.CreateSyncGroup.htm).


См. также:


[IEaxSyncGroups](IEaxSyncGroups.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
