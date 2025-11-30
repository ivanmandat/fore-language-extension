# IRubricatorExecuteResult.Factors

IRubricatorExecuteResult.Factors
-


# IRubricatorExecuteResult.Factors


## Синтаксис


Factors: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство Factors возвращает
 матрицу показателей базы данных временных рядов.


## Пример


Для выполнения примера в репозитории необходимо наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    Mb: IMetabase;

    Inst: IRubricatorInstance;

    Cube: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Exec: ICubeInstanceDestinationExecutor;

    Matr, MatRes: IMatrix;

    FactorIO: IRubricatorFactorIO;

    ExeRes: IRubricatorExecuteResult;

    CubeExeRes: ICubeExecuteResult;

Begin

    Mb := MetabaseClass.Active;

    Inst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Cube := Inst As ICubeInstance;

    Dest := Cube.Destinations.DefaultDestination;

    Exec := Dest.CreateExecutor;

    FactorIO := Exec As IRubricatorFactorIO;

    FactorIO.ValidationValues := False;

    FactorIO.MultipleFactors := False;

    FactorIO.Dependencies := True;

    Exec.PrepareExecute(Null);

    Exec.PerformExecute;

    Matr := Exec.Matrix;

    CubeExeRes := CubeClass.ExecuteResult(Matr);

    Debug.WriteLine(CubeExeRes.Destination.Name);

    ExeRes := CubeExeRes As IRubricatorExecuteResult;

    MatRes := ExeRes.Factors;

End Sub UserProc;


После выполнения примера в переменной MatRes будет находиться матрица
 показателей базы данных временных рядов.


См. также:


[IRubricatorExecuteResult](IRubricatorExecuteResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
