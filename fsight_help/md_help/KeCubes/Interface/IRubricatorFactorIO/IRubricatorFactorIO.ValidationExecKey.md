# IRubricatorFactorIO.ValidationExecKey

IRubricatorFactorIO.ValidationExecKey
-


# IRubricatorFactorIO.ValidationExecKey


## Синтаксис


ValidationExecKey: Integer;


## Описание


Свойство ValidationExecKey определяет
 ключ выполнения валидации.


## Комментарии


Данное свойство учитывается, если свойству [ValidationValues](IRubricatorFactorIO.ValidationValues.htm)
 установлено значение True.


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

    It: IMatrixIterator;

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

    FactorIO.ValueKind := MetaAttributeKind.Value;

    FactorIO.ValueId := "VL";

    FactorIO.MultipleFactors := True;

    FactorIO.ValidationValues := True;

    FactorIO.ValidationExecKey := 1;

    Exec := FactorExec.AsCubeExecutor;

    Exec.PrepareExecute(Null);

    Exec.PerformExecute;

    Matr := Exec.Matrix;

    It := Matr.CreateIterator;

    It.Move(IteratorDirection.First);

    While It.Valid Do

        Debug.WriteLine(It.Value);

        It.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


При выполнении примера в окно консоли будут выведены данные показателей
 для выполнения валидации с ключом 1, соответствующих следующему условию:
 значение атрибута COUNTRIES равняется 512.


См. также:


[IRubricatorFactorIO](IRubricatorFactorIO.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
