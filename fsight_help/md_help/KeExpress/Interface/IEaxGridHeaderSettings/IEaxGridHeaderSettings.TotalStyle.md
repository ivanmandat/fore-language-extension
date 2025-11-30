# IEaxGridHeaderSettings.TotalStyle

IEaxGridHeaderSettings.TotalStyle
-


# IEaxGridHeaderSettings.TotalStyle


## Синтаксис


TotalStyle: [IEaxDataAreaCellStyle](../IEaxDataAreaCellStyle/IEaxDataAreaCellStyle.htm);


## Описание


Свойство TotalStyle определяет
 стиль итогов для заголовка.


## Комментарии


Для настройки размещения заголовка используйте свойство [IEaxGridHeaderSettings.Placement](IEaxGridHeaderSettings.Placement.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 EAX_HEADER_SETT, содержащего итоги по строкам и по столбцам.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Pivot,
 Tab.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Eax: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Pivot: IPivot;

	    PivotHeader: IPivotHeader;

	    SettBase: IDataAreaHeaderSettingsBase;

	    HeaderSettings: IEaxGridHeaderSettings;

	    CellSt: IEaxDataAreaCellStyle;

	    FormatConditions: ITabFormatConditions;

	    FormatCondition: ITabFormatCondition;

	    ValFormat: ITabFormatAverage;

	    Style: ITabCellStyle;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем регламентный отчет

	    Eax := mb.ItemById("EAX_HEADER_SETT").Edit As IEaxAnalyzer;

	    // Получаем настройки отображения таблицы данных

	    Pivot := Eax.Pivot;

	    // Получаем параметры боковика таблицы

	    PivotHeader := Pivot.LeftHeader;

	    // Получаем таблицу данных отчета

	    Grid := Eax.Grid;

	    // Получаем параметры оформления заголовков

	    SettBase := PivotHeader As IDataAreaHeaderSettingsBase;

	    HeaderSettings := Grid.ViewSettings.GetViewSettings(SettBase) As IEaxGridHeaderSettings;

	    // Получаем параметры оформления итогов заголовков

	    CellSt := HeaderSettings.TotalStyle;

	    // Создаем стиль и задаем его параметры

	    Style := New TabCellStyle.Create;

	    Style.Font.Color := GxColor.FromName("Blue");

	    // Создаем условное форматирование и задаем его параметры

	    FormatConditions := New TabFormatConditions.Create;

	    FormatCondition := FormatConditions.Add;

	    FormatCondition.Type := TabConditionType.Average;

	    ValFormat := FormatCondition.Details As ITabFormatAverage;

	    ValFormat.Style := Style;

	    ValFormat.Type := TabFormatAverageType.EqualAbove;

	    // Указываем, что для оформления итогов заголовков

	    /// будет применятся созданный стиль условного форматирования

	    CellSt.FormatConditions := FormatConditions;

	    // Сохраняем отчет

	    (Eax As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для итогов в заголовках таблицы было
 настроено условное форматирование.


См. также:


[IEaxGridHeaderSettings](IEaxGridHeaderSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
