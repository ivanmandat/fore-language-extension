# IMetabaseObjectInstanceCacheKeeper.SaveDimensionCache

IMetabaseObjectInstanceCacheKeeper.SaveDimensionCache
-


# IMetabaseObjectInstanceCacheKeeper.SaveDimensionCache


## Синтаксис


SaveDimensionCache(DimensionKey: Integer; ParamValues:
 [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)):
 Boolean;


## Параметры


DimensionKey. Ключ справочника
 репозитория.


ParamValues. Набор значений
 входных параметров, для которого кешируется справочник.


## Описание


Метод SaveDimensionCache выполняет
 сохранение кеша для справочника по заданным параметрам.


## Комментарии


Получить и заполнить значения параметров для справочника можно с помощью
 метода [IMetabaseObjectParams.CreateEmptyValues](../IMetabaseObjectParams/IMetabaseObjectParams.CreateEmptyValues.htm).
 Если справочник не содержит параметров, то в качестве параметра ParamValues передаётся значение
 Null.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника с идентификатором STD_DIM. Также для репозитория должна быть
 задана база данных по умолчанию.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MDesc, CacheKeeperDesc: IMetabaseObjectDescriptor;

	    CacheKeeper: IMetabaseObjectInstanceCacheKeeper;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("STD_DIM");

	    // Поиск хранилища кешированных данных

	    CacheKeeperDesc := FindCacheKeeper(MDesc);

	    If IsNull(CacheKeeperDesc) Then

	        // Создание хранилища кешированных данных для справочника, если оно еще не создано

	        CacheKeeperDesc := CreateCacheKeeper(MB, MDesc);

	    End If;

	    CacheKeeper := CacheKeeperDesc.Edit As IMetabaseObjectInstanceCacheKeeper;

	    // Кеширование справочника

	    CacheKeeper.SaveDimensionCache(MDesc.Key, Null);

	End Sub Button1OnClick;


	Function FindCacheKeeper(MObject: IMetabaseObjectDescriptor): IMetabaseObjectDescriptor;

	Var

	    MDescs: IMetabaseObjectDescriptors;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    MDescs := MObject.Children;

	    For Each MDesc In MDescs Do

	        If MDesc.ClassId = MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER Then

	            Return MDesc;

	        End If;

	    End For;

	    Return Null;

	End Function FindCacheKeeper;


	Function CreateCacheKeeper(MB: IMetabase; MObject: IMetabaseObjectDescriptor): IMetabaseObjectDescriptor;

	Var

	    CrInfo: IMetabaseObjectCreateInfo;

	    CacheKeeper: IMetabaseObjectInstanceCacheKeeper;

	Begin

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.Permanent := True;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER;

	    CrInfo.Parent := MObject;

	    CacheKeeper := MB.CreateObject(CrInfo).Edit As IMetabaseObjectInstanceCacheKeeper;

	    CacheKeeper.Database := MB.SpecialObject(MetabaseSpecialObject.DefaultDatabase).Bind;

	    CacheKeeper.SplitBLOB := True;

	    CacheKeeper.PieceSize := 512;

	    (CacheKeeper As IMetabaseObject).Save;

	    Return CacheKeeper As IMetabaseObject;

	End Function CreateCacheKeeper;


При выполнении примера для справочника осуществляется проверка наличия
 хранилища закешированных данных. Если хранилище отсутствует, то оно будет
 создано. После этого к хранилище будет сохранён кеш указанного табличного
 справочника.


См. также:


[IMetabaseObjectInstanceCacheKeeper](IMetabaseObjectInstanceCacheKeeper.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
