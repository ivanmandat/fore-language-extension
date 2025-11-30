# IDataGridRow.Filtered

IDataGridRow.Filtered
-


# IDataGridRow.Filtered


## Синтаксис


Filtered: Boolean;


## Описание


Свойство Filtered возвращает
 признак отображения текущей строки после применения фильтрации в компоненте
 [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


## Комментарии


Свойство возвращает значение True,
 если текущая строка отображается в компоненте после применения какого-либо
 вида фильтрации, и False, если
 строка попадает в список отфильтрованных строк.


Примечание.
 Свойство актуально использовать если в компоненте применен какой-либо
 вид фильтрации. Если фильтрация не используется, то данное свойство для
 любой строки возвращает значение True.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Param: Array[0..2];

	    s: String;

	Begin

	    Param[0] := 3;

	    Param[1] := AutoFilterSelectionCriterion.MinValue;

	    Param[2] := AutoFilterElementNumber.Elements;

	    DataGrid1.Columns.Item(0).SetFilterAction(1, False, Param);

	    If DataGrid1.Rows.Focused.Filtered Then

	        s := "Yes";

	    Else

	        s := "No";

	    End If;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку к первому столбцу таблицы
 будет применен автофильтр, отображающий строки, содержащие три наименьших
 значения. Если после применения фильтрации сфокусированная строка по прежнему
 отображается в компоненте, то в переменной «s» будет содержаться значение
 «Yes», иначе «No».


См. также:


[IDataGridRow](IDataGridRow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
