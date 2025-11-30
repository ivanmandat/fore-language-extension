# IMsCurveEstimationTransform.Criterion

IMsCurveEstimationTransform.Criterion
-


# IMsCurveEstimationTransform.Criterion


## Синтаксис


		Criterion: [DependenceCriterion](StatLib.chm::/Enums/DependenceCriterion.htm);


## Описание


Свойство Criterion определяет
 критерий, по которому будет отбираться модель.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере имеется переменная
 VAR_1, которая в дальнейшем будет использоваться как моделируемая.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    Varr: IMsVariable;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    CurveEst: IMsCurveEstimationTransform;

		Begin

		    MB := MetabaseClass.Active;

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_CurveEstimationModel";

		    CrInf.Name := "New_CurveEstimationModel";

		    CrInf.Parent := Mb.ItemById("KONT_MODEL");

		    CrInf.Permanent := False;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    Varr := MB.ItemByIdNamespace("Var_1",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

		    Model.Output.Add(Varr);

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.CurveEstimation;

		    CurveEst := Formula.Method As IMsCurveEstimationTransform;

		    CurveEst.CongidenceLevel := 0.99;

		    CurveEst.Criterion := DependenceCriterion.RSS;

		    CurveEst.DependenceFormIncluded(DependenceType.Compound):= True;

		    CurveEst.DependenceFormIncluded(DependenceType.Logarithmic):= True;

		    CurveEst.DependenceFormIncluded(DependenceType.Hyperbolic):= True;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 модель. Для расчёта модели используется метод универсального тренда. В
 результате работы метода будут рассчитываться следующие зависимости: составная,
 логарифмическая и гиперболическая. Результирующая модель будет отбираться
 по наименьшему значению суммы квадратов остатков. Для уровня значимости
 доверительных границ будет установлено значение 0,99.


См. также:


[IMsCurveEstimationTransform](IMsCurveEstimationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
