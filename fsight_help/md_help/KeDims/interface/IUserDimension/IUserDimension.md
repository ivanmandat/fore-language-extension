# IUserDimension

IUserDimension
-


# IUserDimension


Сборка: Dimensions;


## Описание


Интерфейс IUserDimension отвечает
 за общую модель и структуру вычисляемого справочника.


## Иерархия наследования


IUserDimension


## Комментарии


При создании нового вычисляемого справочника для его корректной работы
 необходимо произвести следующие минимальные настройки:


	- В коллекции атрибутов [Attributes](IUserDimension.Attributes.htm)
	 должны быть созданы атрибуты с назначением [Наименование](../IUserDimAttributes/IUserDimAttributes.Name.htm)
	 и [Порядок](../IUserDimAttributes/IUserDimAttributes.Order.htm).


	- В коллекции блоков [Blocks](IUserDimension.Blocks.htm)
	 должен быть создан минимум один блок, для всех создаваемых блоков
	 должен быть определён состав [индексов](../IUserDimBlock/IUserDimBlock.Indexes.htm).


	- Используя свойства [ForeModule](IUserDimension.ForeModule.htm)
	 и [ForeSub](IUserDimension.ForeSub.htm), задайте макрос,
	 который будет вычислять элементы справочника.


	- Если по элементам создаваемого справочника в дальнейшем предполагается
	 настройка агрегация данных, то создайте в коллекции [Levels](IUserDimension.Levels.htm)
	 необходимые уровни.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IUserDimension.Attributes.htm)


		 Свойство Attributes
		 возвращает объект, содержащий коллекцию атрибутов справочника.


		 ![](../../Property_Image.gif)
		 [Blocks](IUserDimension.Blocks.htm)


		 Свойство Blocks возвращает
		 объект, содержащий коллекцию блоков справочника.


		 ![](../../Property_Image.gif)
		 [ForeModule](IUserDimension.ForeModule.htm)


		 Свойство ForeModule
		 определяет модуль/форму, в котором содержится макрос, осуществляющий
		 построение справочника.


		 ![](../../Property_Image.gif)
		 [ForeSub](IUserDimension.ForeSub.htm)


		 Свойство ForeSub определяет
		 наименование макроса, выполняющего построение дерева элементов
		 справочника.


		 ![](../../Property_Image.gif)
		 [HideInaccessibleElements](IUserDimension.HideInaccessibleElements.htm)


		 Свойство HideInaccessibleElements
		 определяет состояние опции «Скрывать недоступные элементы в справочнике».


		 ![](../../Property_Image.gif)
		 [Indexes](IUserDimension.Indexes.htm)


		 Свойство Indexes возвращает
		 объект, содержащий коллекцию индексов справочника.


		 ![](../../Property_Image.gif)
		 [Levels](IUserDimension.Levels.htm)


		 Свойство Levels возвращает
		 объект, содержащий коллекцию уровней справочника.


		 ![](../../Property_Image.gif)
		 [ReverseOrder](IUserDimension.ReverseOrder.htm)


		 Свойство ReverseOrder
		 определяет состояние опции «Обратный порядок элементов в справочнике».


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
