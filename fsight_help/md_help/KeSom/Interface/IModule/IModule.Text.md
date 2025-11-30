# IModule.Text

IModule.Text
-


# IModule.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст модуля.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с идентификатором "Assembly_1".


			Sub Main;

Var

    MB: IMetabase;

    Assembly: IMetabaseObjectDescriptor;

    CrInfo: IMetabaseObjectCreateInfo;

    Modul: IModule;

Begin

    MB := MetabaseClass.Active;

    Assembly := MB.ItemById("Assembly_1");

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_MODULE;

    CrInfo.Id := "NewModule";

    CrInfo.Name := "Новый модуль";

    CrInfo.Parent := Assembly;

    Modul := MB.CreateObject(CrInfo).Edit As IModule;

    Modul.Text :=

        "Sub Main;" + #13 + #10 +

        "Begin" + #13 + #10 +

        "End Sub Main;";

    If Modul.Modified Then

        (Modul As IMetabaseObject).Save;

    End If;

End Sub Main;


После выполнения примера рамках сборки "Assembly_1" будет создан новый модуль. В тексте модуля будет содержаться шаблон для процедуры "Main".


См. также:


[IModule](IModule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
