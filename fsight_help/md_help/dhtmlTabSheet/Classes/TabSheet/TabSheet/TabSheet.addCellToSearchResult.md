# TabSheet.addCellToSearchResult

TabSheet.addCellToSearchResult
-


# TabSheet.addCellToSearchResult


## Синтаксис


addCellToSearchResult(cell, noRerender);


## Параметры


*cell*. [PP.Ui.TabSheetCell](../TabSheetCell/TabSheetCell.htm)
 / [PP.Ui.TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm)
 / [PP.Ui.TabSheetRange](../TabSheetRange/TabSheetRange.htm)
 / Object {rowIndex, colIndex}. Координаты ячейки;


noRerender. Boolean. Требуется
 ли перерисовывать компонент. При значении false
 - компонент будет перерисован, при значении true
 - не будет перерисован.


## Описание


Метод addCellToSearchResult
 добавляет ячейку к результатам поиска.


## Комментарии


Для определения стиля результатов поиска используйте свойство [TabSheetSettings.SearchResultStyle](../../../Interfaces/TabSheetSettings/TabSheetSettings.SearchResultStyle.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Добавим ячейки в результаты поиска
 и зададим им отдельный стиль, вводя в консоль следующий код:


// Зададим координаты ячеек
cell1 = {rowIndex: "0", colIndex: "0"};
cell2 = {rowIndex: "1", colIndex: "1"};
cell3 = {rowIndex: "2", colIndex: "2"};
// Зададим подсветку ячеек результатов поиска
style = {
  Fill: {
    "@C" : "red" // Заливка ячейки
  }
};
tabSheet.setSearchResultStyle(style);
// Добавим ячейки к результатам поиска
tabSheet.addCellToSearchResult(cell1);
tabSheet.addCellToSearchResult(cell2);
tabSheet.addCellToSearchResult(cell3, true); // Не отрисовываем подсветку

В результате 3 ячейки будут добавлены к результатам поиска, но только
 две будут отрисованы.


Уберем вторую ячейку из результатов поиска и перерисуем изменения:


tabSheet.removeCellFromSearchResult(cell2, true);
tabSheet.liteRerender();

Уберем подсветку результатов поиска:


tabSheet.clearSearchResult();

В результате выполнения примера была настроена подсветка ячеек результатов
 поиска, после чего подсветка была снята.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
