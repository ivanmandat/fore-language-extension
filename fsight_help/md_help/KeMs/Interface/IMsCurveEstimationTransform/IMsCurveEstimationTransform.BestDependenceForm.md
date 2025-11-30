# IMsCurveEstimationTransform.BestDependenceForm

IMsCurveEstimationTransform.BestDependenceForm
-


# IMsCurveEstimationTransform.BestDependenceForm


## Синтаксис


		BestDependenceForm: Integer;


## Описание


Свойство BestDependenceForm
 возвращает индекс лучшей формы зависимости.


## Комментарии


Лучшую форму зависимости имеет модель с наименьшим значением [критерия](IMsCurveEstimationTransform.Criterion.htm).
 Индекс модели соответствует списку из математической статистики ([ISmCurveEstimation.DependenceForms](StatLib.chm::/Interface/ISmCurveEstimation/ISmCurveEstimation.DependenceForms.htm)).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования, содержащего модель с идентификатором NEW_CURVESTMODEL.
 Для расчёта модели используется метод универсального тренда.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    CurveEst: IMsCurveEstimationTransform;

		    Coord: IMsFormulaTransformCoord;

		    StatCurve: ISmCurveEstimation;

		    DepForm: IDependenceForm;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemByIdNamespace("New_CurvEstModel",MB.ItemById("KONT_MODEL").Key).Bind;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Coord := Model.Transform.CreateCoord(VarTrans);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    CurveEst := Formula.Method As IMsCurveEstimationTransform;

		    StatCurve := CurveEst.StatMethod(Coord)As ISmCurveEstimation;

		    For i := 0 To StatCurve.DependenceForms.Count- 1 Do

		        DepForm := StatCurve.DependenceForms.Item(i);

		        Debug.WriteLine(DepForm.Name+ " " + DepForm.CriterionValue.ToString);

		    End For;

		    Debug.WriteLine("Индекс лучшей формы: " + CurveEst.BestDependenceForm.ToString);

		End Sub UserProc;


В результате выполнения примера в консоль будут выведены наименования
 форм зависимости и значения критерия, рассчитанные для выбранных в модели
 форм. Так же будет выведен индекс лучшей формы зависимости.


См. также:


[IMsCurveEstimationTransform](IMsCurveEstimationTransform.htm)


[IMsCurveEstimationTransform.Criterion](IMsCurveEstimationTransform.Criterion.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
