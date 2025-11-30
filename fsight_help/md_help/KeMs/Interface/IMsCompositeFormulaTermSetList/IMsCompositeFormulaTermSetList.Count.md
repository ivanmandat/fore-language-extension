# IMsCompositeFormulaTermSetList.Count

IMsCompositeFormulaTermSetList.Count
-


# IMsCompositeFormulaTermSetList.Count


## Синтаксис


		Count: Integer;


## Описание


Свойство Count
 возвращает количество наборов в коллекции.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования CONT_MODEL с моделью BINREG, использующей для расчёта метод
 бинарной регрессии.


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

		    i, j: Integer;

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

		    Explanatories := Binary.Explanatories;

		    Debug.WriteLine("Термы
		 объясняющих рядов:");

		    For i := 0 To Explanatories.Count - 1 Do

		        TermSet := Explanatories.Item(i);

		        Debug.WriteLine("  Набор " +
		 (i + 1).ToString + ":");

		        For j := 0 To TermSet.Count - 1 Do

		            CompTerm := TermSet.Item(j);

		            Debug.WriteLine("    " + CompTerm.ExpressionText);

		        End For;

		    End For;

		    Debug.WriteLine("Количество наборов, используемых при расчете модели: " + Explanatories.IncludedCount.ToString);

		End Sub UserProc;


В результате выполнения примера наборы термов объясняемых рядов будут
 выведены в окно консоли. Также будет выведено количество наборов, используемых
 при расчёте модели.


См. также:


[IMsCompositeFormulaTermSetList](IMsCompositeFormulaTermSetList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
