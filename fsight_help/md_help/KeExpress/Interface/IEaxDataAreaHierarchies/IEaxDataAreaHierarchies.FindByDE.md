# IEaxDataAreaHierarchies.FindByDE

IEaxDataAreaHierarchies.FindByDE
-


# IEaxDataAreaHierarchies.FindByDE


## Синтаксис


FindByDE(S: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 Key: Integer; de: Integer): [IEaxDataAreaTransformation](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.htm);


## Параметры


S. Измерение, в котором находится
 альтернативная иерархия;


Key. Ключ измерения;


de. Элемент измерения.


## Описание


Метод FindByDE осуществляет
 поиск формулы преобразования данных по индексу элемента измерения.


## Комментарии


Если формула не будет найдена, то метод вернет значение Null.


Для поиска формулы преобразования данных по идентификатору элемента
 измерения используйте [IEaxDataAreaHierarchies.Find](IEaxDataAreaHierarchies.Find.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS. Отчет содержит таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Hiers: IEaxDataAreaHierarchies;

	    Slice: IEaxDataAreaSlice;

	    DimSel: IDimSelection;

	    Tr, TrDE: IEaxDataAreaTransformation;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим срез источника данных

	    Slice := Express.DataArea.Slices.Item(0);

	    //Получим отметку измерения

	    DimSel := Slice.Selection.Item(3);

	    Hiers := Express.DataArea.Hierarchies;

	    Tr := Hiers.FindByDE(DimSel, Dimsel.Dimension.Key, DimSel.Element(3));

	    TrDE := Hiers.Find(DimSel, Dimsel.Dimension.Key, "Moscow");

	    If Tr = Null Then

	        Debug.WriteLine("Альтернативная иерархия не содержит формулы преобразования данных") Else

	        Debug.WriteLine("Формула преобразования данных = " + Tr.Expression.AsString);

	    End If;

	    If TrDE = Null Then

	        Debug.WriteLine("Альтернативная иерархия не содержит формулы преобразования данных") Else

	        Debug.WriteLine("Удалена формула преобразования данных = " + TrDE.Expression.AsString);

	        Hiers.RemoveDependant(DimSel, Dimsel.Dimension.Key, "Moscow", TrDE);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены формулы преобразования
 данных альтернативной иерархии. Если будет найдена формула преобразования
 по идентификатору элемента измерения, то она будет удалена.


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
