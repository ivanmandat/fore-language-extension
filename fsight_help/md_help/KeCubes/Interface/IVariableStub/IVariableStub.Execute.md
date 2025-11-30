# IVariableStub.Execute

IVariableStub.Execute
-


# IVariableStub.Execute


## Синтаксис


Execute(Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimensionSet/IDimensionSet.htm);
 ScenarioDimIndex: Index; EmptyMatrix: Boolean): [IVariableStubExecuteResult](../IVariableStubExecuteResult/IVariableStubExecuteResult.htm);


## Параметры


Selection. Отметка измерений
 источника, по которой нужно загрузить данные.


ScenarioDimIndex. Индекс сценарного
 справочника.


EmptyMatrix. Признак того,
 выгружать ли результаты в матрицу.


## Описание


Метод Execute осуществляет загрузку
 данных из источника.


## Комментарии


Метод загружает данные из источника в соответствии с отметкой, указанной
 в параметре Selection. Если значение
 данного параметра Null, то будут
 загружены все данные.


Если в параметре EmptyMatrix
 передаётся значение False, то
 матрица с результирующими данными будет доступна в свойстве [IVariableStubExecuteResult.Matrix](../IVariableStubExecuteResult/IVariableStubExecuteResult.Matrix.htm).
 Если в параметре EmptyMatrix
 передается значение True, то данные
 не загружаются, а в свойстве [IVariableStubExecuteResult.Matrix](../IVariableStubExecuteResult/IVariableStubExecuteResult.Matrix.htm)
 будет доступна пустая матрица, структура которой соответствует структуре
 источника. Полученная матрица может быть использована для изменения данных.
 Для сохранения изменений используйте метод [IVariableStubExecuteResult.Save](../IVariableStubExecuteResult/IVariableStubExecuteResult.Save.htm)
 или [IVariableStubExecuteResult.SaveO](../IVariableStubExecuteResult/IVariableStubExecuteResult.SaveO.htm).


Параметр ScenarioDimIndex используется,
 если осуществляется работа с переменной моделирования. Если в качестве
 значения параметра передается значение «-1», то поиск сценарного справочника
 в структуре переменной осуществляется автоматически.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором «Model_Space». В данном контейнере присутствует
 переменная с идентификатором «Variable».


			Sub UserProc;

Var

    MB: IMetabase;

    Variable: IVariableStub;

    Result: IVariableStubExecuteResult;

    Mat: IMatrix;

    Ite: IMatrixIterator;

Begin

    MB := MetabaseClass.Active;

    Variable := MB.ItemByIdNamespace("Variable", MB.GetObjectKeyById("Model_Space")).Bind As IVariableStub;

    Result := Variable.Execute(Null, -1, False);

    Mat := Result.Matrix;

    Ite := Mat.CreateIterator;

    Ite.Move(IteratorDirection.First);

    While Ite.Valid Do

        Debug.WriteLine(Ite.Value);

        Ite.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены данные переменной
 моделирования.


См. также:


[IVariableStub](IVariableStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
