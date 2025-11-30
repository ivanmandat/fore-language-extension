# GridPanel.getItemFromTable

GridPanel.getItemFromTable
-


# GridPanel.getItemFromTable


## Синтаксис


getItemFromTable (rowIndex, colIndex)


## Параметры


rowIndex. Индекс строки.


colIndex. Индекс столбца.


## Описание


Метод getItemFromTable возвращает элемент, входящий в состав таблицы.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [GridPanel](GridPanel.htm) с наименованием «container», в котором содержатся дочерние элементы. Удалим дочерний элемент, расположенный в верхней левой ячейке компонента [GridPanel](GridPanel.htm):


container.remove(container.getItemFromTable(0,0));


После выполнения примера из верхней левой ячейки компонента [GridPanel](GridPanel.htm) будет удален содержащийся в ней дочерний элемент.


См. также:


[GridPanel](GridPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
