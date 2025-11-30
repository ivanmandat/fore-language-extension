# IDimSelection.IsAnyChildSelected

IDimSelection.IsAnyChildSelected
-


# IDimSelection.IsAnyChildSelected


## Синтаксис


IsAnyChildSelected(Element: Integer): Boolean;


## Параметры


Element — индекс
 элемента в справочнике.


## Описание


Метод IsAnyChildSelected проверяет,
 входят ли дочерние объекты элемента с индексом Element
 в отметку, и возвращает True,
 если входят.


## Пример


			Sub Main;

    Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Selection: IDimSelection;

    s: String;

Begin

    MB:=MetabaseClass.Active;

    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

    Selection:=Dimen.CreateSelection;

    Selection.SelectElement(11,True);

    Selection.SelectElement(30,True);

    Selection.SelectElement(42,True);

    Selection.SelectElement(56,True);

    If Selection.IsAnyChildSelected(20) Then

        s:="Selected";

    Else

        s:="It is not selected";

    End If;

End Sub Main;


После выполнения примера в переменной «s» будет содержаться «Selected»,
 если дочерние объекты элемента с индексом «20» входят в отметку.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
