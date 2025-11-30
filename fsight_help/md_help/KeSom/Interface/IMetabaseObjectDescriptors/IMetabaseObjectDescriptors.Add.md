# IMetabaseObjectDescriptors.Add

IMetabaseObjectDescriptors.Add
-


# IMetabaseObjectDescriptors.Add


## Синтаксис


Add: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Метод Add осуществляет добавление
 описания объекта в коллекцию.


## Комментарии


В текущей реализации данный метод доступен для использования при работе
 с [коллекцией
 объектов](KeCubes.chm::/Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.ObjectsFilter.htm), которые копируются вместе с базой данных
 временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    RubUpdateEx: ICubeMetaUpdateEx;

	    Rub: IRubricator;

	    Progress: IMetabaseUpdateProgress;

	    CrInfo: IMetabaseObjectCreateInfo;

	    s: string;

	    ObjectsF: IMetabaseObjectDescriptors;

	    ObjF: IMetabaseObjectDescriptor;

	    i: Integer;

	Begin

	    mb := MetabaseClass.Active;

	    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

	    Rub := mb.ItemById("FC").Bind As IRubricator;

	    RubUpdateEx.Rubricator := Rub;

	    RubUpdateEx.Metabase := Mb;

	    CrInfo := RubUpdateEx.CreateInfo;

	    CrInfo.Parent := mb.Root;

	    s := Mb.GenerateId("FC_COPY");

	    CrInfo.Id := s;

	    CrInfo.Name := s;

	    RubUpdateEx.CopyExtraObjects := True;

	    ObjectsF := RubUpdateEx.ObjectsFilter;

	    ObjF := Rub.Container(RubricatorContainerType.Data);

	    ObjectsF.Add(ObjF);

	    For i := 0 To ObjF.Children.Count - 1 Do

	        ObjectsF.Add(ObjF.Children.Item(i));

	    End For;

	    RubUpdateEx.RdsDatabase := Rub.Database;

	    RubUpdateEx.Apply(Progress);

	End Sub UserProc;


После выполнения примера база данных временных рядов FC будет скопирована
 в корневую папку репозитория. Идентификатор копии - FC_COPY. Будут скопированы
 лишь вложенные объекты, описание которых содержится в коллекции ObjectsF.


См. также:


[IMetabaseObjectDescriptors](IMetabaseObjectDescriptors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
