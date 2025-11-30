# Создание табличного справочника

Создание табличного справочника
-


# Создание табличного справочника


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором TAB_ELEMENT. ". В таблице имеется четыре поля:
 Id, Name, Ord и Parent_Id.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    StDim: IStandardDimension;

	    StAttrs: IStandardDimAttributes;

	    Orders: IStdDimOrders;

	    BlockAttr: IStandardDimIndexAttributes;

	    StAttr: IStandardDimAttribute;

	    StDimBlock: IStandardDimBlock;

	    StRecBlock: IStandardDimRecursiveBlock;

	    Levels: IStandardDimLevels;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_STDDIM;

	    CrInfo.Id := "NewTabDim";

	    CrInfo.Name := "Новый табличный справочник";

	    CrInfo.Parent := MB.Root;

	    StDim := MB.CreateObject(CrInfo).Edit As IStandardDimension;

	    StAttrs := StDim.Attributes;

	    //Создание аттрибутов

	    StAttr := StAttrs.Add;

	    StAttr.DataType := DbDataType.Integer;

	    StAttr.Id := "Id";

	    StAttr.Name := "Идентификатор";

	    StAttrs.Id := StAttr;

	    StAttr := StAttrs.Add;

	    StAttr.DataType := DbDataType.String;

	    StAttr.Id := "Name";

	    StAttr.Name := "Наименование";

	    StAttrs.Name := StAttr;

	    StAttr := StAttrs.Add;

	    StAttr.DataType := DbDataType.Integer;

	    StAttr.Id := "Order";

	    StAttr.Name := "Порядок";

	    StAttrs.Order := StAttr;

	    StAttr := StAttrs.Add;

	    StAttr.DataType := DbDataType.Integer;

	    StAttr.Id := "Parent";

	    StAttr.Name := "Родитель";

	    //Сортировка по возрастанию значений атрибутов

	    Orders := StAttrs.Orders;

	    Orders.Add(StAttrs.Name, False);

	    Orders.Add(StAttrs.Order, False);

	    //Создание рекурсивного блока

	    StDimBlock := StDim.Blocks.Add(DimBlockType.Recursive);

	    //Настройка блока

	    //Первичный индекс блока по атрибуту Идентификатор

	    BlockAttr := StDimBlock.Indexes.PrimaryIndex.Attributes;

	    BlockAttr.Add(StAttrs.Id);

	    //Привязка атрибутов блока к полям таблицы TAB_ELEMENT

	    StDimBlock.Dataset := MB.ItemById("TAB_ELEMENT").Bind As IDatasetModel;

	    StDimBlock.Binding(StAttrs.Id).AsString := "TAB_ELEMENT.ID";

	    StDimBlock.Binding(StAttrs.Name).AsString := "TAB_ELEMENT.NAME";

	    StDimBlock.Binding(StAttrs.Order).AsString := "TAB_ELEMENT.ORD";

	    StDimBlock.Binding(StAttr).AsString := "TAB_ELEMENT.PARENT_ID";

	    //Настройка рекурсии

	    StRecBlock := StDimBlock As IStandardDimRecursiveBlock;

	    //Условия для верхнего уровня рекурсии

	    StRecBlock.StartWith.AsString := "TAB_ELEMENT.PARENT_ID=0";

	    //Связь по первичному индексу

	    StRecBlock.ConnectByIndex := StDimBlock.Indexes.PrimaryIndex;

	    //Условие связи для первого атрибута

	    StRecBlock.ConnectBy(BlockAttr.Item(0)).AsString := "TAB_ELEMENT.PARENT_ID";

	    //Два уровня для справочника

	    Levels := StDim.Levels;

	    Levels.Add.Name := "Первый уровень";

	    Levels.Add.Name := "Второй уровень";

	    (StDim As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 табличный справочник. В справочнике будут созданы четыре атрибута, один
 рекурсивный блок. Настроена сортировка по атрибутам. Установлены привязки
 полей таблицы к атрибутам справочника и настроена рекурсия. Также в справочнике
 будут созданы два уровня для настройки в дальнейшем агрегации.


См. также:


[Примеры](KeDims_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
