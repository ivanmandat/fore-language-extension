# Структура справочников

Структура справочников
-


# Структура справочников


Все справочники платформы имеют схожую структуру. Для просмотра информации
 о любом справочнике в сборке Dimensions
 реализован ряд интерфейсов. Общим интерфейсом, отражающим структуру любого
 справочника, является интерфейс [IDimensionModel](../../interface/IDimensionModel/IDimensionModel.htm).


## Атрибуты


В основе любого справочника лежит набор атрибутов. Каждый атрибут справочника
 связывается с каким-либо полем источника и в дальнейшем по атрибутам можно
 получить значения. В справочнике существует ряд атрибутов, имеющих определенное
 назначение:


	- [Наименование](../../interface/IDimAttributes/IDimAttributes.Name.htm)
	 - атрибут, значения которого являются наименованиями элементов;


	- [Идентификатор](../../interface/IDimAttributes/IDimAttributes.Id.htm)
	 - атрибут, значения которого являются идентификаторами элементов и
	 позволяют уникальным образом определить элементы;


	- [Порядок](../../interface/IDimAttributes/IDimAttributes.Order.htm)
	 - атрибут, по значениям которого осуществляется сортировка;


	- [Пиктограмма
	 элемента](../../interface/IDimAttributes/IDimAttributes.ImageIndex.htm) - атрибут, значения которого определяют индекс пиктограммы,
	 отображаемой рядом с элементом;


	- [Доступ
	 на чтение](../../interface/IDimAttributes/IDimAttributes.ReadAccess.htm) - атрибут, значения которого определяют маску доступа
	 к элементам справочника;


	- [Доступ
	 на запись](../../interface/IDimAttributes/IDimAttributes.WriteAccess.htm) - атрибут, значения которого определяют маску доступа
	 для редактирования значений по соответствующим элементам справочника.


Один и тот же атрибут справочника может иметь несколько назначений.


Для получения информации по атрибутам справочника используйте интерфейс
 [IDimAttributes](../../interface/IDimAttributes/IDimAttributes.htm):


	Var

	    //…

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    Attrs: IDimAttributes;

	    //…

	Begin

	    //…

	    MB := MetabaseClass.Active;

	    DimModel := MB.ItemById("DimSource").Bind As IDimensionModel;

	    Attrs := DimModel.Attributes;

	    //…


## Сортировка


По атрибутам можно настроить сортировку. При создании табличного справочника
 через мастер в список сортировки по умолчанию добавляется атрибут «[Порядок](../../interface/IDimAttributes/IDimAttributes.Order.htm)».
 Для получения информации о коллекции атрибутов, по которым производится
 сортировка справочника, используйте интерфейс [IDimOrders](../../interface/IDimOrders/IDimOrders.htm):


	Var

	    //…

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    Attrs: IDimAttributes;

	    Orders: IDimOrders;

	    //…

	Begin

	    //…

	    MB := MetabaseClass.Active;

	    DimModel := MB.ItemById("DimSource").Bind As IDimensionModel;

	    Attrs := DimModel.Attributes;

	    Orders := Attrs.Orders;

	    //…


## Структура


Структура справочника включает в себя блоки
 и индексы.


### Блоки


Ключевыми моментом, определяющим всю иерархию элементов справочника,
 являются блоки справочника. Блоки
 предназначены для объединения элементов в иерархическую структуру по какому-либо
 признаку. В различных справочниках может быть разное количество блоков
 различных типов. Для получения информации по блокам справочника используйте
 интерфейс [IDimBlocks](../../interface/IDimBlocks/IDimBlocks.htm):


Var

    //…

    MB: IMetabase;

    DimModel: IDimensionModel;

    Blocks: IDimBlocks;

    //…

Begin

    //…

    MB := MetabaseClass.Active;

    DimModel := MB.ItemById("DimSource").Bind As IDimensionModel;

    Blocks := DimModel.Blocks;

    //…


### Индексы


Если в будущем предполагается управление отметкой справочника через
 ядро, то в справочнике должны быть созданы индексы.
 Индексы создаются по тем атрибутам, по значениям которых будет формироваться
 отметка. Для получения информации по индексам справочника используйте
 интерфейс [IDimIndexes](../../interface/IDimIndexes/IDimIndexes.htm):


Var

    //…

    MB: IMetabase;

    DimModel: IDimensionModel;

    Indexes: IDimIndexes;

    //…

Begin

    //…

    MB := MetabaseClass.Active;

    DimModel := MB.ItemById("DimSource").Bind As IDimensionModel;

    Indexes := DimModel.Indexes;

    //…


## Уровни


Если справочник предназначен для использования в кубах, то для дальнейшей
 настройки агрегации данных в справочнике должны быть созданы уровни. Для
 получения информации по уровням справочника используйте интерфейс [IDimLevels](../../interface/IDimLevels/IDimLevels.htm):


Var

    //…

    MB: IMetabase;

    DimModel: IDimensionModel;

    Levels: IDimLevels;

    //…

Begin

    //…

    MB := MetabaseClass.Active;

    DimModel := MB.ItemById("DimSource").Bind As IDimensionModel;

    Levels := DimModel.Levels;

    //…


См. также:


[Введение](../KeDims_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
