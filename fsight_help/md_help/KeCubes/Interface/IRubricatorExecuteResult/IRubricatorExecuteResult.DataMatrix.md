# IRubricatorExecuteResult.DataMatrix

IRubricatorExecuteResult.DataMatrix
-


# IRubricatorExecuteResult.DataMatrix


## Синтаксис


DataMatrix(Dictionary: [RubricatorDictionary](../../Enums/RubricatorDictionary.htm)):
 [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Параметры


Dictionary. Справочник базы
 данных временных рядов.


## Описание


Свойство DataMatrix возвращает
 матрицу значений указанного справочника базы данных временных рядов.


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

    MatRes := ExeRes.DataMatrix(RubricatorDictionary.Values);

End Sub UserProc;


После выполнения примера в переменной MatRes будет находиться матрица,
 содержащая данные справочника значений показателей базы данных временных
 рядов.


См. также:


[IRubricatorExecuteResult](IRubricatorExecuteResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
