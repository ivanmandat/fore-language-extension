# IMDCalculationFormulas.Add

IMDCalculationFormulas.Add
-


# IMDCalculationFormulas.Add


## Синтаксис


Add: [IMDCalculationFormula](../IMDCalculationFormula/IMDCalculationFormula.htm);


## Описание


Метод Add создает новую формулу.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc_1. Для формул включена
 зависимость от времени.


			Sub UserProc;

Var

    MB: IMetabase;

    MDInst: IMDCalculationInstance;

    Source: IMDCalculationSourceInstance;

    Dest: IMDCalculationDestinationInstance;

    Slices: IMDCalculationSlicesInstance;

    Formulas: IMDCalculationFormulas;

    Formula: IMDCalculationFormula;

    FormulaExpression: IMDCalculationFormulaExpression;

    DestCoord, SourceCoord: IMatrixCoord;

    SourceElKey, ElementKey: IMDCalculationFormulaElementKey;

    Operand: IMDCalculationFormulaOperand;

    CoordOperand: IMDCalculationFormulaElement;

    BinaryOperand: IMDCalculationFormulaBinaryOperation;

    ConstOperand: IMDCalculationFormulaConstantValue;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    Dest := MDInst.Destination;

    DestCoo := Dest.NewCoord;

    Slices := Dest.Slices;

    For i := 0 To Slices.Count - 1 Do

        DestCoo.Item(i) := 0;

    End For;

    ElementKey := Dest.CoordToKey(DestCoo);

    ElementKey.FactIndex := 0;

    Source := MDInst.Sources.Item(0);

    Slices := Source.Slices;

    Formulas := MDInst.ReadFormulas(ElementKey);

    Formula := Formulas.Add;

    FormulaExpression := Formula.Expression;

    Formula.ChangePeriod(DateTime.ComposeDay(2025, 01, 01), DateTime.ComposeDay(2026, 01, 01));

    //Задать в качестве операнда - элемент из источника

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.Element);

    SourceCoo := Source.NewCoord;

    For i := 0 To Slices.Count - 1 Do

        SourceCoo.Item(i) := 0;

    End For;

    SourceElKey := Source.CoordToKey(SourceCoo);

    SourceElKey.FactIndex := 0;

    CoordOperand := Operand As IMDCalculationFormulaElement;

    CoordOperand.Key := SourceElKey;

    FormulaExpression.InsertItem(Operand);

    // Задать в качестве операнда - знак "*"

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.BinaryOperation);

    BinaryOperand := Operand As IMDCalculationFormulaBinaryOperation;

    BinaryOperand.BinaryOperation := MDCalculationFormulaBinaryOperation.Mul;

    FormulaExpression.InsertItem(Operand);

    // Задать в качестве операнда - константу "3.14"

    Operand := FormulaExpression.CreateItem(MDCalculationFormulaOperandKind.ConstantValue);

    ConstOperand := Operand As IMDCalculationFormulaConstantValue;

    ConstOperand.ConstantValue := 3.14;

    FormulaExpression.InsertItem(Operand);

    MDInst.WriteFormulas(ElementKey, Formulas);

End Sub UserProc;


После выполнения примера для указанного элемента приёмника данных будет
 добавлена формула. Для формулы будет задан период действия. Периоды действия
 других формул будут скорректированы относительно данного.


См. также:


[IMDCalculationFormulas](IMDCalculationFormulas.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
