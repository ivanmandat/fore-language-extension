# IDimSelection.IsElementSelected

IDimSelection.IsElementSelected
-


# IDimSelection.IsElementSelected


## Синтаксис


IsElementSelected(Element: Integer): Boolean;


## Параметры


Element — индекс
 элемента в справочнике.


## Описание


Метод IsElementSelected проверяет,
 входит ли элемент справочника с индексом Element
 в отметку и возвращает True если
 входит.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Selection: IDimSelection;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Selection:=Dimen.Elements.Children(11).Selection;

	    If Selection.IsElementSelected(20) Then

	        s:="Selected";

	    Else

	        s:="It is not selected";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Selected»
 если элемент справочника с индексом «20» входит в отметку.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
