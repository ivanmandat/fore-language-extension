# IMsFormulaTransform.CalculationOption

IMsFormulaTransform.CalculationOption
-


# IMsFormulaTransform.CalculationOption


## Синтаксис


		CalculationOption(Option: [MsCalculationOptions](../../Enums/MsCalculationOptions.htm)):
		 Boolean;


## Параметры


Option. Одна или несколько
 опций, которые могут применяться при расчёте модели.


## Описание


Свойство CalculationOption
 определяет признак применения указанных опций при расчёте модели.


## Комментарии


Допустимые значения:


	- True. Указанные опции
	 применяются при расчёте модели;


	- False. Указанные опции
	 не применяются при расчёте модели.


Если при получении опция возвращает значение True,
 то она применяется, если False
 - нет. Если получается значение нескольких опций сразу, то True
 возвращается, если все запрашиваемые опции применяются, иначе возвращается
 False.


Если применяется опция [MsCalculationOptions.IntersectPeriods](../../Enums/MsCalculationOptions.htm)
 и [MsCalculationOptions.UseTransformPeriod](../../Enums/MsCalculationOptions.htm),
 то есть выполняется пересечение периодов модели и её объекта-родителя,
 то учитывайте следующие особенности:


	- пересечения периодов идентификации и периодов прогнозирования
	 рассчитываются отдельно;


	- если периоды модели и периоды объекта-родителя не пересекаются,
	 то расчет модели произведен не будет. Будет выдано соответствующее
	 предупреждение;


	- если периоды идентификации модели и объекта-родителя пересекаются,
	 а периоды прогнозирования нет, то период прогнозирования будет выровнен
	 на конец периода идентификации, полученного в результате пересечения
	 периодов идентификации модели и объекта-родителя;


	- если периоды прогнозирования модели и объекта-родителя пересекаются,
	 а периоды идентификации нет, то период идентификации будет выровнен
	 на начало периода прогнозирования, полученного в результате пересечения
	 периодов прогнозирования модели и объекта-родителя;


	- учитывается значение свойства [IMsModelPeriod.AllowForecastBeforeIdent](../IMsModelPeriod/IMsModelPeriod.AllowForecastBeforeIdent.htm).


Пример пересечения периодов модели и её объекта-родителя:


		 Значение IMsModelPeriod.AllowForecastBeforeIdent
		 Периоды модели
		 Периоды объекта-родителя
		 Периоды после пересечения


		 Идентификация
		 Прогнозирование
		 Идентификация
		 Прогнозирование
		 Идентификация
		 Прогнозирование


		 False
		 1980-2000
		 2001-2010
		 1990-2005
		 2006-2020
		 1990-2000
		 2006-2010


		 False
		 1980-2000
		 2001-2010
		 1970-1990
		 1991-1999
		 1980-1990
		 1990-1990


		 False
		 1980-2000
		 2001-2010
		 2001-2005
		 2006-2008
		 2006-2006
		 2006-2008


		 False
		 1980-2000
		 2001-2010
		 2011-2014
		 2014-2017
		 Модель не рассчитывается


		 True
		 1980-2000
		 1990-2010
		 1990-2001
		 1998-2005
		 1990-2000
		 1998-2005


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором PROBLEM_CALC_OPTIONS. В цепочку расчета данной задачи
 должна входить модель с идентификатором MODEL_CALC_OPTIONS.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    Problem: IMsProblem;

		    CalcChain: IMsCalculationChainEntries;

		    ChainModel: IMsCalculationChainModel;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем задачу моделирования

		    Problem := mb.ItemByIdNamespace("PROBLEM_CALC_OPTIONS", MsKey).Bind As IMsProblem;

		    // Получаем цепочку расчета, используемую задачей

		    CalcChain := Problem.MetaModel.CalculationChain;

		    // Получаем модель

		    ChainModel := CalcChain.FindById("MODEL_CALC_OPTIONS") As IMsCalculationChainModel;

		    Model := ChainModel.EditModel;

		    // Получаем параметры расчета модели

		    Transform := Model.Transform;

		    // Указываем, что выполняется пересечение периодов модели и её объекта-родителя

		    Transform.CalculationOption(MsCalculationOptions.IntersectPeriods

		        Or MsCalculationOptions.UseExistingData) := True;

		    // Сохраняем изменения

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для модели MODEL_CALC_OPTIONS будет
 применяться пересечение её периодов расчёта и периодов расчёта задачи
 моделирования PROBLEM_CALC_OPTIONS.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
