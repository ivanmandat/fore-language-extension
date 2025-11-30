# IStandardDimRecursiveBlock.StartWithWhere

IStandardDimRecursiveBlock.StartWithWhere
-


# IStandardDimRecursiveBlock.StartWithWhere


## Синтаксис


StartWithWhere: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство StartWithWhere возвращает
 объект, содержащий условие для фильтрации элементов первого уровня справочника.
 Данное свойство доступно только через Fore.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника с идентификатором "TAB_DIM". В справочнике в списке
 атрибутов создан один дополнительный атрибут, в котором будут содержаться
 коды родительских элементов. Также в репозитории содержится таблица с
 идентификатором "Tablica_1". В таблице имеется четыре поля:
 Id, Name, Ord и Parent_Id.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dataset: IDatasetModel;

	    DatasetFields: IDatasetModelFields;

	    Dim: IStandardDimension;

	    DimBlocks: IStandardDimBlocks;

	    DimBlock: IStandardDimRecursiveBlock;

	    BlockAttr: IStandardDimAttributes;

	    PrimIndex: IStandardDimIndex;

	    s: String;

	Begin

	    s := "Tablica_1";

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TAB_DIM").Edit;

	    Dataset := MB.ItemById(s).Bind As IDatasetModel;

	    DatasetFields := Dataset.Fields;

	    Dim := MObj As IStandardDimension;

	    DimBlocks := Dim.Blocks;

	    BlockAttr := Dim.Attributes;

	    DimBlock := DimBlocks.Add(DimBlockType.Recursive) As IStandardDimRecursiveBlock;

	    PrimIndex := DimBlock.Indexes.PrimaryIndex;

	    PrimIndex.Attributes.Add(Dim.Attributes.Id);

	    DimBlock.Dataset := Dataset;

	    //Привязка атрибутов

	    DimBlock.Binding(BlockAttr.Id).AsString := s + "." + DatasetFields.FindById("Id").Id;

	    DimBlock.Binding(BlockAttr.Name).AsString := s + "." + DatasetFields.FindById("Name").Id;

	    DimBlock.Binding(BlockAttr.Order).AsString := s + "." + DatasetFields.FindById("Ord").Id;

	    DimBlock.Binding(BlockAttr.Item(BlockAttr.Count - 1)).AsString := s + "." + DatasetFields.FindById("Parent_Id").Id;

	    //Верхний уровень

	    DimBlock.StartWith.AsString := s + "." + Dataset.Fields.FindById("Parent_Id").Id + "=0";

	    DimBlock.StartWithWhere.AsString := "(" + s + "." + Dataset.Fields.FindById("Id").Id + ">=0)And(" + s + "." + Dataset.Fields.FindById("Id").Id + "<=10)";

	    //Настройка связи по индексу рекурсии

	    DimBlock.ConnectByIndex := PrimIndex;

	    DimBlock.ConnectBy(PrimIndex.Attributes.Item(0)).AsString := s + "." + DatasetFields.FindById("Parent_Id").Id;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике будет создан новый рекурсивный
 блок. Будет осуществлена привязка атрибутов блока к полям источника данных,
 а также будет настроена рекурсия блока. При построении справочника в качестве
 элементов верхнего уровня будут выступать элементы со значением поля "Parent_Id"
 равным "0", а так же данные элементы будут отфильтрованы по
 значениям поля "Id". Отображаться будут элементы имеющие значение
 в диапазоне "0-10".


См. также:


[IStandardDimRecursiveBlock](IStandardDimRecursiveBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
