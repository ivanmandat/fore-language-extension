# IMsCompositeFormulaTermSetList.Add

IMsCompositeFormulaTermSetList.Add
-


# IMsCompositeFormulaTermSetList.Add


## Синтаксис


		Add: [IMsCompositeFormulaTermSet](../IMsCompositeFormulaTermSet/IMsCompositeFormulaTermSet.htm);


## Описание


Метод Add
 осуществляет добавление набора составных
 термов в коллекцию.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования CONT_MODEL с моделью BINREG, использующей для расчёта метод
 бинарной регрессии. Также в данном контейнере должна присутствовать переменная
 X2.


Добавьте ссылки на системные сборки: Metabase, Ms.


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

		    Explanatories: IMsCompositeFormulaTermSetList;

		    TermSet: IMsCompositeFormulaTermSet;

		    CompTerm: IMsCompositeFormulaTerm;

		    Var_inp: IMsVariable;

		    pF_inp: IMsFormulaTransformVariable;

		    pSlice: IMsFormulaTransformSlice;

		    pTermInfo: IMsFormulaTermInfo;

		Begin

		    MB := MetabaseClass.Active;

		    SpaceDescr := mb.ItemById("CONT_MODEL");

		    MObj := MB.ItemByIdNamespace("BinReg",SpaceDescr.Key).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Binary := Formula.Method As IMsBinaryRegressionTransform;

		    Explanatories := Binary.Explanatories;

		    TermSet := Explanatories.Add;

		    Debug.WriteLine("Индекс
		 добавленного набора: " + Explanatories.IndexOf(TermSet).ToString);

		    CompTerm := TermSet.Add;

		    Var_inp := mb.ItemByIdNamespace("X2",SpaceDescr.Key).Bind As IMsVariable;

		    pF_inp := Trans.Inputs.Add(Var_inp As IVariableStub);

		    pSlice := pF_inp.Slices.Add(Null);

		    CompTerm.Operands.Add(pSlice);

		    pTermInfo := Trans.CreateTermInfo;

		    pTermInfo.Slice := pSlice;

		    CompTerm.Expression.AsString:= pTermInfo.TermInnerText;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в коллекцию объясняющих наборов составных
 термов модели будет добавлен новый набор. Его индекс в коллекции будет
 выведен в окно консоли.


См. также:


[IMsCompositeFormulaTermSetList](IMsCompositeFormulaTermSetList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
