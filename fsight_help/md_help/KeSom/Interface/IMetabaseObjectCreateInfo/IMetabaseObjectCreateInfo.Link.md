# IMetabaseObjectCreateInfo.Link

IMetabaseObjectCreateInfo.Link
-


# IMetabaseObjectCreateInfo.Link


## Синтаксис


		Link: [IMetabaseLink](../IMetabaseLink/IMetabaseLink.htm);


## Описание


Свойство Link определяет связь
 с репозиторием.


## Комментарии


Данное свойство используется, если создается ярлык на объект из другого
 репозитория. Для связи с репозиторием используется объект - Связь с репозиторием.
 При создании ссылки на объект из другого репозитория, в качестве значения
 свойства [IMetabaseObjectCreateInfo.ClassId](IMetabaseObjectCreateInfo.ClassId.htm)
 должен задаваться класс объекта, на который создается ссылка. Описание
 объекта указывается в свойстве [IMetabaseObjectCreateInfo.Shortcut](IMetabaseObjectCreateInfo.Shortcut.htm),
 свойству [IMetabaseObjectCreateInfo.IsShortcut](IMetabaseObjectCreateInfo.IsShortcut.htm)
 должно быть установлено значение False.


## Пример


Для выполнения примера предполагается наличие объекта «Связь
 с репозиторием» с идентификатором «Link_Test». В репозитории, с
 которым осуществляется связь, имеется регламентный отчет с идентификатором
 «Report_1».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CrInfo: IMetabaseObjectCreateInfo;

		    Link: IMetabaseObject;

		    LinkInst: IMetabaseLinkInstance;

		    ObjDesc: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    CrInfo := MB.CreateCreateInfo;

		    CrInfo.Id := "Shortcut_Report_1";

		    CrInfo.Name := "Ярлык для Report_1";

		    CrInfo.Parent := MB.Root;

		    CrInfo.Permanent := True;

		    Link := MB.ItemById("Link_Test").Bind;

		    LinkInst := Link.Open(Null) As IMetabaseLinkInstance;

		    ObjDesc := LinkInst.Metabase.ItemById("Report_1");

		    CrInfo.Link := Link As IMetabaseLink;

		    CrInfo.ClassId := ObjDesc.ClassId;

		    CrInfo.Shortcut := ObjDesc;

		    MB.CreateObject(CrInfo);

		End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 ярлык для регламентного отчета «Report_1».


См. также:


[IMetabaseObjectCreateInfo](IMetabaseObjectCreateInfo.htm) |
 [Работа с ярлыком](../../Examples/Work_with_Shortcut.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
