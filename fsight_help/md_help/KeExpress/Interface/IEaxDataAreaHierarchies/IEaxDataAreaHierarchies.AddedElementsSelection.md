# IEaxDataAreaHierarchies.AddedElementsSelection

IEaxDataAreaHierarchies.AddedElementsSelection
-


# IEaxDataAreaHierarchies.AddedElementsSelection


## Синтаксис


AddedElementsSelection(Slice: [IEaxDataAreaSlice](../IEaxDataAreaSlice/IEaxDataAreaSlice.htm)):
 [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Параметры


Slice. Срез аналитической области
 данных.


## Описание


Свойство AddedElementsSelection
 возвращает отметку элементов, добавленных пользователем вручную.


## Комментарии


Для добавления элемента из измерения фактов в оригинальную иерархию
 используйте [IEaxDataAreaHierarchies.AddExistingElement](IEaxDataAreaHierarchies.AddExistingElement.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу. Отметка одного из измерений
 должна содержать элементы, добавленные пользователем вручную.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    DA: IEaxDataArea;

	    SelSet: IDimSelectionSet;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Eax := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    DA := Eax.DataArea;

	    SelSet := DA.Hierarchies.AddedElementsSelection(DA.Slices.Item(0));

	    For i := 0 To SelSet.Count - 1 Do

	        Debug.WriteLine("Добавленные в отметку элементы - " + SelSet.Item(i).ToString("", ", ", False));

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены элементы отметки,
 которые были добавлены пользователем вручную.


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
