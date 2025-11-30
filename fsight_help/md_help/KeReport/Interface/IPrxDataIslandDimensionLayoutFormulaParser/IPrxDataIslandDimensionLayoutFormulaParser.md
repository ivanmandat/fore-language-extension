# IPrxDataIslandDimensionLayoutFormulaParser

IPrxDataIslandDimensionLayoutFormulaParser
-


# IPrxDataIslandDimensionLayoutFormulaParser


## Описание


Интерфейс IPrxDataIslandDimensionLayoutFormulaParser
 содержит свойства и методы для распознавания формулы из текстовой строки.


## Комментарии


Интерфейс предназначен для работы с [областью данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm),
 которая является устаревшим типом таблицы. Для работы с аналитической
 областью данных используйте интерфейс [IEaxDatArea](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Formula](IPrxDataIslandDimensionLayoutFormulaParser.Formula.htm)
		 Свойство Formula возвращает
		 выражение, по которому вычисляется формула.


		 ![](../../Property_Image.gif)
		 [Layout](IPrxDataIslandDimensionLayoutFormulaParser.Layout.htm)
		 Свойство Layout возвращает
		 заголовок, которому принадлежит формула.


		 ![](../../Property_Image.gif)
		 [Node](IPrxDataIslandDimensionLayoutFormulaParser.Node.htm)
		 Свойство Node определяет
		 элемент заголовка, которому принадлежит формула.


		 ![](../../Property_Image.gif)
		 [Term](IPrxDataIslandDimensionLayoutFormulaParser.Term.htm)
		 Свойство Term возвращает
		 терм по индексу.


		 ![](../../Property_Image.gif)
		 [TermCount](IPrxDataIslandDimensionLayoutFormulaParser.TermCount.htm)
		 Свойство TermCount
		 возвращает количество используемых термов.


		 ![](../../Property_Image.gif)
		 [TermElementID](IPrxDataIslandDimensionLayoutFormulaParser.TermElementID.htm)
		 Свойство TermElementID
		 определяет идентификатор элемента измерения для терма выражения.


		 ![](../../Property_Image.gif)
		 [TermNodeKey](IPrxDataIslandDimensionLayoutFormulaParser.TermNodeKey.htm)
		 Свойство TermNodeKey
		 определяет ключ элемента размещения для терма выражения.


		 ![](../../Property_Image.gif)
		 [TermText](IPrxDataIslandDimensionLayoutFormulaParser.TermText.htm)
		 Свойство TermText определяет
		 текст терма.


		 ![](../../Property_Image.gif)
		 [TermType](IPrxDataIslandDimensionLayoutFormulaParser.TermType.htm)
		 Свойство TermType определяет
		 тип терма.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddTerm](IPrxDataIslandDimensionLayoutFormulaParser.AddTerm.htm)
		 Метод AddTerm создает
		 новый терм.


		 ![](../../Sub_Image.gif)
		 [ClearTerms](IPrxDataIslandDimensionLayoutFormulaParser.ClearTerms.htm)
		 Метод ClearTerms осуществляет
		 сброс всех сопоставлений элементов источников данных с термами.


		 ![](../../Sub_Image.gif)
		 [Parse](IPrxDataIslandDimensionLayoutFormulaParser.Parse.htm)
		 Метод Parse осуществляет
		 разбор формулы, заданной в виде текстовой строки.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
