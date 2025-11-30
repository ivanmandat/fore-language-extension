# IValidationStatisticalOutliers.LowerPercentile

IValidationStatisticalOutliers.LowerPercentile
-


# IValidationStatisticalOutliers.LowerPercentile


## Синтаксис


LowerPercentile: Integer;


## Описание


Свойство LowerPercentile определяет
 вероятность нижней границы выброса.


## Комментарии


Диапазон допустимых значений свойства: [0, 100].


Для задания вероятности верхней границы выброса используйте свойство
 [IValidationStatisticalOutliers.UpperPercentile](IValidationStatisticalOutliers.UpperPercentile.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_VALIDATION_PARAMETERS», содержащей
 правило валидации с идентификатором «VALIDATION».


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    StatisticalOutliers: IValidationStatisticalOutliers;

Begin

    Mb := MetabaseClass.Active;

    // Получаем ключ базы данных временных рядов

    RubrKey := Mb.GetObjectKeyById("TSDB_VALIDATION_PARAMETERS");

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION", RubrKey).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Задаем календарную динамику проверяемых данных

    ValidFilter.Level := DimCalendarLevel.Year;

    // Задаем тип правила валидации

    ValidFilter.Kind := ValidationDetailsKind.StatisticalOutliers;

    // Настраиваем параметры правила

    StatisticalOutliers := ValidFilter.Details As IValidationStatisticalOutliers;

    // Задаем вероятность
 нижней и верхней границ выбросов

    StatisticalOutliers.LowerPercentile := 10;

    StatisticalOutliers.UpperPercentile := 20;

    // Используем инвертирование ошибок

    StatisticalOutliers.InvertException := True;

    // Выявляем статистические выбросы по точкам динамики

    StatisticalOutliers.OutliersType := ValidationStatisticalOutliersType.CrossDate;

    // Очищаем область выполнения и фильтр валидации

    StatisticalOutliers.SelectionTargetData.Clear;

    StatisticalOutliers.SelectionFilter.Clear;

    // Сохраняем правило

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет перенастроено правило валидации
 «VALIDATION». Для правила заданы следующие параметры:


	- тип правила: «Анализ статистических
	 выбросов»;


	- вероятность нижней границы выброса - 10;


	- вероятность верхней границы выброса - 20;


	- фильтрация проверяемых данных не выполняется;


	- выбросы выявляются по точкам годовой динамики.


См. также:


[IValidationStatisticalOutliers](IValidationStatisticalOutliers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
