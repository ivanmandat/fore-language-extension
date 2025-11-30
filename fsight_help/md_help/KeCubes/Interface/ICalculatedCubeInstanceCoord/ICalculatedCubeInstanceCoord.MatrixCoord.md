# ICalculatedCubeInstanceCoord.MatrixCoord

ICalculatedCubeInstanceCoord.MatrixCoord
-


# ICalculatedCubeInstanceCoord.MatrixCoord


## Синтаксис


MatrixCoord: [IMatrixCoord](kematrix.chm::/interface/imatrixcoord/imatrixcoord.htm);


## Описание


Свойство MatrixCoord возвращает
 координату вычисляемого куба, представленную в виде координаты матрицы.


## Пример


Для выполнения примера, предполагается наличие в репозитории вычисляемого
 куба с идентификатором "Calc_Cube". В кубе-источнике и вычисляемом
 кубе имеется два незафиксированных измерения.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    Coord, SourceCoord: ICalculatedCubeInstanceCoord;

    Formulas: ICalculatedCubeFormulas;

    Formula: ICalculatedCubeFormula;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    //Получение координаты в вычисляемом кубе

    Coord := CubeInst.CreateCoord;

    Coord.MatrixCoord.Item(0) := 0;

    Coord.MatrixCoord.Item(1) := 0;

    //Получение координаты из источника

    SourceCoord := CubeInst.CreateSourceCoord(CubeInst.Sources.Item(0));

    SourceCoord.MatrixCoord.Item(0) := 0;

    SourceCoord.MatrixCoord.Item(1) := 0;

    Formulas := CubeInst.Formula(Coord);

    //Получение формулы по указанной координате

    Formula := Formulas.Item(0);

    Formula.Expression.AsString := SourceCoord.AsTerm + "* 180 / 3.14";

    Formulas.Save;

    CubeInst.SaveFormulas;

End Sub UserProc;


После выполнения примера, для полученной координаты куба, будет изменена
 формула. В выражении будет использоваться терм, ссылающийся на соответствующую
 координату в кубе-источнике.


См. также:


[ICalculatedCubeInstanceCoord](ICalculatedCubeInstanceCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
