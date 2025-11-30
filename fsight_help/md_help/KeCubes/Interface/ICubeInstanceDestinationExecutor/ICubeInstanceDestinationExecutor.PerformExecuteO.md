# ICubeInstanceDestinationExecutor.PerformExecuteO

ICubeInstanceDestinationExecutor.PerformExecuteO
-


# ICubeInstanceDestinationExecutor.PerformExecuteO


## Синтаксис


PerformExecuteO([Options](../../Enums/CubeInstanceDestinationExecutorOptions.htm):
 Integer): Boolean;


## Параметры


Options. Параметры расчёта
 куба.


## Описание


Метод PerformExecuteO осуществляет
 расчёт куба в заданном режиме.


## Комментарии


В качестве значения параметра Options
 указывается значение или комбинация значений перечисления [CubeInstanceDestinationExecutorOptions](../../Enums/CubeInstanceDestinationExecutorOptions.htm).


Если расчёт результирующей матрицы куба осуществляется на базе кешированных
 данных (Options = [CubeInstanceDestinationExecutorOptions.Cached](../../Enums/CubeInstanceDestinationExecutorOptions.htm)),
 то дальнейшая работа с полученными данными должна осуществляться с использованием
 блокировок чтения/изменения данных на прикладном уровне. Для использования
 блокировок приведите полученную матрицу [Matrix](ICubeInstanceDestinationExecutor.Matrix.htm)
 к интерфейсу [IRWMutex](ForeSys.chm::/Interface/IRWMutex/IRWMutex.htm)
 и используйте его методы для включения/отключения необходимой блокировки.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_RUBRICATOR. В данной базе должен
 присутствовать уникальный атрибут, ссылающийся на справочник с идентификатором
 DICT_IND.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    Cub: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    DictDescr: IMetabaseObjectDescriptor;

	    DictInst: IDimInstance;

	    Exec: ICubeInstanceDestinationExecutor;

	    Mat: IMatrix;

	    Iter: IMatrixIterator;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("FC_RUBRICATOR");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    Cub := RubrIn As ICubeInstance;

	    Dest := Cub.Destinations.DefaultDestination;

	    Sels := Dest.CreateDimSelectionSet;

	    Sels.Clear;

	    Sel := Sels.Add(RubrIn.CalendarLevelsDimension);

	    Sel.SelectAll;

	    DictDescr := MB.ItemById("DICT_IND");

	    DictInst := DictDescr.Open(Null) As IDimInstance;

	    Sel := Sels.Add(DictInst);

	    Sel.SelectElement(0, False);

	    Exec := Dest.CreateExecutor;

	    Exec.ScenarioKey := -1;

	    Exec.PrepareExecute(Sels);

	    Exec.PerformExecuteO(CubeInstanceDestinationExecutorOptions.Reload);

	    Mat := Exec.Matrix;

	    Iter := Mat.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    While Iter.Valid Do

	        Debug.WriteLine(Iter.Value);

	        Iter.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


При выполнении примера данные базы данных временных рядов будут представлены
 как данные отстроенного куба. При этом кеш данных объекта будет перечитан
 и перезагружен из базы данных, после чего произведётся расчёт и полученные
 данные будут выведены в окно консоли.


См. также:


[ICubeInstanceDestinationExecutor](ICubeInstanceDestinationExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
