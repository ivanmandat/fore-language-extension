# IMsCalculationChainIterator.StepParam

IMsCalculationChainIterator.StepParam
-


# IMsCalculationChainIterator.StepParam


## Синтаксис


		StepParam: String;


## Описание


Свойство StepParam определяет
 параметр, задающий шаг расчёта цикла.


## Комментарии


Шаг расчёта задаётся при использовании расчёта по датам, то есть свойство
 [IMsCalculationChainIterator.UseDates](IMsCalculationChainIterator.UseDates.htm)
 должно иметь значение True.


Для задания шага расчёта напрямую используйте свойство [IMsCalculationChainIterator.Step_](IMsCalculationChainIterator.Step_.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего метамодель с идентификатором
 METAMODEL_ITERATOR и модель с идентификатором MODEL_ITERATOR.


Добавьте ссылки на системные сборки: Dal, Dimensions, Metabase, Ms,
 Transform.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    MetaModel: IMsMetaModel;

		    Param: IMsModelParam;

		    CalcChain: IMsCalculationChainEntries;

		    Iterator: IMsCalculationChainIterator;

		    Model: IMsModel;

		    Formula: IMsFormula;

		    Expr: IExpression;

		Begin

		    // Получаем текущий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем метамодель

		    MetaModel := mb.ItemByIdNamespace("METAMODEL_ITERATOR", MsKey).Edit As IMsMetaModel;

		    // Очищаем коллекцию параметров метамодели

		    MetaModel.Params.Clear;

		    // Добавляем параметр, который будет отвечать за расчет цикла

		    Param := MetaModel.Params.Add;

		    Param.DefaultValue := 0;

		    Param.Id := "THRESHOLD";

		    Param.Name := "Порог";

		    // Добавляем параметр, который будет отвечать за

		    // дату начала итераций цикла

		    Param := MetaModel.Params.Add;

		    Param.DataType := DbDataType.Date;

		    Param.ParamType := TsParamType.Date;

		    Param.DefaultValue := DateTime.Parse("01.01.2000");

		    Param.Id := "ST_DATE";

		    Param.Name := "Дата начала итераций";

		    // Добавляем параметр, который будет отвечать за

		    // окончания окончания итераций цикла

		    Param := MetaModel.Params.Add;

		    Param.DataType := DbDataType.Date;

		    Param.ParamType := TsParamType.Date;

		    Param.DefaultValue := DateTime.Parse("01.01.2017");

		    Param.Id := "END_DATE";

		    Param.Name := "Дата окончания итераций";

		    // Добавляем параметр, который будет отвечать за

		    // шаг итераций цикла

		    Param := MetaModel.Params.Add;

		    Param.ParamType := TsParamType.Frequency;

		    Param.DefaultValue := DimCalendarLevel.Week;

		    Param.Id := "STEP";

		    Param.Name := "Шаг итераций";

		    // Получаем и очищаем цепочку расчета метамодели

		    CalcChain := MetaModel.CalculationChain;

		    CalcChain.Clear;

		    // Создаем цикл в цепочке расчета метамодели

		    Iterator := CalcChain.AddIterator("Цикл");

		    // Задаем условия выполнения цикла

		    Iterator.PostCondition := True;

		    Iterator.MaxIterations := 600;

		    Expr := Iterator.Expression;

		    Expr.AsString := "{THRESHOLD}<5";

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_ITERATOR", MsKey).Edit As IMsModel;

		    // Сбрасываем динамику расчета модели

		    Formula := Model.Transform.FormulaItem(0);

		    Formula.Level := DimCalendarLevel.Root;

		    // Сохраняем изменения в модели

		    (Model As IMetabaseObject).Save;

		    // Добавляем данную модель в цикл

		    Iterator.Contents.AddModel(model);

		    // Указываем что цикл будет производить итерацию по датам

		    Iterator.UseDates := True;

		    // Задаем даты итераций с помощью параметров

		    Iterator.StartParamID := "ST_DATE";

		    Iterator.EndParamID := "END_DATE";

		    // Задаем шаг дат для итераций с помощью параметра

		    Iterator.StepParam := "STEP";

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера итерация цикла будет выполняться по
 указанным датам с заданным шагом. Даты и шаг будут заданы с помощью параметров.


См. также:


[IMsCalculationChainIterator](IMsCalculationChainIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
