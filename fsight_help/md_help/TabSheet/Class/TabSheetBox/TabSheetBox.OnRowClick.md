# TabSheetBox.OnRowClick

TabSheetBox.OnRowClick
-


# TabSheetBox.OnRowClick


## Синтаксис


Sub TabSheetBoxOnRowClick(Sender:
 Object; Args: [ITabRowEventArgs](../../Interface/ITabRowEventArgs/ITabRowEventArgs.htm));


Begin


//набор операторов


End Sub
 TabSheetBoxOnRowClick;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить строку, в котором произошло событие.


## Описание


Событие OnRowClick возникает
 при щелчке по заголовку строки таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnRowClick
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnRowClick(Sender: Object; Args: ITabRowEventArgs);

	Var

	    i: Integer;

	Begin

	    i:=Args.Row;

	End Sub TabSheetBox1OnRowClick;


После выполнения события в переменной «i» будет содержаться номер строки,
 на заголовке которой была нажата левая кнопка мыши.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
