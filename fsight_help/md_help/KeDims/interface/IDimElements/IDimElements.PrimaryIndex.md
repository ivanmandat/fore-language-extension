# IDimElements.PrimaryIndex

IDimElements.PrimaryIndex
-


# IDimElements.PrimaryIndex


## Синтаксис


PrimaryIndex(Element: Integer): [IDimIndexInstance](../IDimIndexInstance/IDimIndexInstance.htm);


## Параметры


Element — индекс
 элемента справочника.


## Описание


Свойство PrimaryIndex возвращает
 объект, содержащий первичный индекс, в который входит элемент с индексом
 Element.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    PrimIndex: IDimIndexInstance;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    PrimIndex:=Elem.PrimaryIndex(10);

	    s:=PrimIndex.Index.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первичного индекса в который входит десятый элемент. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
