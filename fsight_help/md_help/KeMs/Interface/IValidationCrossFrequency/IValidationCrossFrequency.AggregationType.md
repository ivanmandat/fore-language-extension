# IValidationCrossFrequency.AggregationType

IValidationCrossFrequency.AggregationType
-


# IValidationCrossFrequency.AggregationType


## Синтаксис


AggregationType: [MsCollapseType](../../Enums/MsCollapseType.htm);


## Описание


Свойство AggregationType определяет
 тип агрегации данных.


## Комментарии


Для задания сравниваемого уровня динамики используйте свойство [IValidationCrossFrequency.FromLevel](IValidationCrossFrequency.FromLevel.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «TSDB_VALIDATION_PARAMETERS»,
 содержащей правило валидации с идентификатором «VALIDATION».


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    CrossFrequency: IValidationCrossFrequency;

    ComparisonValue: IValidationComparisonValue;

Begin

    Mb := MetabaseClass.Active;

    // Получаем правило валидации

    RubrKey := Mb.GetObjectKeyById("TSDB_VALIDATION_PARAMETERS");

    ValidObj := Mb.ItemByIdNamespace("VALIDATION", RubrKey).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Задаем уровень динамики, к которому применяем правило

    ValidFilter.Level := DimCalendarLevel.Year;

    // Указываем тип валидации

    ValidFilter.Kind := ValidationDetailsKind.CrossFrequency;

    // Получаем параметры валидации «Сравнение уровней динамики»

    CrossFrequency := ValidFilter.Details As IValidationCrossFrequency;

    // Задаем параметры сравнения

    ComparisonValue := CrossFrequency.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.Less;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := 0;

    // Задаем сравниваемый уровень

    CrossFrequency.FromLevel := DimCalendarLevel.Quarter;

    // Задаем тип агрегации

    CrossFrequency.AggregationType := MsCollapseType.Average;

    // Очищаем область выполнения и фильтр валидации

    CrossFrequency.SelectionTargetData.Clear;

    CrossFrequency.SelectionFilter.Clear;

    // Сохраняем правило

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «равнение уровней динамики»: разница
 между средним значением годовой и квартальной динамики должно быть меньше
 нуля.


См. также:


[IValidationCrossFrequency](IValidationCrossFrequency.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
