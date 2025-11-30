# IValidationDateSettings.DateOptions

IValidationDateSettings.DateOptions
-


# IValidationDateSettings.DateOptions


## Синтаксис


DateOptions: [ValidationDateOptions](../../Enums/ValidationDateOptions.htm);


## Описание


Свойство DateOptions определяет способ расчета даты.


## Комментарии


Данное свойство позволяет задать следующие параметры периода расчёта валидации:


 Дата начала
 Дата окончания


 Определенная дата (по умолчанию).
 Определенная дата (по умолчанию).


 Сегодня плюс/минус k точек.
 Сегодня плюс/минус k точек.


 Начало данных плюс/минус k точек.
 Конец данных плюс/минус k точек.


## Пример


Для выполнения примера предполагается в репозитории базы данных временных рядов «OBJ_FC». В данной базе предполагается наличие фильтра валидации с идентификатором «OBJ_VALID_FILTER».


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    DateSettings: IValidationDateSettings;

    FilterSett: IValidationFilterSettings;

    Level: IValidationLevel;

    ComparisonValue: IValidationComparisonValue;

    ValidExecSett: IValidationExecuteSettings;

    ValidExecRun: IValidationExecRun;

    MetaAttrValList: IMsMetaAttributeValueList;

Begin

    Mb := MetabaseClass.Active;

    RubrKey := Mb.GetObjectKeyById("OBJ_FC");

    ValidObj := Mb.ItemByIdNamespace("OBJ_VALID_FILTER", RubrKey).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    DateSettings := ValidFilter.StartDateSettings;

    DateSettings.DateOptions := ValidationDateOptions.SpecificDate;

    DateSettings.Date := DateTime.ComposeDay(1990, 1, 1);

    DateSettings := ValidFilter.EndDateSettings;

    DateSettings.DateOptions := ValidationDateOptions.RelativeDate;

    DateSettings.Lag := 0;

    ValidFilter.Level := DimCalendarLevel.Year;

    FilterSett := ValidFilter.Settings;

    FilterSett.Severity := ValidationSeverity.Critical;

    FilterSett.FontColor := New GxColor.CreateRGB(255, 0, 255);

    ValidFilter.Kind := ValidationDetailsKind.Level;

    Level := ValidFilter.Details As IValidationLevel;

    ComparisonValue := Level.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.More;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := 0;

    MetaAttrValList := Level.TargetData;

    MetaAttrValList.Clear;

    ValidObj.Save;

    ValidExecSett := New ValidationExecuteSettings.Create;

    ValidExecRun := ValidFilter.Execute(ValidExecSett);

End Sub UserProc;


После выполнения примера будет определен диапазон дат для расчета фильтра валидации: с 1990 года по сегодняшний день. Затем фильтр валидации будет выполнен для всей базы данных временных рядов.


См. также:


[IValidationDateSettings](IValidationDateSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
