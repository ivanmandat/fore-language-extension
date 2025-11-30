# IDimElements.Owner

IDimElements.Owner
-


# IDimElements.Owner


## Синтаксис


Owner(Element: Integer): Integer;


## Параметры


Element — индекс
 элемента справочника.


## Описание


Свойство Owner возвращает индекс
 элемента, являющегося родителем по отношению к элементу с индексом Element. «-1» если корневой элемент.


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

	    i:=Elem.Owner(57);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться номер элемента,
 являющегося родителем по отношению к элементу с индексом «57». Идентификатор
 объекта репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
