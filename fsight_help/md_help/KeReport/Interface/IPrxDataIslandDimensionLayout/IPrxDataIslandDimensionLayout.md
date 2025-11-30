# IPrxDataIslandDimensionLayout

IPrxDataIslandDimensionLayout
-


# IPrxDataIslandDimensionLayout


## Описание


Интерфейс IPrxDataIslandDimensionLayout
 определяет параметры произвольного заголовка для измерения.


## Комментарии


Интерфейс предназначен для работы с [областью данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm),
 которая является устаревшим типом таблицы. Для работы с аналитической
 областью данных используйте интерфейс [IEaxDatArea](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FitToSelection](IPrxDataIslandDimensionLayout.FitToSelection.htm)
		 Свойство FitToSelection
		 определяет признак учета отметки в измерении среза при выводе
		 произвольного заголовка.


		 ![](../../Property_Image.gif)
		 [RootNodes](IPrxDataIslandDimensionLayout.RootNodes.htm)
		 Свойство RootNodes
		 определяет параметры произвольного заголовка.


		 ![](../../Property_Image.gif)
		 [MergeWithSelection](IPrxDataIslandDimensionLayout.MergeWithSelection.htm)
		 Свойство MergeWithSelection
		 определяет признак соединения произвольного заголовка с элементами,
		 по которым имеется отметка в срезе, но для которых произвольное
		 наименование не определено.


		 ![](../../Property_Image.gif)
		 [PreserveDimensionElementsOrder](IPrxDataIslandDimensionLayout.PreserveDimensionElementsOrder.htm)
		 Свойство PreserveDimensionElementsOrder
		 определяет признак использования порядка элементов размещения
		 как и в измерении.


## Методы


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Build](IPrxDataIslandDimensionLayout.Build.htm)
		 Метод Build добавляет
		 в произвольное размещение элементы, соответствующие отмеченным
		 элементам измерения.


		 ![](../../Sub_Image.gif)
		 [CreateFormulaParser](IPrxDataIslandDimensionLayout.CreateFormulaParser.htm)
		 Метод CreateFormulaParser
		 создает объект, осуществляющий разбор формулы, заданной в виде
		 символьной строки.


		 ![](../../Sub_Image.gif)
		 [Edit](IPrxDataIslandDimensionLayout.Edit.htm)
		 Метод Edit создает
		 копию произвольного размещения для редактирования структуры.


		 ![](../../Sub_Image.gif)
		 [Save](IPrxDataIslandDimensionLayout.Save.htm)
		 Метод Save сохраняет
		 изменения.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
