# ILanerTransformPeriod.AutoPeriod

ILanerTransformPeriod.AutoPeriod
-


# ILanerTransformPeriod.AutoPeriod


## Синтаксис


AutoPeriod: [TransformModelAutoPeriodOptions](KeCubes.chm::/Enums/TransformModelAutoPeriodOptions.htm);


## Описание


Свойство AutoPeriod определяет
 условия, которые используются для вычисления границ периодов ретроспективы
 и прогнозирования.


## Комментарии


Данное свойство позволяет задать следующие параметры периода расчёта
 вычисляемого ряда:


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


	- сдвиг начала периода идентификации: [ILanerTransformPeriod.StartOffset](ILanerTransformPeriod.StartOffset.htm);


	- сдвиг окончания периода идентификации: [ILanerTransformPeriod.IdentificationEndOffset](ILanerTransformPeriod.IdentificationEndOffset.htm);


	- сдвиг начала периода прогнозирования: [ILanerTransformPeriod.ForecastStartDateOffset](ILanerTransformPeriod.ForecastStartDateOffset.htm);


	- сдвиг окончания периода прогнозирования: [ILanerTransformPeriod.EndDate](ILanerTransformPeriod.EndDate.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_TR_PERIOD, содержащей вычисляемый ряд.
 Данный ряд должен быть первым в таблице данных и рассчитываться с помощью
 прогнозного метода.


Добавьте ссылки на системные сборки: Cubes, Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    Serie: ILanerCalculateSerie;

	    TransPeriod: ILanerTransformPeriod;

	Begin

	    mb := MetabaseClass.Active;

	    ErAn := mb.ItemById("WORKBOOK_TR_PERIOD").Edit As IEaxAnalyzer;

	    Laner := ErAn.Laner;

	    Series := Laner.Series;

	    Serie := Series.Item(0) As ILanerCalculateSerie;

	    TransPeriod := Serie.TransformPeriod;

	    TransPeriod.AutoPeriod := TransformModelAutoPeriodOptions.IdentStartByFact

	        Or TransformModelAutoPeriodOptions.IdentEndByFact

	        Or TransformModelAutoPeriodOptions.ForecastStartByIdentEnd

	        Or TransformModelAutoPeriodOptions.ForecastEndByIdentEnd;

	    TransPeriod.StartOffset := 1;

	    TransPeriod.IdentificationEndOffset := -5;

	    TransPeriod.ForecastStartDateOffset := 1;

	    TransPeriod.EndOffset := 10;

	    (ErAn As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для выделенного вычисляемого ряда будут установлены
 следующие параметры:


	- начало периода идентификации: начало данных плюс один период;


	- окончание периода идентификации: окончание данных минус пять
	 периодов;


	- начало периода прогнозирования: окончание идентификации плюс
	 один период;


	- окончание периода прогнозирования: окончание идентификации плюс
	 десять периодов.


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
