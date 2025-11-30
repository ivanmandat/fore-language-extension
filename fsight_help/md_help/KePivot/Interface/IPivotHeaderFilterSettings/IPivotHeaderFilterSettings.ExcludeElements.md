# IPivotHeaderFilterSettings.ExcludeElements

IPivotHeaderFilterSettings.ExcludeElements
-


# IPivotHeaderFilterSettings.ExcludeElements


## Синтаксис


ExcludeElements: Boolean;


## Описание


Свойство ExcludeElements определяет,
 будут ли исключаться элементы из настроек фильтрации.


## Комментарии


Допустимые значения:


	- True. Элементы будут исключаться из настроек фильтрации;


	- False. Элементы из настроек фильтрации исключаться не будут.


Для удаления элементов по отметке используйте [IPivotHeaderFilterSettings.ExcludeSelection](IPivotHeaderFilterSettings.ExcludeSelection.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчет с идентификатором «EXPRESS_FILTER». Отчет содержит таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    DimSel: IDimSelection;

    LeftHeader: IPivotHeader;

    LeftFilter: IPivotHeaderFilterSettings;

    Filter: IPivotFilter;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS_FILTER").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы

    Pivot := Express.Pivot;

    //Параметры фильтрации в таблице

    Filter := Pivot.Filter;

    // Измерения, расположенные по строкам

    LeftHeader := Pivot.LeftHeader;

    // Получим параметры фильтрации для заголовков строк

    LeftFilter := LeftHeader.Settings.Filter;

    // Исключим отметку

    DimSel := Pivot.Selection.Item(0);

    LeftFilter.ExcludeSelection := DimSel;

    LeftFilter.ExcludeElements := True;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера фильтрация не применится к исключенной отметке.


См. также:


[IPivotHeaderFilterSettings](IPivotHeaderFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
