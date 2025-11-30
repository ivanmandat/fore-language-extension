# TabSheet.getColumnLeftOffset

TabSheet.getColumnLeftOffset
-


**


# TabSheet.getColumnLeftOffset


## Синтаксис


getColumnLeftOffset(colIndex: Number);


## Параметры


*colIndex.* Индекс столбца таблицы.


## Описание


Метод getColumnLeftOffset** возвращает координату, с которой начинается столбец таблицы.


## Комментарии


Метод возвращает объект типа PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим значение отступа сверху, с которого начинается строка с индексом 2, и отступ слева, с которого начинается столбец с индексом 1:


// Зададим индекс строки
var rowIndex = 2;
// Получим отступ сверху, с которого начинается строка с индексом 2
var offset = tabSheet.getRowTopOffset(rowIndex);
console.log("Отступ сверху для строки с индексом " + rowIndex + ": " + offset);
// Зададим индекс столбца
var columnIndex = 1;
// Получим координату, с которой начинается столбец с индексом 1
offset = tabSheet.getColumnLeftOffset(columnIndex);
console.log("Отступ слева для столбца с индексом " + columnIndex + ": " + offset);

В результате выполнения примера в консоли браузера было выведено значение отступа сверху, с которого начинается строка с индексом 2, и отступ слева, с которого начинается столбец с индексом 1:


Отступ сверху для строки с индексом 2: 150

Отступ слева для столбца с индексом 1: 200


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
