# IMsFormulaTermSet.SingleTerm

IMsFormulaTermSet.SingleTerm
-


# IMsFormulaTermSet.SingleTerm


## Синтаксис


		SingleTerm: [IMsFormulaTermInfo](../IMsFormulaTermInfo/IMsFormulaTermInfo.htm);


## Описание


Свойство SingleTerm
 определяет ведущий терм в наборе.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL, содержащего модель с идентификатором
 BINREG, использующую для расчёта метод бинарной регрессии.


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

		    Explained: IMsFormulaTermSet;

		    i: Integer;

		    Term: IMsFormulaTerm;

		Begin

		    MB := MetabaseClass.Active;

		    SpaceDescr := mb.ItemById("CONT_MODEL");

		    MObj := MB.ItemByIdNamespace("BinReg",SpaceDescr.Key).Bind;

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

		    Debug.WriteLine("Термы
		 моделируемых рядов:");

		    For i := 0 To Explained.Count - 1 Do

		        Term := Explained.Item(i);

		        Debug.WriteLine(" " + Term.TermToText);

		    End For;

		    Debug.WriteLine("Ведущий
		 терм:" + Explained.SingleTerm.TermText);

		End Sub UserProc;


В результате выполнения примера термы моделируемых рядов и ведущий терм
 будут выведены в окно консоли.


См. также:


[IMsFormulaTermSet](IMsFormulaTermSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
