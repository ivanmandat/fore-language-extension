# IDimElements.Block

IDimElements.Block
-


# IDimElements.Block


## Синтаксис


Block(Element: Integer): [IDimBlockInstance](../IDimBlockInstance/IDimBlockInstance.htm);


## Параметры


Element — индекс
 элемента справочника.


## Описание


Свойство Block возвращает объект,
 содержащий блок справочника, в котором находится элемент с индексом Element.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    Block: IDimBlockInstance;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem:=Dimen.Elements;

	    Block:=Elem.Block(89);

	    s:=Block.Block.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 блока справочника, в котором находится «89» элемент. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
