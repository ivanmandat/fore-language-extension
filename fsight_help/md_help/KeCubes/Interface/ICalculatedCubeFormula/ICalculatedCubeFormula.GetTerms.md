# ICalculatedCubeFormula.GetTerms

ICalculatedCubeFormula.GetTerms
-


# ICalculatedCubeFormula.GetTerms


## Синтаксис


GetTerms: Array;


## Описание


Метод GetTerms возвращает массив
 термов, используемых в формуле.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube. В кубе имеются два незафиксированных
 измерения.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    Coord: ICalculatedCubeInstanceCoord;

    Formulas: ICalculatedCubeFormulas;

    Formula: ICalculatedCubeFormula;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    Coord := CubeInst.CreateCoord;

    Coord.MatrixCoord.Item(0) := 0;

    Coord.MatrixCoord.Item(1) := 0;

    Formulas := CubeInst.Formula(Coord);

    Formula := Formulas.Item(0);

    Coord := Formula.GetTerms[0] As ICalculatedCubeInstanceCoord;

    Debug.WriteLine(Coord.AsString);

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено символьное
 обозначение координаты, которой соответствует терм, используемый для составления
 первой формулы.


См. также:


[ICalculatedCubeFormula](ICalculatedCubeFormula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
