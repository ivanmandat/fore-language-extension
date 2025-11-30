# IDimSelection.Iterator

IDimSelection.Iterator
-


# IDimSelection.Iterator


## Синтаксис


Iterator(Elements: [IDimElementArray](../IDimElementArray/IDimElementArray.htm)):
 [IDimIterator](../IDimIterator/IDimIterator.htm);


## Параметры


Elements — массив
 элементов, наличие которых необходимо проверить.


## Описание


Свойство Iterator проверяет
 наличие элементов, передаваемых посредством параметра Elements,
 в отметке и возвращает итератор, содержащий общие элементы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Selection: IDimSelection;

	    DimArr: IDimElementArray;

	    Iter: IDimIterator;

	Begin

	    MB := MetabaseClass.Active;

	    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Selection := Dimen.CreateSelection;

	    Selection.SelectElement(10, False);

	    Selection.SelectElement(15, False);

	    Selection.SelectElement(20, False);

	    Selection.SelectElement(25, False);

	    Selection.SelectElement(30, False);

	    DimArr := Dimen.Elements.Children(10);

	    Iter := Selection.Iterator(DimArr);

	    Iter.First;

	    While Iter.Next Do

	        Debug.WriteLine(Dimen.Elements.Name(Iter.Element));

	    End While;

	End Sub UserProc;


После выполнения примера в итераторе «Iter» будут содержаться общие
 элементы отметки «Selection» и массива элементов «DimArr». Наименования
 данных элементов будут выведены в консоль среды разработки.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
