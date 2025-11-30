# ICubeExecuteResult.Destination

ICubeExecuteResult.Destination
-


# ICubeExecuteResult.Destination


## Синтаксис


Destination: [ICubeInstanceDestination](../ICubeInstanceDestination/ICubeInstanceDestination.htm);


## Описание


Свойство Destination возвращает
 отстроенный куб-родитель.


## Пример


Для выполнения примера в репозитории должна присутствовать база данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    Mb: IMetabase;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Exe: ICubeInstanceDestinationExecutor;

    Mat, MatRes: IMatrix;

    FactorIO: IRubricatorFactorIO;

    ExeRes: IRubricatorExecuteResult;

    CubeExeRes: ICubeExecuteResult;

Begin

    Mb := MetabaseClass.Active;

    CubeInst := mb.ItemById("OBJ_RUBRICATOR").Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    Exe := Dest.CreateExecutor;

    FactorIO := Exe As IRubricatorFactorIO;

    FactorIO.ValidationValues := False;

    FactorIO.MultipleFactors := False;

    FactorIO.Dependencies := False;

    Exe.PrepareExecute(Null);

    Exe.PerformExecute;

    Mat := Exe.Matrix;

    CubeExeRes := CubeClass.ExecuteResult(Mat);

    Debug.WriteLine(CubeExeRes.Destination.Name);

    ExeRes := CubeExeRes As IRubricatorExecuteResult;

    MatRes := ExeRes.Values;

End Sub UserProc;


После выполнения примера в переменной CubeExeRes будет находиться объект,
 содержащий результаты расчёта всей базы данных временных рядов. В окно
 консоли будет выведено наименование варианта отображения данных базы.


См. также:


[ICubeExecuteResult](ICubeExecuteResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
