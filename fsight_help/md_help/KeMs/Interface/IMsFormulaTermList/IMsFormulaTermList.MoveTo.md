# IMsFormulaTermList.MoveTo

IMsFormulaTermList.MoveTo
-


# IMsFormulaTermList.MoveTo


## Синтаксис


		MoveTo(FromIndex: Integer; ToIndex: Integer);


## Параметры


FromIndex. Индекс позиции терма,
 который необходимо переместить;


ToIndex. Индекс позиции, в
 которую необходимо переместить терм.


## Описание


Метод MoveTo
 осуществляет перемещение терма в коллекции.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором TRANSFORMATION. В данном контейнере должны
 присутствовать стандартная модель с идентификатором M_SPLICE, осуществляющая
 совмещение нескольких рядов.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ModelCont: IMetabaseObjectDescriptor;

		    Descript: IMetabaseObjectDescriptor;

		    Obj: IMetabaseObject;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    TransformVar: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		    Operands: IMsFormulaTermList;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    Splice: IMsSpliceTransform;

		    i: Integer;

		Begin

		    mb := MetabaseClass.Active;

		    ModelCont := mb.ItemById("TRANSFORMATION");

		    Descript := mb.ItemByIdNamespace("M_SPLICE",ModelCont.Key);

		    Obj := Descript.Edit;

		    Model := Obj As IMsModel;

		    Transform := Model.Transform;

		    TransformVar := Transform.Outputs.Item(0);

		    Slice := TransformVar.Slices.Add(Null);

		    Selector := Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Transform.Transform(Selector);

		    Splice := Formula.Method As IMsSpliceTransform;

		    Operands := Splice.Operands;

		    i := Operands.Count -1;

		    Operands.MoveTo(0, i);

		    Obj.Save;

		End Sub UserProc;


В результате выполнения примера первый и последний ряды в коллекции
 совмещаемых рядов поменяются местами.


См. также:


[IMsFormulaTermList](IMsFormulaTermList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
