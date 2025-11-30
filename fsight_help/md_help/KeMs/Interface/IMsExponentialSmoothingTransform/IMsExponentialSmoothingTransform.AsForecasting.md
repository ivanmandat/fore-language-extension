# IMsExponentialSmoothingTransform.AsForecasting

IMsExponentialSmoothingTransform.AsForecasting
-


# IMsExponentialSmoothingTransform.AsForecasting


## Синтаксис


		AsForecasting: Boolean;


## Описание


Свойство AsForecasting
 определяет признак расчёта прогнозных значений.


## Комментарии


Допустимые значения:


	- True. Метод будет рассчитывать
	 прогнозные значения;


	- False. Метод не будет
	 рассчитывать прогнозные значения.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель с идентификатором
 MODEL_EXPLSM. Данная модель должна рассчитываться методом «Экспоненциальное
 сглаживание».


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Model: IMsModel;

		    Formula: IMsFormula;

		    ExpSmooph: IMsExponentialSmoothingTransform;

		    SeasonalComp: ISeasonal;

		    Parameters: IExponentialSmoothingParameters;

		Begin

		    // Получаем репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем модель

		    Model := (Mb.ItemByIdNamespace("MODEL_EXPLSM", MB.GetObjectKeyById("MS"))).Edit As IMsModel;

		    // Получаем параметры расчета

		    Formula := Model.Transform.FormulaItem(0);

		    ExpSmooph := Formula.Method As IMsExponentialSmoothingTransform;

		    // Задаем значимость доверительных границ

		    ExpSmooph.ConfidenceLevel := 0.99;

		    // Задаем метод обработки пропусков

		    ExpSmooph.MissingData.Method := MissingDataMethod.LinTrend;

		    // Указываем, что метод будет рассчитывать прогнозные значения

		    ExpSmooph.AsForecasting := True;

		    // Задаем тип тренда модели

		    ExpSmooph.TrendComponent := TrendType.Exponential;

		    // Задаем параметры сезонной составляющей

		    SeasonalComp := ExpSmooph.SeasonalComponent;

		    SeasonalComp.Cycle := 5;

		    SeasonalComp.Mode := SeasonalityType.Multiplicative;

		    // Задаем значения параметров метода

		    Parameters := ExpSmooph.Parameters;

		    Parameters.Alpha := 0.06;

		    Parameters.Delta := 0.06;

		    Parameters.Gamma := 0.01;

		    // Сохраняем изменения

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для модели будут заданы: значимость
 доверительных границ, метод обработки пропусков, тип тренда, сезонная
 составляющая и значения параметров. При расчёте модель будет вычислять
 прогнозные значения.


См. также:


[IMsExponentialSmoothingTransform](IMsExponentialSmoothingTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
