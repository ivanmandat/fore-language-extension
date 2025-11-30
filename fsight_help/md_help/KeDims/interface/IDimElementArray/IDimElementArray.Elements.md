# IDimElementArray.Elements

IDimElementArray.Elements
-


# IDimElementArray.Elements


## Синтаксис


Elements: [IDimElements](../IDimElements/IDimElements.htm);


## Описание


Свойство Elements возвращает
 объект, содержащий все элементы справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    ElemArr: IDimElementArray;

	    Elem: IDimElements;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    ElemArr:=Dimen.Blocks.Item(0).Elements;

	    Elem:=ElemArr.Elements;

	End Sub UserProc;


После выполнения примера в переменной «Elem» будут содержаться все элементы
 справочника.


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
