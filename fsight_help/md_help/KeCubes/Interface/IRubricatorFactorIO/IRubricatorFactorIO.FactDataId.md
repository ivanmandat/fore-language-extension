# IRubricatorFactorIO.FactDataId

IRubricatorFactorIO.FactDataId
-


# IRubricatorFactorIO.FactDataId


## Синтаксис


FactDataId: String;


## Описание


Свойство FactDataId определяет
 идентификаторы атрибутов показателей, значения по которым необходимо загрузить
 либо сохранить.


## Комментарии


Идентификаторы атрибутов в списке разделяются знаком «;».


Примечание.
 Если при сохранении необходимо пропустить какой-либо атрибут, полученный
 при извлечении данных, то в данном свойстве атрибут не указывается и вместо
 него просто ставится разделитель «;». Например, если для извлечения данных
 указан список атрибутов FactDataId:="ATTR1;ATTR2;ATTR3", то
 для сохранения данных только по третьему атрибуту необходимо в данном
 свойстве задать следующее значение FactDataId:=";;ATTR3".


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В базе созданы дополнительные
 атрибуты:


	- COUNTRY - атрибут, являющийся ссылкой на справочник
	 стран.


	- USER_ATTR - пользовательский атрибут, содержащий какие-либо
	 данные целого типа.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubInst: IRubricatorInstance;

	    Cube: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Exec: ICubeInstanceDestinationExecutor;

	    Matr, DataMatr: IMatrix;

	    It: IMatrixIterator;

	    i: Integer;

	    Sto: ICubeInstanceStorage;

	Begin

	    MB := MetabaseClass.Active;

	    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    Cube := RubInst As ICubeInstance;

	    Dest := Cube.Destinations.DefaultDestination;

	    Exec := Dest.CreateExecutor;

	    // Атрибуты показателей

	    (Exec As IRubricatorFactorIO).FactDataId := "FACTOR;COUNTRY;USER_ATTR";

	    // Атрибуты наблюдения

	    (Exec As IRubricatorFactorIO).ValueId := "FACTOR;VL";

	    Exec.PrepareExecute(Null);

	    Exec.PerformExecute;

	    Matr := Exec.Matrix;

	    // Матрица

	    DataMatr := (CubeClass.ExecuteResult(Matr) As IRubricatorExecuteResult).Factors;

	    It := DataMatr.CreateIterator;

	    It.Move(IteratorDirection.First);

	    While It.Valid Do

	        // Ищем показатель с указанными значениями атрибутов

	        If (It.Values(1) = 94) And (It.Values(2) = 1) Then

	            i := It.Values(0);

	            Break;

	        End If;

	        It.Move(IteratorDirection.Next);

	    End While;

	    Matr.ValueFlag := 1;

	    DataMatr := (CubeClass.ExecuteResult(Matr) As IRubricatorExecuteResult).Values;

	    It := DataMatr.CreateIterator;

	    It.Move(IteratorDirection.First);

	    While It.Valid Do

	        // Ищем все значения по найденному показателю и меняем их на единицу

	        If It.Values(0) = i Then

	            It.Values(1) := (It.Values(1) As Double) + 1;

	            It.ValueFlag := 1;

	        Else

	            It.ValueFlag := 0;

	        End If;

	        It.Move(IteratorDirection.Next);

	    End While;

	    Sto := Dest.CreateStorage;

	    (Sto As IRubricatorFactorIO).ValueId := ";VL";

	    // Сохраняем новые значения

	    Sto.SaveMatrix(Matr, 1);

	End Sub UserProc;


После выполнения примера будут получены данные по атрибутам показателей
 FACTOR, COUNTRY и USER_ATTR. Будет найден показатель, для которого значение
 атрибута COUNTRY равно «94» и значение атрибута USER_ATTR равно «1». По
 найденному показателю все значения будут увеличены на единицу. После изменения
 обновленные данные будут сохранены обратно в базу данных временных рядов.


См. также:


[IRubricatorFactorIO](IRubricatorFactorIO.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
