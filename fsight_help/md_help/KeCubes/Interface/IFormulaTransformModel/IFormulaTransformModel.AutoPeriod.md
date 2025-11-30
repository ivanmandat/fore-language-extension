# IFormulaTransformModel.AutoPeriod

IFormulaTransformModel.AutoPeriod
-


# IFormulaTransformModel.AutoPeriod


## Синтаксис


AutoPeriod: [TransformModelAutoPeriodOptions](../../Enums/TransformModelAutoPeriodOptions.htm);


## Описание


Свойство AutoPeriod определяет
 условия, которые используются для вычисления границ периодов идентификации
 и прогнозирования.


## Комментарии


Данное свойство позволяет задать следующие параметры расчёта границ
 периодов:


		 Дата начала периода идентификации
		 Дата окончания периода идентификации
		 Дата начала периода прогнозирования
		 Дата окончания периода прогнозирования


		 Определенная
		 дата (по умолчанию).
		 Определенная дата (по умолчанию).
		 Определенная дата (по умолчанию)
		 Определенная дата (по умолчанию).


		 Сегодня плюс/минус
		 k
		 точек.
		 Сегодня плюс/минус k
		 точек.
		 Сегодня плюс/минус k
		 точек.
		 Сегодня плюс/минус k
		 точек.


		 Начало данных
		 плюс/минус k
		 точек.
		 Конец данных плюс/минус k
		 точек.
		 Конец прогнозирования плюс/минус k
		 точек.
		 Конец данных плюс/минус k
		 точек.


		 Конец идентификации
		 минус k
		 точек.
		 Начало идентификации плюс k
		 точек.
		 Начало идентификации плюс k
		 точек.
		 Конец идентификации плюс k
		 точек.


		 Начало данных плюс k
		 точек.
		 Конец идентификации плюс k
		 точек.


Параметр k задается следующими
 свойствами:


	- начало периода идентификации: [IFormulaTransformModel.IdentificationStartOffset](IFormulaTransformModel.IdentificationStartOffset.htm);


	- окончание периода идентификации: [IFormulaTransformModel.IdentificationEndOffset](IFormulaTransformModel.IdentificationEndOffset.htm);


	- начало периода прогнозирования: [IFormulaTransformModel.ForecastStartDateOffset](IFormulaTransformModel.ForecastStartDateOffset.htm);


	- окончание периода прогнозирования: [IFormulaTransformModel.ForecastEndOffset](IFormulaTransformModel.ForecastEndOffset.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором «WB_AUTOPERIOD», содержащей вычисляемый ряд. Данный
 ряд должен быть первым в таблице данных и рассчитываться с помощью прогнозного
 метода.


Добавьте ссылки на системные сборки: Cubes, Express, Laner, Metabase,
 Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    ErAn: IEaxAnalyzer;

    Laner: ILaner;

    Series: ILanerSeries;

    Serie: ILanerCalculateSerie;

    TransformModel: IFormulaTransformModel;

Begin

    mb := MetabaseClass.Active;

    ErAn := mb.ItemById("WB_AUTOPERIOD").Edit As IEaxAnalyzer;

    Laner := ErAn.Laner;

    Series := Laner.Series;

    Serie := Series.Item(0) As ILanerCalculateSerie;

    TransformModel := Serie.Transform;

    TransformModel.AutoPeriod := TransformModelAutoPeriodOptions.IdentStartByFact

        Or TransformModelAutoPeriodOptions.IdentEndByFact

        Or TransformModelAutoPeriodOptions.ForecastStartByIdentEnd

        Or TransformModelAutoPeriodOptions.ForecastEndByIdentEnd;

    TransformModel.IdentificationStartOffset := 2;

    TransformModel.IdentificationEndOffset := -1;

    TransformModel.ForecastStartDateOffset := 1;

    TransformModel.ForecastEndOffset := 10;

    TransformModel.UsePeriod := True;

    (ErAn As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для первого вычисляемого ряда будут установлены
 следующие параметры границ расчёта:


	- начало периода идентификации: начало данных плюс два периода;


	- окончание периода идентификации: окончание данных минус один
	 период;


	- начало периода прогнозирования: окончание идентификации плюс
	 один период;


	- окончание периода прогнозирования: окончание идентификации плюс
	 десять периодов.


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
