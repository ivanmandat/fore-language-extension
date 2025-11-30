# ITabView.Scale

ITabView.Scale
-


# ITabView.Scale


## Синтаксис


Scale: Double;


## Описание


Свойство Scale определяет масштаб
 представления электронной таблицы.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    UiTabSheet1.TabSheet.View.Scale := 1.5;

	End Sub Button1OnClick;


После выполнения примера масштаб представления электронной таблицы будет
 равен 150%.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
