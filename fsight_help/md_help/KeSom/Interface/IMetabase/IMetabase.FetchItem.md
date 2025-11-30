# IMetabase.FetchItem

IMetabase.FetchItem
-


# IMetabase.FetchItem


## Синтаксис


FetchItem(Key: Integer; [Options: Integer = 0]):
 [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Key. Ключ внутреннего объекта;


Options. Настройки типа [отложенной загрузки описаний](../../Enums/MetabaseFetchOptions.htm)
 по идентификаторам.


## Описание


Метод FetchItem возвращает описание
 объекта или объекта, для которого установлен признак [отложенной
 загрузки описания](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm), по ключу.


## Комментарии


Примером объекта с отложенной загрузкой описания является внутренняя
 модель цепочки расчета метамодели. Пример создания внутренней модели приведен
 в описании метода [IMsCalculationChainEntries.AddExclusiveModel](KeMs.chm::/Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddExclusiveModel.htm).


Тип связанных объектов, для которых необходимо загрузить описание, указывается
 в параметре Options. Если в памяти
 компьютера имеются кешированные описания, то метод загрузит их оттуда.


Если для репозитория используется [отложенная
 загрузка описаний](../IMetabaseLinkBase/IMetabaseLinkBase.DeferredLoading.htm), то при выполнении метода описание объекта будет
 кешировано в памяти. При последующих обращениях описание будет взято из
 кеша компьютера. Однако для объектов, для которых установлен признак [IMetabaseObjectDescriptor.IsDeferred](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm),
 кеширование описаний производиться не будет. Работа с этими объектами
 будет производиться с помощью методов Fetch*.


## Пример


Для выполнения примера необходимо наличие в репозитории внутреннего
 объекта с ключом 123.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	Begin

	    MB:= MetabaseClass.Active;

	    ObjDesc:= MB.FetchItem(123);

	    Debug.WriteLine (ObjDesc.Name);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено наименование
 внутреннего объекта.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
