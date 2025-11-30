# ICubeClass.ExecuteResult

ICubeClass.ExecuteResult
-


# ICubeClass.ExecuteResult


## Синтаксис


ExecuteResult(Matrix: [IMatrix](kematrix.chm::/interface/imatrix/imatrix.htm)):
 [ICubeExecuteResult](../ICubeExecuteResult/ICubeExecuteResult.htm);


## Параметры


Matrix. Матрица данных, по
 которой должен быть рассчитан куб.


## Описание


Свойство ExecuteResult возвращает
 результат расчета куба по заданной матрице.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    Mb: IMetabase;

    Cat: IMetabaseObjectDescriptor;

    Inst: IRubricatorInstance;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Exec: ICubeInstanceDestinationExecutor;

    Mat, MatRes: IMatrix;

    FactorIO: IRubricatorFactorIO;

    ExeRes: IRubricatorExecuteResult;

    CubeExeRes: ICubeExecuteResult;

Begin

    Mb := MetabaseClass.Active;

    Cat := mb.ItemById("OBJ_RUBRICATOR").Bind;

    Inst := Cat.Open(Null) As IRubricatorInstance;

    CubeInst := Inst As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    Exec := Dest.CreateExecutor;

    FactorIO := Exec As IRubricatorFactorIO;

    FactorIO.ValidationValues := False;

    FactorIO.MultipleFactors := False;

    FactorIO.Dependencies := False;

    Exec.PrepareExecute(Null);

    Exec.PerformExecute;

    Mat := Exec.Matrix;

    CubeExeRes := CubeClass.ExecuteResult(Mat);

    Debug.WriteLine(CubeExeRes.Destination.Name);

    ExeRes := CubeExeRes As IRubricatorExecuteResult;

    MatRes := ExeRes.Values;

End Sub UserProc;


После выполнения примера в переменной CubeExeRes будет находиться объект,
 содержащий результаты выполнения всей базы данных временных рядов.


См. также:


[ICubeClass](ICubeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
