# TabSheetSelection.eachSelectedRange

TabSheetSelection.eachSelectedRange
-


**


# TabSheetSelection.eachSelectedRange


## Синтаксис


eachSelectedRange(action: function, context: Object);


## Параметры


*action. *Функция, которую нужно выполнить над каждым выделенным диапазоном в таблице;


*context.** *Контекст, из которого вызван данный метод.


## Описание


Метод eachSelectedRange** выполняет указанную функцию для каждого выделенного диапазона.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Выделим в таблице ячейку A0 и диапазон B1-C2, а затем определим количество ячеек в каждом выделенном диапазоне:


// Создадим функцию, определяющую количество ячеек в выделенном диапазоне
var eachSelectionAction = function (range) {
    // Получим количество ячеек в этой области
    var count = range.getCoordsCount();
    console.log("Количество ячеек в выделенном диапазоне: " + count)
};
// Получим объект выделения
var objSelection = tabSheet.getSelection();
// Выделим два диапазона ячеек
objSelection.select(tabSheet.getRange(1, 2, 2, 1), false, tabSheet.coord(1, 2));
objSelection.select(tabSheet.getRange(0, 0, 0, 0), true, tabSheet.coord(0, 0));
// Обеспечим корректность выделенных диапазонов в таблице
objSelection.ensureSelectionValid();
// Определим количество ячеек во всех выделенных диапазонах
objSelection.eachSelectedRange(eachSelectionAction, objSelection);

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
