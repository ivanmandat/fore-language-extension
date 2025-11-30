# IRubricatorFactorIO.Dependencies

IRubricatorFactorIO.Dependencies
-


# IRubricatorFactorIO.Dependencies


## Синтаксис


Dependencies: Boolean;


## Описание


Свойство Dependencies определяет,
 сохранять/извлекать ли данные по зависимостям показателей.


## Комментарии


Допустимые значения:


	- True. Извлекать/сохранять
	 данные по зависимостям;


	- False. Не извлекать/сохранять
	 данные по зависимостям показателей.


Извлеченные данные о зависимостях можно получить через свойство [IRubricatorExecuteResult.Dependencies](../IRubricatorExecuteResult/IRubricatorExecuteResult.Dependencies.htm).


## Пример


Для выполнения примера в репозитории должна присутствовать база данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    Mb: IMetabase;

    Inst: IRubricatorInstance;

    Cub: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Exec: ICubeInstanceDestinationExecutor;

    Matr, MatRes: IMatrix;

    FactorIO: IRubricatorFactorIO;

    ExeRes: IRubricatorExecuteResult;

    CubeExeRes: ICubeExecuteResult;

Begin

    Mb := MetabaseClass.Active;

    Inst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Cub := Inst As ICubeInstance;

    Dest := Cub.Destinations.DefaultDestination;

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

    MatRes := ExeRes.Dependencies;

End Sub UserProc;


После выполнения примера в переменной MatRes будет находиться матрица,
 содержащая данные о зависимостях показателей в базе данных временных рядов.


См. также:


[IRubricatorFactorIO](IRubricatorFactorIO.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
