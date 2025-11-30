# PP.Mb.Ui.GridView.HyperlinkClick

PP.Mb.Ui.GridView.HyperlinkClick
-


# GridView.HyperlinkClick


## Синтаксис


HyperlinkClick: function(sender, args, timeout);


## Параметры


args. Информация о событии.
 Доступные аргументы: rowIndex - индекс строки ячейки, в которой находится
 нажатая гиперссылка, colIndex - индекс столбца таблицы данной ячейки,
 hyperlink - объект гиперссылки со свойствами Action, ActionType, Color,
 Enable, Target, Text, Underline , event - событие нажатия курсора мыши
 на гиперссылку;


## Описание


Событие HyperlinkClick наступает
 после нажатия на гиперссылку в таблице.


## Комментарии


Отличие HyperlinkClick от [HyperlinkMouseDown](GridView.HyperlinkMouseDown.htm) состоит
 в том, что событие HyperLinkMouseDown
 срабатывает сразу при нажатии на ссылку, а событие HyperLinkClick
 срабатывает только после того как отработают внутренние обработчики нажатия
 на ссылку.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей
 в рабочей области экспресс-отчета. До выполнения примера таблица экспресс-отчета
 выглядит так, как показано на странице [описания
 класса GridView](GridView.htm).


//Получим таблицу экспресс-отчёта
var data = expressBox.getDataView();
var grid = data.getGridView();
//Получим таблицу
var tab = grid.getTabSheet();
//Отобразим гиперссылки в диапазоне ячеек A0:F5
tab.showHyperlinksOnRange(PP.Ui.TabSheetHyperLinkShowType.All, tab.getRange(0, 0, 5, 5));
//Добавим обработчик события нажатия по гиперссылке
grid.HyperlinkClick.add(function (sender, args) {
console.log("Произошло нажатие на гиперссылку.");
})


В результате выполнения примера была создана гиперссылка в ячейках таблицы,
 при нажатии на которую будет выведено сообщение:


Произошло нажатие на гиперссылку.


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
