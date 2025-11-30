# IDimElements.Id

IDimElements.Id
-


# IDimElements.Id


## Синтаксис


Id(Element: Integer): String;


## Параметры


Element — индекс
 элемента справочника.


## Описание


Свойство Id возвращает значение
 атрибута «Идентификатор» у элемента с индексом Element.


## Комментарии


При получении значения данного свойства используется свойство [IDimAttributeInstance.Value](../IDimAttributeInstance/IDimAttributeInstance.Value.htm).


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    s:=Elem.Id(10);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться значение
 атрибута «Идентификатор» у десятого элемента справочника. Идентификатор
 объекта репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
