# GridView.emulateHyperlinkClick

GridView.emulateHyperlinkClick
-


# GridView.emulateHyperlinkClick


## Синтаксис


emulateHyperlinkClick(row, column);


## Параметры


row. Индекс ряда.


column. Индекс столбца.


## Описание


Метод emulateHyperlinkClick
 осуществляет эмуляцию щелчка по гиперссылке.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [GridBox](../../../Components/RegularReport/GridBox/GridBox.htm)
 с наименованием «grid» (cм. «[Пример
 размещения компонента GridBox](../../../Components/RegularReport/GridBox/GridBox_example.htm)»). Отчет должен содержать гиперссылку
 в ячейке с индексами (0, 0):


// Нажмем на гиперссылку
grid.emulateHyperlinkClick(0,0);
В результате выполнения примера было сэмулировано нажатие на гиперссылку
 в ячейке в первой строке первого ряда.


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
