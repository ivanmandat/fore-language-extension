# IDimSelection.SelectedElementArray

IDimSelection.SelectedElementArray
-


# IDimSelection.SelectedElementArray


## Синтаксис


SelectedElementArray(Elements: [IDimElementArray](../IDimElementArray/IDimElementArray.htm)):
 [IDimElementArray](../IDimElementArray/IDimElementArray.htm);


## Параметры


Elements.
 Массив элементов, наличие которых необходимо проверить.


## Описание


Свойство SelectedElementArray
 проверяет наличие элементов, передаваемых посредством параметра Elements, в отметке и возвращает
 массив, содержащий общие элементы.


## Комментарии


Если в качестве значения параметра Elements
 передается значение Null, то метод
 вернет весь массив элементов, входящих в отметку.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Selection: IDimSelection;

	    DimArr, DimArr1: IDimElementArray;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Selection:=Dimen.CreateSelection;

	    Selection.SelectElement(10,False);

	    Selection.SelectElement(15,False);

	    Selection.SelectElement(20,False);

	    Selection.SelectElement(25,False);

	    Selection.SelectElement(30,False);

	    DimArr:=Dimen.Elements.Children(10);

	    DimArr1:=Selection.SelectedElementArray(DimArr);

	    i:=DimArr1.Count;

	End Sub UserProc;


После выполнения примера в массиве «DimArr1» будут содержаться общие
 элементы отметки «Selection» и массива элементов «DimArr».


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
