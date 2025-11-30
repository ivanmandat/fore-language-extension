# IMsArimaTransform.ConfidenceLevel

IMsArimaTransform.ConfidenceLevel
-


# IMsArimaTransform.ConfidenceLevel


## Синтаксис


		ConfidenceLevel: Double;


## Описание


Свойство ConfidenceLevel определяет
 значимость доверительных границ. По умолчанию свойству установлено значение
 0,95.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере имеется переменная
 VAR_1, которая в дальнейшем будет использоваться как моделируемая.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    Varr: IMsVariableStub;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    ARIMA: IMsArimaTransform;

		    ARIMASpec: IArimaSpecification;

		Begin

		    MB := MetabaseClass.Active;

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_ARIMA";

		    CrInf.Name := "New_ARIMA";

		    CrInf.Parent := Mb.ItemById("KONT_MODEL");

		    CrInf.Permanent := False;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    Varr := MB.ItemByIdNamespace("Var_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariableStub;

		    Trans.Outputs.Add(Varr);

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.Arima;

		    Formula.Level := DimCalendarLevel.Quarter;

		    ARIMA := Formula.Method As IMsArimaTransform;

		    ARIMA.MaxIteration := 100;

		    ARIMA.ConstantMode := InterceptMode.ManualEstimate;

		    ARIMA.ConstantValue := 0.03;

		    //Уровень значимости доверительных границ

		    ARIMA.ConfidenceLevel := 0.99;

		    ARIMASpec := ARIMA.ArimaSpecification;

		    //несезонная составляющая

		    ARIMASpec.AutoRegressionOrder := 1;

		    ARIMASpec.MovingAverageOrder := 1;

		    ARIMASpec.DifferenceOrder := 2;

		    //сезонная составляющая

		    ARIMASpec.SeasonalAutoRegressionOrder := 1;

		    ARIMASpec.SeasonalMovingAverageOrder := 2;

		    ARIMASpec.SeasonalDifferenceOrder := 3;

		    ARIMASpec.Cycle := 2;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 модель, использующая для расчета метод ARIMA. В модель будет добавлена
 моделируемая переменная и настроены сезонные и несезонные параметры. Для
 уровня значимости доверительных границ будет установлено значение 0,99.


См. также:


[IMsArimaTransform](IMsArimaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
