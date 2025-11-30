# ICubeMetaUpdateAdditionalObject

ICubeMetaUpdateAdditionalObject
-


# ICubeMetaUpdateAdditionalObject


## Описание


Интерфейс ICubeMetaUpdateAdditionalObject
 содержит свойства и методы для работы с объектом, который должен быть
 скопирован вместе с базой данных временных рядов, но не является вложенным
 по отношению к ней.


## Комментарии


Вместе с базой данных временных рядов могут быть скопированы объекты
 различных классов. Если это регламентный или экспресс-отчет, то он должен
 зависеть только от одной базы данных временных рядов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataSettings](ICubeMetaUpdateAdditionalObject.DataSettings.htm)
		 Свойство DataSettings
		 возвращает параметры копирования данных объекта.


		 ![](../../Property_Image.gif)
		 [DescriptorOnly](ICubeMetaUpdateAdditionalObject.DescriptorOnly.htm)
		 Свойство DescriptorOnly
		 определяет признак включения в список копируемых объектов только
		 описания объекта.


		 ![](../../Property_Image.gif)
		 [IncludeChildren](ICubeMetaUpdateAdditionalObject.IncludeChildren.htm)
		 Свойство IncludeChildren
		 определяет признак копирования объекта со всеми его дочерними
		 объектами.


		 ![](../../Property_Image.gif)
		 [SourceClassId](ICubeMetaUpdateAdditionalObject.SourceClassId.htm)
		 Свойство SourceClassId
		 определяет класс копируемого объекта-источника.


		 ![](../../Property_Image.gif)
		 [SourceId](ICubeMetaUpdateAdditionalObject.SourceId.htm)
		 Свойство SourceId определяет
		 идентификатор копируемого объекта-источника.


		 ![](../../Property_Image.gif)
		 [SourceKey](ICubeMetaUpdateAdditionalObject.SourceKey.htm)
		 Свойство SourceKey
		 определяет ключ копируемого объекта-источника.


		 ![](../../Property_Image.gif)
		 [Target](ICubeMetaUpdateAdditionalObject.Target.htm)
		 Свойство Target определяет
		 объект-приёмник, который будет заменён объектом-источником.


		 ![](../../Property_Image.gif)
		 [TargetId](ICubeMetaUpdateAdditionalObject.TargetId.htm)
		 Свойство TargetId определяет
		 идентификатор объекта-копии.


		 ![](../../Property_Image.gif)
		 [TargetParent](ICubeMetaUpdateAdditionalObject.TargetParent.htm)
		 Свойство TargetParent
		 определяет родительский объект для объекта-копии.


## Свойства, унаследованные от [INamedEntityModel](foresys.chm::/interface/inamedentitymodel/inamedentitymodel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Id.htm)
		 Свойство Id возвращает
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Name.htm)
		 Свойство Name возвращает
		 наименование объекта.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
