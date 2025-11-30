# IEaxObjectSelection.Add

IEaxObjectSelection.Add
-


# IEaxObjectSelection.Add


## Синтаксис


Add(Value: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


Value. Добавляемая отметка.


## Описание


Метод Add добавляет указанную
 отметку к отметке объекта.


## Комментарии


Для получения отметки, соответствующей выделенной области, используйте
 свойство [IEaxObjectSelection.Item](IEaxObjectSelection.Item.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EAX_SEL_MANAGER.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IEaxAnalyzer;

	    SelManager: IEaxObjectSelectionManager;

	    ObjSel: IEaxObjectSelection;

	    PivotDims: IPivotDimensions;

	    SelFactory: IDimSelectionSetFactory;

	    SelSet: IDimSelectionSet;

	    i: Integer;

	    Sel: IDimSelection;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Report := mb.ItemById("EAX_SEL_MANAGER").Edit As IEaxAnalyzer;

	    // Получаем объект для работы с отметкой, по которой строится таблица данных

	    SelManager := Report.Grid.SelectionManager;

	    // Получаем отметку в таблице

	    ObjSel := SelManager.Selection;

	    // Получаем измерения, по которым построена таблица

	    PivotDims := Report.Pivot.Dimensions;

	    // Создаем коллекцию отметок

	    SelFactory := New DimSelectionSetFactory.Create;

	    SelSet := SelFactory.CreateDimSelectionSet;

	    For i := 0 To PivotDims.Count - 1 Do

	        Sel := SelSet.Add(PivotDims.Item(i).DimInstance);

	        Sel.SelectElement(1, False);

	    End For;

	    // Добавляем свою отметку к отметкам таблицы

	    ObjSel.Add(SelSet);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера отметка таблицы, соответствующая выделенным
 областям, будет дополнена.


См. также:


[IEaxObjectSelection](IEaxObjectSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
