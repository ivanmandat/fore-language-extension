# TabSheetBox.OnColumnClick

TabSheetBox.OnColumnClick
-


# TabSheetBox.OnColumnClick


## Синтаксис


Sub TabSheetBoxOnColumnClick(Sender:
 Object; Args: [ITabColumnEventArgs](../../Interface/ITabColumnEventArgs/ITabColumnEventArgs.htm));


Begin


//набор операторов


End Sub TabSheetBoxOnColumnClick;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить столбец, в котором произошло событие.


## Описание


Событие OnColumnClick возникает
 при щелчке по заголовку столбца таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnColumnClick
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnColumnClick(Sender: Object; Args: ITabColumnEventArgs);

	Var

	    i: Integer;

	Begin

	    i:= Args.Column;

	End Sub TabSheetBox1OnColumnClick;


После выполнения события в переменной «i» будет содержаться номер столбца,
 в котором произошло событие.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
