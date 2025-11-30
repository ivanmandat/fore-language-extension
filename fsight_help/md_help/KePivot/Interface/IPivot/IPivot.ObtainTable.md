# IPivot.ObtainTable

IPivot.ObtainTable
-


# IPivot.ObtainTable


## Синтаксис


ObtainTable: [IPivotTable](../IPivotTable/IPivotTable.htm);


## Описание


Метод ObtainTable осуществляет
 построение и возвращает таблицу данных.


## Комментарии


Если во время работы с данными происходит обновление с помощью метода
 [Refresh](IPivot.Refresh.htm), необходимо получать новый экземпляр
 данных с помощью данного свойства.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 "UiErAnalyzer1", являющегося источником данных для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    OLAP: IEaxAnalyzer;

	    Pivot: IPivot;

	    Table: IPivotTable;

	Begin

	    OLAP := UiErAnalyzer1.ErAnalyzer;

	    Pivot := OLAP.Pivot;

	    Table := Pivot.ObtainTable;

	    Table.Edit;

	    Table.Cell(0, 0) := 100;

	    Table.Post;

	    Pivot.Refresh;

	End Sub Button1OnClick;


После выполнения примера будет получена таблица данных. Для первой ячейки
 будет изменено значение.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
