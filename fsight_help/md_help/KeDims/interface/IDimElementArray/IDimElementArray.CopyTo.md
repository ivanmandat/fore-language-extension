# IDimElementArray.CopyTo

IDimElementArray.CopyTo
-


# IDimElementArray.CopyTo


## Синтаксис


CopyTo(Dest: [IDimElementArray](IDimElementArray.htm);
 Replace: Boolean);


## Параметры


Dest. Приёмник, в который необходимо
 скопировать элементы.


Replace. Параметр, определяющий,
 будут ли заменяться элементы в приёмнике. Если True,
 то приёмник перед копированием очищается, если False
 - элементы добавляются в конец массива.


## Описание


Метод CopyTo осуществляет копирование
 массива элементов в приёмник Dest.


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

	    ElemArr1:=Elem.Children(11);

	    ElemArr.CopyTo(ElemArr1, True);

	End Sub UserProc;


После выполнения примера элементы массива «ElemArr» будут скопированы
 в массив «ElemArr1». Содержимое «ElemArr1» перед копированием будет очищено.


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
