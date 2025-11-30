# IMsDeterministicTransform.Operands

IMsDeterministicTransform.Operands
-


# IMsDeterministicTransform.Operands


## Синтаксис


		Operands: [IMsFormulaTermList](../IMsFormulaTermList/IMsFormulaTermList.htm);


## Описание


Свойство Operands возвращает
 коллекцию термов, используемых для составления уравнения модели.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL.


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

		    Determ: IMsDeterministicTransform;

		    TransVar: IMsFormulaTransformVariable;

		    TermX1: IMsFormulaTerm;

		Begin

		    MB := MetabaseClass.Active;

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_Determ";

		    CrInf.Name := "New_Determ";

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

		    Formula.Kind := MsFormulaKind.Deterministic;

		    Formula.Level := DimCalendarLevel.Year;

		    Determ := Formula.Method As IMsDeterministicTransform;

		    Varr := MB.ItemByIdNamespace("Var_Factor",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

		    Model.Input.Add(Varr);

		    TransVar := Model.Transform.Inputs.Item(0);

		    Slice := TransVar.SlicesTree(Null).CreateSlice(1);

		    TermX1 := Determ.Operands.Add(Slice);

		    TermX1.Inversion := MsInversion.DLog;

		    TermX1.InversionLag := MsInversionLag.PrecidingYear;

		    TermX1.UpdateSlice(TermX1.Slice,"-1");

		    Determ.Expression.AsString:= "10 -" + TermX1.TermToInnerText + " * 3.14";

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 модель, использующая для расчёта метод детерминированного уравнения. Будет
 добавлена моделируемая переменная и одна входная переменная. На базе входной
 переменной будет составлено уравнение модели.


См. также:


[IMsDeterministicTransform](IMsDeterministicTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
