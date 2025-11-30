# Создание карты в репозитории

Создание карты в репозитории
-


# Создание карты в репозитории


Для выполнения примера предполагается наличие файла "c:\map_1.tbs",
 содержащего топооснову карты.


			Sub NewTopobase;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Top: ITopobase;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TOPOBASE;

    CrInfo.Id := "New_Map_1";

    CrInfo.Name := "Новая карта";

    CrInfo.Parent := MB.Root;

    Top := MB.CreateObject(CrInfo).Edit As ITopobase;

    Top.LoadFromFile("C:\map_1.tbs");

    (Top As IMetabaseObject).Save;

End Sub NewTopobase;


После выполнения примера в корневом каталоге репозитория будет создана
 новая карта. Топооснова карты будет загружена из указанного файла.


См.также:


[Примеры](KeTopobase_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
