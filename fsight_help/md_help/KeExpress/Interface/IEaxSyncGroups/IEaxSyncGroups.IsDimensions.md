# IEaxSyncGroups.IsDimensionsCompatible

IEaxSyncGroups.IsDimensionsCompatible
-


# IEaxSyncGroups.IsDimensionsCompatible


## Синтаксис


IsDimensionsCompatible(Dimension1: [IEaxDimensionDescriptor](../IEaxDimensionDescriptor/IEaxDimensionDescriptor.htm);
 SyncAttribute1: String; Dimension2: [IEaxDimensionDescriptor](../IEaxDimensionDescriptor/IEaxDimensionDescriptor.htm);
 SyncAttribute2: String): Boolean;


## Параметры


Dimension1. Первое измерение,
 для которого нужно установить связь со вторым измерением;


SyncAttribute1. [Атрибут
 синхронизации](../IEaxSyncItem/IEaxSyncItem.SyncAttribute.htm) для первого измерения;


Dimension2. Второе измерение,
 для которого нужно установить связь с первым измерением;


SyncAttribute2. [Атрибут
 синхронизации](../IEaxSyncItem/IEaxSyncItem.SyncAttribute.htm) для второго измерения.


## Описание


Метод IsDimensionsCompatible
 возвращает признак возможности установления связи для указанных измерений.


## Комментарии


Допустимые значения:


	- True. Установление связи
	 возможно;


	- False. Установление
	 связи не возможно.


Для получения коллекции описаний измерений, к которым подходит указанное
 описание измерения используйте [IEaxSyncGroups.GetCompatibleItems](IEaxSyncGroups.GetCompatibleItems.htm).


## Пример


Использование метода приведено в примере для [IEaxSyncGroups.CreateGroup](IEaxSyncGroups.CreateSyncGroup.htm).


См. также:


[IEaxSyncGroups](IEaxSyncGroups.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
