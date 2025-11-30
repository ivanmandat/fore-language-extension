# IMsMethodCalculation.Warnings

IMsMethodCalculation.Warnings
-


# IMsMethodCalculation.Warnings


## Синтаксис


Warnings: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Свойство Warnings возвращает
 предупреждения, возникшие при расчёте метода.


## Комментарии


Предупреждения возвращаются в виде динамического массива строк.


Если в процессе расчёта возникают предупреждения, то расчёт не прерывается.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего модель с идентификатором
 «MODEL_FREEDIM».


Добавьте ссылки на системные сборки: Collections, Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    DescrCM: IMetabaseObjectDescriptor;

    pModel: IMsModel;

    trans: IMsFormulaTransform;

    coo: IMsFormulaTransformCoord;

    calc: IMsMethodCalculation;

    Period: IMsModelPeriod;

    OutputPeriod: IMsDatePeriod;

    i: integer;

    Method: IMsMethod;

Begin

    // Получаем модель

    mb := MetabaseClass.Active;

    DescrCM := mb.ItemById("MS");

    pModel := mb.ItemByIdNamespace("MODEL_FREEDIM", DescrCM.Key).Edit As IMsModel;

    // Задаем параметры расчёта

    trans := pModel.Transform;

    coo := trans.CreateCoord(trans.Outputs.Item(0));

    calc := trans.CreateCalculation;

    // Задаем периоды расчета

    Period := pModel.Transform.Period;

    calc.Period.IdentificationStartDate := Period.IdentificationStartDate;

    calc.Period.IdentificationEndDate := Period.IdentificationEndDate;

    calc.Period.ForecastStartDate := Period.ForecastStartDate;

    calc.Period.ForecastEndDate := Period.ForecastEndDate;

    calc.CurrentPoint := Period.IdentificationStartDate;

    // Задаем период выгрузки данных

    OutputPeriod := calc.OutputPeriod As IMsDatePeriod;

    // Очищаем параметры периода выгрузки данных

    OutputPeriod.ClearPeriod;

    // Задаем даты начала и окончания периода выгрузки данных

    OutputPeriod.Start := DateTime.Parse("01.01.2010");

    OutputPeriod.End_ := DateTime.Parse("01.01.2016");

    // Выводим информацию о допустимости пустой отметки

    If calc.AllowEmptySelection

        Then Debug.WriteLine("Пустая отметка допускается");

        Else Debug.WriteLine("Пустая отметка не допускается");

    End If;

    // Рассчитываем модель

    Method := trans.FormulaItem(0).Method;

    Method.Execute(calc, coo);

    // Выводим предупреждения в окно консоли

    For i := 0 To calc.Warnings.Count - 1 Do

        Debug.WriteLine(calc.Warnings.Item(i));

    End For;

End Sub UserProc;


Результат выполнения примера: рассчитана модель «MODEL_FREEDIM», предупреждения,
 возникшие в процессе расчёта, выведены в окно консоли.


См. также:


[IMsMethodCalculation](IMsMethodCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
