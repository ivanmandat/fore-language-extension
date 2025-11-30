# IEaxDataAreaHierarchies.PushChangesToDimInstance

IEaxDataAreaHierarchies.PushChangesToDimInstance
-


# IEaxDataAreaHierarchies.PushChangesToDimInstance


## Синтаксис


PushChangesToDimInstance(S: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 CD: [ICustomDimension](KeDims.chm::/interface/ICustomDimension/ICustomDimension.htm));


## Параметры


S. Измерение, в котором находится
 альтернативная иерархия;


CD. Измерение фактов.


## Описание


Метод PushChangesToDimInstance
 применяет накопленные изменения в измерении фактов к измерению с
 альтернативной иерархией.


## Комментарии


Для добавления в измерение фактов элемента из оригинальной иерархии
 используйте [IEaxDataAreaHierarchies.AddExistingElement](IEaxDataAreaHierarchies.AddExistingElement.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу. Среди измерений таблицы
 должны быть территориальное измерение и измерение фактов.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	    Sel: IDimSelection;

	    Hiers: IEaxDataAreaHierarchies;

	    HierKey, Elm, i: Integer;

	    Hier: IEaxDataAreaHierarchy;

	    CustDim: ICustomDimension;

	    Ins: IDimInstance;

	    Elms: IDimElements;

	    ElmName: String;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим коллекцию иерархий

	    Hiers := Express.DataArea.Hierarchies;

	    // Проверка автоматической сортировки

	    If Not Hiers.IsAutoSort Then

	        Hiers.IsAutoSort := True;

	    End If;

	    // Получим срез данных

	    Slice := Express.DataArea.Slices.Item(0);

	    // Получим отметку территориального измерения

	    Sel := Express.Pivot.Selection.Item(3);

	    // Добавим альтернативную иерархию в измерение

	    HierKey := Hiers.CreateKey(Slice.Key, Sel.Dimension.Key);

	    Hier := Hiers.FindByKey(HierKey);

	    If Hier = Null Then

	        Hier := Hiers.Add(Slice, Sel, HierKey);

	        CustDim := Hier.CustomDimension;

	        // Очистим элементы измерения фактов

	        CustDim.Elements.Clear;

	        // Применим изменения из измерения фактов к территориальному измерению

	        Hiers.PushChangesToDimInstance(Sel, CustDim);

	    Else

	        CustDim := Hier.CustomDimension;

	    End If;

	    // Добавим элементы отметки из территориального измерения в измерение фактов

	    Ins := Sel.Dimension;

	    Elms := Ins.Elements;

	    For i := 0 To Sel.SelectedCount - 1 Do

	        Elm := Sel.Element(i);

	        If Elm <> -1 Then

	            ElmName := Elms.Name(Elm);

	            Debug.WriteLine("Наименование элемента в отметке - " + ElmName);

	            Hiers.AddExistingElement(Ins, CustDim, Elm, ElmName);

	        End If;

	    End For;

	    // Применим изменения из измерения фактов к территориальному измерению

	    Hiers.PushChangesToDimInstance(Sel, CustDim);

	    // Обновим и сохраним изменения

	    Express.Pivot.Refresh;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера все изменения из измерения фактов применятся
 к территориальному измерению: будут добавлены в отметку территориального
 измерения имеющиеся элементы из измерения фактов.


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
