# IMsNonLinearEquationsTransform.JacobianCalcFrequency

IMsNonLinearEquationsTransform.JacobianCalcFrequency
-


# IMsNonLinearEquationsTransform.JacobianCalcFrequency


## Синтаксис


JacobianCalcFrequency: Integer;


## Описание


Свойство JacobianCalcFrequency
 определяет частоту вычисления якобиана при решении системы нелинейных
 уравнений методом Ньютона.


## Комментарии


Значение свойства по умолчанию - единица,
 т.е. якобиан вычисляется при каждой итерации. Чем больше значение
 данного свойства, тем реже будет вычисляться якобиан и тем выше будет
 скорость решения системы уравнений.


Метод решения системы определяется свойством [IMsNonLinearEquationsTransform.MethodType](IMsNonLinearEquationsTransform.MethodType.htm):
 оно должно иметь значение [NonLinearEquationsType.NewtonMethod](StatLib.chm::/Enums/NonLinearEquationsType.htm).
 При других методах решения свойство JacobianCalcFrequency
 игнорируется.


## Пример


Для выполнения примера необходим контейнер моделирования с идентификатором
 CONT_MODEL и созданная в нем модель типа «Система нелинейных уравнений»
 с идентификатором NON_LINEAR.


			Sub UserProc;

Var

    ActiveMetabase: IMetabase;

    ModelCont: IMetabaseObjectDescriptor;

    Descript: IMetabaseObjectDescriptor;

    Obj: IMetabaseObject;

    Model: IMsModel;

    Eq: IMsNonLinearEquationsTransform;

    Transform: IMsFormulaTransform;

Begin

    ActiveMetabase := MetabaseClass.Active;

    ModelCont := ActiveMetabase.ItemById("CONT_MODEL");

    Descript := ActiveMetabase.ItemByIdNamespace("NON_LINEAR", ModelCont.Key);

    Obj := Descript.Edit;

    Model := Obj As IMsModel;

    Model.TreatNullsAsZeros := True;

    Transform := Model.Transform;

    Eq := Transform.EquationsFormula.Method As IMsNonLinearEquationsTransform;

    Eq.MethodType := NonLinearEquationsType.NewtonMethod;

    Eq.DerivativeShift := 2.1;

    Eq.LinearEqSolutionMethod := LinearEqSolutionType.InvMatrix;

    Eq.JacobianCalcFrequency := 5;

    Obj.Save;

End Sub UserProc;


После выполнения примера в качестве метода решения системы нелинейных
 уравнений будет установлен метод Ньютона. Для него будут заданы следующие
 параметры:


	- приращение аргумента - «2,1»;


	- частота вычисления якобиана - каждая пятая итерация;


	- способ вычисления следующего приближения - обратная матрица.


Затем модель будет сохранена.


См. также:


[IMsNonLinearEquationsTransform](IMsNonLinearEquationsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
