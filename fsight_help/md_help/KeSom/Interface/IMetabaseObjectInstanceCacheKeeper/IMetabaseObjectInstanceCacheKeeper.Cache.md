# IMetabaseObjectInstanceCacheKeeper.Cache

IMetabaseObjectInstanceCacheKeeper.Cache
-


# IMetabaseObjectInstanceCacheKeeper.Cache


## Синтаксис


		Cache(Key: Integer; ParamValues: [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)):
		 Variant;


## Параметры


Key. Ключ объекта кеширования;


ParamValues. Значения параметров
 объекта кеширования.


## Описание


Свойство Cache возвращает
 внутреннюю структуру объекта, который представляет кеш объекта репозитория.


## Комментарии


Если объект параметрический, то возможно занести в кеш экземпляры с
 разными наборами параметров.


В качестве параметра Key для
 кубов необходимо указывать ключ необходимого [варианта
 отображения куба](kecubes.chm::/Interface/ICubeModelDestination/ICubeModelDestination.htm).


## Пример


Для выполнения примера понадобится справочник с идентификатором DIMENSION
 и включенной возможностью кеширования данных.


Добавьте ссылки на системные сборки: Io, Metabase.


		Sub UserProc;

		Var

		    MB: IMetabase;

		    CacheKeeper: IMetabaseObjectInstanceCacheKeeper;

		    CacheM: Variant;

		    MObj: IMetabaseObject;

		    VarStream: Variant;

		    Stream: IIOStream;

		    F: IFileStream;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("Dimension").Edit As IMetabaseObject;

		    CacheKeeper := MObj.Children.Item(0).Bind As IMetabaseObjectInstanceCacheKeeper;

		    CacheM := CacheKeeper.Cache(MObj.Key, Null);

		    VarStream := CacheM;

		    CacheM := Null;

		    Stream := IOStream.FromVariant(VarStream);

		    F := New FileStream.Create("C:\Temp\1.dat", FileOpenMode.Write, FileShare.DenyWrite);

		    F.CopyFrom(Stream, Stream.Size);

		End Sub UserProc;


После выполнения примера в поток данных будет получена внутренняя структура
 объекта, который представляет кеш объекта репозитория. Эта структура будет
 сохранена в файл.


См. также:


[IMetabaseObjectInstanceCacheKeeper](IMetabaseObjectInstanceCacheKeeper.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
