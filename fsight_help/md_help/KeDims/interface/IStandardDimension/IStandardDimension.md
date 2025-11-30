# IStandardDimension

IStandardDimension
-


# IStandardDimension


Сборка: Dimensions;


## Описание


Интерфейс IStandardDimension
 отвечает за общую модель и структуру табличного справочника.


## Иерархия наследования


IStandardDimension


## Комментарии


При создании нового табличного справочника для его корректной работы
 необходимо произвести следующие минимальные настройки:


	- В коллекции атрибутов [Attributes](IStandardDimension.Attributes.htm)
	 создайте атрибуты с назначением [Наименование](../IStandardDimAttributes/IStandardDimAttributes.Name.htm),
	 [Идентификатор](../IStandardDimAttributes/IStandardDimAttributes.Id.htm)
	 и [Порядок](../IStandardDimAttributes/IStandardDimAttributes.Order.htm).


	- В коллекции блоков [Blocks](IStandardDimension.Blocks.htm)
	 создайте минимум один блок, для всех создаваемых блоков должен быть
	 определён состав [индексов](../IStandardDimBlock/IStandardDimBlock.Indexes.htm).


	- Для блоков в свойстве [IStandardDimBlock.Dataset](../IStandardDimBlock/IStandardDimBlock.Dataset.htm)
	 укажите источник данных и настройте [привязку
	 полей](../IStandardDimBlock/IStandardDimBlock.Binding.htm).


	- Если по элементам создаваемого справочника в дальнейшем предполагается
	 настройка агрегация данных, то создайте в коллекции [Levels](IStandardDimension.Levels.htm)
	 необходимые уровни.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IStandardDimension.Attributes.htm)
		 Свойство Attributes
		 возвращает объект, содержащий коллекцию атрибутов табличного справочника.


		 ![](../../Property_Image.gif)
		 [Blocks](IStandardDimension.Blocks.htm)
		 Свойство Blocks возвращает
		 объект, содержащий коллекцию блоков табличного справочника.


		 ![](../../Property_Image.gif)
		 [DeduplicateCondition](IStandardDimension.DeduplicateCondition.htm)
		 Свойство DeduplicateCondition
		 определяет метод отбора элементов при удалении дубликатов в справочнике.


		 ![](../../Property_Image.gif)
		 [DeduplicateExpression](IStandardDimension.DeduplicateExpression.htm)
		 Свойство DeduplicateExpression
		 возвращает выражение, используемое для удаления дубликатов в справочнике.


		 ![](../../Property_Image.gif)
		 [HideInaccessibleElements](IStandardDimension.HideInaccessibleElements.htm)
		 Свойство HideInaccessibleElements
		 определяет состояние опции «Скрывать недоступные элементы в справочнике».


		 ![](../../Property_Image.gif)
		 [Indexes](IStandardDimension.Indexes.htm)
		 Свойство Indexes возвращает
		 объект, содержащий коллекцию индексов табличного справочника.


		 ![](../../Property_Image.gif)
		 [Levels](IStandardDimension.Levels.htm)
		 Свойство Levels возвращает
		 коллекцию уровней табличного справочника.


		 ![](../../Property_Image.gif)
		 [ReverseOrder](IStandardDimension.ReverseOrder.htm)
		 Свойство ReverseOrder
		 определяет состояние опции «Обратный порядок элементов в справочнике».


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
