# Workbook.DimUnitsEls

Workbook.DimUnitsEls
-


# Workbook.DimUnitsEls


## Синтаксис


DimUnitsEls: DimElementsSelectionInfo;


## Описание


Свойство DimUnitsEls устанавливает элементы измерения «Единицы измерения».


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами (см. «[Workbook.Hier](Workbook.Hier.htm)») и в обработчике события открытия документа добавить следующий код:


	console.log("Получаем элементы измерения Unit");
	var unitEls = wbk.setDimUnitsEls(3);
	var dimUnitEls = wbk.getDimUnitsEls(unitEls);
	console.log(dimUnitEls);

После выполнения примера в консоль браузера будут получены и выведены в консоль элементы измерения Unit:


Получаем элементы измерения Unit


3


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
