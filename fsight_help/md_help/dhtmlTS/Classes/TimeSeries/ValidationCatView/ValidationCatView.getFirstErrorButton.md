# ValidationCatView.getFirstErrorButton

ValidationCatView.getFirstErrorButton
-


**


# ValidationCatView.getFirstErrorButton


## Синтаксис


getFirstErrorButton();


## Описание


Метод getFirstErrorButton** возвращает кнопку «Первая ошибка» на вкладке «Валидация» ленты инструментов рабочей книги.


## Комментарии


Метод возвращает объект типа [PP.Ui.RibbonButton](dhtmlRibbon.chm::/Classes/RibbonButton/RibbonButton.htm).


При нажатии на данную кнопку в таблице рабочей книги будет выделена ячейка, соответствующая первой ошибке валидации.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)») и с загруженной таблицей в области данных рабочей книги. Также должно быть выполнено правило валидации, которое находит как минимум два недопустимых значения.


Получим координаты ячеек таблицы, соответствующие первой и последующей ошибке валидации:


// Получим ленту инструментов рабочей книги
var ribbon = workbookBox.getRibbonView();
// Получим вкладку «Валидация»
var validationCategory = ribbon.getValidationCategory();
// Отобразим её и откроем
validationCategory.setIsHiddenActive(true)
ribbon.refreshAll();
// Получим таблицу рабочей книги
var tabSheet = workbookBox.getDataView().getGridView().getTabSheet();
// Обработаем событие изменения выделения в таблице
tabSheet.SelectionChanged.add(function () {
    // Получим координаты и значение выбранной ячейки
    var coord = tabSheet.getSelectedCoord();
    console.log("Выделена ячейка с координатами (" + coord.rowIndex + ", " + coord.colIndex + ")")
});
// Получим кнопку «Следующая ошибка»
var nextErrorButton = validationCategory.getNextErrorButton();
// Вызовем событие нажатия на данную кнопку
nextErrorButton.Click.fire(nextErrorButton);
// Получим кнопку «Первая ошибка»
var firstErrorButton = validationCategory.getFirstErrorButton();
// Вызовем событие нажатия на данную кнопку
firstErrorButton.Click.fire(firstErrorButton);

В результате выполнения примера в консоли браузера были выведены координаты первой и последующей ошибки валидации:


Выделена ячейка с координатами (2, 8)


Выделена ячейка с координатами (1, 28)


См. также:


[ValidationCatView](ValidationCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
