# ICubeInstanceDestinationExecutor.DrillThrough

ICubeInstanceDestinationExecutor.DrillThrough
-


# ICubeInstanceDestinationExecutor.DrillThrough


## Синтаксис


DrillThrough: [ICubeExecutorDrillThroughItems](../ICubeExecutorDrillThroughItems/ICubeExecutorDrillThroughItems.htm);


## Описание


Свойство DrillThrough возвращает
 коллекцию элементов детализации при расчете куба.


## Комментарии


Для использования данного свойства необходимо, чтобы в свойстве [ICubeInstanceDestinationExecutor.PerformExecuteO](ICubeInstanceDestinationExecutor.PerformExecuteO.htm)
 в качестве параметра использовалось значение перечисления [CubeInstanceDestinationExecutorOptions.DrillThrough](../../Enums/CubeInstanceDestinationExecutorOptions.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие стандартного
 куба с идентификатором CUBE_1.


Добавьте ссылки на системные сборки: Cubes, Dal, Db, Dimensions, Matrix,
 Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    cube: ICubeInstance;

	    dest: ICubeInstanceDestination;

	    executor: ICubeInstanceDestinationExecutor;

	    selset: IDimSelectionSet;

	    i: Integer;

	    dtItems: ICubeExecutorDrillThroughItems;

	Begin

	    // Получим репозиторий

	    mb := MetabaseClass.Active;

	    // Получим куб

	    cube := mb.ItemById("CUBE_1").Open(Null) As ICubeInstance;

	    // Получим объект для работы с назначением куба по умолчанию

	    dest := cube.Destinations.DefaultDestination;

	    // Получим отметку куба

	    selset := dest.CreateDimSelectionSet;

	    For i := 0 To selset.Count - 1 Do

	        selset.Item(i).SelectAll;

	    End For;

	    // Создадим объект для расчета куба

	    executor := dest.CreateExecutor;

	    // Подготовим расчет куба

	    executor.PrepareExecute(selset);

	    // Подготовим расчет куба с детализацией запросов

	    executor.PerformExecuteO(CubeInstanceDestinationExecutorOptions.DrillThrough);

	    // Получим коллекцию элементов детализации при расчете куба

	    dtItems := executor.DrillThrough;

	    If dtItems.Count <> 0 Then

	        For i := 0 To dtItems.Count - 1 Do

	            // Выведем в окно консоли:

	            Debug.WriteLine("Количество значений в полученной матрице результата детализации = " + dtItems.Matrix.ValueCount.ToString);

	            Debug.WriteLine("SQL-запрос:");

	            Debug.WriteLine(dtItems.Item(i).Command.SQL);

	            Debug.WriteLine("Количество полей источника данных = " + dtItems.Item(i).Dataset.Fields.Count.ToString);

	        End For;

	    Else

	        Debug.WriteLine("Количество элементов детализации = 0");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведен SQL-запрос элемента
 детализации и количество полей источника.


См. также:


[ICubeInstanceDestinationExecutor](ICubeInstanceDestinationExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
