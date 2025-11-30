# TabSheetMeasures.updateData

TabSheetMeasures.updateData
-


**


# TabSheetMeasures.updateData


## Синтаксис


updateData(data);


## Параметры


*data.* JSON-объект со значениями свойств
 класса.


## Описание


Метод updateData** задает
 свойства измерения таблицы.


## Комментарии


Доступные для задания свойства измерения таблицы:


	- @MUR - [MaxRow](TabSheetMeasures.MaxRow.htm);


	- @MUC - [MaxCloumn](TabSheetMeasures.MaxColumn.htm);


	- @DAR - [DisplayAccessRights](TabSheetMeasures.DisplayAccessRights.htm);


	- @DDFB - DisplayDarkFixedBorder - Видимость линии фиксации (Boolean);


	- @DFAL - [DisplayFixedAreaLines](TabSheetMeasures.DisplayFixedAreaLines.htm);


	- @FALC - [FixedAreaLineColor](TabSheetMeasures.FixedAreaLineColor.htm);


	- @FR - FixedRow - Количество фиксированных строк;


	- @FB - [FixedBehaviour](TabSheetMeasures.FixedBehaviour.htm);


	- @FC - FixedColumn - Количество фиксированных столбцов;


	- @DG - [VisibleGrid](TabSheetMeasures.VisibleGrid.htm);


	- @DCN - [VisibleColHeaders](TabSheetMeasures.VisibleColHeaders.htm);


	- @DRN - [VisibleRowHeaders](TabSheetMeasures.VisibleRowHeaders.htm);


	- @H - Высота строки. Может задаваться для Row/DefaultRow;


	- @W - Ширина столбца. Может задаваться для Column/DefaultColumn;


	- @V - Видимость строки/столбца. Может задаваться для Row/Column/DefaultRow/DefaultColumn;


	- @I - Индекс строки/столбца для задания свойств отдельной строки/столбца.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Добавим в обработчик события «onRender»
 задание максимального количества столбцов:


    tabSheet.getMeasures().updateData({
    Structure: { "@MUC": 2 }  // максимальное кол-во столбцов
    });
    tabSheet.rerender();
В результате выполнения примера таблица выведется на экран только с
 3 столбцами.


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
