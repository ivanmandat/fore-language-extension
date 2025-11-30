# IMsCalculationChainIterator.UseDates

IMsCalculationChainIterator.UseDates
-


# IMsCalculationChainIterator.UseDates


## Синтаксис


		UseDates: Boolean;


## Описание


Свойство UseDates определяет
 признак расчёта цикла по датам.


## Комментарии


Допустимые значения:


	- True. Цикл рассчитывается
	 по датам. Начало и окончание периода расчета задаётся свойствами [IMsCalculationChainIterator.StartDate](IMsCalculationChainIterator.StartDate.htm)
	 и [IMsCalculationChainIterator.EndDate](IMsCalculationChainIterator.EndDate.htm),
	 шаг расчета - свойством [IMsCalculationChainIterator.Step](IMsCalculationChainIterator.Step_.htm);


	- False. Цикл не рассчитывается
	 по датам.


Примечание.
 Не допускается одновременное использование свойств UseDates
 и [IMsCalculationChainIterator.Frequencies](IMsCalculationChainIterator.Frequencies.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего метамодель с идентификатором
 METAMODEL_ITERATOR и модель с идентификатором MODEL_ITERATOR.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


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

		    Calend: IMsCalendarSettings;

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

		    // Задаем даты итераций

		    Iterator.StartDate := DateTime.Parse("01.01.2000");

		    Iterator.EndDate := DateTime.Parse("01.01.2017");

		    // Задаем шаг дат для итераций

		    Iterator.Step_ := DimCalendarLevel.Week;

		    // Получаем параметры календарной динамики цикла

		    Calend := Iterator.CalendarSettings;

		    // Указываем, что выходными днями являются пятница и суббота

		    Calend.RestDays := DayOfWeekSet.Friday Or DayOfWeekSet.Saturday;

		    // Сохраняем изменения в метамодели

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера итерация цикла будет выполняться по
 указанным датам с заданным шагом.


См. также:


[IMsCalculationChainIterator](IMsCalculationChainIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
