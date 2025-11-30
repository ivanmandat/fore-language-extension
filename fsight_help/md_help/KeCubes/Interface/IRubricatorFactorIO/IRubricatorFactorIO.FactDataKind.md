# IRubricatorFactorIO.FactDataKind

IRubricatorFactorIO.FactDataKind
-


# IRubricatorFactorIO.FactDataKind


## Синтаксис


FactDataKind: [MetaAttributeKind](KeRds.chm::/Enums/MetaAttributeKind.htm);


## Описание


Свойство FactDataKind определяет
 тип атрибута показателей, значения по которому необходимо загрузить либо
 сохранить.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    RubInst: IRubricatorInstance;

    Cube: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Exec: ICubeInstanceDestinationExecutor;

    Matr, DataMatr: IMatrix;

    It: IMatrixIterator;

Begin

    MB := MetabaseClass.Active;

    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Cube := RubInst As ICubeInstance;

    Dest := Cube.Destinations.DefaultDestination;

    Exec := Dest.CreateExecutor;

    // Атрибут показателей

    (Exec As IRubricatorFactorIO).FactDataKind := MetaAttributeKind.Key;

    // Атрибут наблюдений

    (Exec As IRubricatorFactorIO).ValueKind := MetaAttributeKind.Revision;

    Exec.PrepareExecute(Null);

    Exec.PerformExecute;

    Matr := Exec.Matrix;

    // Значения по атрибуту Ключ

    DataMatr := (CubeClass.ExecuteResult(Matr) As IRubricatorExecuteResult).Factors;

    It := DataMatr.CreateIterator;

    It.Move(IteratorDirection.First);

    While It.Valid Do

        Debug.WriteLine(It.Values(0));

        It.Move(IteratorDirection.Next);

    End While;

    // Значения по атрибуту Ревизия

    DataMatr := (CubeClass.ExecuteResult(Matr) As IRubricatorExecuteResult).Values;

    It := DataMatr.CreateIterator;

    It.Move(IteratorDirection.First);

    While It.Valid Do

        Debug.WriteLine(It.Values(0));

        It.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера будут загружены и выведены в консоль среды
 разработки последние данные по двум атрибутам базы:


	- по атрибуту показателей - Ключ;


	- по атрибуту наблюдений - Ревизия.


См. также:


[IRubricatorFactorIO](IRubricatorFactorIO.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
