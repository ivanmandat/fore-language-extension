# IEaxDataAreaHierarchies.SaveToMetabase

IEaxDataAreaHierarchies.SaveToMetabase
-


# IEaxDataAreaHierarchies.SaveToMetabase


## Синтаксис


SaveToMetabase(Key: Integer; Object: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm));


## Параметры


Key. Ключ альтернативной иерархии.


Object. Объект, в который сохраняется
 альтернативная иерархия.


## Описание


Метод SaveToMetabase сохраняет
 указанную альтернативную иерархию.


## Комментарии


Объект, в который сохраняется альтернативная иерархия, должен иметь
 тип «Конструируемый справочник».


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS_ELEMENT. Данный отчет должен содержать измерение
 с пользовательской альтернативной иерархией. Также в репозитории должна
 присутствовать папка с идентификатором DATAAREAHIERARCHIES.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	    Hiers: IEaxDataAreaHierarchies;

	    Hier: IEaxDataAreaHierarchy;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObjectDescriptor;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS_ELEMENT").Bind As IEaxAnalyzer;

	    // Получим срез источника данных

	    DArea := Express.DataArea;

	    // Получим коллекцию альтернативных иерархий

	    Hiers := DArea.Hierarchies;

	    // Сохраним первую альтернативную иерархию

	    If Hiers.Count > 0 Then

	        Hier := Hiers.Item(0);

	        CrInfo := MB.CreateCreateInfo;

	        CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_CUSTOMDIM;

	        CrInfo.Name := "Альтернативная иерархия для справочника '" +

	            Hier.Selection.Dimension.Name + "'";

	        CrInfo.Parent := MB.ItemById("DATAAREAHIERARCHIES");

	        MObj := MB.CreateObject(CrInfo);

	        Hiers.SaveToMetabase(Hier.Key, MObj);

	    End If;

	End Sub UserProc;


В результате выполнения примера в папке DATAAREAHIERARCHIES будет сохранён
 справочник, используемый для построения пользовательской альтернативной
 иерархии.


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
