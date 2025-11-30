# Создание метамодели

Создание метамодели
-


# Создание метамодели


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере содержатся две
 модели MODEL_1 и MODEL_2.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    KMDesc: IMetabaseObjectDescriptor;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Meta: IMsMetaModel;

    Model1, Model2: IMsModel;

    Root: IMsCalculationChainEntries;

    NewFolder: IMsCalculationChainFolder;

Begin

    MB := MetabaseClass.Active;

    KMDesc := MB.ItemById("KONT_MODEL");

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSMETAMODEL;

    CrInfo.Id := "METAMODEL_1";

    CrInfo.Name := "Метамодель";

    CrInfo.Parent := KMDesc;

    MObj := MB.CreateObject(CrInfo).Edit;

    Meta := MObj As IMsMetaModel;

    Model1 := MB.ItemByIdNamespace("MODEL_1", KMDesc.Key).Bind As IMsModel;

    Model2 := MB.ItemByIdNamespace("MODEL_2", KMDesc.Key).Bind As IMsModel;

    Root := Meta.CalculationChain;

    NewFolder := Root.AddFolder("Модель 1");

    NewFolder.Contents.AddModel(Model1);

    NewFolder := Root.AddFolder("Модель 2");

    NewFolder.Contents.AddModel(Model2);

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана метамодель.
 В цепочке расчета метамодели будет создано две папки, в каждую папку будет
 добавлено по одной модели.


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
