# DynamicInstance

DynamicInstance
-


# DynamicInstance


Сборка: Dimensions;


## Описание


Класс DynamicInstance реализует
 объект, предназначенный для работы с табличным справочником НСИ с
 динамической загрузкой данных.


## Комментарии


При работе с табличным справочником НСИ с динамической загрузкой данных
 элементы подгружаются в память по мере необходимости. Вся иерархия справочника
 загружается полностью при открытии справочника.


Чтобы подключить динамическую загрузку данных используйте свойство [IRdsDictionary.DynamicDimInstance](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.DynamicDimInstance.htm).


## Свойства объекта класса, унаследованные от [IDynamicInstance](../../interface/IDynamicInstance/IDynamicInstance.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributeCount](../../interface/IDynamicInstance/IDynamicInstance.AttributeCount.htm)
		 Свойство AttributeCount
		 возвращает количество атрибутов справочника.


		 ![](../../Property_Image.gif)
		 [AttributeValue](../../interface/IDynamicInstance/IDynamicInstance.AttributeValue.htm)
		 Свойство AttributeValue
		 определяет значение атрибута элемента справочника.


		 ![](../../Property_Image.gif)
		 [AttributeValueById](../../interface/IDynamicInstance/IDynamicInstance.AttributeValueById.htm)
		 Свойство AttributeValueById
		 определяет значение атрибута элемента справочника по идентификатору
		 атрибута.


		 ![](../../Property_Image.gif)
		 [AttributeValueByIdx](../../interface/IDynamicInstance/IDynamicInstance.AttributeValueByIdx.htm)
		 Свойство AttributeValueByIdx определяет
		 значение атрибута элемента справочника по индексу атрибута.


		 ![](../../Property_Image.gif)
		 [AttributeValueByKey](../../interface/IDynamicInstance/IDynamicInstance.AttributeValueByKey.htm)
		 Свойство AttributeValueByKey
		 определяет значение атрибута элемента справочника по ключу атрибута.


		 ![](../../Property_Image.gif)
		 [ChildInstance](../../interface/IDynamicInstance/IDynamicInstance.ChildInstance.htm)
		 Свойство ChildInstance
		 возвращает дочерний справочник по его индексу.


		 ![](../../Property_Image.gif)
		 [ChildrenInstancesCount](../../interface/IDynamicInstance/IDynamicInstance.ChildrenInstancesCount.htm)
		 Свойство ChildrenInstancesCount
		 возвращает количество дочерних справочников.


		 ![](../../Property_Image.gif)
		 [DeferredIndexSetupFor](../../interface/IDynamicInstance/IDynamicInstance.DeferredIndexSetupFor.htm)
		 Свойство DeferredIndexSetupFor
		 устанавливает новое значение атрибута элемента.


		 ![](../../Property_Image.gif)
		 [DimensionModel](../../interface/IDynamicInstance/IDynamicInstance.DimensionModel.htm)
		 Свойство DimensionModel
		 возвращает структуру справочника.


		 ![](../../Property_Image.gif)
		 [DimInstance](../../interface/IDynamicInstance/IDynamicInstance.DimInstance.htm)
		 Свойство DimInstance
		 возвращает данные справочника.


		 ![](../../Property_Image.gif)
		 [DisplayValue](../../interface/IDynamicInstance/IDynamicInstance.DisplayValue.htm)
		 Свойство DisplayValue
		 определяет отображаемое значение атрибута элемента справочника.


		 ![](../../Property_Image.gif)
		 [DisplayValueById](../../interface/IDynamicInstance/IDynamicInstance.DisplayValueById.htm)
		 Свойство DisplayValueById определяет
		 отображаемое значение атрибута элемента справочника по идентификатору
		 атрибута.


		 ![](../../Property_Image.gif)
		 [DisplayValueByIdx](../../interface/IDynamicInstance/IDynamicInstance.DisplayValueByIdx.htm)
		 Свойство DisplayValueByIdx
		 определяет отображаемое значение атрибута элемента справочника
		 по индексу атрибута.


		 ![](../../Property_Image.gif)
		 [DisplayValueByKey](../../interface/IDynamicInstance/IDynamicInstance.DisplayValueByKey.htm)
		 Свойство DisplayValueByKey
		 определяет отображаемое значение атрибута элемента справочника
		 по ключу атрибута.


		 ![](../../Property_Image.gif)
		 [LoadedChildren](../../interface/IDynamicInstance/IDynamicInstance.LoadedChildren.htm)
		 Свойство LoadedChildren
		 возвращает массив загруженных дочерних элементов указанного элемента
		 справочника.


		 ![](../../Property_Image.gif)
		 [LoadedChildrenCount](../../interface/IDynamicInstance/IDynamicInstance.LoadedChildrenCount.htm)
		 Свойство LoadedChildrenCount
		 возвращает количество загруженных дочерних элементов указанного
		 элемента справочника.


		 ![](../../Property_Image.gif)
		 [LoadedCount](../../interface/IDynamicInstance/IDynamicInstance.LoadedCount.htm)
		 Свойство LoadedCount
		 возвращает количество загруженных элементов справочника.


		 ![](../../Property_Image.gif)
		 [LoaderBlockSize](../../interface/IDynamicInstance/IDynamicInstance.LoaderBlockSize.htm)
		 Свойство LoaderBlockSize
		 определяет размер блока загружаемых элементов справочника.


		 ![](../../Property_Image.gif)
		 [OperationsVisibility](../../interface/IDynamicInstance/IDynamicInstance.OperationsVisibility.htm)
		 Свойство OperationsVisibility
		 возвращает информацию о том, в каких справочниках будут отображаться
		 изменения.


		 ![](../../Property_Image.gif)
		 [OwnerOfLoadedNode](../../interface/IDynamicInstance/IDynamicInstance.OwnerOfLoadedNode.htm)
		 Свойство OwnerOfLoadedNode
		 возвращает индекс элемента, являющегося родителем по отношению
		 к указанному загруженному элементу.


		 ![](../../Property_Image.gif)
		 [OwnerOfUnloadedLeaf](../../interface/IDynamicInstance/IDynamicInstance.OwnerOfUnloadedLeaf.htm)
		 Свойство OwnerOfUnloadedLeaf
		 возвращает индекс элемента, являющегося родителем по отношению
		 к указанному незагруженному элементу.


		 ![](../../Property_Image.gif)
		 [ParentInstance](../../interface/IDynamicInstance/IDynamicInstance.ParentInstance.htm)
		 Свойство ParentInstance
		 возвращает родительский справочник.


		 ![](../../Property_Image.gif)
		 [PreSetMark](../../interface/IDynamicInstance/IDynamicInstance.PreSetMark.htm)
		 Свойство PreSetMark
		 возвращает множество, которому принадлежит справочник.


		 ![](../../Property_Image.gif)
		 [RootInstance](../../interface/IDynamicInstance/IDynamicInstance.RootInstance.htm)
		 Свойство RootInstance
		 возвращает справочник - источник данных.


		 ![](../../Property_Image.gif)
		 [UnloadedChildren](../../interface/IDynamicInstance/IDynamicInstance.UnloadedChildren.htm)
		 Свойство UnloadedChildren
		 возвращает массив незагруженных дочерних элементов указанного
		 элемента справочника.


		 ![](../../Property_Image.gif)
		 [UnloadedLeavesCount](../../interface/IDynamicInstance/IDynamicInstance.UnloadedLeavesCount.htm)
		 Свойство UnloadedLeavesCount
		 возвращает количество незагруженных дочерних элементов указанного
		 элемента справочника.


		 ![](../../Property_Image.gif)
		 [UnloadedLeavesTotalCount](../../interface/IDynamicInstance/IDynamicInstance.UnloadedLeavesTotalCount.htm)
		 Свойство UnloadedLeavesTotalCount
		 возвращает количество незагруженных элементов справочника.


