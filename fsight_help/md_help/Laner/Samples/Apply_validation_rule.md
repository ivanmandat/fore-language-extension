# Создание правила валидации

Создание правила валидации
-


# Создание правила валидации


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «TSDB», для которой будет создано
 новое правило валидации.


Подключите ссылки на следующие системные сборки:


	- Cubes;


	- Metabase.


Пример настройки и применения созданного правила валидации приведен
 на странице «[Настройка и применение правила
 валидации](Validation_rule.htm)».


## Пример


			Sub UserProc;

Var

    Mb: IMetabase;

    Rubr: IRubricator;

    ci: IMetabaseObjectCreateInfo;

    ValObj: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    RubrDescr: IMetabaseObjectDescriptor;

    ValidFilter: IValidationFilter;

    DateSettings: IValidationDateSettings;

    FilterSett: IValidationFilterSettings;

    Level: IValidationLevel;

    ComparisonValue: IValidationComparisonValue;

Begin

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("TSDB");

    Rubr := RubrDescr.Bind As IRubricator;

    // Создаем правило валидации

    ci := Mb.CreateCreateInfo;

    ci.ClassId := MetabaseObjectClass.KE_CLASS_VALIDATIONFILTER;

    ci.Parent := RubrDescr;

    ci.Permanent := True;

    ci.IsTemporary := False;

    ci.KeepEdit := True;

    ci.Name := "Сравнение с числом";

    ci.Id := "NEWVALRULE";

    ValObj := Mb.CreateObject(ci);

    ValidObj := ValObj As IMetabaseObject;

    ValidFilter := ValidObj As IValidationFilter;

    // Задаем начальную и конечную даты расчёта правила

    DateSettings := ValidFilter.StartDateSettings;

    DateSettings.DateOptions := ValidationDateOptions.DependsFromData;

    DateSettings := ValidFilter.EndDateSettings;

    DateSettings.DateOptions := ValidationDateOptions.DependsFromData;

    // Задаем уровень календаря для расчёта правила

    ValidFilter.Level := DimCalendarLevel.Year;

    // Задаем пороговое значение для исключений правила

    ValidFilter.ExceptionsLimit := 500000;

    // Задаем параметры расчёта правила

    FilterSett := ValidFilter.Settings;

    // Задаем тип правила

    ValidFilter.Kind := ValidationDetailsKind.Level;

    Level := ValidFilter.Details As IValidationLevel;

    // Задаем условия правила

    ComparisonValue := Level.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.More;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := 50;

    // Сохраняем правило

    ValidObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге базы данных временных рядов
 будет создано правило валидации с идентификатором «NEWVALRULE».


См. также:


[Примеры](Laner_Samples.htm)
 | [Настройка и применение правила валидации](Validation_rule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
