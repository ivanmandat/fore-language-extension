# IMDCalculationDatasetInstance.CoordToKey

IMDCalculationDatasetInstance.CoordToKey
-


# IMDCalculationDatasetInstance.CoordToKey


## Синтаксис


CoordToKey(Coord: [IMatrixCoord](KeMatrix.chm::/Interface/IMatrixCoord/IMatrixCoord.htm);
 [Key: [IMDCalculationFormulaElementKey](../IMDCalculationFormulaElementKey/IMDCalculationFormulaElementKey.htm)
 = Null]): [IMDCalculationFormulaElementKey](../IMDCalculationFormulaElementKey/IMDCalculationFormulaElementKey.htm);


## Параметры


Coord. Координата элемента
 в источнике/приёмнике данных, которую необходимо преобразовать;


Key. Необязательный параметр,
 определяющий уникальный ключ элемента, свойства которого будут изменены
 в соответствии со значением указанной координаты.


## Описание


Метод CoordToKey осуществляет
 преобразование координаты, соответствующей элементу в источнике/приёмнике
 данных, в уникальный ключ элемента.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчёта на сервере БД с идентификатором MDCalc_1.


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

    CoordOperand: IMDCalculationFormulaElement;

    ConstOperand: IMDCalculationFormulaConstantValue;

    BinaryOperand: IMDCalculationFormulaBinaryOperation;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    Formulas := MDInst.CreateFormulas;

    Formula := Formulas.Add;

    FormulaExpression := Formula.Expression;

    Source := MDInst.Sources.Item(0);

    Slices := Source.Slices;

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


После выполнения примера будет задана формула для элемента, соответствующего
 первым элементам срезов приёмника данных. Значение по координате в приёмнике
 будет рассчитываться по формуле: Значение по координате в источнике умноженное
 на 3,14.


См. также:


[IMDCalculationDatasetInstance](IMDCalculationDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
