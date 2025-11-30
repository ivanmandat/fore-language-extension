# IMsModelPeriod.IdentificationStartDateCoord

IMsModelPeriod.IdentificationStartDateCoord
-


# IMsModelPeriod.IdentificationStartDateCoord


## Синтаксис


		IdentificationStartDateCoord: [IMsModelCoordAttributes](../IMsModelCoordAttributes/IMsModelCoordAttributes.htm);


## Описание


Свойство IdentificationStartDateCoord
 определяет настройки координаты, задающей дату начала периода идентификации.


## Комментарии


Координата доступна только если модель находится под [многомерным
 итератором](../IMsCalculationChainMultiDimIterator/IMsCalculationChainMultiDimIterator.htm). При выполнении координата - это текущая итерация многомерного
 итератора, под которым выполняется модель.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором «MODEL_SPACE». В контейнере создана задача
 с идентификатором «PROBLEM» и метамодель, в которую добавлен многомерный
 итератор. В многомерный итератор включена одна модель. Источник данных
 для модели имеет в своей структуре измерение, в структуре которого имеются
 атрибуты с идентификаторами «STARTDATE» и «ENDDATE». В качестве значений
 атрибутов хранятся какие-либо даты.


Добавьте ссылки на системные сборки Cubes, Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Problem: IMsProblem;

		    MetaModel: IMsMetaModel;

		    Model: IMsModel;

		    Iterator: IMsCalculationChainMultiDimIterator;

		    Stub: IVariableStub;

		    CalcPeriod: IMsModelPeriod;

		    DateCoord: IMsModelCoordAttributes;

		    OutputPeriod: IMsDatePeriod;

		Begin

		    // Получаем модель

		    Mb := MetabaseClass.Active;

		    Problem := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("MODEL_SPACE")).Edit As IMsProblem;

		    MetaModel := Problem.MetaModel;

		    Iterator := MetaModel.CalculationChain.Item(0) As IMsCalculationChainMultiDimIterator;

		    Model := (Iterator.Contents.Item(0) As IMsCalculationChainModel).EditModel;

		    Stub := Model.Transform.Inputs.Item(0).VariableStub;

		    // Периоды расчета

		    CalcPeriod := Model.Transform.Period;

		    // Начало периода идентификации

		    DateCoord := CalcPeriod.IdentificationStartDateCoord;

		    DateCoord.Stub := Stub;

		    DateCoord.Dimension := Stub.Dimension(1);

		    DateCoord.Attributes.Add(DateCoord.Dimension.Attributes.FindById("STARTDATE"));

		    // Окончание периода идентификации

		    DateCoord := CalcPeriod.IdentificationEndDateCoord;

		    DateCoord.Stub := Stub;

		    DateCoord.Dimension := Stub.Dimension(1);

		    DateCoord.Attributes.Add(DateCoord.Dimension.Attributes.FindById("ENDDATE"));

		    // Начало периода прогнозирования

		    DateCoord := CalcPeriod.ForecastStartDateCoord;

		    DateCoord.Stub := Stub;

		    DateCoord.Dimension := Stub.Dimension(1);

		    DateCoord.Attributes.Add(DateCoord.Dimension.Attributes.FindById("STARTDATE"));

		    // Окончание периода прогнозирования

		    DateCoord := CalcPeriod.ForecastEndDateCoord;

		    DateCoord.Stub := Stub;

		    DateCoord.Dimension := Stub.Dimension(1);

		    DateCoord.Attributes.Add(DateCoord.Dimension.Attributes.FindById("ENDDATE"));

		    // Период выгрузки

		    OutputPeriod := Model.Transform.OutputPeriod As IMsDatePeriod;

		    // Очищаем период выгрузки данных

		    OutputPeriod.ClearPeriod;

		    // Задаём начало и окончание периода выгрузки

		    OutputPeriod.Enabled := True;

		    // Начало периода выгрузки

		    DateCoord := OutputPeriod.StartCoord;

		    DateCoord.Stub := Stub;

		    DateCoord.Dimension := Stub.Dimension(1);

		    DateCoord.Attributes.Add(DateCoord.Dimension.Attributes.FindById("STARTDATE"));

		    // Окончание периода выгрузки

		    DateCoord := OutputPeriod.EndCoord;

		    DateCoord.Stub := Stub;

		    DateCoord.Dimension := Stub.Dimension(1);

		    DateCoord.Attributes.Add(DateCoord.Dimension.Attributes.FindById("ENDDATE"));

		    // Сохраняем изменения

		    Model.MetabaseObject.Save;

		End Sub UserProc;


При выполнении примера будут изменены периоды идентификации, прогнозирования
 и выгрузки данных для модели. Значения периодов будут браться в соответствии
 с текущей итерацией итератора и формироваться по значениям указанных атрибутов
 измерения.


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
