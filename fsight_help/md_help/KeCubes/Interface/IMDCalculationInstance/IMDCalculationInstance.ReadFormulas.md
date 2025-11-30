# IMDCalculationInstance.ReadFormulas

IMDCalculationInstance.ReadFormulas
-


# IMDCalculationInstance.ReadFormulas


## Синтаксис


ReadFormulas(


Key: [IMDCalculationFormulaElementKey](../IMDCalculationFormulaElementKey/IMDCalculationFormulaElementKey.htm);


[Formulas: [IMDCalculationFormulas](../IMDCalculationFormulas/IMDCalculationFormulas.htm)
 = Null];


[Options: Integer = 0]):
 [IMDCalculationFormulas](../IMDCalculationFormulas/IMDCalculationFormulas.htm);


## Параметры


Key. Уникальный ключ элемента,
 по которому необходимо прочитать формулы.


Formulas. Параметр, определяющий
 коллекцию, в которую будут считаны формулы по указанному элементу. Если
 данный параметр не указан, то будет создана новая коллекция формул.


Options.
 Необязательный параметр, зарезервирован
 на будущее.


## Описание


Метод ReadFormulas осуществляет
 чтение формул по указанному элементу.


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

    SourceCoord, DestCoord: IMatrixCoord;

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

    DestCoord := Dest.NewCoord;

    Slices := Dest.Slices;

    For i := 0 To Slices.Count - 1 Do

        DestCoord.Item(i) := 0;

    End For;

    ElementKey := Dest.CoordToKey(DestCoord);

    ElementKey.FactIndex := 0;

    Source := MDInst.Sources.Item(0);

    Slices := Source.Slices;

    Formulas := MDInst.ReadFormulas(ElementKey);

    Formula := Formulas.Add;

    FormulaExpression := Formula.Expression;

    Formula.ChangePeriod(DateTime.ComposeDay(2025, 01, 01), DateTime.ComposeDay(2026, 01, 01));

    // Задать в качестве операнда - элемент из источника

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


[IMDCalculationInstance](IMDCalculationInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
