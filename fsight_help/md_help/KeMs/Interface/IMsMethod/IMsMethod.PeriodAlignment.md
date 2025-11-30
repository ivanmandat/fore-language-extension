# IMsMethod.PeriodAlignment

IMsMethod.PeriodAlignment
-


# IMsMethod.PeriodAlignment


## Синтаксис


PeriodAlignment: [MsMethodPeriodAlignment](../../Enums/MsMethodPeriodAlignment.htm);


## Описание


Свойство PeriodAlignment
 возвращает тип расчета метода относительно периода.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере должна
 присутствовать модель с идентификатором M_COLLAPSE, рассчитываемая методом
 поточечного коллапса.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Model: IMsModel;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Collapse: IMsPointwiseCollapseTransform;

    Formula: IMsFormula;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("M_COLLAPSE", MB.ItemById("MODEL_SPACE").Key).Bind;

    Model := MObj As IMsModel;

    VarTrans := Model.Transform.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    Collapse := Formula.Method As IMsPointwiseCollapseTransform;

    If Collapse.PeriodAlignment = MsMethodPeriodAlignment.Beginning

        Then Debug.WriteLine("Рассчитывается на начало периода");

        Else Debug.WriteLine("Рассчитывается на конец периода");

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 типе расчета метода модели относительно периода.


См. также:


[IMsMethod](IMsMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
