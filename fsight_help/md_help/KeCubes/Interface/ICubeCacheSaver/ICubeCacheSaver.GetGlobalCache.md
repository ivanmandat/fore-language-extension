# ICubeCacheSaver.GetGlobalCache

ICubeCacheSaver.GetGlobalCache
-


# ICubeCacheSaver.GetGlobalCache


## Синтаксис


GetGlobalCache(


DestKey: Integer;


ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


Selections: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Параметры


DestKey. Ключ необходимого
 варианта отображения куба.


ParamValues. Набор значений
 параметров, для которых сохранен объект кеширования.


Selections. Коллекция отметок
 в указанном варианте отображения куба.


## Описание


Метод GetGlobalCache возвращает
 матрицу данных куба, полученную из кеша в соответствии с передаваемыми
 параметрами кеширования куба.


## Комментарии


Метод работает также, как и метод [FindAndLoadCache](ICubeCacheSaver.FindAndLoadCache.htm),
 но не возвращает признак удачного поиска. Если в кеше имеются данные в
 соответствии с указанными параметрами, то метод GetGlobalCache вернет
 их в виде матрицы. Если данные отсутствуют, то метод вернет значение Null.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 D_SEP. Для куба включена возможность кеширования данных.


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

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("D_SEP");

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

	            //Дальнейшая работа с матрицей данных

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
 матрица кешированных данных.


См. также:


[ICubeCacheSaver](ICubeCacheSaver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
