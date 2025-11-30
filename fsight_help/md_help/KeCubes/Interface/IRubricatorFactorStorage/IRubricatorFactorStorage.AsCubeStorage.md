# IRubricatorFactorStorage.AsCubeStorage

IRubricatorFactorStorage.AsCubeStorage
-


# IRubricatorFactorStorage.AsCubeStorage


## Синтаксис


AsCubeStorage: [ICubeInstanceStorage](../ICubeInstanceStorage/ICubeInstanceStorage.htm);


## Описание


Метод AsCubeStorage позволяет
 сохранить данные показателя, как данные куба.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    Cube: ICubeInstance;

    Dest: ICubeInstanceDestination;

    FactorStorage: IRubricatorFactorStorage;

    Storage: ICubeInstanceStorage;

    FactorExec: IRubricatorFactorExecutor;

    Exec: ICubeInstanceDestinationExecutor;

    Matr: IMatrix;

    It: IMatrixIterator;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Cube := RubrInst As ICubeInstance;

    Dest := Cube.Destinations.DefaultDestination;

    FactorStorage := Dest.CreateStorage As IRubricatorFactorStorage;

    FactorStorage.DataOverwrite := False;

    FactorStorage.FactDataId := "OBT";

    FactorStorage.FactDataKind := MetaAttributeKind.Value;

    FactorStorage.CurrentRevision := FactorStorage.OpenRevision("Ревизия для сохранения данных");

    Storage := FactorStorage.AsCubeStorage;

    FactorExec := Dest.CreateExecutor As IRubricatorFactorExecutor;

    Exec := FactorExec.AsCubeExecutor;

    Exec.PrepareExecute(Null);

    Exec.PerformExecute;

    FactorStorage.FactDataMatrix := Exec.Matrix;

    Matr := FactorStorage.FactDataMatrix;

    It := Matr.CreateIterator;

    It.Move(IteratorDirection.First);

    Debug.WriteLine("-----Данные до изменения-----");

    While It.Valid Do

        Debug.WriteLine(It.Value);

        It.Value := It.Value + 1;

        It.ValueFlag := 1;

        It.Move(IteratorDirection.Next);

    End While;

    Storage.SaveMatrix(Matr, 1);

    Debug.WriteLine("---- Данные после изменения-----");

    It.Move(IteratorDirection.First);

    While It.Valid Do

        Debug.WriteLine(It.Value);

        It.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера значения всех показателей будут увеличены на
 единицу, сохранены в новой ревизии и выведены в окно консоли.


См. также:


[IRubricatorFactorStorage](IRubricatorFactorStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
