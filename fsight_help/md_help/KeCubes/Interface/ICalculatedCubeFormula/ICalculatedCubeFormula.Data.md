# ICalculatedCubeFormula.Data

ICalculatedCubeFormula.Data
-


# ICalculatedCubeFormula.Data


## Синтаксис


Data: Variant;


## Описание


Свойство Data может содержать
 любые пользовательские данные.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube. В кубе имеется два не зафиксированных
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

    Formula.Data := "Начальная формула";

    Formulas.Save;

    CubeInst.SaveFormulas;

End Sub UserProc;


После выполнения примера, для координаты вычисляемого куба будет добавлен
 комментарий.


См. также:


[ICalculatedCubeFormula](ICalculatedCubeFormula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
