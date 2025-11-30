# TabSheetSelection.getIsCellActivated

TabSheetSelection.getIsCellActivated
-


**


# TabSheetSelection.getIsCellActivated


## Синтаксис


getIsCellActivated();


## Описание


Метод getIsCellActivated** проверяет, является ли какая-либо ячейка таблицы активной.


## Комментарии


Метод возвращает значение true, если какая-либо ячейка из таблицы является активной, иначе - false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Проверим, является ли ячейка с координатами (1, 1) активной до и во время её редактирования:


// Получим объект выделения
var objSelection = tabSheet.getSelection();
// Выделим ячейку
objSelection.select(tabSheet.getRange(1, 1, 1, 1), false, tabSheet.coord(1, 1));
// Проверяем ячейки в таблице на активность
console.log("Активная ячейка в таблице " + (objSelection.getIsCellActivated() ? "присутствует.": "отсутствует."));
// Начнем редактирование ячейки
tabSheet.edit(objSelection.getRange().getCorners().tlCoord);
// Повторно проверяем ячейки в таблице на активность
console.log("При редактировании таблицы активная ячейка " + (objSelection.getIsCellActivated() ? "присутствует.": "отсутствует."));

В результате выполнения примера было получено, что до и при редактировании значения в таблице активная ячейка отсутствует:


Активная ячейка в таблице отсутствует.


При редактировании значения в таблице активная ячейка отсутствует.


См. также:


[TabSheetSelection](TabSheetSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
