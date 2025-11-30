# IRubricatorFactorIO.MultipleFactors

IRubricatorFactorIO.MultipleFactors
-


# IRubricatorFactorIO.MultipleFactors


## Синтаксис


MultipleFactors: Boolean;


## Описание


Свойство MultipleFactors определяет
 возможность сохранения или извлечения данных по нескольким показателям.


## Комментарии


Допустимые значения:


	- True. Производить операции
	 с данными нескольких показателей;


	- False. Производить операции
	 с данными одного показателя.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В данной базе должен
 присутствовать уникальный атрибут показателя с идентификатором COUNTRIES,
 являющийся ссылкой на справочник.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    Cube: ICubeInstance;

    Dest: ICubeInstanceDestination;

    FactorExec: IRubricatorFactorExecutor;

    FactorIO: IRubricatorFactorIO;

    FactsLookup: IRubricatorFactsLookup;

    MetaDLookup: IMetaDictionaryLookup;

    Key: Array Of Integer;

    i: Integer;

    Cond: IOrmCondition;

    Exec: ICubeInstanceDestinationExecutor;

    Matr: IMatrix;

    Ite: IMatrixIterator;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Cube := RubrInst As ICubeInstance;

    Dest := Cube.Destinations.DefaultDestination;

    Exec := Dest.CreateExecutor;

    FactorExec := Exec As IRubricatorFactorExecutor;

    FactsLookup := RubrInst.CreateFactsLookup;

    MetaDLookup := FactsLookup.Lookup;

    Cond := MetaDLookup.Where.Add;

    Cond.AttributeName := "COUNTRIES";

    Cond.Value := 512;

    i := FactsLookup.LookupFactors.Length;

    Key := New Integer[i];

    Key := FactsLookup.LookupFactors;

    FactorExec.SetFactorKeys(Key);

    FactorIO := FactorExec As IRubricatorFactorIO;

    FactorIO.MultipleFactors := True;

    FactorIO.ValueKind := MetaAttributeKind.Value;

    FactorIO.ValueId := "VL";

    Exec := FactorExec.AsCubeExecutor;

    Exec.PrepareExecute(Null);

    Exec.PerformExecute;

    Matr := Exec.Matrix;

    Ite := Matr.CreateIterator;

    Ite.Move(IteratorDirection.First);

    While Ite.Valid Do

        Debug.WriteLine(Ite.Value);

        Ite.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера в окно консоли будут извлечены данные показателей,
 соответствующих следующему условию: значение атрибута COUNTRIES равняется
 512.


См. также:


[IRubricatorFactorIO](IRubricatorFactorIO.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
