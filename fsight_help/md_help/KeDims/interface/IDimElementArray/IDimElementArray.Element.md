# IDimElementArray.Element

IDimElementArray.Element
-


# IDimElementArray.Element


## Синтаксис


Element(ElementNumber: Integer): Integer;


## Параметры


ElementNumber — индекс
 элемента в массиве.


## Описание


Свойство Element возвращает
 индекс элемента в справочнике, по индексу элемента в массиве.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem := Dimen.Elements;

	    ElemArr := Elem.Children(0);

	    i := ElemArr.Element(ElemArr.Count - 1);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс элемента,
 являющегося последним дочерним элементом для первого элемента справочника.


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
