# TabSheetBox.OnScaleChange

TabSheetBox.OnScaleChange
-


# TabSheetBox.OnScaleChange


## Синтаксис


Sub OnScaleChange(Sender:
 Object; Args: [ITabScaleEventArgs](../../Interface/ITabScaleEventArgs/ITabScaleEventArgs.htm));


Begin


//набор операторов


End Sub
 OnScaleChange;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args -
 параметр, позволяющий определить дополнительные параметры события.


## Описание


Событие OnScaleChange возникает
 при изменении масштаба таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnScaleChange
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnScaleChange(Sender: Object; Args: ITabScaleEventArgs);

	Var

	    d: Double;

	Begin

	    d:=Args.Scale;

	End Sub TabSheetBox1OnScaleChange;


После выполнения события в переменной «d» будет содержаться новый масштаб
 таблицы.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
