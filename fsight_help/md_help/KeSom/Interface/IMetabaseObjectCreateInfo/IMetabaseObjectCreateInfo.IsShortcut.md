# IMetabaseObjectCreateInfo.IsShortcut

IMetabaseObjectCreateInfo.IsShortcut
-


# IMetabaseObjectCreateInfo.IsShortcut


## Синтаксис


IsShortcut: Boolean;


## Описание


Свойство IsShortcut определяет
 признак создания ярлыка для существующего объекта репозитория.


## Комментарии


Допустимые значения:


	- True. Создаваемый объект
	 репозитория является ярлыком. В свойстве [IMetabaseObjectCreateInfo.Shortcut](IMetabaseObjectCreateInfo.Shortcut.htm)
	 необходимо определить объект репозитория, для которого будет создан
	 ярлык;


	- False. Создаваемый объект
	 репозитория не является ярлыком.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «OBJTEST».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.Id := "Shortcut_OBJTEST";

    CrInfo.Name := "Ярлык для OBJTEST";

    CrInfo.Parent := MB.Root;

    CrInfo.Permanent := True;

    CrInfo.Shortcut := MB.ItemById("OBJTEST");

    CrInfo.IsShortcut := True;

    MB.CreateObject(CrInfo);

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 ярлык для объекта «OBJTEST».


См. также:


[IMetabaseObjectCreateInfo](IMetabaseObjectCreateInfo.htm)
 | [Работа с ярлыком](../../Examples/Work_with_Shortcut.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
