# ILock.Unlock

ILock.Unlock
-


# ILock.Unlock


## Синтаксис


Unlock;


## Описание


Метод Unlock отключает блокировку.


## Комментарии


Включение блокировки происходит автоматически при получении объекта
 типа [ILock](ILock.htm). Для снятия блокировки вызовите метод
 Unlock и обнулите соответствующую
 переменную.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 STD_CUBE. Для куба включена возможность кеширования данных.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc, CacheDesc: IMetabaseObjectDescriptor;

	    Cache: ICubeCacheSaver;

	    CubeInst: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    Matr: IMatrix;

	    Lock: ILock;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("STD_CUBE");

	    CacheDesc := GetCache(MDesc);

	    If CacheDesc <> Null Then

	        Cache := CacheDesc.Edit As ICubeCacheSaver;

	        CubeInst := MDesc.Open(Null) As ICubeInstance;

	        Dest := CubeInst.Destinations.DefaultDestination;

	        Sels := Dest.CreateDimSelectionSet;

	        For Each Sel In Sels Do

	            Sel.SelectAll;

	        End For;

	        //Получение кешированной матрицы с данными

	        Matr := Cache.GetGlobalCache(Dest.Key, Null, Sels);

	        If Matr <> Null Then

	            Lock := Cache.GetGlobalWriteLock(Dest.Key, Null, Sels);

	            //...

	            //Дальнейшая работа с матрицей данных

	            //...

	            //Сохранение обновленной матрицы в кеш

	            Cache.SaveCache(Dest.Key, Null, Sels, Matr);

	            Lock.Unlock;

	            Lock := Null;

	        End If;

	    End If;

	End Sub UserProc;


	Function GetCache(MObj: IMetabaseObjectDescriptor): IMetabaseObjectDescriptor;

	Var

	    MDescs: IMetabaseObjectDescriptors;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    MDescs := MObj.Children;

	    For Each MDesc In MDescs Do

	        If MDesc.ClassId = MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER Then

	            Return MDesc;

	        End If;

	    End For;

	    Return Null;

	End Function GetCache;


При выполнении примера для указанных параметров куба будет получена
 матрица кешированных данных. Для изменения данных осуществляется их блокировка.
 После обновления данных в кеше блокировка будет снята.


См. также:


[ILock](ILock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
