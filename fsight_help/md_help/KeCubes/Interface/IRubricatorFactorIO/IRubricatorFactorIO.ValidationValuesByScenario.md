# IRubricatorFactorIO.ValidationValuesByScenario

IRubricatorFactorIO.ValidationValuesByScenario
-


# IRubricatorFactorIO.ValidationValuesByScenario


## Синтаксис


ValidationValuesByScenario: Boolean;


## Описание


Свойство ValidationValuesByScenario
 определяет возможность сохранения/извлечения данных по валидациям в измерении
 сценариев.


## Комментарии


Допустимые значения:


	- True. Сохранять/извлекать
	 данные по валидациям в измерении сценариев;


	- False. Сохранять/извлекать
	 актуальные данные.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В данной базе должен
 присутствовать уникальный атрибут показателя с идентификатором COUNTRY,
 являющийся ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase, Orm, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    Cub: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    FactorExec: IRubricatorFactorExecutor;

	    FactorIO: IRubricatorFactorIO;

	    FactsLookup: IRubricatorFactsLookup;

	    MetaDLookup: IMetaDictionaryLookup;

	    Key: Array Of Integer;

	    i: Integer;

	    Cond: IOrmCondition;

	    Exec: ICubeInstanceDestinationExecutor;

	    Mat: IMatrix;

	    Ite: IMatrixIterator;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_RUBRICATOR");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    Cub := RubrIn As ICubeInstance;

	    Dest := Cub.Destinations.DefaultDestination;

	    Exec := Dest.CreateExecutor;

	    FactorExec := Exec As IRubricatorFactorExecutor;

	    FactsLookup := RubrIn.CreateFactsLookup;

	    MetaDLookup := FactsLookup.Lookup;

	    Cond := MetaDLookup.Where.Add;

	    Cond.AttributeName := "COUNTRY";

	    Cond.Value := 512;

	    i := FactsLookup.LookupFactors.Length;

	    Key := New Integer[i];

	    Key := FactsLookup.LookupFactors;

	    FactorExec.SetFactorKeys(Key);

	    FactorIO := FactorExec As IRubricatorFactorIO;

	    FactorIO.ValueKind := MetaAttributeKind.Value;

	    FactorIO.ValueId := "VL";

	    FactorIO.MultipleFactors := True;

	    FactorIO.ValidationValuesByScenario := True;

	    FactorIO.ValidationExecKey := 1;

	    Exec := FactorExec.AsCubeExecutor;

	    Exec.PrepareExecute(Null);

	    Exec.PerformExecute;

	    Mat := Exec.Matrix;

	    Ite := Mat.CreateIterator;

	    Ite.Move(IteratorDirection.First);

	    While Ite.Valid Do

	        Debug.WriteLine(Ite.Value);

	        Ite.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


При выполнении примера в окно консоли будут выведены данные показателей
 по валидации с ключом 1 в измерении сценариев, соответствующих следующему
 условию: значение атрибута COUNTRY равняется 512.


См. также:


[IRubricatorFactorIO](IRubricatorFactorIO.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
