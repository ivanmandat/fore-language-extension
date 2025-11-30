# ITabTableStyles.Add

ITabTableStyles.Add
-


# ITabTableStyles.Add


## Синтаксис


Add: [ITabTableStyle](../ITabTableStyle/ITabTableStyle.htm);


## Описание


Метод Add добавляет стиль в
 коллекцию.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Range: ITabRange;

	    TSheet: ITabSheet;

	    TTStyles: ITabTableStyles;

	    TStyle: ITabTableStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    Range := TSheet.View.Selection.Range;

	    TTStyles := Range.TableStyles;

	    TStyle := TTStyles.Add;

	    TStyle.AssignPredefined(TabTablePredefinedStyle.DarkRed);

	End Sub Button1OnClick;


После выполнения примера, для выделенной области ячеек таблицы будет
 создан стиль оформления. Параметры созданного стиля будут установлены
 в соответствии с параметрами базового темно-красного стиля оформления.


См. также:


[ITabTableStyles](ITabTableStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
