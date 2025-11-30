# Создание вычисляемого справочника

Создание вычисляемого справочника
-


# Создание вычисляемого справочника


Для выполнения примера предполагается наличие в репозитории модуля с
 идентификатором "UserDimMod", содержащего в себе макрос для
 построения дерева элементов вычисляемого справочника. Допустим макрос
 содержит следующий код:


[![](../Opened.gif)![](../Closed.gif)Процедура UserMacro](javascript:TextPopup(this))


		Sub UserMacro(User: IUserDimension; Builder: IDimBuilder; Param: IMetabaseObjectParamValues);

		Var

		    DimBlock: IUserDimBlock;

		    BlockRoot, Block: IDimBlockLoader;

		    i, i1, j, k, k1, l: Integer;

		Begin

		    DimBlock := User.Blocks.Item(0);

		    BlockRoot := Builder.CreateRootBlockLoader(DimBlock.Key);

		    Block := Builder.CreateBlockLoader(DimBlock.Key, DimBlock.Key);

		    i1 := Param.Item(0).Value As Integer;

		    k1 := Param.Item(1).Value As Integer;

		    For i := 0 To i1 - 1 Do

		        j := BlockRoot.AddRow;

		        BlockRoot.Value(j, 0) := j;

		        BlockRoot.Value(j, 1) := "Элемент " + j.ToString;

		        BlockRoot.Value(j, 2) := j;

		        l := j;

		        For k := 0 To k1 - 1 Do

		            j := Block.AddRow;

		            Block.Value(j, 0) := j + 100;

		            Block.Value(j, 1) := "Дочерний элемент " + l.ToString + "_" + k.ToString;

		            Block.Value(j, 2) := j + 100;

		            Block.Value(j, 3) := l;

		        End For;

		    End For;

		End Sub UserMacro;


	За счет задания во вложенном цикле значения элемента по столбцу,
	 номер которого больше на "1" чем количество атрибутов, в
	 справочнике создается иерархия из двух уровней. Значение по данному
	 столбцу расценивается как ключ родительского элемента.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Params: IMetabaseObjectParams;

	    Param: IMetabaseObjectParam;

	    CrInfo: IMetabaseObjectCreateInfo;

	    UserDim: IUserDimension;

	    Attrs: IUserDimAttributes;

	    Attr: IUserDimAttribute;

	    Orders: IUserDimOrders;

	    Block: IUserDimBlock;

	    BlockAttr: IUserDimIndexAttributes;

	    Levels: IUserDimLevels;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_USERDIM;

	    CrInfo.Id := "NewUserDim";

	    CrInfo.Name := "Новый вычисляемый справочник";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    // Параметры справочника

	    Params := MObj.Params;

	    Param := Params.Add;

	    Param.Id := "i1";

	    Param.Name := "Количество главных элементов";

	    Param.DataType := DbDataType.Integer;

	    Param := Params.Add;

	    Param.Id := "k1";

	    Param.Name := "Количество дочерних элементов";

	    Param.DataType := DbDataType.Integer;

	    UserDim := MObj As IUserDimension;

	    Attrs := UserDim.Attributes;


	    // Создание атрибутов

	    Attr := Attrs.Add;

	    Attr.DataType := DbDataType.Integer;

	    Attr.Id := "Id";

	    Attr.Name := "Идентификатор";

	    Attrs.Id := Attr;

	    Attr := Attrs.Add;

	    Attr.DataType := DbDataType.String;

	    Attr.Id := "Name";

	    Attr.Name := "Наименование";

	    Attrs.Name := Attr;

	    Attr := Attrs.Add;

	    Attr.DataType := DbDataType.Integer;

	    Attr.Id := "Order";

	    Attr.Name := "Порядок";

	    Attrs.Order := Attr;

	    // Сортировка по атрибутам

	    Orders := Attrs.Orders;

	    Orders.Add(Attrs.Name, False);

	    Orders.Add(Attrs.Order, False);

	    // Один блок

	    Block := UserDim.Blocks.Add;

	    // Первичный индекс блока по атрибуту Идентификатор

	    BlockAttr := Block.Indexes.PrimaryIndex.Attributes;

	    BlockAttr.Add(Attrs.Id);

	    // Два уровня для справочника

	    Levels := UserDim.Levels;

	    Levels.Add.Name := "Первый уровень";

	    Levels.Add.Name := "Второй уровень";

	    // Установка модуля и макроса

	    UserDim.ForeModule := MB.ItemById("UserDimMod").Bind As IModule;

	    UserDim.ForeSub := "UserMacro";

	    (UserDim As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 вычисляемый справочник. В справочнике будут созданы три атрибута и один
 блок, установлен порядок сортировки элементов. В первичный индекс блока
 будет добавлен атрибут Идентификатор. Будут созданы два уровня справочника
 и установлен модуль и макрос, осуществляющий построение дерева элементов.


Также для справочника будут созданы два параметра. В случае использования
 указанного выше макроса для построения дерева элементов, данные параметры
 будут использоваться для задания количества корневых элементов и количества
 дочерних элементов для каждого корневого, соответственно.


См. также:


[Примеры](KeDims_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
