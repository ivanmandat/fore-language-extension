# IMsNonLinearEquationsTransform.Tolerance

IMsNonLinearEquationsTransform.Tolerance
-


# IMsNonLinearEquationsTransform.Tolerance


## Синтаксис


Tolerance: Double;


## Описание


Свойство Tolerance определяет
 точность решения системы уравнений.


## Комментарии


Минимальное значение данного свойства 0,0000001.


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

    Eq.InitApproximation := Null;

    Eq.Tolerance := 0.001;

    Obj.Save;

End Sub UserProc;


После выполнения примера, точность решения системы будет равна 0,001.


См. также:


[IMsNonLinearEquationsTransform](IMsNonLinearEquationsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
