# IMsCompositeFormulaTermSetList.Clear

IMsCompositeFormulaTermSetList.Clear
-


# IMsCompositeFormulaTermSetList.Clear


## Синтаксис


		Clear;


## Описание


Метод Clear
 очищает коллекцию наборов составных термов.


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

		    Explanatories.Clear;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера коллекция объясняющих наборов составных
 термов модели будет очищена.


См. также:


[IMsCompositeFormulaTermSetList](IMsCompositeFormulaTermSetList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
