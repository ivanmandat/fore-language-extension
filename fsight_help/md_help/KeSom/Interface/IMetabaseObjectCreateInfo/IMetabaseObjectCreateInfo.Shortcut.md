# IMetabaseObjectCreateInfo.Shortcut

IMetabaseObjectCreateInfo.Shortcut
-


# IMetabaseObjectCreateInfo.Shortcut


## Синтаксис


Shortcut: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Shortcut определяет
 объект репозитория, для которого необходимо создать ярлык.


## Комментарии


Для создания ярлыка свойство [IMetabaseObjectCreateInfo.IsShortcut](IMetabaseObjectCreateInfo.IsShortcut.htm)
 должно принимать значение True.


Для автоматического сохранения ярлыка в репозитории задайте свойству
 [IMetabaseObjectCreateInfo.Permanent](IMetabaseObjectCreateInfo.Permanent.htm)
 значение True.


Для задания расположения ярлыка используйте свойство [IMetabaseObjectCreateInfo.Parent](IMetabaseObjectCreateInfo.Parent.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJTEST.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Создадим описание объекта

    CrInfo := MB.CreateCreateInfo;

    // Зададим идентификатор объекта

    CrInfo.Id := "SHORTCUT_OBJTEST";

    // Зададим наименование объекта

    CrInfo.Name := "Ярлык для OBJTEST";

    // Зададим расположение объекта

    CrInfo.Parent := MB.Root;

    // Укажем, что создаваемый объект является ярлыком

    CrInfo.IsShortcut := True;

    // Укажем, что создаваемый объект не является внутренним

    CrInfo.IsInternal := False;

    // Укажем идентификатор объекта, для которого будет создан ярлык

    CrInfo.Shortcut := MB.ItemById("OBJTEST");

    // Сохраним описание ярлыка

    CrInfo.Permanent := True;

    // Создадим объект в репозитории

    MB.CreateObject(CrInfo);

End Sub UserProc


После выполнения примера в корневом каталоге репозитория будет создан
 ярлык с идентификатором SHORTCUT_OBJTEST и наименованием «Ярлык для OBJTEST».


См. также:


[IMetabaseObjectCreateInfo](IMetabaseObjectCreateInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
