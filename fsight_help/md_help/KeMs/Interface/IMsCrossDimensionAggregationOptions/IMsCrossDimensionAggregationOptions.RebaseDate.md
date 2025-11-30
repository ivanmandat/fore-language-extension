# IMsCrossDimensionAggregationOptions.RebaseDate

IMsCrossDimensionAggregationOptions.RebaseDate
-


# IMsCrossDimensionAggregationOptions.RebaseDate


## Синтаксис


		RebaseDate: Variant;


## Описание


Свойство RebaseDate
 определяет базовый период для расчёта агрегации.


## Комментарии


Для установки уровня расчёта функции [Rebase](IMsCrossDimensionAggregationOptions.Rebase.htm)
 передайте в свойство массив, первым элементом которого будет динамика
 расчёта, вторым дата. Если уровень расчёта [Rebase](IMsCrossDimensionAggregationOptions.Rebase.htm)
 должен совпадать с уровнем расчета модели, то в свойство передаётся дата
 (допускается использование даты в строковом представлении).


## Пример


Если в свойство передаётся дата в строковом представлении, то использование
 свойства приведено в примере для [IMsCrossDimensionAggregationOptions.LevelValue](IMsCrossDimensionAggregationOptions.LevelValue.htm).


Если в свойство передаётся массив, то пример приведён ниже.


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать модель с идентификатором MODEL_AGGR, рассчитываемая
 методом расширенной агрегации.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    RubrDescr: IMetabaseObjectDescriptor;

		    Rubr: IRubricator;

		    msDescr: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Aggr: IMsCrossDimensionAggregationTransform;

		    strsGen: IMsFormulaStringGenerator;

		    Options: IMsCrossDimensionAggregationOptions;

		    RebaseDate: Array[2] Of Variant;

		Begin

		    mb := MetabaseClass.Active;

		    RubrDescr := mb.ItemById("FC");

		    Rubr := RubrDescr.Bind As IRubricator;

		    msDescr := Rubr.ModelSpace;

		    Model := mb.ItemByIdNamespace("MODEL_AGGR", msDescr.Key).Edit As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Aggr := Formula.Method As IMsCrossDimensionAggregationTransform;

		    Aggr.AgregationMethod := MsAgregationMethodType.Sum;

		    Options := Aggr.Options;

		    Options.Threshold := 0;

		    Options.Rebase := True;

		    RebaseDate[0] := DimCalendarLevel.Year;

		    RebaseDate[1] := DateTime.ComposeDay(2002, 1, 1);

		    Options.RebaseDate := RebaseDate;

		    Options.UseFillGaps := False;

		    strsGen := Formula.CreateStringGenerator;

		    strsGen.ShowFullVariableNames := True;

		    Debug.WriteLine("Выражение агрегации: " + strsGen.Execute);

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будет изменены следующие параметры модели:


	- задан базовый период - 2002 год, шаг расчёта - годы;


	- задан порог для определения релевантности агрегации;


	- агрегация будет рассчитываться без метода обработки пропусков.


В окно консоли будет выведено выражение, по которому рассчитывается
 агрегация. Например:


Выражение агрегации: World for publication|BCA[t]
 = Rebase(Сумма((BCA[t]) * (BCI[t])) / Сумма(BCI[t]), 01.01.2002)


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
