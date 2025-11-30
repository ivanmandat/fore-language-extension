# IMsFillGapsTransform.MissingData

IMsFillGapsTransform.MissingData
-


# IMsFillGapsTransform.MissingData


## Синтаксис


		MissingData: [IMissingData](StatLib.chm::/Interface/IMissingData/IMissingData.htm);


## Описание


Свойство MissingData возвращает
 объект, содержащий параметры обработки пропусков исходного ряда.


## Комментарии


Недопустимо использование следующих методов обработки пропусков: MissingDataMethod.Casewise и MissingDataMethod.None.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должны
 присутствовать три переменные моделирования с идентификаторами INPUT_FILL_GRAPS,
 OUTPUT_FILL_GRAPS и VAR_EXPL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Cont: IMetabaseObjectDescriptor;

		    Descript: IMetabaseObjectDescriptor;

		    ModelKey: Integer;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Obj_x1: IMetabaseObject;

		    Transform: IMsFormulaTransform;

		    Out: IMsFormulaTransformVariables;

		    TransformVar: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    FillGaps: IMsFillGapsTransform;

		    ModelVar_x1: IVariableStub;

		    TermInfo: IMsFormulaTermInfo;

		Begin

		    MB := MetabaseClass.Active;

		    Cont := Mb.ItemById("CONT_MODEL").Bind;

		    ModelKey := Cont.Key;

		    // Создаем новую модельв контейнере моделирования

		    CrInf := MB.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Name := "New_Fill_Graps_Model";

		    CrInf.Parent := Cont;

		    CrInf.Permanent := True;

		    MObj := MB.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Transform := Model.Transform;

		    // Задаем моделируемуюпеременную

		    Descript := MB.ItemByIdNamespace("INPUT_FILL_GRAPS",ModelKey);

		    Obj_x1 := Descript.Bind;

		    ModelVar_x1 := Obj_x1 As IVariableStub;

		    Out := Transform.Outputs;

		    Out.Clear;

		    Out.Add(ModelVar_x1);

		    // Определяем вид модели

		    TransformVar := Out.Item(0);

		    Slice := TransformVar.Slices.Add(Null);

		    Selector := Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.FillGaps;

		    FillGaps := Formula.Method As IMsFillGapsTransform;

		    TermInfo := Transform.CreateTerminfo;

		    TermInfo.Slice := Slice;

		    FillGaps.InputFactorTerm:= TermInfo;

		    // Задаем переменную, в которую будут выгружаться результаты

		    Descript := MB.ItemByIdNamespace("OUTPUT_FILL_GRAPS",ModelKey);

		    Obj_x1 := Descript.Bind;

		    ModelVar_x1 := Obj_x1 As IVariableStub;

		    FillGaps.Fitted := ModelVar_x1;

		    // Определяем параметрырасчета модели

		    FillGaps.MissingData.Method:= MissingDataMethod.Overlay;

		    Descript := MB.ItemByIdNamespace("VAR_EXPL",ModelKey);

		    Obj_x1 := Descript.Bind;

		    ModelVar_x1 := Obj_x1 As IVariableStub;

		    TransformVar := Transform.Inputs.Add(ModelVar_x1);

		    Slice := TransformVar.Slices.Add(Null);

		    TermInfo.Slice := Slice;

		    FillGaps.Specified := TermInfo;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 модель NEW_FILL_GRAPS_MODEL, использующая для расчёта метод обработки
 пропусков. Моделируемая переменная - INPUT_FILL_GRAPS, результаты выгружаются
 в переменную OUTPUT_FILL_GRAPS. Пропущенные значения моделируемого ряда
 будут заменены значениями из ряда, определяемого переменной VAR_EXPL.


См. также:


[IMsFillGapsTransform](IMsFillGapsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
