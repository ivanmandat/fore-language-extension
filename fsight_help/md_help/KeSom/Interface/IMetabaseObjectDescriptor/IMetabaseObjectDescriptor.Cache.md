# IMetabaseObjectDescriptor.Cache

IMetabaseObjectDescriptor.Cache
-


# IMetabaseObjectDescriptor.Cache


## Синтаксис


Cache: [IMetabaseObjectCache](../IMetabaseObjectCache/IMetabaseObjectCache.htm);


## Описание


Свойство Cache возвращает коллекцию
 записей кеша объекта репозитория.


## Комментарии


Кеш объекта содержит экземпляры объекта, открытого с определенными значениями
 параметров. При открытии объекта с какими-либо параметрами осуществляется
 проверка наличия в кеше записи, соответствующей данным параметрам. Если
 запись будет найдена, то будет извлечена и открыта кешированная версия
 объекта. Если запись для указанных параметров отсутствует, то объект будет
 открыт. При этом будут открыты все объекты, от которых зависит объект.
 Кеширование экземпляра объекта поддерживают регламентные отчеты.


Кеш объекта хранится в базе репозитория.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента ReportBox и компонента
 UiReport с наименованием UiReport1. Компонент UiReport1 является источником
 данных для компонента ReportBox. В репозитории имеется регламентный отчет
 с идентификатором Report_1.


Добавьте ссылки на системные сборки: Metabase, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    Cache: IMetabaseObjectCache;

	    CacheItem: IMetabaseObjectCacheItem;

	    Params: IMetabaseObjectParamValues;

	    Param: IMetabaseObjectParamValue;

	    OldDate: DateTime;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Report_1");

	    Cache := MDesc.Cache;

	    OldDate := DateTime.AddMonths(DateTime.Now, -1);

	    Debug.WriteLine("Содержимое кеша объекта: " + MDesc.Id);

	    Debug.Indent;

	    For Each CacheItem In Cache Do

	        Debug.WriteLine("Запись в кеше от: " + CacheItem.Timestamp.ToString);

	        Params := CacheItem.ParamValues;

	        If Params.Count <> 0 Then

	            Debug.WriteLine("Параметры объекта:");

	            For Each Param In Params Do

	                Debug.WriteLine("Параметр: " + Param.Name + "(" + Param.Id + ") = " + Param.Value);

	            End For;

	        End If;

	        //Удаление старых записей из кеша объекта

	        If CacheItem.Timestamp < OldDate Then

	            CacheItem.Flush;

	        End If;

	    End For;

	    Debug.WriteLine("Записи в кеше, имеющие дату создания ранее " + OldDate.ToString + " были удалены.");

	    If Cache.Count <> 0 Then

	        UiReport1.Instance := Cache.Item(Cache.Count - 1).Open;

	    Else

	        UiReport1.Instance := MDesc.Open(Null);

	    End If;

	    Debug.Unindent;

	End Sub Button1OnClick;


После выполнения примера в консоль среды разработки будет выведена информация
 о записях в кеше объекта. Для каждой записи будут выведены дата и время
 создания, а также список значений параметров, с которыми в тот момент
 открывался регламентный отчет. Записи, созданные более месяца назад, будут
 удалены. Если после удаления в кеше объекта останутся записи, то экземпляр
 объекта, хранящийся в последней оставшейся записи, будет загружен в компонент
 UiReport1. Если в кеше будут удалены все записи, то в компонент UiReport1
 будет загружен отчет, открытый из репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
