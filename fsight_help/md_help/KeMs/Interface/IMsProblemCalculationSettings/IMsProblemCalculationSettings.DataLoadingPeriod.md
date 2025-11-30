# IMsProblemCalculationSettings.DataLoadingPeriod

IMsProblemCalculationSettings.DataLoadingPeriod
-


# IMsProblemCalculationSettings.DataLoadingPeriod


## Синтаксис


DataLoadingPeriod: [IMsDataLoadingPeriod](../IMsDataLoadingPeriod/IMsDataLoadingPeriod.htm);


## Описание


Свойство DataLoadingPeriod возвращает параметры периода загрузки данных при расчете задачи моделирования.


## Комментарии


DataLoadingPeriod служит для оптимизации загрузки данных. Изменяя границы периода можно загружать лишь необходимые данные.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MS», содержащего задачу моделирования с идентификатором «PROBLEM».


Добавьте ссылки на системные сборки: «Metabase», «Ms».


			Sub UserProc;

Var

    Mb: IMetabase;

    MsDescr: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    CalcSett: IMsProblemCalculationSettings;

    LoadingPeriod: IMsDataLoadingPeriod;

    ProblemCalc: IMsProblemCalculation;

Begin

    Mb := MetabaseClass.Active;

    // Получаем задачу моделирования
    MsDescr := Mb.ItemById("MS");

    Problem := Mb.ItemByIdNamespace("PROBLEM", MsDescr.Key).Edit As IMsProblem;

    // Получаем параметры расчёта задачи
    CalcSett := Problem.CreateCalculationSettings;

    // Задаем период загрузки данных
    LoadingPeriod := CalcSett.DataLoadingPeriod;

    LoadingPeriod.UseDefault := False;

    LoadingPeriod.StartDate := DateTime.Parse("01.01.2003");

    LoadingPeriod.EndDate := DateTime.Parse("01.01.2013");

    // Задаем режим вывода предупреждений
    CalcSett.FilterWarnings := True;

    // Задаем режим вывода данных в результирующий ряд
    CalcSett.ClearSeriesOnWarning := True;

    // Выполняем расчёт
    ProblemCalc := Problem.Calculate(CalcSett);

    ProblemCalc.Run;

    // Сохраняем задачу
    (Problem As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера задача будет рассчитана с данными, которые были загружены на указанный период. Если в процессе расчёта возникло предупреждение, то результирующий ряд будет очищен.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
