# ITabTableStyle.IsEmpty

ITabTableStyle.IsEmpty
-


# ITabTableStyle.IsEmpty


## Синтаксис


IsEmpty: Boolean;


## Описание


Свойство IsEmpty определяет,
 задан ли стиль оформления таблицы.


## Комментарии


Свойство возвращает значение True,
 если задано оформления одного или более элементов стиля, False
 - не задан стиль оформления ни одного элемента.


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

	    If Not (TStyle.IsEmpty) Then

	        TStyle.IsEmpty := True;

	    End If;

	End Sub Button1OnClick;


В результате выполнения примера если задан стиль таблицы, то все настройки
 оформления будут сброшены.


См. также:


[ITabTableStyle](ITabTableStyle.htm) | [Элементы стиля оформления
 таблицы](ITabTableStyle.Style_Order_rule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
