# ITabTableStyles.Item

ITabTableStyles.Item
-


# ITabTableStyles.Item


## Синтаксис


Item(Index: Integer): [ITabTableStyle](../ITabTableStyle/ITabTableStyle.htm);


## Параметры


Index - индекс стиля оформления,
 который необходимо получить.


## Описание


Свойство Item возвращает указанный
 стиль оформления из коллекции.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TTStyles: ITabTableStyles;

	    TStyle: ITabTableStyle;

	    s: String;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TTStyles := TSheet.TableStyles;

	    TTStyles.Add;

	    TStyle := TTStyles.Item(0);

	    s := TStyle.Name;

	End Sub Button1OnClick;


После выполнения примера, в переменной s
 будет храниться наименование первого стиля оформления таблицы в коллекции.


См. также:


[ITabTableStyles](ITabTableStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
