# ITabTableStyle.PredefinedStyle

ITabTableStyle.PredefinedStyle
-


# ITabTableStyle.PredefinedStyle


## Синтаксис


PredefinedStyle: [TabTablePredefinedStyle](../../Enums/TabTablePredefinedStyle.htm);


## Описание


Свойство PredefinedStyle возвращает
 значение [чередующегося
 стиля таблицы](UiReport.chm::/desktop/Table/Work/UiReport_Table_WorkStyle.htm) , используемого на листе отчета.


## Комментарии


Используйте свойство для определения, является ли чередующийся стиль
 предустановленным или созданным пользователем.


Если свойство возвращает значение Undefined,
 то чередующийся стиль создан пользователем.


## Пример


Для выполнения примера создайте регламентный отчет и модуль, подключите
 модуль к отчету. В модуле добавьте ссылки на системные сборки Report,
 Tab и Ui. На листе отчета создайте [гиперссылку](UiNav.Chm::/GUI/Format/UiReport_Table_Attribute_Hyperlink.htm)
 на данную процедуру.


	Sub UserProc;

	Var

	    tstyle : ITabTableStyle;

	    tab : ITabSheet;

	    i : Integer;

	    s : String;

	Function getst(j : String): String;

	Var t : String;

	    Begin

	    Select Case j

	        Case "-1": t := "Undefined";

	        Case "0": t := "Blue";

	        Case "1": t := "DarkBlue";

	        Case "2": t := "Red";

	        Case "3": t := "DarkRed";

	        Case "4": t := "Green";

	        Case "5": t := "DarkGreen";

	        Case "6": t := "Purple";

	        Case "7": t := "DarkPurple";

	        Case "8": t := "Orange";

	        Case "9": t := "DarkOrange";

	    End Select;

	    Return t;

	End Function getst;

	Begin

	    tab := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet;

	    For i := 0 To tab.TableStyles.Count - 1 Do

	        tstyle := tab.TableStyles.Item(i);

	        s := s + tstyle.Name + ": " + getst(tstyle.PredefinedStyle.ToString) + #13+#10;

	    End For;

	    WinApplication.InformationBox(s);

	End Sub UserProc;


При нажатии на гиперссылку будет выдаваться информационное сообщение
 со списком предустановленных стилей таблицы, используемых на листе отчета.


См. также:


[ITabTableStyle](ITabTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
