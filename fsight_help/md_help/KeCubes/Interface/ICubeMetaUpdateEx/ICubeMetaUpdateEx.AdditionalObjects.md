# ICubeMetaUpdateEx.AdditionalObjects

ICubeMetaUpdateEx.AdditionalObjects
-


# ICubeMetaUpdateEx.AdditionalObjects


## Синтаксис


AdditionalObjects: [ICubeMetaUpdateAdditionalObjects](../ICubeMetaUpdateAdditionalObjects/ICubeMetaUpdateAdditionalObjects.htm);


## Описание


Свойство AdditionalObjects возвращает
 коллекцию объектов, которые должны быть скопированы вместе с базой данных
 временных рядов, но не являются вложенными по отношению к ней.


## Комментарии


В коллекции могут содержаться объекты различных классов. Если необходимо
 скопировать регламентный или экспресс-отчет, то он должен зависеть только
 от одной базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории папки с
 идентификатором «TARGET_FOLDER», экспресс-отчета с идентификатором «OBJ_REPORT»,
 единственным источником данных которого является базы данных временных
 рядов с идентификатором «FC_FROM». Также необходимо добавить ссылки на
 системные сборки «Cubes», «Metabase» и «Rds».


	    Sub UserProc;

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

	        AddObj.TargetParent := Parent;

	        AddObj.TargetId := AddObj.SourceId + "_COPY";

	        Update.Apply(Null);

	    End Sub UserProc;


После выполнения примера база данных временных рядов «FC_FROM» будет
 скопирована в папку «TARGET_FOLDER». Вместе с базой в эту же папку будет
 скопирован отчет «OBJ_REPORT». Отчет-копия будет иметь идентификатор «OBJ_REPORT_COPY».


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
