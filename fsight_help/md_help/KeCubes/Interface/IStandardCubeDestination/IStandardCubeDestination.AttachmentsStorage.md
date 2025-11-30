# IStandardCubeDestination.AttachmentsStorage

IStandardCubeDestination.AttachmentsStorage
-


# IStandardCubeDestination.AttachmentsStorage


## Синтаксис


		AttachmentsStorage: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство AttachmentsStorage
 определяет место хранения вложений.


## Комментарии


В качестве значения свойства указывается табличный справочник НСИ с
 предопределённой структурой. Описание структуры справочника приведено
 в подразделе «[Привязка
 фактов куба](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_2.htm#attachments)». Также справочник может быть создан и
 назначен в качестве места хранения вложений с помощью метода [CreateAndSetAttachmentsStorage](IStandardCubeDestination.CreateAndSetAttachmentsStorage.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». Куб настроен на работу с источником,
 в структуре которого имеется целочисленное поле «ATTACHMENT». Также в
 репозитории должен присутствовать табличный справочник НСИ с идентификатором
 «D_ATTACHMENTS», структура которого позволяет хранить вложения куба.


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Cube: IStandardCube;

		    Dest: IStandardCubeDestination;

		    DataSet: IStandardCubeDataset;

		    FactDimInst: IDimInstance;

		    KeyAttribute: IDimAttributeInstance;

		    Binding: IStandardCubeFactBinding;

		Begin

		    Mb := MetabaseClass.Active;

		    Cube := Mb.ItemById("STD_CUBE").Edit As IStandardCube;

		    Dest := Cube.Destinations.Item(0);

		    DataSet := Dest.Datasets.Item(0);

		    //Справочник для хранения вложений

		    Dest.AttachmentsStorage := Mb.ItemById("D_ATTACHMENTS");

		    //Настройка привязки фактов

		    FactDimInst := Dest.FactDimension.OpenDimension;

		    KeyAttribute := FactDimInst.Attributes.FindById("KEY");

		    Binding := Dest.FactBindings(DataSet).BindingWithRole(KeyAttribute.Value(0), CubeFactBindingRole.Attachment);

		    Binding.Formula.AsString := (DataSet.Dataset As IMetabaseObject).Id + ".ATTACHMENT";

		    //Сохранение куба

		    (Cube As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера для куба в качестве места хранения вложений будет
 установлен существующий табличный справочник НСИ. Для первого факта будет
 настроена привязка с полем источника, по которому будут храниться ключи
 элементов в справочнике вложений.


См. также:


[IStandardCubeDestination](IStandardCubeDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
