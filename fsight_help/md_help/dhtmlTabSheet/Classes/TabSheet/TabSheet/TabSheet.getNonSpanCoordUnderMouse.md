# TabSheet.getNonSpanCoordUnderMouse

TabSheet.getNonSpanCoordUnderMouse
-


**


# TabSheet.getNonSpanCoordUnderMouse


## Синтаксис


getNonSpanCoordUnderMouse(event: MouseEvent);


## Параметры


*event.* Событие курсора мыши.


## Описание


Метод getNonSpanCoordUnderMouse** возвращает текущую координату ячейки под курсором мыши без учета объединений.


## Комментарии


Метод возвращает объект типа PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Объединим ячейки и обработаем событие перемещение курсора мыши MouseMove, выводя в консоли браузера координаты ячеек под курсором и их DOM-элементы:


// Получим диапазон ячеек по заданным координатам
var range = tabSheet.getRange(0, 1, 1, 0);
// Выполним объединение ячеек по полученному диапазону
tabSheet.merge(range)
// Обработаем событие MouseMove
tabSheet.MouseMove.add(function (sender, eventArgs) {
    var e = eventArgs.Event;
    // Получим координаты ячейки по текущей позиции курсора мыши без учета объединений
    var tabSheetCoord = tabSheet.getNonSpanCoordUnderMouse(e);
    console.log("Координаты ячейки: (" + tabSheetCoord.rowIndex + ", " + tabSheetCoord.colIndex + ")");
    // Получим DOM-элемент ячейки
    var domElement = tabSheet.getNodeUnderCoord(tabSheetCoord.rowIndex, tabSheetCoord.colIndex);
    console.log("DOM-элемент:");
    console.log(domElement);
});

В результате выполнения примера были объединены ячейки в диапазоне (0, 0) - (1, 1):


![](TabSheet.calcCoordByOffset.png)


Также при перемещении курсора мыши были выведены координаты ячеек под ним (без учёта их объединения) и DOM-элементы этих ячеек:


Координаты ячейки: (0, 1)

DOM-элемент:

<div id="cell_r_0_c_0_tabSheet1" class="PPUiTabSheetCell" style="background-color: rgb(210, 223, 238); vertical-align: middle; height: 97px; width: 197px;">…</div>

Координаты ячейки: (1, 1)

DOM-элемент:

<div id="cell_r_0_c_0_tabSheet1" class="PPUiTabSheetCell" style="background-color: rgb(210, 223, 238); vertical-align: middle; height: 97px; width: 197px;">…</div>


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
