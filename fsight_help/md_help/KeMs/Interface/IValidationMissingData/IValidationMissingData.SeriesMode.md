# IValidationMissingData.SeriesMode

IValidationMissingData.SeriesMode
-


# IValidationMissingData.SeriesMode


## Синтаксис


SeriesMode: [ValidationMissingDataSeriesMode](../../Enums/ValidationMissingDataSeriesMode.htm);


## Описание


Свойство SeriesMode определяет
 режим выгрузки выявленных исключений.


## Комментарии


По умолчанию исключения выгружаются на все точки, содержащие пустые
 значения, то есть свойство имеет значение ValidationMissingDataSeriesMode.None.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_VALIDATION_PARAMETERS», содержащей
 правило валидации с идентификатором «VALIDATION».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Drawing, Laner,
 Metabase, Ms, Tab.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    FilterSett: IValidationFilterSettings;

    Color: IGxColor;

    Brush: IGxSolidBrush;

    MissingData: IValidationMissingData;

    SelectionValList: IValidationSelectionValueList;

    SelectionFilter: IValidationSelectionFilter;

Begin

    Mb := MetabaseClass.Active;

    RubrKey := Mb.GetObjectKeyById("TSDB_VALIDATION_PARAMETERS");

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION", RubrKey).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Валидация выполняется по годовым данным

    ValidFilter.Level := DimCalendarLevel.Year;

    // Получаем настройки правила валидации

    FilterSett := ValidFilter.Settings;

    // Задаём оформление исключений

    Color := New GxColor.CreateRGB(218, 150, 148);

    Brush := New GxSolidBrush.Create(Color);

    FilterSett.CellStyle.TabStyle.BackgroundBrush := Brush;

    // Задаём тип валидации: «Пропуски в данных»

    ValidFilter.Kind := ValidationDetailsKind.MissingData;

    // Настраиваем параметры валидации

    MissingData := ValidFilter.Details As IValidationMissingData;

    // Задаём область выявления пропусков

    MissingData.Type := ValidationMissingDataType.InData;

    MissingData.SeriesMode := ValidationMissingDataSeriesMode.None;

    // Указываем, что валидация выполняется по всей базе данных временных рядов

    SelectionValList := MissingData.SelectionTargetData;

    SelectionValList.Clear;

    // Очищаем фильтр валидации

    SelectionFilter := MissingData.SelectionFilter;

    SelectionFilter.Clear;

    // Сохраняем изменения в правиле

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Пропуски в данных». Данное правило
 будет выявлять пропуски внутри годовых данных.


См. также:


[IValidationMissingData](IValidationMissingData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
