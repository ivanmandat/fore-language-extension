# ITabSheet.Table

ITabSheet.Table
-


# ITabSheet.Table


## Синтаксис


Table: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство Table возвращает объект,
 содержащий всю таблицу.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Count: Integer;

	Begin

	    Count := UiTabSheet1.TabSheet.Table.Count;

	End Sub Button1OnClick;


После выполнения примера в переменной «Count» будет храниться количество
 ячеек таблицы.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
