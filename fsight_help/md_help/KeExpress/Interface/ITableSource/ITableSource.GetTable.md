# ITableSource.GetTable

ITableSource.GetTable
-


# ITableSource.GetTable


## Синтаксис


GetTable: [IEaxGrid](../IEaxGrid/IEaxGrid.htm);


## Описание


Свойство GetTable возвращает
 таблицу.


## Комментарии


Для определения источника данных для компонента [TableWidget](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TableWidget.htm)
 используйте свойство [ITableWidget.Source](../ITableWidget/ITableWidget.Source.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- Button с наименованием
	 «Button1»;


	- UiErAnalyzer с наименованием
	 «UiErAnalyzer1»;


	- NavigationBar с
	 наименованием «NavigationBar1»;


	- TableWidget с наименованием
	 «TableWidget1».


В качестве источника данных для компонента «UiErAnalyzer1» укажите экспресс-отчет.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSourse: ITableSource;

	    Grid: IEaxGrid;

	    ColumnsCount, RowsCount: Integer;

	Begin

	    TSourse := TableWidget1.Source;

	    Grid := TSourse.GetTable As IEaxGrid;

	    ColumnsCount := Grid.TabSheet.ColumnsCount-1;

	    RowsCount := Grid.TabSheet.RowsCount-1;

	    Text := "ID: " + Grid.Id + ", Column name: "

	        + Grid.ColumnName(ColumnsCount)+ ", Row name: " + Grid.RowName(RowsCount);

	End Sub Button1OnClick;


При нажатии на кнопку в заголовок формы будут выведены данные о таблице,
 используемой в качестве источника данных для компонента «TableWidget1».


См. также:


[ITableSource](ITableSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
