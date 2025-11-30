# TabSheet.addFilter

TabSheet.addFilter
-


**


# TabSheet.addFilter


## Синтаксис


addFilter(colIndex, filterValue, filterFunction,
 startRowIndex, endRowIndex);


## Параметры


*colIndex*. Number. Фильтрируемый столбец;


*filterValue*. String. Значение фильтра;


*filterFunction.* Function: Boolean. Функция, осуществляющая фильтрацию
 данных. Необязательный параметр. Функция имеет следующую сигнатуру:


function(cellValue,
 filterValue) : Boolean;


Данная функция должна возвращать значение
 false, если значение следует скрыть,
 и true, если значение нужно оставить.


По умолчанию функция возвращает true,
 если значение ячейки совпадает с фильтрующим значением.


*startRowIndex.* Number. Индекс строки,
 с которой начинается фильтрация;


*endRowIndex. Number.*
 Индекс строки, которой заканчивается фильтрация.


## Описание


Метод addFilter** добавляет
 фильтр для столбца таблицы.


## Комментарии


Метод не работает, если источник данных является асинхронным.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox.htm)
 с наименованием «grid» (см. «[Пример
 создания компонента GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox_example.htm)»). Регламентный отчет должен
 содержать данные во втором столбце. Зададим фильтр:


// Получим табличный лист
tabSheet = grid.getTabSheet();
// Установим не асинхнронный тип источника данных
model = tabSheet.getModel();
dataS = model.getDataSource();
dataS.setIsAsync(false);
// Скроем строки, содержащие во втором столбце значения отличные от 300.
tabSheet.addFilter(1, "300", null, 0, 5)

В результате выполнения примера был установлен фильтр и оставлены строки,
 содержащие значение 300 во втором столбце


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
