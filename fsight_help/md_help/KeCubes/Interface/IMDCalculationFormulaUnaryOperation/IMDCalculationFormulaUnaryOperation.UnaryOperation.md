# IMDCalculationFormulaUnaryOperation.UnaryOperation

IMDCalculationFormulaUnaryOperation.UnaryOperation
-


# IMDCalculationFormulaUnaryOperation.UnaryOperation


## Синтаксис


UnaryOperation: [MDCalculationFormulaUnaryOperation](../../Enums/MDCalculationFormulaUnaryOperation.htm);


## Описание


Свойство UnaryOperation определяет
 вид унарной операции, которая используется как операнд в формуле.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MDInst: IMDCalculationInstance;

    Formulas: IMDCalculationFormulas;

    Formula: IMDCalculationFormula;

    FormulaExpression: IMDCalculationFormulaExpression;

    Source: IMDCalculationSourceInstance;

    Dest: IMDCalculationDestinationInstance;

    Slices: IMDCalculationSlicesInstance;

    Operand: IMDCalculationFormulaOperand;

    DestCoord, SourceCoord: IMatrixCoord;

    ElementKey, SourceElKey: IMDCalculationFormulaElementKey;

    UnaryOperand: IMDCalculationFormulaUnaryOperation;

    CoordOperand: IMDCalculationFormulaElement;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    Formulas := MDInst.CreateFormulas;

    Formula := Formulas.Add;

    FormulaExpression := Formula.Expression;

    Source := MDInst.Sources.Item(0);

    Slices := Source.Slices;

    // Задать в качестве операнда - знак "-"

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.UnaryOperation);

    UnaryOperand := Operand As IMDCalculationFormulaUnaryOperation;

    UnaryOperand.UnaryOperation := MDCalculationFormulaUnaryOperation.Minus;

    FormulaExpression.InsertItem(Operand);

    // Задать в качестве операнда - координату в источнике

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.Element);

    SourceCoord := Source.NewCoord;

    For i := 0 To Slices.Count - 1 Do

        SourceCoord.Item(i) := 0;

    End For;

    SourceElKey := Source.CoordToKey(SourceCoord);

    SourceElKey.FactIndex := 0;

    CoordOperand := Operand As IMDCalculationFormulaElement;

    CoordOperand.Key := SourceElKey;

    FormulaExpression.InsertItem(Operand);

    // Координата, по которой запишем формулы в приёмник

    Dest := MDInst.Destination;

    DestCoord := Dest.NewCoord;

    Slices := Dest.Slices;

    For i := 0 To Slices.Count - 1 Do

        DestCoord.Item(i) := 0;

    End For;

    ElementKey := Dest.CoordToKey(DestCoord);

    ElementKey.FactIndex := 0;

    MDInst.WriteFormulas(ElementKey, Formulas);

End Sub UserProc;


После выполнения примера будет задана формула для указанного элемента
 в приёмнике данных. Значение по координате в приёмнике будет рассчитываться
 по формуле: 0 - Значение по координате в источнике.


См. также:


[IMDCalculationFormulaUnaryOperation](IMDCalculationFormulaUnaryOperation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
