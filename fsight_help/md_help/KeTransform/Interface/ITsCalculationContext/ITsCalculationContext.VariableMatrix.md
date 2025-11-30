# ITsCalculationContext.VariableMatrix

ITsCalculationContext.VariableMatrix
-


# ITsCalculationContext.VariableMatrix


## Синтаксис


VariableMatrix(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm)):
 [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm);


## Параметры


Stub. Абстрактный источник
 данных.


## Описание


Свойство VariableMatrix возвращает
 доступ к указанному источнику данных.


## Комментарии


Для правил валидации VariableMatrix
 всегда возвращает значение Null.


## Пример


В данном примере приведен пользовательский метод, предназначенный для
 векторного режима расчета. Для выполнения примера предполагается наличие
 переменной моделирования с ключом «13418».


Добавьте ссылки на системные сборки «Metabase», «Ms», «Transform», «Matrix»,
 «Cubes».


			Public Function CopyData: Variant;

Var

    pContext: ITsCalculationContext;

    i: Integer;

    pSeries: ITimeSeries;

    mb: IMetabase;

    VarStub: IVariableStub;

    MatrixDS: IMatrixDataSource;

    Matr: IMatrix;

    MatrIter: IMatrixIterator;

Begin

    pContext := TsCalculation.Current;

    pSeries := pContext.CreateTimeSeries;

    If pContext.CalculationType = TsCalculationType.Series Then

        mb := MetabaseClass.Active;

        VarStub := mb.Item(13418).Bind As IVariableStub;

        MatrixDS := pContext.VariableMatrix(VarStub);

        Matr := MatrixDS.Execute(Null);

        MatrIter := Matr.CreateIterator;

        MatrIter.Move(IteratorDirection.First);

        For i := pSeries.StartIndex To pSeries.EndIndex Do

            pSeries.Item(i) := MatrIter.Value;

            MatrIter.Move(IteratorDirection.Next);

        End For;

        Return pSeries;

    End If;

End Function CopyData;


Метод выполняет копирование данных из переменной с ключом «13418».


См. также:


[ITsCalculationContext](ITsCalculationContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
