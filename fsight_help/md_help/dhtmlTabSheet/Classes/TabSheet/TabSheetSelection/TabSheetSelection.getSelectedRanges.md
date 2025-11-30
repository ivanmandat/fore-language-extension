# TabSheetSelection.getSelectedRanges

TabSheetSelection.getSelectedRanges
-


**


# TabSheetSelection.getSelectedRanges


## Синтаксис


getSelectedRanges();


## Описание


Метод getSelectedRanges** возвращает массив выделенных в таблице диапазонов ячеек.


## Комментарии


*Метод возвращает массив объектов типа* PP.Ui.[TabSheetRange](../TabSheetRange/TabSheetRange.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Выделим в таблице ячейку A0 и диапазон B1-C2, а затем определим количество ячеек в каждом выделенном диапазоне:


// Получим объект выделения
var objSelection = tabSheet.getSelection();
// Выделим два диапазона ячеек
objSelection.select(tabSheet.getRange(1, 2, 2, 1), false, tabSheet.coord(1, 2));
objSelection.select(tabSheet.getRange(0, 0, 0, 0), true, tabSheet.coord(0, 0));
// Получим выделенные области таблицы
var selectedRanges = objSelection.getSelectedRanges();
for (var i in selectedRanges) {
    var range = selectedRanges[i];
    // Получим количество ячеек в этой области
    var count = range.getCoordsCount();
    console.log("Количество ячеек в выделенной области: " + count)
};

В результате выполнения примера в таблице были одновременно выделены ячейка A0 и диапазон B1-C2:


![](TabSheetSelection.eachSelectedArea.png)


Также в консоли браузера было выведено количество ячеек во всех выделенных диапазонах таблицы:


Количество ячеек в выделенном диапазоне: 4


Количество ячеек в выделенном диапазоне: 1


См. также:


[TabSheetSelection](TabSheetSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
