# IMDCalculationInstance.CreateParser

IMDCalculationInstance.CreateParser
-


# IMDCalculationInstance.CreateParser


## Синтаксис


CreateParser: [IMDCalculationExpressionParser](../IMDCalculationExpressionParser/IMDCalculationExpressionParser.htm);


## Описание


Метод CreateParser создает объект,
 осуществляющий разбор выражения формулы, заданной в виде символьной строки.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MDInst: IMDCalculationInstance;

    Source: IMDCalculationSourceInstance;

    Parser: IMDCalculationExpressionParser;

    SourceCoord, DestCoord: IMatrixCoord;

    SourceKey, DestKey: IMDCalculationFormulaElementKey;

    Dest: IMDCalculationDestinationInstance;

    Formulas: IMDCalculationFormulas;

    Formula: IMDCalculationFormula;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    Source := MDInst.Sources.Item(0);

    Parser := MDInst.CreateParser;

    SourceCoord := Source.NewCoord;

    For i := 0 To SourceCoord.Count - 1 Do

        SourceCoord.Item(i) := 0;

    End For;

    SourceKey := Source.CoordToKey(SourceCoord);

    Parser.TermKey("Term") := SourceKey;

    Parser.Text := "Shift(Term, Year, 1)*3.14";

    Parser.Parse;

    Dest := MDInst.Destination;

    DestCoord := Dest.NewCoord;

    For i := 0 To SourceCoord.Count - 1 Do

        DestCoord.Item(i) := 0;

    End For;

    DestKey := Dest.CoordToKey(DestCoord);

    Formulas := MDInst.CreateFormulas;

    Formula := Formulas.Add;

    Parser.Expression.CopyTo(Formula.Expression);

    MDInst.WriteFormulas(DestKey, Formulas);

End Sub UserProc;


После выполнения примера будет создана новая формула для указанного
 элемента приёмника данных. Формула будет получена путем разбора текстовой
 строки. Вместо терма в выражение будет подставляться указанный элемент
 источника данных.


См. также:


[IMDCalculationInstance](IMDCalculationInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
