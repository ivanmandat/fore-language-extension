# IMetabaseLinkInstance.Metabase

IMetabaseLinkInstance.Metabase
-


# IMetabaseLinkInstance.Metabase


## Синтаксис


Metabase: [IMetabase](../IMetabase/IMetabase.htm);


## Описание


Свойство Metabase возвращает
 данные репозитория, с которым осуществляется связь.


## Пример


Для выполнения примера в репозитории предполагается наличие объекта
 «Связь с репозиторием» с идентификатором Link_Test. В репозитории, с которым
 осуществляется связь, имеется регламентный отчет с идентификатором Report_1.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Link: IMetabaseObject;

	    LinkInst: IMetabaseLinkInstance;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT;

	    CrInfo.Id := "Shortcut_Report_1";

	    CrInfo.Name := "Ярлык для Report_1";

	    CrInfo.Parent := MB.Root;

	    Link := MB.ItemById("Link_Test").Bind;

	    LinkInst := Link.Open(Null) As IMetabaseLinkInstance;

	    CrInfo.Link := Link As IMetabaseLink;

	    CrInfo.Shortcut := LinkInst.Metabase.ItemById("Report_1");

	    MB.CreateObject(CrInfo);

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 ярлык для регламентного отчета Report_1.


См. также:


[IMetabaseLinkInstance](IMetabaseLinkInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
