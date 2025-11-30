# ICubeCacheSaver.FindAndLoadCache

ICubeCacheSaver.FindAndLoadCache
-


# ICubeCacheSaver.FindAndLoadCache


## Синтаксис


FindAndLoadCache(


DestKey: Integer;


ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


Selections: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


Value: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm)):
 Boolean;


## Параметры


DestKey. Ключ необходимого
 варианта отображения куба.


ParamValues. Значения параметров
 указанного объекта кеширования.


Selections. Коллекция отметок
 в указанном варианте отображения куба.


Value. Матрица значений куба.


## Описание


Метод FindAndLoadCache ищет
 и загружает кеш куба для указанного варианта отображения куба с указанными
 значениями параметров в указанную матрицу и возвращает признак существования
 соответствующего кеша в базе данных.


## Комментарии


Если куб не параметрический, передавайте в качестве значения параметра
 ParamValues значение Null.
 Метод помещает найденные кешированные данные куба в матрицу, которая указана
 в параметре Value.


Результатом работы метода является признак удачного поиска:


	- True. Данные найдены;


	- False. Данные не найдены.


## Пример


Для выполнения примера предполагается наличие куба с идентификатором
 D_SEP. У куба должна быть включена возможность кеширования данных в хранилище
 закешированных данных куба.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    CacheSaver: ICubeCacheSaver;

	    CrInfo: IMetabaseObjectCreateInfo;

	    CubIn: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    SelSet: IDimSelectionSet;

	    i: Integer;

	    Sel: IDimSelection;

	    Desc: IMetabaseObjectDescriptor;

	    Executor: ICubeInstanceDestinationExecutor;

	    Iter: IMatrixIterator;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("D_SEP");

	    For Each Desc In MObj.Children Do

	        If Desc.ClassId = MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER Then

	            CacheSaver := Desc.Edit As ICubeCacheSaver;

	        End If;

	    End For;

	    CubIn := MObj.Open(Null) As ICubeInstance;

	    Dest := CubIn.Destinations.DefaultDestination;

	    SelSet := Dest.CreateDimSelectionSet;

	    For i := 0 To SelSet.Count - 1 Do

	        Sel := SelSet.Item(i);

	        Sel.SelectElement(0, False);

	        Sel.SelectElement(1, False);

	    End For;

	    Executor := Dest.CreateExecutor;

	    Executor.PrepareExecute(SelSet);

	    CacheSaver.FindAndLoadCache(Dest.Key, Null, SelSet, Executor.Matrix);

	    Iter := Executor.Matrix.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    While Iter.Valid Do

	        Debug.WriteLine(Iter.Value);

	        Iter.Move(IteratorDirection.Next);

	    End While;

	    CacheSaver.Clear(Dest.Key);

	End Sub UserProc;


После выполнения примера будет произведён поиск среди дочерних объектов
 указанного куба на наличие хранилища закешированных данных. Из первого
 найденного хранилища будут загружены закешированные данные куба по заданным
 параметрам и выведены в консоль. После загрузки кеш будет очищен по заданному
 ключу [варианта отображения куба](../ICubeModel/ICubeModel.htm).


См. также:


[ICubeCacheSaver](ICubeCacheSaver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
