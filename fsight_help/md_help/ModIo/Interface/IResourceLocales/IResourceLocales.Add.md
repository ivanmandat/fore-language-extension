# IResourceLocales.Add

IResourceLocales.Add
-


# IResourceLocales.Add


## Синтаксис


Add(Key: Integer): [IResourceLocale](../IResourceLocale/IResourceLocale.htm);


## Параметры


Key. Ключ языка.


## Описание


Метод Add добавляет язык с указанным
 ключом в редактор ресурсов.


## Комментарии


Для указания ключа языка используйте значения перечисления [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие ресурсов
 с идентификатором «APP_RESOURCE».


Добавьте ссылки на системные сборки: IO, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Resource: IResourceObject;

    Locales: IResourceLocales;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ресурсы

    Resource := mb.ItemById("APP_RESOURCE").Edit As IResourceObject;

    // Получаем коллекцию языков ресурсов

    Locales := Resource.Locales;

    // Проверяем, есть ли в коллекции французский язык

    If Locales.FindByKey(LocaleCodeID.French_France) = Null Then

        // Если французский язык отсутствует, до добавляем его

        Locales.Add(LocaleCodeID.French_France)

    End If;

    // Сохраняем изменения

    (Resource As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в редактор ресурсов будет добавлен французский
 язык.


См. также:


[IResourceLocales](IResourceLocales.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
