# IMsFormulaTermInfo.Assign

IMsFormulaTermInfo.Assign
-


# IMsFormulaTermInfo.Assign


## Синтаксис


		Assign(TermInfo: [IMsFormulaTermInfo](IMsFormulaTermInfo.htm));


## Параметры


TermInfo. Параметры терма,
 которые необходимо установить для данного терма.


## Описание


Метод Assign осуществляет установку
 параметров текущего терма, в соответствии с параметрами указанного терма.


## Комментарии


При вызове данного метода будут установлены все свойства терма, кроме
 [IMsFormulaTermInfo.Slice](IMsFormulaTermInfo.Slice.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL. В данном контейнере имеется
 задача моделирования с идентификатором NEW_NONLINREG, использующая для
 расчёта метод нелинейной регрессии. Также в контейнере имеется переменная
 моделирования VAR_FACTOR1, которая будет добавлена в модель.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Kont: IMetabaseObjectDescriptor;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    Varr: IVariableStub;

		    TransVar: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		    NonLinear: IMsNonLinearRegressionTransform;

		    Oper: IMsFormulaTermList;

		    Term: IMsFormulaTerm;

		    Info: IMsFormulaTermInfo;

		Begin

		    MB := MetabaseClass.Active;

		    Kont := MB.ItemById("KONT_MODEL");

		    MObj := MB.ItemByIdNamespace("New_NonLinReg",Kont.Key).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    Varr := MB.ItemByIdNamespace("Var_Factor1",Kont.Key).Bind As IVariableStub;

		    TransVar := Trans.Inputs.Add(Varr);

		    Slice := TransVar.SlicesTree(TransVar).CreateSlice(1);

		    NonLinear := Trans.FormulaItem(0).Method As IMsNonLinearRegressionTransform;

		    Oper := NonLinear.Operands;

		    Term := Oper.Add(Slice);

		    Info := Term.TermInfo;

		    Info.Assign(Oper.Item(0).TermInfo);

		    Term.TermInfo := Info;

		    NonLinear.Expression.AsString := NonLinear.Expression.AsString + "*" + Info.TermInnerText;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в модель будет добавлена переменная
 VAR_FACTOR1. Параметры терма, соответствующего срезу данной переменной,
 будут настроены в соответствии с параметрами первого терма, имеющегося
 в списке. Новый терм также будет добавлен в уравнение модели.


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
