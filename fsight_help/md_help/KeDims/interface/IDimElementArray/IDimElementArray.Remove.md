# IDimElementArray.Remove

IDimElementArray.Remove
-


# IDimElementArray.Remove


## Синтаксис


Remove(Element: Integer): Boolean;


## Параметры


Element — индекс
 элемента в массиве.


## Описание


Метод Remove осуществляет удаление
 элемента с индексом Element из
 массива и возвращает True в случае
 удачного удаления.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    ElemArr:=Elem.Children(10);

	    If ElemArr.Remove(ElemArr.Count-1) Then

	        s:="Removed";

	    Else

	        s:="It is not removed";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Removed»
 если удаление последнего элемента массива прошло удачно.


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