## Методы объекта класса, унаследованные от [IDynamicInstance](../../interface/IDynamicInstance/IDynamicInstance.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AccomplishIndexSetup](../../interface/IDynamicInstance/IDynamicInstance.AccomplishIndexSetup.htm)
		 Метод AccomplishIndexSetup
		 применяет изменения значений атрибутов элементов.


		 ![](../../Sub_Image.gif)
		 [Add](../../interface/IDynamicInstance/IDynamicInstance.Add.htm)
		 Метод Add добавляет
		 новый элемент в справочник.


		 ![](../../Sub_Image.gif)
		 [CanClone](../../interface/IDynamicInstance/IDynamicInstance.CanClone.htm)
		 Метод CanClone определяет,
		 можно ли создать копию справочника.


		 ![](../../Sub_Image.gif)
		 [CanMergeWith](../../interface/IDynamicInstance/IDynamicInstance.CanMergeWith.htm)
		 Метод CanMergeWith
		 определяет, можно ли объединить справочники.


		 ![](../../Sub_Image.gif)
		 [Clone](../../interface/IDynamicInstance/IDynamicInstance.Clone.htm)
		 Метод Clone создает
		 копию справочника.


		 ![](../../Sub_Image.gif)
		 [CreateAttributes](../../interface/IDynamicInstance/IDynamicInstance.CreateAttributes.htm)
		 Метод CreateAttributes
		 возвращает коллекцию атрибутов справочника.


		 ![](../../Sub_Image.gif)
		 [CreateAttributesInstance](../../interface/IDynamicInstance/IDynamicInstance.CreateAttributesInstance.htm)
		 Метод CreateAttributesInstance
		 возвращает коллекцию экземпляров атрибутов справочника.


		 ![](../../Sub_Image.gif)
		 [CreateBlocks](../../interface/IDynamicInstance/IDynamicInstance.CreateBlocks.htm)
		 Метод CreateBlocks
		 возвращает коллекцию блоков справочника.


		 ![](../../Sub_Image.gif)
		 [CreateBlocksInstance](../../interface/IDynamicInstance/IDynamicInstance.CreateBlocksInstance.htm)
		 Метод CreateBlocksInstance
		 возвращает коллекцию экземпляров блоков справочника.


		 ![](../../Sub_Image.gif)
		 [CreateDimElementArray](../../interface/IDynamicInstance/IDynamicInstance.CreateDimElementArray.htm)
		 Метод CreateDimElementArray
		 возвращает массив элементов справочника.


		 ![](../../Sub_Image.gif)
		 [HasLeavesAllowedToUnload](../../interface/IDynamicInstance/IDynamicInstance.HasLeavesAllowedToUnload.htm)
		 Метод HasLeavesAllowedToUnload возвращает
		 признак наличия незагруженных дочерних элементов указанного элемента
		 справочника.


		 ![](../../Sub_Image.gif)
		 [HasLoadedChildren](../../interface/IDynamicInstance/IDynamicInstance.HasLoadedChildren.htm)
		 Метод HasLoadedChildren
		 возвращает признак наличия загруженных дочерних элементов указанного
		 элемента справочника.


		 ![](../../Sub_Image.gif)
		 [InitInstance](../../interface/IDynamicInstance/IDynamicInstance.InitInstance.htm)
		 Метод InitInstance
		 инициализирует справочник.


		 ![](../../Sub_Image.gif)
		 [IsLeafLoaded](../../interface/IDynamicInstance/IDynamicInstance.IsLeafLoaded.htm)
		 Метод IsLeafLoaded
		 возвращает признак того, что элемент справочника загружен.


		 ![](../../Sub_Image.gif)
		 [IsLeafUnloaded](../../interface/IDynamicInstance/IDynamicInstance.IsLeafUnloaded.htm)
		 Метод IsLeafUnloaded
		 возвращает признак того, что элемент справочника не загружен.


		 ![](../../Sub_Image.gif)
		 [LoadEntireInstance](../../interface/IDynamicInstance/IDynamicInstance.LoadEntireInstance.htm)
		 Метод LoadEntireInstance
		 загружает все элементы справочника.


		 ![](../../Sub_Image.gif)
		 [MergeWith](../../interface/IDynamicInstance/IDynamicInstance.MergeWith.htm)
		 Метод MergeWith объединяет
		 справочники.


		 ![](../../Sub_Image.gif)
		 [Move](../../interface/IDynamicInstance/IDynamicInstance.Move.htm)
		 Метод Move перемещает
		 указанный элемент.


		 ![](../../Sub_Image.gif)
		 [PresetChildRange](../../interface/IDynamicInstance/IDynamicInstance.PresetChildRange.htm)
		 Метод PresetChildRange
		 устанавливает начальное количество дочерних элементов указанного
		 элемента справочника.


		 ![](../../Sub_Image.gif)
		 [RearrangeChildren](../../interface/IDynamicInstance/IDynamicInstance.RearrangeChildren.htm)
		 Метод RearrangeChildren
		 упорядочивает элементы, принадлежащие указанному родительскому
		 элементу и расположенные на одном уровне.


		 ![](../../Sub_Image.gif)
		 [Remove](../../interface/IDynamicInstance/IDynamicInstance.Remove.htm)
		 Метод Remove удаляет
		 указанный элемент из справочника.


См. также:


[Классы
 сборки Dimensions](../KeDims_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
