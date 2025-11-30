# Создание документа

Создание документа
-


# Создание документа


Для выполнения примера предполагается наличие файла "Icons_1.bmp",
 содержащего набор пиктограмм.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Doc: IDocument;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DOCUMENT;

	    CrInfo.Id := "NewDocument";

	    CrInfo.Name := "Документ с пиктограммами";

	    CrInfo.Parent := MB.Root;

	    Doc := MB.CreateObject(CrInfo).Edit As IDocument;

	    Doc.LoadFromFile("c:\Icons_1.bmp");

	    (Doc As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге будет создан новый объект
 Документ. Данный документ будет содержать в себе графический файл "Icons_1.bmp".
 В дальнейшем может использоваться для подключения в компоненте GlobalImageList.


См. также:


[Примеры](KeFore_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
