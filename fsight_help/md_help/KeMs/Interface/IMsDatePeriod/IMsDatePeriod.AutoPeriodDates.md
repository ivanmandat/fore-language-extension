# IMsDatePeriod.AutoPeriodDates

IMsDatePeriod.AutoPeriodDates
-


# IMsDatePeriod.AutoPeriodDates


## Синтаксис


		AutoPeriodDates(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);


		                Coord:
		 [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);


		                Var
		 AutoStartDate: DateTime;


		                Var
		 AutoEndDate: DateTime);


## Параметры


Calculation. Настройки, необходимые
 при расчёте модели;


Coord. Параметры координаты
 в переменной, по которой будет производиться расчёт;


AutoStartDate. Дата начала
 периода;


AutoEndDate. Дата окончания
 периода.


## Описание


Метод AutoPeriodDates возвращает
 границы периода, если используются условия для вычисления дат начала и
 окончания периода.


## Комментарии


Параметры AutoStartDate и AutoEndDate должны быть переменными.
 После выполнения метода они будут содержать результаты.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащим модель с идентификатором
 MODEL_FREEDIM.


Добавьте ссылки на системные сборки: Metabase, Ms.


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

		    StDate, EndDate: DateTime;

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

		    OutputPeriod := trans.OutputPeriod As IMsDatePeriod;

		    // Очищаем параметры периода выгрузки данных

		    OutputPeriod.ClearPeriod;

		    // Задаем параметры автопериода: период выгрузки данных определяется текущей датой

		    OutputPeriod.AutoPeriod := MsDateAutoPeriodOptions.StartAsNow Or MsDateAutoPeriodOptions.EndAsNow;

		    // Задаем смещение дат начала и окончания периода выгрузки данных

		    OutputPeriod.StartOffset := 1;

		    OutputPeriod.EndOffset := 2;

		    // Получаем и выводим в окно консоли даты начала и окончания периода выгрузки данных

		    OutputPeriod.AutoPeriodDates(calc, coo, StDate, EndDate);

		    Debug.WriteLine("Начало выгрузки данных: " + StDate.ToString);

		    Debug.WriteLine("Окончание выгрузки данных: " + EndDate.ToString);

		    // Сохраняем изменения

		    (pModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для модели будут заданы периоды расчёта
 и выгрузки данных. Период выгрузки данных будет задан с помощью условий,
 фактические даты периода будут выведены в окно консоли.


См. также:


[IMsDatePeriod](IMsDatePeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
