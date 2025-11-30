# ICustomDimension

ICustomDimension
-


# ICustomDimension


## Описание


Интерфейс ICustomDimension содержит
 свойства и методы для работы с конструируемым справочником.


## Комментарии


Конструируемый справочник лежит в основе локального измерения фактов
 в [стандартном](KeCubes.chm::/Interface/IStandardCube/IStandardCube.ExternalFactDimension.htm)
 и [вычисляемом](KeCubes.chm::/Interface/ICalculatedCube/ICalculatedCube.InternalFactDimension.htm)
 кубе. Также в виде конструируемого справочника в репозитории может быть
 [сохранена](KeExpress.chm::/Interface/IEaxDataAreaHierarchies/IEaxDataAreaHierarchies.SaveToMetabase.htm)
 альтернативная иерархия аналитической области данных.


Структура конструируемого справочника может быть приведена к интерфейсам
 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
 и [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm).
 Режим работы (просмотр или редактирование структуры) зависит от того,
 в каком режиме открыт родительский куб.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](ICustomDimension.Attributes.htm)
		 Свойство Attributes
		 возвращает коллекцию атрибутов справочника.


		 ![](../../Property_Image.gif)
		 [Elements](ICustomDimension.Elements.htm)
		 Свойство Elements возвращает
		 коллекцию элементов справочника.


		 ![](../../Property_Image.gif)
		 [HideInaccessibleElements](ICustomDimension.HideInaccessibleElements.htm)
		 Свойство HideInaccessibleElements
		 определяет, будут ли скрываться недоступные элементы.


		 ![](../../Property_Image.gif)
		 [Levels](ICustomDimension.Levels.htm)
		 Свойство Levels возвращает
		 коллекцию уровней справочника.


		 ![](../../Property_Image.gif)
		 [ReverseOrder](ICustomDimension.ReverseOrder.htm)
		 Свойство не поддерживается.


		 ![](../../Property_Image.gif)
		 [Tree](ICustomDimension.Tree.htm)
		 Свойство Tree возвращает
		 элементы справочника, представленные в виде дерева.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OrganizeLevels](ICustomDimension.OrganizeLevels.htm)
		 Метод OrganizeLevels
		 осуществляет автоматическое создание уровней в соответствии с
		 иерархией элементов справочника.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
