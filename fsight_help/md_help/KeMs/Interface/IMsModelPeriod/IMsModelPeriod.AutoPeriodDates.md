# IMsModelPeriod.AutoPeriodDates

IMsModelPeriod.AutoPeriodDates
-


# IMsModelPeriod.AutoPeriodDates


## Синтаксис


AutoPeriodDates(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);

    Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);

    Var IdentificationAutoStartDate: DateTime;

    Var IdentificationAutoEndDate: DateTime;

    Var ForecastAutoStartDate: DateTime;

    Var ForecastAutoEndDate: DateTime);


## Параметры


Calculation. Настройки, необходимые
 при расчете модели;


Coord. Параметров координаты
 в переменной, по которой будет производиться расчет;


IdentificationAutoStartDate.
 Начало идентификации;


IdentificationAutoEndDate.
 Окончание идентификации;


ForecastAutoStartDate. Начало
 прогнозирования;


ForecastAutoEndDate. Окончание
 прогнозирования.


## Описание


Метод AutoPeriodDates возвращает
 границы периода расчета модели, если используются условия для вычисления
 дат начала/окончания периодов идентификации и прогнозирования.


## Комментарии


Признак использования условий для вычисления границ периода расчета
 модели возвращает свойство [IMsModel.UseAutoPeriod](../IMsModel/IMsModel.UseAutoPeriod.htm).


Параметры IdentificationAutoStartDate,
 IdentificationAutoEndDate, ForecastAutoStartDate и ForecastAutoEndDate
 должны быть переменными. После выполнения метода они содержат результаты.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором CONT_MODEL, содержащего модель с идентификатором MODEL.
 Границы периода расчета модели определяются условиями. Добавьте ссылки
 на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    MsKey: Integer;

    Model: IMsModel;

    ModelPeriod: IMsModelPeriod;

    Calc: IMsMethodCalculation;

    Transform: IMsFormulaTransform;

    Coord: IMsFormulaTransformCoord;

    IdentStart, IdentEnd, ForeStart, ForeEnd: DateTime;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем модель

    MsKey := mb.ItemById("CONT_MODEL").Key;

    Model := mb.ItemByIdNamespace("MODEL", MsKey).Bind As IMsModel;

    // Получаем периоды модели

    ModelPeriod := Model.Transform.Period;

    // Задаём условия периода расчёта

    If Model.UseAutoPeriod Then

        Calc := Model.CreateCalculation As IMsMethodCalculation;

        Transform := Model.Transform;

        Coord := Transform.CreateCoord(Transform.Outputs.Item(0));

        ModelPeriod.AutoPeriodDates(Calc, Coord, IdentStart, IdentEnd, ForeStart, ForeEnd);

        Debug.WriteLine("Начало идентификации: " + IdentStart.ToString);

        Debug.WriteLine("Окончание идентификации: " + IdentEnd.ToString);

        Debug.WriteLine("Начало прогнозирования: " + ForeStart.ToString);

        Debug.WriteLine("Окончание прогнозирования: " + ForeEnd.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены границы периода
 расчета модели.


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
