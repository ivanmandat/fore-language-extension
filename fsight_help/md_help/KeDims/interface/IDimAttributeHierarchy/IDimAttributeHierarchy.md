# IDimAttributeHierarchy

IDimAttributeHierarchy
-


# IDimAttributeHierarchy


Сборка: Dimensions;


## Описание


Интерфейс IDimAttributeHierarchy
 предназначен для работы с альтернативной иерархией атрибута справочника.


## Иерархия наследования


[INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


[IDimHierarchy](../IDimHierarchy/IDimHierarchy.htm)


IDimAttributeHierarchy


## Комментарии


Альтернативные иерархии позволяют для одного справочника настроить различные
 варианты отображения данных. В качестве альтернативных иерархий могут
 выступать другие справочники репозитория и их атрибуты.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributeIndex](IDimAttributeHierarchy.AttributeIndex.htm)
		 Свойство AttributeIndex
		 возвращает индекс атрибута альтернативной иерархии.


		 ![](../../Property_Image.gif)
		 [BaseAttribute](IDimAttributeHierarchy.BaseAttribute.htm)
		 Свойство BaseAttribute
		 определяет атрибут-оригинал, на уникальных значениях которого
		 построена иерархия.


		 ![](../../Property_Image.gif)
		 [Level](IDimAttributeHierarchy.Level.htm)
		 Свойство Level определяет
		 уровень атрибута-оригинала, на уникальных значениях которого строится
		 альтернативная иерархия.


## Свойства, унаследованные от [IDimHierarchy](../IDimHierarchy/IDimHierarchy.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Original](../IDimHierarchy/IDimHierarchy.Original.htm)
		 Свойство Original возвращает
		 модель справочника, используемую для основной иерархии.


		 ![](../../Property_Image.gif)
		 [Source](../IDimHierarchy/IDimHierarchy.Source.htm)
		 Свойство Source возвращает
		 модель справочника, используемую для альтернативной иерархии.


		 ![](../../Property_Image.gif)
		 [SourceAttribute](../IDimHierarchy/IDimHierarchy.SourceAttribute.htm)
		 Свойство SourceAttribute
		 определяет соответствие между атрибутом основного справочника
		 и атрибутом альтернативного справочника.


		 ![](../../Property_Image.gif)
		 [SourceIndex](../IDimHierarchy/IDimHierarchy.SourceIndex.htm)
		 Свойство SourceIndex
		 определяет индекс альтернативного справочника, содержащий ключи
		 для сопоставления элементов основного и альтернативного справочников.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


См. также:


[Интерфейсы
 сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
