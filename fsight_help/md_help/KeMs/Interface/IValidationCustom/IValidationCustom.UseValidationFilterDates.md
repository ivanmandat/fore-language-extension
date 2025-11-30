# IValidationCustom.UseValidationFilterDates

IValidationCustom.UseValidationFilterDates
-


# IValidationCustom.UseValidationFilterDates


## Синтаксис


UseValidationFilterDates: [ValidationFilterDataOptions](../../Enums/ValidationFilterDataOptions.htm);


## Описание


Свойство UseValidationFilterDates
 определяет, каким образом учитывать даты расчёта, заданные для валидации.


## Комментарии


Для определения дат расчёта валидации используйте свойства: [IValidationFilter.StartDateSettings](../IValidationFilter/IValidationFilter.StartDateSettings.htm)
 и [IValidationFilter.EndDateSettings](../IValidationFilter/IValidationFilter.EndDateSettings.htm).


По умолчанию валидация применяется только на периоде расчёта, то есть
 UseValidationFilterDates = ValidationFilterDataOptions.PeriodByValidation.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 LanerBox с идентификатором «LanerBox1»
 и UiErAnalyzer с идентификатором
 «UiErAnalyzer1». «UiErAnalyzer1» является источником данных для «LanerBox1»
 и содержит загруженный экспресс-отчёт. В репозитории предполагается наличие
 БД временных рядов с идентификатором «TSDB», содержащая правило расчёта
 валидации типа «Сравнение с выражением» с идентификатором «VALIDATION».


Добавьте ссылки на системные сборки: Metabase, Ms.


Sub UserProc;

Var

    Express: IEaxAnalyzer;

    DiagRpt: IDiagnosticReport;

    Slice: IEaxDataAreaSlice;

    mb: IMetabase;

    ValFilter: IValidationFilter;

    ValCustom: IValidationCustom;

    Out: IMsDatePeriod;

Begin

    // Получаем экспресс-отчёт

    Express := UiErAnalyzer1.ErAnalyzer;

    // Создаем диагностический отчёт

    DiagRpt := Express.Grid.DiagnosticReport;

    If DiagRpt = Null Then

        DiagRpt := New DiagnosticReport.Create;

        Express.Grid.DiagnosticReport := DiagRpt;

    End If;

    // Задаем даты расчёта экспресс-отчёта

    Slice := Express.DataArea.Slices.Item(0);

    Slice.ExtendedPeriodStart := DateTime.Parse("01.01.1990");

    Slice.ExtendedPeriodEnd := DateTime.Parse("01.01.2007");

    Slice.UseExtendedPeriod := True;

    // Получаем пользовательскую валидацию

    mb := MetabaseClass.Active;

    ValFilter := mb.ItemByIdNamespace("VALIDATION", mb.GetObjectKeyById("TSDB")).Edit As IValidationFilter;

    // Задаём параметры валидации

    ValCustom := ValFilter.Details As IValidationCustom;

    // Задаём параметры расчёта валидации

    Out := ValCustom.Transform.OutputPeriod As IMsDatePeriod;

    Out.AutoPeriod := MsAutoPeriodOptions.AllByOwner;

    Out.Start := DateTime.Parse("01.01.1993");

    Out.End_ := DateTime.Parse("01.01.2007");

    ValCustom.UseValidationFilterDates := ValidationFilterDataOptions.PeriodByValidation;

    // Сохраняем изменения в валидации

    ValFilter.MetabaseObject.Save;

    // Применяем валидацию к экспресс-отчёту

    Slice.Validations.Add(ValFilter);

    Express.Grid.Refresh;

End Sub UserProc;


Результат выполнения примера: для экспресс-отчёта, загруженного в «UiErAnalyzer1»,
 будет применено правило валидации на периоде расчёта.


См. также:


[IValidationCustom](IValidationCustom.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
