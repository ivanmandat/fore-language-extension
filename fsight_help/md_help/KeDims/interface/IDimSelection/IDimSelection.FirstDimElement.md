# IDimSelection.FirstDimElement

IDimSelection.FirstDimElement
-


# IDimSelection.FirstDimElement


## Синтаксис


FirstDimElement: Integer;


## Описание


Свойство FirstDimElement возвращает
 первый выделенный элемент справочника.


## Комментарии


Для получения последнего выделенного элемента справочника используйте
 метод [IDimSelection.LastDimElement](IDimSelection.LastDimElement.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с ключом «6443».


Добавьте ссылки на системные сборки «Metabase», «Dimensions».


			Sub UserProc;

Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Selection: IDimSelection;

    Elem: IDimElements;

    First, Last: Integer;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Dimen := MB.Item(6443).Open(Null) As IDimInstance;

    Selection := Dimen.CreateSelection;

    // добавим все элементы в отметку

    Selection.SelectAll;

    // первый выделенный элемент справочника

    First := Selection.FirstDimElement;

    // последний выделенный элемент справочника

    Last := Selection.LastDimElement;

    Elem := Dimen.Elements;

    Debug.WriteLine("All elements: ");

    Debug.Indent;

    Debug.WriteLine(Selection.ToString("NAME"));

    Debug.Unindent;

    s := Elem.Name(First);

    Debug.WriteLine("First element (" + First.ToString + ") " + s);

    s := Elem.Name(Last);

    Debug.WriteLine("Last element (" + Last.ToString + ") " + s);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения первого
 и последнего элементов справочника.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
