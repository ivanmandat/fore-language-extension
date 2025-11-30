# IMsModelPeriod.GetLevelDate

IMsModelPeriod.GetLevelDate
-


# IMsModelPeriod.GetLevelDate


## Синтаксис


GetLevelDate(Index: Integer; Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm)):
 [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Параметры


Index. Индекс периода.


Level. Величина периода.


## Описание


Метод GetLevelDate возвращает
 дату и время начала заданного периода.


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

    count: DateTime;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("OBJ_PROBLEM", MB.ItemById("CONT_MODEL").Key).Bind;

    Problem := MObj As IMsProblem;

    Details := Problem.Details As IMsForecastingProblem;

    Period := Details.Period;

    stDt := Period.ForecastStartDate;

    endDt := Period.ForecastEndDate;

    count := Period.GetLevelDate(1, DimCalendarLevel.Day);

    Debug.WriteLine("Второй день периода идентификации задачи: " + count.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведены дата и время
 начала второго дня периода идентификации задачи.


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
