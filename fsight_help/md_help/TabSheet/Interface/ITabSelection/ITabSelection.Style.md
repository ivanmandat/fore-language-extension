# ITabSelection.Style

ITabSelection.Style
-


# ITabSelection.Style


## Синтаксис


Style: [TabSelectionStyle](../../Enums/TabSelectionStyle.htm);


## Описание


Свойство Style определяет стиль
 отметки ячеек таблицы.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    UiTabSheet1.TabSheet.View.Selection.Style := TabSelectionStyle.ColumnsOnly;

	End Sub Button1OnClick;


После выполнения примера для таблицы установится возможность отмечать
 только столбцы.


См. также:


[ITabSelection](ITabSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
