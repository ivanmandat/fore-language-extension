# IDimElementArray.CreateCopy

IDimElementArray.CreateCopy
-


# IDimElementArray.CreateCopy


## Синтаксис


CreateCopy: [IDimElementArray](IDimElementArray.htm);


## Описание


Метод CreateCopy создает копию
 массива элементов.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr, ElemArr1: IDimElementArray;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    ElemArr:=Elem.Children(10);

	    ElemArr1:=ElemArr.CreateCopy;

	End Sub UserProc;


После выполнения примера в переменной «ElemArr1» будет содержаться копия
 массива «ElemArr».


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
