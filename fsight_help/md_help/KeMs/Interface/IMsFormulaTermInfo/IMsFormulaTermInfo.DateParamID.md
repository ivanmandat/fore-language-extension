# IMsFormulaTermInfo.DateParamID

IMsFormulaTermInfo.DateParamID
-


# IMsFormulaTermInfo.DateParamID


## Синтаксис


		DateParamID: String;


## Описание


Свойство DateParamID
 определяет идентификатор параметра, являющегося календарной точкой.


## Комментарии


Cвойство используется, если терм является календарным параметром, то
 есть [IMsFormulaTermInfo.Type](IMsFormulaTermInfo.Type.htm)
 принимает значение [MsFormulaTermType.ParamDate](../../Enums/MsFormulaTermType.htm).


Если период/конкретная дата были заданы через свойство DateParamID,
 то данная дата не будет учитываться для расчёта «Начала данных»/«Окончания
 данных».


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_M. В данном контейнере должна присутствовать
 модель с идентификатором MODEL.


Добавьте ссылки на системные сборки: Metabase. Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    cm: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Formula: IMsFormula;

		    Determ: IMsDeterministicTransform;

		    Transform: IMsFormulaTransform;

		    Term: IMsFormulaTerm;

		    TermInfo: IMsFormulaTermInfo;

		    InputsVar: IMsFormulaTransformVariables;

		    ParamVar: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		Begin

		    mb := MetabaseClass.Active;

		    cm := mb.ItemById("CONT_M");

		    Model := mb.ItemByIdNamespace("Model",cm.Key).Edit As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Determ := Formula.Method As IMsDeterministicTransform;

		    InputsVar := Transform.Inputs;

		    ParamVar := InputsVar.AddParamVariable("VAR_PARAM");

		    Slice := ParamVar.Slices.Add(Null);

		    Term := Determ.Operands.Add(Slice);

		    TermInfo := Term.TermInfo;

		    TermInfo.Type := MsFormulaTermType.ParamDate;

		    TermInfo.DateParamID:= "VAR_PARAM";

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для модели будет добавлен календарный
 параметр VAR_PARAM.


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
