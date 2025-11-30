# IDimElements.LevelKey

IDimElements.LevelKey
-


# IDimElements.LevelKey


## Синтаксис


LevelKey(Element: Integer): Integer;


## Параметры


Element — индекс
 элемента справочника.


## Описание


Свойство LevelKey возвращает
 ключ уровня справочника, на котором расположен элемент с индексом Element.


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

	    i:=Elem.LevelKey(20);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ уровня
 справочника, на котором расположен указанный элемент.


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
