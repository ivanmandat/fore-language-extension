# IMsFormulaTransform.OutputPeriod

IMsFormulaTransform.OutputPeriod
-


# IMsFormulaTransform.OutputPeriod


## Синтаксис


		OutputPeriod: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


## Описание


Свойство OutputPeriod
 возвращает параметры периода выгрузки данных.


## Комментарии


Для настройки параметров периода расчета модели используйте свойство
 [IMsFormulaTransform.Period](IMsFormulaTransform.Period.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере должна присутствовать
 метамодель с идентификатором METAMODEL_TRANSF_OUTPUT, включающая в цепочку
 расчета модель с идентификатором MODEL_TRANSF_OUTPUT.


Добавьте ссылки на системные сборки: Dal, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    MetaModel: IMsMetaModel;

		    pParams: IMsModelParams;

		    pPar: IMsModelParam;

		    pModel: IMsModel;

		    pPeriod: IMsDatePeriod;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем метамодель

		    MetaModel := mb.ItemByIdNamespace("METAMODEL_TRANSF_OUTPUT", MsKey).Edit As IMsMetaModel;

		    // Получаем параметры метамодели

		    pParams := MetaModel.Params;

		    // Удаляем все параметры

		    pParams.Clear;

		    // Добавляем параметр метамодели для задания начала периода выгрузки данных

		    pPar := pParams.Add;

		    pPar.Id := "OUT_START";

		    pPar.Name := "Начало выгрузки данных";

		    pPar.DataType := DbDataType.Date;

		    pPar.DefaultValue := DateTime.Parse("01.01.2018");

		    // Добавляем параметр метамодели для задания окончания периода выгрузки данных

		    pPar := pParams.Add;

		    pPar.Id := "OUT_END";

		    pPar.Name := "Окончание выгрузки данных";

		    pPar.DataType := DbDataType.Date;

		    pPar.DefaultValue := DateTime.Parse("01.01.2020");

		    // Сохраняем изменения в метамодели

		    (MetaModel As IMetabaseObject).Save;

		    // Получаем модель

		    pModel := mb.ItemByIdNamespace("MODEL_TRANSF_OUTPUT", MsKey).Edit As IMsModel;

		    // Получаем параметры периода расчета модели

		    pPeriod := pModel.Transform.OutputPeriod As IMsDatePeriod;

		    pPeriod.ClearPeriod;

		    // Задаем для модели параметры, определяющие начало и окончание периода выгрузки данных

		    pPeriod.StartParam.Parameter := pParams.FindById("OUT_START");

		    pPeriod.EndParam.Parameter := pParams.FindById("OUT_END");

		    // Сохраняем изменения в модели

		    (pModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера начало и окончание периода выгрузки
 данных модели будет задано параметрами OUT_START
 и OUT_END.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
