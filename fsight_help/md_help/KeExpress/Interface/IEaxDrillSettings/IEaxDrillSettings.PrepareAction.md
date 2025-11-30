# IEaxDrillSettings.PrepareAction

IEaxDrillSettings.PrepareAction
-


# IEaxDrillSettings.PrepareAction


## Синтаксис


PrepareAction(Dimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm));


## Параметры


Dimension. Измерение, используемое
 в подстановке.


## Описание


Метод PrepareAction подготавливает
 действие, в котором используется подстановка в виде атрибута измерения.


## Комментарии


Для разбора действия и представления его в текстовом виде используйте
 метод [IEaxDrillSettings.ParseAction](IEaxDrillSettings.ParseAction.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EAX_ACTION. В файловой системе предполагается наличие
 изображений C:\Dim_N.png, где N
 - это ключ элементов измерения, расположенного первым в боковике экспресс-отчета.
 Количество изображений должно совпадать с количеством элементов измерения.


Например, в отчете в боковике первым идёт измерение, содержащее три
 элемента с ключами «301», «303» и «305». Таким образом в файловой системе
 должны присутствовать изображения C:\Dim_301, C:\Dim_303 и C:\Dim_305.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot, Tab.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IEaxAnalyzer;

	    Pivot: IPivot;

	    PivotDim: IPivotDimension;

	    HeadSets: IDataAreaHeaderSettingsBase;

	    Grid: IEaxGrid;

	    DimSettings: IEaxGridDimensionSettings;

	    Drill: IEaxDrillSettings;

	    s: string;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Report := mb.ItemById("EAX_ACTION").Edit As IEaxAnalyzer;

	    // Получаем объект, используемый для построения таблицы данных

	    Pivot := Report.Pivot;

	    // Получаем первое измерение в боковике таблицы

	    PivotDim := Pivot.LeftHeader.PivotDim(0);

	    HeadSets := PivotDim As IDataAreaHeaderSettingsBase;

	    // Получаем таблицу аналитической области данных

	    Grid := Report.Grid;

	    // Указываем, что элементы измерения будут отображаться в виде гиперссылок

	    Grid.ViewSettings.HyperlinkAsText := False;

	    // Получаем настройки первого измерения в боковике таблицы

	    DimSettings := Grid.ViewSettings.GetViewSettings(HeadSets) As IEaxGridDimensionSettings;

	    // Включаем расшифровку для данного измерения

	    If Not DimSettings.IsDrilled Then

	        DimSettings.Drilled := TriState.OnOption;

	    End If;

	    // Получаем настройки расшифровки

	    Drill := DimSettings.Drill;

	    // Назначаем действие, выполняемое при нажатии на гиперссылку элемента измерения

	    Drill.Action := "C:\Dim_&[DIMENSION.KEY].png";

	    Drill.ActionType := TabHyperlinkActionType.OpenFile;

	    // Указываем измерение, которое указано в действии

	    Drill.PrepareAction(PivotDim.DimInstance);

	    // Выполняем разбор действия для первого элемента измерения и выводим его в окно консоли

	    s := Drill.ParseAction(1);

	    Debug.WriteLine(s);

	    // Сохраняем изменения в отчете

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для гиперссылок в боковике таблицы будет
 назначено действие: открыть изображение, соответствующее элементу измерения.


См. также:


[IEaxDrillSettings](IEaxDrillSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
