# IMetabase.FetchItemById

IMetabase.FetchItemById
-


# IMetabase.FetchItemById


## Синтаксис


FetchItemById(Id: String; [Namespace_:Integer =
 0;][Options: Integer = 0]): [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Id. Идентификатор внутреннего
 объекта;


Namespace_. Пространство
 имён, в котором расположены указанные идентификаторы;


Options. Настройки типа [отложенной
 загрузки описаний](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm) по идентификаторам.


## Описание


Метод FetchItemByld возвращает
 описание объекта или объекта, для которого установлен признак [отложенной
 загрузки описания](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm), по идентификатору.


## Комментарии


Примером внутреннего объекта с отложенной загрузкой описания является
 внутренняя модель цепочки расчета метамодели. Пример создания внутренней
 модели приведен в описании метода [IMsCalculationChainEntries.AddExclusiveModel](KeMs.chm::/Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddExclusiveModel.htm).


Тип связанных объектов, для которых необходимо загрузить описание, указывается
 в параметре Options. Если в памяти
 компьютера имеются кешированные описания, то метод загрузит их оттуда.


Если для репозитория используется [отложенная
 загрузка описаний](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm), то при выполнении метода описание объекта будет
 кешировано в памяти. При последующих обращениях описание будет взято из
 кеша компьютера. Однако для объектов, для которых установлен признак [IMetabaseObjectDescriptor.IsDeferred](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm),
 кеширование описаний производиться не будет. Работа с этими объектами
 будет производиться с помощью методов Fetch*.


## Пример


Для выполнения примера необходимо наличие в репозитории внутреннего
 объекта с идентификатором «Obj1».


Подключите ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.FetchItemById("Obj1");

	    If MDesc <> Null Then

	        Debug.WriteLine(MDesc.Name);

	    End If;

	End Sub UserProc;


После выполнения примера в окне консоли среды разработки будет выведено
 наименование внутреннего объекта с идентификатором «Obj1».


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
