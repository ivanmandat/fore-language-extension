# IMsModelPeriod.GetPeriodSize

IMsModelPeriod.GetPeriodSize
-


# IMsModelPeriod.GetPeriodSize


## Синтаксис


GetPeriodSize(StartDate: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);
 EndDate: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);
 Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm)):
 Integer;


## Параметры


StartDate. Дата и время начала
 временного интервала.


EndDate. Дата и время окончания
 временного интервала.


Level. Величина периода.


## Описание


Метод GetPeriodSize возвращает
 число периодов в заданном временном интервале.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере моделирования
 должна присутствовать задача с идентификатором OBJ_PROBLEM.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Problem: IMsProblem;

    Details: IMsForecastingProblem;

    Period: IMsModelPeriod;

    stDt, endDt: DateTime;

    count: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("OBJ_PROBLEM", MB.ItemById("CONT_MODEL").Key).Bind;

    Problem := MObj As IMsProblem;

    Details := Problem.Details As IMsForecastingProblem;

    Period := Details.Period;

    stDt := Period.ForecastStartDate;

    endDt := Period.ForecastEndDate;

    count := Period.GetPeriodSize(stDt, endDt, DimCalendarLevel.Year);

    Debug.WriteLine("Число лет в периоде прогнозирования задачи: " + count.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено число лет в периоде
 прогнозирования задачи.


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
