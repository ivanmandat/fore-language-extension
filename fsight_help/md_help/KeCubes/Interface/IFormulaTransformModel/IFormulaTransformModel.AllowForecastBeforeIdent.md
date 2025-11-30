# IFormulaTransformModel.AllowForecastBeforeIdent

IFormulaTransformModel.AllowForecastBeforeIdent
-


# IFormulaTransformModel.AllowForecastBeforeIdent


## Синтаксис


AllowForecastBeforeIdent: Boolean;


## Описание


Свойство AllowForecastBeforeIdent
 определяет, может ли период прогнозирования идти до периода идентификации.


## Комментарии


Допустимые значения:


	- True. Период прогнозирования
	 может идти до периода идентификации;


	- False. Период прогнозирования
	 должен идти после периода идентификации.


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

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем рабочую книгу

    ErAn := mb.ItemById("WB_AUTOPERIOD").Edit As IEaxAnalyzer;

    Laner := ErAn.Laner;

    // Получаем первый ряд в таблице рабочей книги

    Series := laner.Series;

    Serie := Series.Item(0) As ILanerCalculateSerie;

    // Настраиваем период расчета ряда

    TransformModel := Serie.Transform;

    TransformModel.AutoPeriod := TransformModelAutoPeriodOptions.None;

    // Указываем, что период прогнозирования может идти до периода идентификации

    TransformModel.AllowForecastBeforeIdent := True;

    // Задаем границы периода идентификации

    TransformModel.IdentificationStartDate := DateTime.Parse("01.01.2010");

    TransformModel.IdentificationEndDate := DateTime.Parse("01.01.2015");

    // Задаем границы периода прогнозирования

    TransformModel.ForecastStartDate := DateTime.Parse("31.12.2005");

    TransformModel.ForecastEndDate := DateTime.Parse("31.12.2009");

    // Сохраняем изменения

    (ErAn As IMetabaseObject).Save;

End Sub UserProc;


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
