# IMsModelPeriod.IdentificationStartDateParam

IMsModelPeriod.IdentificationStartDateParam
-


# IMsModelPeriod.IdentificationStartDateParam


## Синтаксис


IdentificationStartDateParam: [IMsModelParamAttributes](../IMsModelParamAttributes/IMsModelParamAttributes.htm);


## Описание


Свойство IdentificationStartDateParam
 определяет настройки привязки к параметру, задающему дату начала периода
 идентификации.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором «MODEL_SPACE». В контейнере создана задача
 с идентификатором «PROBLEM», метамодель и модель. В метамодели созданы
 параметры с идентификаторами «I_START», «I_END», «F_START», «F_END». Все
 параметры передают отметку и связаны с календарным справочником.


Добавьте ссылки на системные сборки Dimensions, Metabase, Ms.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Problem: IMsProblem;

	    MetaModel: IMsMetaModel;

	    Model: IMsModel;

	    MParams: IMsModelParams;

	    CalcPeriod: IMsModelPeriod;

	    OutputPeriod: IMsDatePeriod;

	Begin

	    // Получаем модель

	    Mb := MetabaseClass.Active;

	    Problem := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("MODEL_SPACE")).Edit As IMsProblem;

	    MetaModel := Problem.MetaModel;

	    Model := (MetaModel.CalculationChain.Item(0) As IMsCalculationChainModel).EditModel;

	    MParams := MetaModel.Params;

	    // Периоды расчета

	    CalcPeriod := Model.Transform.Period;

	    CalcPeriod.IdentificationStartDateParam.Parameter := MParams.FindById("I_START");

	    CalcPeriod.IdentificationEndDateParam.Parameter := MParams.FindById("I_END");

	    CalcPeriod.ForecastStartDateParam.Parameter := MParams.FindById("F_START");

	    CalcPeriod.ForecastEndDateParam.Parameter := MParams.FindById("F_END");

	    SetAttribute(CalcPeriod.IdentificationStartDateParam);

	    SetAttribute(CalcPeriod.IdentificationEndDateParam);

	    SetAttribute(CalcPeriod.ForecastStartDateParam);

	    SetAttribute(CalcPeriod.ForecastEndDateParam);

	    // Период выгрузки

	    OutputPeriod := Model.Transform.OutputPeriod As IMsDatePeriod;

	    // Очищаем период выгрузки данных

	    OutputPeriod.ClearPeriod();

	    // Задаём начало и окончание периода выгрузки

	    OutputPeriod.Enabled := True;

	    OutputPeriod.StartParam.Parameter := MParams.FindById("F_START");

	    OutputPeriod.EndParam.Parameter := MParams.FindById("F_END");

	    SetAttribute(OutputPeriod.StartParam);

	    SetAttribute(OutputPeriod.EndParam);

	    // Сохраняем изменения

	    Model.MetabaseObject.Save;

	End Sub UserProc;

	Sub SetAttribute(DateParam: IMsModelParamAttributes);

	Var

	    Dim: IDimInstance;

	Begin

	    Dim := DateParam.Parameter.LinkedObject.Open(Null) As IDimInstance;

	    DateParam.ClearAttributes;

	    DateParam.Attributes.Add(Dim.Attributes.FindById("START_DATE").Attribute);

	End Sub SetAttribute;


При выполнении примера будут изменены периоды идентификации, прогнозирования
 и выгрузки данных для модели. Значения периодов будут браться из параметров
 метамодели и формироваться по значениям атрибута «START_DATE» элементов,
 выбранных в календарных справочниках.


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
