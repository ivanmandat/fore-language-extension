# IDimAttributeInstance.Value

IDimAttributeInstance.Value
-


# IDimAttributeInstance.Value


## Синтаксис


Value(Element: Integer): Variant;


## Параметры


Element — индекс
 элемента справочника, значение которого необходимо получить.


## Описание


Свойство Value возвращает значение
 атрибута элемента. Индекс элемента передается посредством параметра Element.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Attrs: IDimAttributesInstance;

	    Attr: IDimAttributeInstance;

	    v: Variant;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Attrs:=Dimen.Attributes;

	    Attr:=Attrs.Item(0);

	    v:=Attr.Value(Dimen.Elements.Count-1);

	End Sub UserProc;


После выполнения примера в переменной «v» будет содержаться значение
 первого атрибута последнего элемента справочника.


См. также:


[IDimAttributeInstance](IDimAttributeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
