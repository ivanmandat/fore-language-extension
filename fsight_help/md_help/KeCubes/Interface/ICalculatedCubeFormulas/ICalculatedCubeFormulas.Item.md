# ICalculatedCubeFormulas.Item

ICalculatedCubeFormulas.Item
-


# ICalculatedCubeFormulas.Item


## Синтаксис


Item(Index: Integer): [ICalculatedCubeFormula](../ICalculatedCubeFormula/ICalculatedCubeFormula.htm);


## Параметры


Index. Индекс формулы.


## Описание


Свойство Item возвращает формулу,
 индекс которой передается посредством параметра Index.


## Комментарии


По каждой координате всегда имеется минимум одна формула. Если в кубе
 установлено измерение, которое управляет выбором [периода
 действия формулы](../ICalculatedCubeDimension/ICalculatedCubeDimension.IsTime.htm), то формулы для различных периодов добавляются с
 помощью метода [Add](ICalculatedCubeFormulas.Add.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории вычисляемого
 куба с идентификатором «Calc_Cube». В кубе-источнике и вычисляемом кубе
 имеется два незафиксированных измерения.


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

    //Получение формул

    Formulas := CubeInst.Formula(Coord);

    Formula := Formulas.Item(0);

    Formula.Expression.AsString := SourceCoord.AsTerm + "*3.14";

    Formulas.Save;

    CubeInst.SaveFormulas;

End Sub UserProc;


При выполнении примера по указанной координате куба будет задана формула.
 В выражении формулы будет использоваться терм, ссылающийся на соответствующую
 координату в кубе-источнике.


См. также:


[ICalculatedCubeFormulas](ICalculatedCubeFormulas.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
