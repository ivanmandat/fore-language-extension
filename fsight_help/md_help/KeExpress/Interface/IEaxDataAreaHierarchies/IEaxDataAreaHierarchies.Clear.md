# IEaxDataAreaHierarchies.Clear

IEaxDataAreaHierarchies.Clear
-


# IEaxDataAreaHierarchies.Clear


## Синтаксис


Clear(Value: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 Key: Integer);


## Параметры


Value. Отметка измерения, в
 котором находится альтернативная иерархия;


Key. Ключ измерения.


## Описание


Метод Clear удаляет коллекцию
 альтернативных иерархий из указанного измерения.


## Комментарии


Для очищения коллекции из аналитической области данных используйте [IEaxDataAreaHierarchies.ClearAll](IEaxDataAreaHierarchies.ClearAll.htm).


Для добавления альтернативной иерархии в коллекцию используйте [IEaxDataAreaHierarchies.Add](IEaxDataAreaHierarchies.Add.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS. Одно из измерений отчета должно содержать минимум
 одну альтернативную иерархию.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Hiers: IEaxDataAreaHierarchies;

	    Slice: IEaxDataAreaSlice;

	    DimSel: IDimSelection;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим срез источника данных

	    Slice := Express.DataArea.Slices.Item(0);

	    //Получим отметку измерения

	    DimSel := Slice.Selection.Item(0);

	    // Удалим альтернативную иерархию из измерения

	    Hiers := Express.DataArea.Hierarchies;

	    Hiers.Clear(DimSel, DimSel.Dimension.Key);

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера из заданного измерения будут удалены все альтернативные
 иерархии.


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
