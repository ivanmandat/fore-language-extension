# TableViewPanel.Source

TableViewPanel.Source
-


**


# TableViewPanel.Source


## Синтаксис


Source: [PP.Exp.EaxDocument](../EaxDocument/EaxDocument.htm);


## Описание


Свойство Source** определяет источник данных для вкладки «Вид».


## Пример 1


Для выполнения примера необходимо наличие на html-странице компонента [EaxPropertyBar](../../../Components/Express/EaxPropertyBar/EaxPropertyBar.htm) с наименованием «eaxPropBar» (см. «[Пример совместного размещения EaxPropertyBar и EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)»). Далее получим объект класса TableViewPanel, укажем для него источник данных, покажем и раскроем соответствующую вкладку, а также выведем выбранные значения:


var items = eaxPropBar.getControl().getItems();
for (var i = 0; i < items.length; i++) {
    if (items[i].getTypeName() == "TableViewPanel") {
        var tableViewPanel = items[i];
        // Зададим источник данных
        PP.Object.defineProps(PP.Exp.Ui.TableViewPanel, ["Source"], eaxPropBar.getSource());
        // Покажем панель
        tableViewPanel.show();
        // Раскрываем панель
        tableViewPanel.expand(true);
        // Получаем выбранное значение в пункте "Автоподгонка ячеек"
        console.log(tableViewPanel.getAutoFitState().mode); // "Auto"
        // Получаем выбранное значение в пункте "Разметка (заголовки столбцов и строк)"
        console.log(tableViewPanel.getHeadersState());
        // Получаем выбранное значение в пункте "Отображение иерархий"
        console.log(tableViewPanel.getHierarchiesState().grid.columnsHierarchical);
        // Получаем выбранное значение в пункте "Способ сортировки"
        console.log(tableViewPanel.getSortingState().pivot);
        // Получаем выбранное значение в пункте "Стиль оформления"
        console.log(tableViewPanel.getTableStyleState().PredefinedStyle);
    }
}

В результате выполнения примера будет задан источник данных для вкладки «Вид», она будет показана и раскрыта, а также будут выведены выбранные в ней значения.


## Пример 2


Пример использования свойства также приведен на странице «[Конструктор TableViewPanel](Constructor_TableViewPanel.htm)».


См. также:


[TableViewPanel](TableViewPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
