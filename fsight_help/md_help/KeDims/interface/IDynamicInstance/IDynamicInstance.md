# IDynamicInstance

IDynamicInstance
-


# IDynamicInstance


Сборка: Dimensions;


## Описание


Интерфейс IDynamicInstance содержит
 свойства и методы табличного справочника НСИ с динамической загрузкой
 данных.


## Иерархия наследования


IDynamicInstance


## Комментарии


При работе с табличным справочником НСИ с динамической загрузкой данных
 элементы подгружаются в память по мере необходимости. Вся иерархия справочника
 загружается полностью при открытии справочника.


Чтобы подключить динамическую загрузку данных используйте свойство [IRdsDictionary.DynamicDimInstance](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.DynamicDimInstance.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributeCount](IDynamicInstance.AttributeCount.htm)
		 Свойство AttributeCount
		 возвращает количество атрибутов справочника.


		 ![](../../Property_Image.gif)
		 [AttributeValue](IDynamicInstance.AttributeValue.htm)
		 Свойство AttributeValue
		 определяет значение атрибута элемента справочника.


		 ![](../../Property_Image.gif)
		 [AttributeValueById](IDynamicInstance.AttributeValueById.htm)
		 Свойство AttributeValueById
		 определяет значение атрибута элемента справочника по идентификатору
		 атрибута.


		 ![](../../Property_Image.gif)
		 [AttributeValueByIdx](IDynamicInstance.AttributeValueByIdx.htm)
		 Свойство AttributeValueByIdx определяет
		 значение атрибута элемента справочника по индексу атрибута.


		 ![](../../Property_Image.gif)
		 [AttributeValueByKey](IDynamicInstance.AttributeValueByKey.htm)
		 Свойство AttributeValueByKey
		 определяет значение атрибута элемента справочника по ключу атрибута.


		 ![](../../Property_Image.gif)
		 [ChildInstance](IDynamicInstance.ChildInstance.htm)
		 Свойство ChildInstance
		 возвращает дочерний справочник по его индексу.


		 ![](../../Property_Image.gif)
		 [ChildrenInstancesCount](IDynamicInstance.ChildrenInstancesCount.htm)
		 Свойство ChildrenInstancesCount
		 возвращает количество дочерних справочников.


		 ![](../../Property_Image.gif)
		 [DeferredIndexSetupFor](IDynamicInstance.DeferredIndexSetupFor.htm)
		 Свойство DeferredIndexSetupFor
		 устанавливает новое значение атрибута элемента.


		 ![](../../Property_Image.gif)
		 [DimensionModel](IDynamicInstance.DimensionModel.htm)
		 Свойство DimensionModel
		 возвращает структуру справочника.


		 ![](../../Property_Image.gif)
		 [DimInstance](IDynamicInstance.DimInstance.htm)
		 Свойство DimInstance
		 возвращает данные справочника.


		 ![](../../Property_Image.gif)
		 [DisplayValue](IDynamicInstance.DisplayValue.htm)
		 Свойство DisplayValue
		 определяет отображаемое значение атрибута элемента справочника.


		 ![](../../Property_Image.gif)
		 [DisplayValueById](IDynamicInstance.DisplayValueById.htm)
		 Свойство DisplayValueById определяет
		 отображаемое значение атрибута элемента справочника по идентификатору
		 атрибута.


		 ![](../../Property_Image.gif)
		 [DisplayValueByIdx](IDynamicInstance.DisplayValueByIdx.htm)
		 Свойство DisplayValueByIdx
		 определяет отображаемое значение атрибута элемента справочника
		 по индексу атрибута.


		 ![](../../Property_Image.gif)
		 [DisplayValueByKey](IDynamicInstance.DisplayValueByKey.htm)
		 Свойство DisplayValueByKey
		 определяет отображаемое значение атрибута элемента справочника
		 по ключу атрибута.


		 ![](../../Property_Image.gif)
		 [LoadedChildren](IDynamicInstance.LoadedChildren.htm)
		 Свойство LoadedChildren
		 возвращает массив загруженных дочерних элементов указанного элемента
		 справочника.


		 ![](../../Property_Image.gif)
		 [LoadedChildrenCount](IDynamicInstance.LoadedChildrenCount.htm)
		 Свойство LoadedChildrenCount
		 возвращает количество загруженных дочерних элементов указанного
		 элемента справочника.


		 ![](../../Property_Image.gif)
		 [LoadedCount](IDynamicInstance.LoadedCount.htm)
		 Свойство LoadedCount
		 возвращает количество загруженных элементов справочника.


		 ![](../../Property_Image.gif)
		 [LoaderBlockSize](IDynamicInstance.LoaderBlockSize.htm)
		 Свойство LoaderBlockSize
		 определяет размер блока загружаемых элементов справочника.


		 ![](../../Property_Image.gif)
		 [OperationsVisibility](IDynamicInstance.OperationsVisibility.htm)
		 Свойство OperationsVisibility
		 возвращает информацию о том, в каких справочниках будут отображаться
		 изменения.


		 ![](../../Property_Image.gif)
		 [OwnerOfLoadedNode](IDynamicInstance.OwnerOfLoadedNode.htm)
		 Свойство OwnerOfLoadedNode
		 возвращает индекс элемента, являющегося родителем по отношению
		 к указанному загруженному элементу.


		 ![](../../Property_Image.gif)
		 [OwnerOfUnloadedLeaf](IDynamicInstance.OwnerOfUnloadedLeaf.htm)
		 Свойство OwnerOfUnloadedLeaf
		 возвращает индекс элемента, являющегося родителем по отношению
		 к указанному незагруженному элементу.


		 ![](../../Property_Image.gif)
		 [ParentInstance](IDynamicInstance.ParentInstance.htm)
		 Свойство ParentInstance
		 возвращает родительский справочник.


		 ![](../../Property_Image.gif)
		 [PreSetMark](IDynamicInstance.PreSetMark.htm)
		 Свойство PreSetMark
		 возвращает множество, которому принадлежит справочник.


		 ![](../../Property_Image.gif)
		 [RootInstance](IDynamicInstance.RootInstance.htm)
		 Свойство RootInstance
		 возвращает справочник - источник данных.


		 ![](../../Property_Image.gif)
		 [UnloadedChildren](IDynamicInstance.UnloadedChildren.htm)
		 Свойство UnloadedChildren
		 возвращает массив незагруженных дочерних элементов указанного
		 элемента справочника.


		 ![](../../Property_Image.gif)
		 [UnloadedLeavesCount](IDynamicInstance.UnloadedLeavesCount.htm)
		 Свойство UnloadedLeavesCount
		 возвращает количество незагруженных дочерних элементов указанного
		 элемента справочника.


		 ![](../../Property_Image.gif)
		 [UnloadedLeavesTotalCount](IDynamicInstance.UnloadedLeavesTotalCount.htm)
		 Свойство UnloadedLeavesTotalCount
		 возвращает количество незагруженных элементов справочника.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AccomplishIndexSetup](IDynamicInstance.AccomplishIndexSetup.htm)
		 Метод AccomplishIndexSetup
		 применяет изменения значений атрибутов элементов.


		 ![](../../Sub_Image.gif)
		 [Add](IDynamicInstance.Add.htm)
		 Метод Add добавляет
		 новый элемент в справочник.


		 ![](../../Sub_Image.gif)
		 [CanClone](IDynamicInstance.CanClone.htm)
		 Метод CanClone определяет,
		 можно ли создать копию справочника.


		 ![](../../Sub_Image.gif)
		 [CanMergeWith](IDynamicInstance.CanMergeWith.htm)
		 Метод CanMergeWith
		 определяет, можно ли объединить справочники.


		 ![](../../Sub_Image.gif)
		 [Clone](IDynamicInstance.Clone.htm)
		 Метод Clone создает
		 копию справочника.


		 ![](../../Sub_Image.gif)
		 [CreateAttributes](IDynamicInstance.CreateAttributes.htm)
		 Метод CreateAttributes
		 возвращает коллекцию атрибутов справочника.


		 ![](../../Sub_Image.gif)
		 [CreateAttributesInstance](IDynamicInstance.CreateAttributesInstance.htm)
		 Метод CreateAttributesInstance
		 возвращает коллекцию экземпляров атрибутов справочника.


		 ![](../../Sub_Image.gif)
		 [CreateBlocks](IDynamicInstance.CreateBlocks.htm)
		 Метод CreateBlocks
		 возвращает коллекцию блоков справочника.


		 ![](../../Sub_Image.gif)
		 [CreateBlocksInstance](IDynamicInstance.CreateBlocksInstance.htm)
		 Метод CreateBlocksInstance
		 возвращает коллекцию экземпляров блоков справочника.


		 ![](../../Sub_Image.gif)
		 [CreateDimElementArray](IDynamicInstance.CreateDimElementArray.htm)
		 Метод CreateDimElementArray
		 возвращает массив элементов справочника.


		 ![](../../Sub_Image.gif)
		 [HasLeavesAllowedToUnload](IDynamicInstance.HasLeavesAllowedToUnload.htm)
		 Метод HasLeavesAllowedToUnload возвращает
		 признак наличия незагруженных дочерних элементов указанного элемента
		 справочника.


		 ![](../../Sub_Image.gif)
		 [HasLoadedChildren](IDynamicInstance.HasLoadedChildren.htm)
		 Метод HasLoadedChildren
		 возвращает признак наличия загруженных дочерних элементов указанного
		 элемента справочника.


		 ![](../../Sub_Image.gif)
		 [InitInstance](IDynamicInstance.InitInstance.htm)
		 Метод InitInstance
		 инициализирует справочник.


		 ![](../../Sub_Image.gif)
		 [IsLeafLoaded](IDynamicInstance.IsLeafLoaded.htm)
		 Метод IsLeafLoaded
		 возвращает признак того, что элемент справочника загружен.


		 ![](../../Sub_Image.gif)
		 [IsLeafUnloaded](IDynamicInstance.IsLeafUnloaded.htm)
		 Метод IsLeafUnloaded
		 возвращает признак того, что элемент справочника не загружен.


		 ![](../../Sub_Image.gif)
		 [LoadEntireInstance](IDynamicInstance.LoadEntireInstance.htm)
		 Метод LoadEntireInstance
		 загружает все элементы справочника.


		 ![](../../Sub_Image.gif)
		 [MergeWith](IDynamicInstance.MergeWith.htm)
		 Метод MergeWith объединяет
		 справочники.


		 ![](../../Sub_Image.gif)
		 [Move](IDynamicInstance.Move.htm)
		 Метод Move перемещает
		 указанный элемент.


		 ![](../../Sub_Image.gif)
		 [PresetChildRange](IDynamicInstance.PresetChildRange.htm)
		 Метод PresetChildRange
		 устанавливает начальное количество дочерних элементов указанного
		 элемента справочника.


		 ![](../../Sub_Image.gif)
		 [RearrangeChildren](IDynamicInstance.RearrangeChildren.htm)
		 Метод RearrangeChildren
		 упорядочивает элементы, принадлежащие указанному родительскому
		 элементу и расположенные на одном уровне.


		 ![](../../Sub_Image.gif)
		 [Remove](IDynamicInstance.Remove.htm)
		 Метод Remove удаляет
		 указанный элемент из справочника.


См. также:


[Интерфейсы
 сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
