# TabSheetBox.OnAutoFilter

TabSheetBox.OnAutoFilter
-


# TabSheetBox.OnAutoFilter


## Синтаксис


Sub TabSheetBoxOnAutoFilter(Sender:
 Object; Args: [ITabAutoFilterEventArgs](../../Interface/ITabAutoFilterEventArgs/ITabAutoFilterEventArgs.htm));


Begin


//набор операторов


End Sub
 TabSheetBoxOnAutoFilter;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить колонку, в которой произошло событие.


## Описание


Событие OnAutoFilter возникает
 при установке автофильтра таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnAutoFilter
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnAutoFilter(Sender: Object; Args: ITabAutoFilterEventArgs);

	Var

	    i: Integer;

	Begin

	    i:=Args.Action;

	End Sub TabSheetBox1OnAutoFilter;


После выполнения события в переменной «i» будет содержаться тип выбранного
 условия.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
