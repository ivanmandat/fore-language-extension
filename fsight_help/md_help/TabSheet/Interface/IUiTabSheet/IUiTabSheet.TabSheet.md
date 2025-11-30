# IUiTabSheet.TabSheet

IUiTabSheet.TabSheet
-


# IUiTabSheet.TabSheet


## Синтаксис


TabSheet: [ITabSheet](../ITabSheet/ITabSheet.htm);


## Описание


Свойство TabSheet возвращает
 объект, реализующий интерфейс ITabSheet.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    UiTabSheet1.TabSheet.View.Scale:=1.2;

	End Sub Button1OnClick;


После выполнения примера, при нажатии кнопки мыши будет изменен масштаб
 таблицы.


См. также:


[IUiTabSheet](IUiTabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
