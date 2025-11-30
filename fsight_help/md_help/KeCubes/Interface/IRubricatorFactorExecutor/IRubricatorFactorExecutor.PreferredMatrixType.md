# IRubricatorFactorExecutor.PreferredMatrixType

IRubricatorFactorExecutor.PreferredMatrixType
-


# IRubricatorFactorExecutor.PreferredMatrixType


## Синтаксис


PreferredMatrixType: [MatrixType](KeMatrix.chm::/Enums/MatrixType.htm);


## Описание


Свойство PreferredMatrixType
 определяет тип результирующей матрицы при расчете временных рядов.


## Комментарии


Для произведения расчета временного ряда, как матрицы куба, используйте
 [IRubricatorFactorExecutor.AsCubeExecutor](IRubricatorFactorExecutor.AsCubeExecutor.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC». В данной базе должен присутствовать
 атрибут рядов с идентификатором «COUNTRY», являющийся ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase, Orm, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubrIn: IRubricatorInstance;

    Cub: ICubeInstance;

    Dest: ICubeInstanceDestination;

    FactorExec: IRubricatorFactorExecutor;

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

    RubDesc := MB.ItemById("FC");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    Cub := RubrIn As ICubeInstance;

    Dest := Cub.Destinations.DefaultDestination;

    Exec := Dest.CreateExecutor;

    FactorExec := Exec As IRubricatorFactorExecutor;

    FactorExec.MultipleFactors := True;

    FactsLookup := RubrIn.CreateFactsLookup;

    MetaDLookup := FactsLookup.Lookup;

    Cond := MetaDLookup.Where.Add;

    Cond.AttributeName := "COUNTRY";

    Cond.Value := 512;

    i := FactsLookup.LookupFactors.Length;

    Key := New Integer[i];

    Key := FactsLookup.LookupFactors;

    FactorExec.SetFactorKeys(Key);

    FactorExec.ValueKind := MetaAttributeKind.Value;

    FactorExec.ValueId := "VL";

    FactorExec.WhereRevisionBetween(1, 1);

    FactorExec.UseDwarf := True;

    FactorExec.PreferredMatrixType := MatrixType.DWARF;

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
 рядов для первой ревизии, соответствующих следующему условию: значение
 атрибута «COUNTRIES» равняется «512». При получении данных будет использоваться
 оптимизация.


См. также:


[IRubricatorFactorExecutor](IRubricatorFactorExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
