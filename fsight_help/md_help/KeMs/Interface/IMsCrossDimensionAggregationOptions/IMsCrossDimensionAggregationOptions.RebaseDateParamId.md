# IMsCrossDimensionAggregationOptions.RebaseDateParamId

IMsCrossDimensionAggregationOptions.RebaseDateParamId
-


# IMsCrossDimensionAggregationOptions.RebaseDateParamId


## Синтаксис


		RebaseDateParamId: String;


## Описание


Свойство RebaseDateParamId
 определяет параметр, задающий базовый период для расчёта агрегации.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать метамодель, содержащая параметр RebDate_Param.
 Цепочка расчёта метамодели должна содержать модель с идентификатором MODEL_AGGR,
 рассчитываемую методом расширенной агрегации.


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

		Begin

		    mb := MetabaseClass.Active;

		    RubrDescr := mb.ItemById("FC");

		    Rubr := RubrDescr.Bind As IRubricator;

		    msDescr := Rubr.ModelSpace;

		    Model := mb.ItemByIdNamespace("MODEL_AGGR",msDescr.Key).Edit As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Aggr := Formula.Method As IMsCrossDimensionAggregationTransform;

		    Aggr.AgregationMethod:= MsAgregationMethodType.Sum;

		    Options := Aggr.Options;

		    Options.Threshold :=0;

		    Options.Level := True;

		    Options.Rebase := True;

		    Options.RebaseDateParamId:= "RebDate_Param";

		    Options.LevelValue := DimCalendarLevel.Year;

		    Options.UseFillGaps := False;

		    strsGen := Formula.CreateStringGenerator;

		    strsGen.ShowFullVariableNames:= True;

		    Debug.WriteLine("Выражениеа грегации: " + strsGen.Execute);

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будут изменены следующие параметры модели:


	- для расчёта агрегации будет использован уровень;


	- задана динамика шага расчёта перемещения агрегации;


	- определён параметр, задающий базовый период для расчета перемещения
	 агрегации;


	- задан порог для определения релевантности агрегации;


	- агрегация будет рассчитываться без метода обработки пропусков.


В окно консоли будет выведено выражение, по которому рассчитывается
 агрегация. Например:


Выражение агрегации: World for publication|BCA[t]
 = Rebase(Level(Сумма((BCA[t]) * (BCI[t])) / Сумма(BCI[t])), RebDate_Param)


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
