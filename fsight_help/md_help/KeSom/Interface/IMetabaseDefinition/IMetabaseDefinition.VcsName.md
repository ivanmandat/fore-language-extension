# IMetabaseDefinition.VcsName

IMetabaseDefinition.VcsName
-


# IMetabaseDefinition.VcsName


## Синтаксис


VcsName: String;


## Описание


Свойство VcsName определяет
 тип системы управления версиями.


## Комментарии


Данное свойство актуально использовать, если репозиторий добавлен в
 [систему
 управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm).


## Пример


Для выполнения примера предполагается наличие репозитория подключенного
 к системе контроля версий и локальный гит-репозиторий расположенный на
 диске C.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Def: IMetabaseDefinition;

Begin

    // Получим репозиторий

    Def := MetabaseClass.Active.Definition;

    // Выведем тип текущей Vcs и локальную папку репозитория

    Debug.WriteLine("Текущая Vcs: " + Def.VcsName);

    Debug.WriteLine("Текущая локальная папка: " + Def.VcsLocalPath);

    // Установим систему контроля и локальную папку репозитория

    Def.VcsName := "Git";

    Def.VcsLocalPath := "С:\VS\git_repo";

    // Сохраним изменения

    Def.Save;

End Sub UserProc;


В результате выполнения примера в окно консоли выведется тип текущей
 VCS и путь до локальной папки, установится Git в качестве системы контроля
 и настроится на указанный путь до локального гит-репозитория.


См. также:


[IMetabaseDefinition](IMetabaseDefinition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
