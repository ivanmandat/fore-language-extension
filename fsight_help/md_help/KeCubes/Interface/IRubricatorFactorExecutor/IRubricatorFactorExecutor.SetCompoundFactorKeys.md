# IRubricatorFactorExecutor.SetCompoundFactorKeys

IRubricatorFactorExecutor.SetCompoundFactorKeys
-


# IRubricatorFactorExecutor.SetCompoundFactorKeys


## Синтаксис


SetCompoundFactorKeys(Value: Array);


## Параметры


Value. Массив составных ключей
 временных рядов.


## Описание


Метод SetCompoundFactorKeys
 задает составные ключи для временных рядов, которые должны быть рассчитаны.


## Комментарии


Ключи для временных рядов, которые должны быть рассчитаны задает метод
 [IRubricatorFactorExecutor.SetFactorKeys](IRubricatorFactorExecutor.SetFactorKeys.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC.


Добавьте ссылки на системные сборки: Metabase, Cubes, Matix, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    Cub: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    FactorExec: IRubricatorFactorExecutor;

	    FactsLookup: IRubricatorFactsLookup;

	    Key: Array Of Variant;

	    i: Integer;

	    Exec: ICubeInstanceDestinationExecutor;

	    Mat: IMatrix;

	    Ite: IMatrixIterator;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("FC");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    Cub := RubrIn As ICubeInstance;

	    Dest := Cub.Destinations.DefaultDestination;

	    Exec := Dest.CreateExecutor;

	    FactorExec := Exec As IRubricatorFactorExecutor;

	    FactsLookup := RubrIn.CreateFactsLookup;

	    i := FactsLookup.LookupFactorsC.Length;

	    Key := New Variant[i];

	    Key := FactsLookup.LookupFactorsC;

	    FactorExec.SetCompoundFactorKeys(Key);

	    FactorExec.ValueKind := MetaAttributeKind.Value;

	    FactorExec.ValueId := "VL";

	    FactorExec.UseDwarf := True;

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


После выполнения примера в окно консоли будут выведены значения временных
 рядов, имеющих составной ключ.


См. также:


[IRubricatorFactorExecutor](IRubricatorFactorExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
