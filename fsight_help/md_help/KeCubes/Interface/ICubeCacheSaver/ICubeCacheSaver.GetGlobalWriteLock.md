# ICubeCacheSaver.GetGlobalWriteLock

ICubeCacheSaver.GetGlobalWriteLock
-


# ICubeCacheSaver.GetGlobalWriteLock


## Синтаксис


GetGlobalWriteLock(


DestKey: Integer;


ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


Selections: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [ILock](ForeSys.chm::/Interface/ILock/ILock.htm);


## Параметры


DestKey. Ключ необходимого
 варианта отображения куба.


ParamValues. Набор значений
 параметров, для которых сохранен объект кеширования.


Selections. Коллекция отметок
 в указанном варианте отображения куба.


## Описание


Метод GetGlobalWriteLock возвращает
 объект, управляющий блокировкой кешированных данных на запись для указанных
 параметров куба.


## Комментарии


Блокировка на запись требуется с целью исключения случая, когда несколько
 пользователей одновременно могут изменить одни и те же данные. Такая вероятность
 существует, если работа с кешем куба происходит в коде, выполнение которого
 осуществляться через веб-сервисы BI-сервера продукта «Форсайт. Аналитическая платформа».


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 STD_CUBE. Для куба включена возможность кеширования данных.


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

	    Desc: IMetabaseObjectDescriptor;

	Begin

	    For Each Desc In MObj.Children Do

	        If Desc.ClassId = MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER Then

	            Return Desc;

	        End If;

	    End For;

	    Return Null;

	End Function GetCache;


При выполнении примера для указанных параметров куба будет получена
 матрица кешированных данных. Для изменения данных осуществляется их блокировка.
 После обновления данных в кеше блокировка будет снята.


См. также:


[ICubeCacheSaver](ICubeCacheSaver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
