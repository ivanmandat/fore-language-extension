# IEaxDataAreaHierarchies.Add

IEaxDataAreaHierarchies.Add
-


# IEaxDataAreaHierarchies.Add


## Синтаксис


Add(Slice: [IEaxDataAreaSlice](../IEaxDataAreaSlice/IEaxDataAreaSlice.htm);


    DS: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


    Key: Integer;


    [ElementsToCopy: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm)
 = Null]): [IEaxDataAreaHierarchy](../IEaxDataAreaHierarchy/IEaxDataAreaHierarchy.htm);


## Параметры


Slice. Срез аналитической области
 данных;


DS. Отметка измерения;


Key. Ключ измерения;


ElementsToCopy. Отметка, в
 которую будут добавлены элементы текущей отметки. Не обязательный параметр,
 для игнорирования используйте Null.


## Описание


Метод Add добавляет новую альтернативную
 иерархию в коллекции.


## Комментарии


Для очищения коллекции альтернативных иерархий используйте [IEaxDataAreaHierarchies.Clear](IEaxDataAreaHierarchies.Clear.htm)
 или [IEaxDataAreaHierarchies.ClearAll](IEaxDataAreaHierarchies.ClearAll.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    DimSel: IDimSelection;

	    Hiers: IEaxDataAreaHierarchies;

	    Hier: IEaxDataAreaHierarchy;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим срез источника данных

	    DArea := Express.DataArea;

	    Slice := DArea.Slices.Item(0);

	    //Получим отметку измерения

	    DimSel := Slice.Selection.Item(0);

	    // Создадим новую альтернативную иерархию аналитической области данных

	    Hiers := DArea.Hierarchies;

	    Hier := Hiers.Add(Slice, DimSel, DimSel.Dimension.Key);

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в экспресс-отчете будет создана альтернативная
 иерархия.


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
