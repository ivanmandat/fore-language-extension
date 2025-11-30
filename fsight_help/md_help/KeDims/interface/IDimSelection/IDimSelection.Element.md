# IDimSelection.Element

IDimSelection.Element
-


# IDimSelection.Element


## Синтаксис


Element(ElementNumber: Integer): Integer;


## Параметры


ElementNumber.
 Индекс элемента в отметке.


## Описание


Свойство Element возвращает
 индекс элемента в справочнике по индексу элемента в отметке.


## Комментарии


Если предполагается циклическая обработка большого количества отмеченных
 элементов, то рекомендуется с помощью свойства [SelectedElementArray](IDimSelection.SelectedElementArray.htm)
 получить массив отмеченных элементов и с помощью свойства [Element](../IDimElementArray/IDimElementArray.Element.htm) получить индекс элемента в
 справочнике.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    DimInstance: IDimInstance;

    Selection: IDimSelection;

    SelElemtnts: IDimElementArray;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    DimInstance := MB.ItemById("D_TO").Open(Null) As IDimInstance;

    Selection := DimInstance.Elements.Children(11).Selection;

    //Получение индекса последнего отмеченного элемента

    i := Selection.Element(Selection.SelectedCount - 1);

    Debug.WriteLine("Индекс элемента: " + i.ToString);

    //Получение массива отмеченных элементов

    Selection.SelectLevel(0);

    SelElemtnts := Selection.SelectedElementArray(Null);

    For i := 0 To SelElemtnts.Count - 1 Do

        j := SelElemtnts.Element(i);

        //…

        //Дальнейшая работа с индексами
 элементов

        //…

    End For;

End Sub UserProc;


При выполнении примера:


	- Создается отметка из дочерних элементов указанного элемента.


	- В переменную «i» будет передан индекс последнего отмеченного
	 элемента.


	- Отмечаются все элементы, расположенные на том же уровне, на
	 котором расположен элемент с индексом «0».


	- В переменную «SelElemtnts» будет передан массив отмеченных элементов
	 уровня.


	- В цикле осуществляется перебор отмеченных элементов и получены
	 индексы элементов в измерении по индексам элементов в отметке.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
