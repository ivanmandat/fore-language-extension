# IMsLRXFilterTransform.DPrior

IMsLRXFilterTransform.DPrior
-


# IMsLRXFilterTransform.DPrior


## Синтаксис


DPrior: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство DPrior определяет априорные
 разности.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором CONT_MODEL. В данном контейнере должны существовать
 пять переменных моделирования с идентификаторами SOURCE_LRX, RESULT_LRX,
 AVAL_LRX, APD_LRX и W1_LRX.


			Sub UserProc;

Var

    ActiveMetabase: IMetabase;

    CrInf: IMetabaseObjectCreateInfo;

    ModelCont, Descript: IMetabaseObjectDescriptor;

    Obj, Obj_x1: IMetabaseObject;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Out, Inp: IMsFormulaTransformVariables;

    TransformVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    LRX: IMsLRXFilterTransform;

    Term: IMsFormulaTerm;

    ModelVar_x1: IVariableStub;

    MethodSeries: IMsMethodSeries;

Begin

    ActiveMetabase := MetabaseClass.Active;

    ModelCont := ActiveMetabase.ItemById("CONT_MODEL");

    // Создаем новую модель

    CrInf := ActiveMetabase.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

    CrInf.Id := "NEW_LRX_MODEL";

    CrInf.Name := "NEW_LRX_MODEL";

    CrInf.Parent := ModelCont;

    CrInf.Permanent := False;

    Obj := ActiveMetabase.CreateObject(CrInf).Edit;

    Model := Obj As IMsModel;

    Model.TreatNullsAsZeros := True;

    Transform := Model.Transform;

    // Задаем моделируемую переменную

    Descript := ActiveMetabase.ItemByIdNamespace("SOURCE_LRX", ModelCont.Key);

    Obj_x1 := Descript.Bind;

    ModelVar_x1 := Obj_x1 As IVariableStub;

    Out := Transform.Outputs;

    Out.Clear;

    Out.Add(ModelVar_x1);

    // Задаем вид модели

    TransformVar := Transform.Outputs.Item(0);

    Slice := TransformVar.Slices.Add(Null);

    Selector := Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Transform.Transform(Selector);

    Formula.Kind := MsFormulaKind.LRXFilter;

    LRX := Formula.Method As IMsLRXFilterTransform;

    // Выгружаемая переменная

    Descript := ActiveMetabase.ItemByIdNamespace("RESULT_LRX", ModelCont.Key);

    Obj_x1 := Descript.Bind;

    ModelVar_x1 := Obj_x1 As IVariableStub;

    MethodSeries := LRX.Series;

    MethodSeries.Fitted := ModelVar_x1 As IMsFormulaTermInfo;

    // Априорные значения

    Descript := ActiveMetabase.ItemByIdNamespace("AVAL_LRX", ModelCont.Key);

    Obj_x1 := Descript.Bind;

    ModelVar_x1 := Obj_x1 As IVariableStub;

    Inp := Transform.Inputs;

    TransformVar := Inp.Add(ModelVar_x1);

    Slice := TransformVar.Slices.Add(Null);

    Term := LRX.Operands.Add(Slice);

    LRX.Prior := Term;

    // Априорные разности

    Descript := ActiveMetabase.ItemByIdNamespace("APD_LRX", ModelCont.Key);

    Obj_x1 := Descript.Bind;

    ModelVar_x1 := Obj_x1 As IVariableStub;

    TransformVar := Inp.Add(ModelVar_x1);

    Slice := TransformVar.Slices.Add(Null);

    Term := LRX.Operands.Add(Slice);

    LRX.DPrior := Term;

    // Веса 1

    Descript := ActiveMetabase.ItemByIdNamespace("W1_LRX", ModelCont.Key);

    Obj_x1 := Descript.Bind;

    ModelVar_x1 := Obj_x1 As IVariableStub;

    TransformVar := Inp.Add(ModelVar_x1);

    Slice := TransformVar.Slices.Add(Null);

    Term := LRX.Operands.Add(Slice);

    LRX.w1 := Term;

    // Параметр сглаживания

    LRX.SmoothingParameter := 120.1;

    // Метод обработки пропусков

    LRX.MissingData.Method := MissingDataMethod.LinTrend;

    // Выгрузка остатков

    MethodSeries.Residuals := Null;

    Obj.Save;

End Sub UserProc;


После выполнения примера, в контейнере моделирования будет создана модель
 с идентификатором NEW_LRX_MODEL, использующая для расчета метод LRX-фильтр.
 Для модели будут определены моделируемая переменная, выгружаемая переменная,
 априорные значения и разности, веса 1, параметры сглаживания и выгрузки
 результатов, а также метод обработки пропусков.


См. также:


[IMsLRXFilterTransform](IMsLRXFilterTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
