# ICubeMetaUpdateAdditionalObject.Target

ICubeMetaUpdateAdditionalObject.Target
-


# ICubeMetaUpdateAdditionalObject.Target


## Синтаксис


Target: [IMetabaseObjectDescriptor](kesom.chm::/interface/imetabaseobjectdescriptor/imetabaseobjectdescriptor.htm);


## Описание


Свойство Target определяет объект-приёмник,
 который будет заменен объектом-источником.


## Комментарии


Если указано значение данного свойства, то значения свойств [ICubeMetaUpdateAdditionalObject.TargetId](ICubeMetaUpdateAdditionalObject.TargetId.htm)
 и [ICubeMetaUpdateAdditionalObject.TargetParent](ICubeMetaUpdateAdditionalObject.TargetParent.htm).


При сохранении объекта копирования, настроенного на копирование базы
 данных временных рядов между разными репозиториями, значение данного свойства
 не сохраняется. Данное свойство должно быть установлено после загрузки
 объекта копирования из файла.


## Пример


Для выполнения примера предполагается наличие в репозитории папки с
 идентификатором «TARGET_FOLDER», экспресс-отчета с идентификатором «TARGET_REPORT»
 и экспресс-отчета с идентификатором «OBJ_REPORT», единственным источником
 данных которого является база данных временных рядов с идентификатором
 «FC_FROM». Также необходимо добавить ссылки на системные сборки «Cubes»,
 «Metabase» и «Rds».


			    Sub UserSub

    Var

        Mb: IMetabase;

        Update: ICubeMetaUpdateEx;

        CreateInfo: IMetabaseObjectCreateInfo;

        Parent: IMetabaseObjectDescriptor;

        Rubr: IRubricator;

        Report: IMetabaseObjectDescriptor;

        AdditionalObjs: ICubeMetaUpdateAdditionalObjects;

        AddObj: ICubeMetaUpdateAdditionalObject;

    Begin

        Mb := MetabaseClass.Active;

        Parent := Mb.ItemById("TARGET_FOLDER");

        Update := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

        Update.Metabase := Mb;

        Rubr := Mb.ItemById("FC_FROM").Bind As IRubricator;

        Update.Rubricator := Rubr;

        CreateInfo := Update.CreateInfo;

        CreateInfo.Parent := Parent;

        CreateInfo.Id := "RUBR_REPL";

        CreateInfo.Name := "RUBR_REPL";

        Update.RdsDatabase := Rubr.Database;

        AdditionalObjs := Update.AdditionalObjects;

        Report := Mb.ItemById("OBJ_REPORT");

        AddObj := AdditionalObjs.Add(Report);

        AddObj.Target := Mb.ItemById("TARGET_REPORT");

        Update.Apply(Null);

    End Sub UserSub;


После выполнения примера база данных временных рядов «FC_FROM» будет
 скопирована в папку «TARGET_FOLDER». Вместе с базой будет скопирован отчет
 «OBJ_REPORT», который заменит отчет с идентификатором «TARGET_REPORT».


См. также:


[ICubeMetaUpdateAdditionalObject](ICubeMetaUpdateAdditionalObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
