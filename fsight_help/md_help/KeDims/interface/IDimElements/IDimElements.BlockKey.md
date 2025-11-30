# IDimElements.BlockKey

IDimElements.BlockKey
-


# IDimElements.BlockKey


## Синтаксис


BlockKey(Element: Integer): Integer;


## Параметры


Element - индекс
 элемента справочника.


## Описание


Свойство BlockKey возвращает
 ключ блока справочника, в который входит элемент с индексом Element.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    i:=Elem.BlockKey(20);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ блока
 справочника, в который входит двадцатый элемент. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
