# IDataGrid.Selection

IDataGrid.Selection
-


# IDataGrid.Selection


## Синтаксис


Selection: [IDataGridSelection](../IDataGridSelection/IDataGridSelection.htm);


## Описание


Свойство Selection возвращает
 отметку элементов в компоненте.


## Пример


Для выполнения примера понадобится форма с размещённым на ней компонентом
 «Button» и «DataGrid» с идентификаторами «Button1» и «DataGrid1» соответственно.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    i: Integer;

	Begin

	    i := DataGrid1.Selection.Count;

	End Sub Button1OnClick;


В результате после нажатия на кнопку «Button1» в переменной «s» будет
 содержаться количество отмеченных строк в таблице «DataGrid1».


См. также:


[IDataGrid](IDataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
