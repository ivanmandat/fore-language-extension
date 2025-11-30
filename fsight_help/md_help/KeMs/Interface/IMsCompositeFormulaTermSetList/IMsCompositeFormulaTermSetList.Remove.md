# IMsCompositeFormulaTermSetList.Remove

IMsCompositeFormulaTermSetList.Remove
-


# IMsCompositeFormulaTermSetList.Remove


## Синтаксис


		Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс набора в коллекции.


## Описание


Метод Remove
 удаляет набор из коллекции по индексу.


## Комменатарии


При успешном удалении метод возвращает значение
 True, при неуспешном - False.


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

		    Debug.WriteLine("Термы
		 объясняющих рядов:");

		    If Explanatories.Remove(0) Then

		        Debug.WriteLine("Первый набор из коллекции был успешно удалён");

		        Else System.Diagnostics.Debug.WriteLine("Удаление первого набора из коллекции не
		 было произведено");

		    End If;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера первый набор из коллекции будет удалён.


См. также:


[IMsCompositeFormulaTermSetList](IMsCompositeFormulaTermSetList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
