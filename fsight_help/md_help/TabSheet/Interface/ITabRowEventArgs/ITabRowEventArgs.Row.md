# ITabRowEventArgs.Row

ITabRowEventArgs.Row
-


# ITabRowEventArgs.Row


## Синтаксис


Row: Integer;


## Описание


Свойство Row возвращает номер
 строки, для которой произошло событие.


## Пример


	Sub TabSheetBox1OnRowClick(Sender: Object; Args: ITabRowEventArgs);

	Var

	    i: Integer;

	Begin

	    i:=Args.Row;

	End Sub TabSheetBox1OnRowClick;


После выполнения события в переменной «i» будет содержаться номер строки,
 на заголовке которой была нажата левая кнопка мыши.


См. также:


[ITabRowEventArgs](ITabRowEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
