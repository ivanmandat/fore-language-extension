# IMsMethod.Summary

IMsMethod.Summary
-


# IMsMethod.Summary


## Синтаксис


Summary(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 [ISummaryStatistics](StatLib.chm::/Interface/ISummaryStatistics/ISummaryStatistics.htm);


## Параметры


Coord. Срез переменной, для которого необходимо
 получить информацию.


## Описание


Свойство Summary возвращает
 статистические характеристики, рассчитанные для модели.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MODEL_SPACE. В контейнере присутствует
 модель с идентификатором MODEL_LINREG. Модель использует для расчета метод
 линейной регресии.


			Sub UserProc;

Var

    MB: IMetabase;

    Model: IMsModel;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Coo: IMsFormulaTransformCoord;

    LinReg: IMsLinearRegressionTransform;

    d: Double;

Begin

    MB := MetabaseClass.Active;

    Model := MB.ItemByIdNamespace("MODEL_LINREG", MB.ItemById("MODEL_SPACE").Key).Bind As IMsModel;

    VarTrans := Model.Transform.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    Coo := Model.Transform.CreateCoord(VarTrans);

    LinReg := Formula.Method As IMsLinearRegressionTransform;

    d := LinReg.Summary(Coo).DW;

End Sub UserProc;


После выполнения примера в переменной d будет содержаться значение статистики
 Дарбина-Уотсона, рассчитанной для модели Model_1.


См. также:


[IMsMethod](IMsMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
