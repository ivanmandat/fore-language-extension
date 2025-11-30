# IMDCalculationFormulaFunctionCall.ArgumentCount

IMDCalculationFormulaFunctionCall.ArgumentCount
-


# IMDCalculationFormulaFunctionCall.ArgumentCount


## Синтаксис


ArgumentCount: Integer;


## Описание


Свойство ArgumentCount определяет
 количество аргументов, используемых в функциях MMin, MMax, MAvg.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MDInst: IMDCalculationInstance;

    Dest: IMDCalculationDestinationInstance;

    DestCoord: IMatrixCoord;

    Slices: IMDCalculationSlicesInstance;

    ElementKey: IMDCalculationFormulaElementKey;

    Formulas: IMDCalculationFormulas;

    Formula: IMDCalculationFormula;

    FormulaExpression: IMDCalculationFormulaExpression;

    FuncCallOperand: IMDCalculationFormulaFunctionCall;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    Dest := MDInst.Destination;

    DestCoord := Dest.NewCoord;

    Slices := Dest.Slices;

    For i := 0 To Slices.Count - 1 Do

        DestCoord.Item(i) := 0;

    End For;

    ElementKey := Dest.CoordToKey(DestCoord);

    ElementKey.FactIndex := 0;

    Formulas := MDInst.ReadFormulas(ElementKey);

    For i := 0 To Formulas.Count - 1 Do

        Formula := Formulas.Item(i);

        FormulaExpression := Formula.Expression;

        For j := 0 To FormulaExpression.Count - 1 Do

            If FormulaExpression.Item(j).Kind = MDCalculationFormulaOperandKind.FunctionCall Then

                FuncCallOperand := FormulaExpression.Item(j) As IMDCalculationFormulaFunctionCall;

                Debug.WriteLine("ArgumentCount:" + FuncCallOperand.ArgumentCount.ToString);

            End If;

        End For;

    End For;

End Sub UserProc;


После выполнения примера будут проверены все формулы по указанному элементу
 приёмника данных. Если в какой-либо формуле используются функции MMin,
 MMax или MAvg, то в консоль среды разработки будет выведено количество
 аргументов применяемой функции.


См. также:


[IMDCalculationFormulaFunctionCall](IMDCalculationFormulaFunctionCall.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
