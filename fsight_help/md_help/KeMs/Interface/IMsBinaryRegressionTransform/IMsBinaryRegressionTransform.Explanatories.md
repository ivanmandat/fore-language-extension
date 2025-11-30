# IMsBinaryRegressionTransform.Explanatories

IMsBinaryRegressionTransform.Explanatories
-


# IMsBinaryRegressionTransform.Explanatories


## Синтаксис


		Explanatories: [IMsCompositeFormulaTermSetList](../IMsCompositeFormulaTermSetList/IMsCompositeFormulaTermSetList.htm);


## Описание


Свойство Explanatories
 возвращает набор объясняющих рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере содержится модель
 с идентификатором BINREG, использующая для расчёта метод бинарной регрессии.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    SpaceDescr: IMetabaseObjectDescriptor;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    Binary: IMsBinaryRegressionTransform;

		    Explained: IMsFormulaTermSet;

		    Explanatories: IMsCompositeFormulaTermSetList;

		    i, j: Integer;

		    Term: IMsFormulaTerm;

		    TermSet: IMsCompositeFormulaTermSet;

		    CompTerm: IMsCompositeFormulaTerm;

		Begin

		    MB := MetabaseClass.Active;

		    SpaceDescr := mb.ItemById("CONT_MODEL");

		    MObj := MB.ItemByIdNamespace("BinReg", SpaceDescr.Key).Bind;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Binary := Formula.Method As IMsBinaryRegressionTransform;

		    Explained := Binary.Explained;

		    Debug.WriteLine("Термы моделируемых рядов:");

		    For i := 0 To Explained.Count - 1 Do

		        Term := Explained.Item(i);

		        Debug.WriteLine("  " + Term.TermToText);

		    End For;

		    Explanatories := Binary.Explanatories;

		    Debug.WriteLine("Термы объясняющих рядов:");

		    For i := 0 To Explanatories.Count - 1 Do

		        TermSet := Explanatories.Item(i);

		        For j := 0 To TermSet.Count - 1 Do

		            CompTerm := TermSet.Item(j);

		            Debug.WriteLine("  " + CompTerm.ExpressionText);

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера термы моделируемых и объясняемых рядов
 будут выведены в окно консоли.


См. также:


[IMsBinaryRegressionTransform](IMsBinaryRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
