# ITabSheetBox.Source

ITabSheetBox.Source
-


# ITabSheetBox.Source


## Синтаксис


Source: [ITabSheetSource](../ITabSheetSource/ITabSheetSource.htm);


## Описание


Свойство Source определяет источник
 данных для компонента.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    TabSheetBox1.Source := UiTabSheet1 As ITabSheetSource;

	End Sub Button1OnClick;


При нажатии на кнопку для компонента «TabSheetBox1» в качестве источника
 данных будет установлен «UiTabSheet1».


См. также:


[ITabSheetBox](ITabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
