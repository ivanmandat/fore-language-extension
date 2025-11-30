# ITabScaleEventArgs.Scale

ITabScaleEventArgs.Scale
-


# ITabScaleEventArgs.Scale


## Синтаксис


Scale: Double;


## Описание


Свойство Scale возвращает новый
 масштаб таблицы.


## Пример


	Sub TabSheetBox1OnScaleChange(Sender: Object; Args: ITabScaleEventArgs);

	Var

	    d: Double;

	Begin

	    d:=Args.Scale;

	End Sub TabSheetBox1OnScaleChange;


После выполнения события в переменной «d» будет содержаться новый масштаб
 таблицы.


См. также:


[ITabScaleEventArgs](ITabScaleEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
