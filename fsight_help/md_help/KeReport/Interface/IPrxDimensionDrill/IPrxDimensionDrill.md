# IPrxDimensionDrill

IPrxDimensionDrill
-


# IPrxDimensionDrill


## Описание


Интерфейс IPrxDimensionDrill
 определяет параметры расшифровки, которая реализует настройку гиперссылок
 в области данных для элементов измерения/уровня. Например, при щелчке
 по гиперссылке может производиться переход на другой лист отчета с позиционированием
 на диаграмме, которая отображает данные для выбранного элемента.


При срабатывании гиперссылки выбранному измерению, свойство Dimension,
 передается отметка согласно установленному режиму, свойство Mode,
 после чего вычисляется отчет или лист и осуществляется заданное действие.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Action](IPrxDimensionDrill.Action.htm)
		 Свойство Action определяет
		 действие, производимое при срабатывании гиперссылки.


		 ![](../../Property_Image.gif)
		 [ActionType](IPrxDimensionDrill.ActionType.htm)
		 Свойство ActionType
		 определяет тип действия, выполняемого при щелчке по гиперссылке.


		 ![](../../Property_Image.gif)
		 [Attribute](IPrxDimensionDrill.Attribute.htm)
		 Свойство Attribute
		 определяет атрибут, значение которого будет использоваться для
		 поиска значения в индексе.


		 ![](../../Property_Image.gif)
		 [Attributes](IPrxDimensionDrill.Attributes.htm)
		 Свойство Attributes
		 определяет атрибуты, значения которых будут использоваться для
		 поиска значения в индексе. Свойство следует использовать, если
		 индекс [IPrxDimensionDrill.Index](IPrxDimensionDrill.Index.htm)
		 имеет привязку к нескольким атрибутам.


		 ![](../../Property_Image.gif)
		 [Condition](IPrxDimensionDrill.Condition.htm)
		 Свойство Condition
		 возвращает выражение условия фильтрации, по которому отбираются
		 элементы, не участвующие в расшифровке.


		 ![](../../Property_Image.gif)
		 [Dimension](IPrxDimensionDrill.Dimension.htm)
		 Свойство Dimension
		 определяет измерение, в котором будет производиться модификация
		 отметки.


		 ![](../../Property_Image.gif)
		 [Index](IPrxDimensionDrill.Index.htm)
		 Свойство Index определяет
		 индекс для поиска элементов.


		 ![](../../Property_Image.gif)
		 [Mode](IPrxDimensionDrill.Mode.htm)
		 Свойство Mode определяет
		 способ модификации отметки в измерении.


		 ![](../../Property_Image.gif)
		 [Sheet](IPrxDimensionDrill.Sheet.htm)
		 Свойство Sheet определяет
		 лист отчета, который будет вычисляться при срабатывании гиперссылки.


		 ![](../../Property_Image.gif)
		 [Target](IPrxDimensionDrill.Target.htm)
		 Свойство Target определяет
		 способ загрузки страницы при переходе по ссылке.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)
 | [IPrxDataIslandDimensionCommon](../IPrxDataIslandDimensionCommon/IPrxDataIslandDimensionCommon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
