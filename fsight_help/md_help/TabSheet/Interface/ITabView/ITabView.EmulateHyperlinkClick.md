# ITabView.EmulateHyperlinkClick

ITabView.EmulateHyperlinkClick
-


# ITabView.EmulateHyperlinkClick


## Синтаксис


EmulateHyperlinkClick(Row: Integer; Column: Integer);


## Параметры


Row. Строка, в которой находится
 гиперссылка. Допустимое значение параметра находится в диапазоне [0, [RowsCount](../ITabSheet/ITabSheet.RowsCount.htm));


Column. Столбец, в котором
 находится гиперссылка. Допустимое значение параметра находится в диапазоне
 [0, [ColumnsCount](../ITabSheet/ITabSheet.ColumnsCount.htm)).


## Описание


Метод EmulateHyperlinkClick
 осуществляет эмуляцию щелчка по гиперссылке в указанной ячейке.


## Комментарии


Вызов метода EmulateHyperlinkClick
 приводит к выполнению того [действи](../ITabHyperlink/ITabHyperlink.Action.htm)я,
 на которое настроена гиперссылка. Не поддерживается вызов JavaScript-функции,
 на которую может быть настроена гиперссылка, если осуществляется эмуляция
 щелчка по этой ссылке из кода на Fore.


Если работа осуществляется на форме, то для визуального компонента.
 отображающего таблицу, генерируется событие OnHyperlinkClick.
 Описание события для различных компонентов:


	- [LanerBox.OnHyperlinkClick](KeExpress.chm::/Class/LanerBox/LanerBox.OnHyperlinkClick.htm);


	- [ReportBox.OnHyperlinkClick](KeReport.chm::/Class/ReportBox/ReportBox.OnHyperlinkClick.htm);


	- [TabSheetBox.OnHyperlinkClick](../../Class/TabSheetBox/TabSheetBox.OnHyperlinkClick.htm).


## Пример


	Sub Macro;

	Var

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    View: ITabView;

	    i, j: Integer;

	Begin

	    Rep := PrxReport.ActiveReport;

	    Tab := Rep.ActiveSheet.Table;

	    View := Tab.View;

	    i := Tab.Cell(0, 0).Value As integer;

	    j := Tab.Cell(0, 1).Value As integer;

	    View.EmulateHyperlinkClick(i, j);

	End Sub Macro;


Данный пример является макросом для регламентного отчета. После выполнения
 макроса будет эмулировано нажатие на гиперссылку, находящуюся в ячейке
 с координатами «i» и «j». Данные координаты вводятся в ячейки «А0» и «В0»,
 соответственно.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
