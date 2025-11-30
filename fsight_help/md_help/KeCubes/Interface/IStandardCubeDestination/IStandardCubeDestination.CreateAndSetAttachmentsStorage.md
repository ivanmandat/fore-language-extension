# IStandardCubeDestination.CreateAndSetAttachmentsStorage

IStandardCubeDestination.CreateAndSetAttachmentsStorage
-


# IStandardCubeDestination.CreateAndSetAttachmentsStorage


## Синтаксис


CreateAndSetAttachmentsStorage(Database: [IDatabase](KeDb.chm::/Interface/IDatabase/IDatabase.htm));


## Параметры


Database. База данных, в которой
 будет создана таблица для справочника НСИ.


## Описание


Метод CreateAndSetAttachmentsStorage
 создаёт и устанавливает справочник для хранения вложений.


## Комментарии


Метод создаёт справочник НСИ с предопределённой структурой. Описание
 структуры справочника приведено в подразделе «[Привязка
 фактов куба](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_2.htm#attachments)». Созданный справочник устанавливается
 в качестве места хранения вложений, его описание будет доступно в свойстве
 [AttachmentsStorage](IStandardCubeDestination.AttachmentsStorage.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие стандартного
 куба с идентификатором STD_CUBE. Куб настроен на работу с источником,
 в структуре которого имеется целочисленное поле ATTACHMENT.


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

    //Создание справочника для хранения вложений

    Dest.CreateAndSetAttachmentsStorage(DataSet.Dataset.Database);

    //Настройка привязки фактов

    FactDimInst := Dest.FactDimension.OpenDimension;

    KeyAttribute := FactDimInst.Attributes.FindById("KEY");

    Binding := Dest.FactBindings(DataSet).BindingWithRole(KeyAttribute.Value(0), CubeFactBindingRole.Attachment);

    Binding.Formula.AsString := (DataSet.Dataset As IMetabaseObject).Id + ".ATTACHMENT";

    //Сохранение куба

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера для куба будет создан и установлен справочник
 НСИ для хранения вложений. Для первого факта будет настроена привязка
 с полем источника, по которому будут храниться ключи элементов в справочнике
 вложений.


См. также:


[IStandardCubeDestination](IStandardCubeDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
