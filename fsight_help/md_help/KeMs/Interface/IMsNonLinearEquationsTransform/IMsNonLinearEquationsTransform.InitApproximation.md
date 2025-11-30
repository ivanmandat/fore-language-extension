# IMsNonLinearEquationsTransform.InitApproximation

IMsNonLinearEquationsTransform.InitApproximation
-


# IMsNonLinearEquationsTransform.InitApproximation


## Синтаксис


InitApproximation: Array;


## Описание


Свойство InitApproximation определяет
 начальные значения искомых переменных.


## Комментарии


Значения задаются в виде массива, где каждый элемент определяет значение,
 соответствующей ему по индексу, искомой переменной из коллекции [IMsNonLinearEquationsTransform.OutputOperands](IMsNonLinearEquationsTransform.OutputOperands.htm).


Если свойству InitApproximation
 присвоить значение Null,
 то начальные значения искомых переменных будут определяться автоматически.


По умолчанию в качестве начального значения для каждой точки берется
 значение, рассчитанное в предыдущей точке. Если предыдущая точка не была
 рассчитана, то берется значение точки, предшествующей ей. Таким образом,
 рассматриваются значения до первой идентификационной точки. Если и в первой
 точке значение отсутствует, то начальное приближение устанавливается равным
 единице.


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

    Appr: Array Of Double;

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

    Appr := New Double[2];

    Appr[0] := 100;

    Appr[1] := 200;

    Eq.InitApproximation := Appr;

    Obj.Save;

End Sub UserProc;


После выполнения примера, начальное значение первой искомой переменной
 - «100», второй - «200».


См. также:


[IMsNonLinearEquationsTransform](IMsNonLinearEquationsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
