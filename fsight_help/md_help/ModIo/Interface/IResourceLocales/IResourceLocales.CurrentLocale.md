# IResourceLocales.CurrentLocale

IResourceLocales.CurrentLocale
-


# IResourceLocales.CurrentLocale


## Синтаксис


CurrentLocale: [IResourceLocale](../IResourceLocale/IResourceLocale.htm);


## Описание


Свойство CurrentLocale возвращает
 текущий язык перевода ресурсов.


## Комментарии


Текущий язык перевода - это язык перевода, редактируемый в ресурсах
 в данный момент.


Для получения языка ресурсов по умолчанию используйте свойство [IResourceLocales.DefaultLocale](IResourceLocales.DefaultLocale.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие ресурсов
 с идентификатором «APP_RESOURCE».


Добавьте ссылки на системные сборки: IO, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Resource: IResourceObject;

    Locales: IResourceLocales;

    Locale: IResourceLocale;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ресурсы

    Resource := mb.ItemById("APP_RESOURCE").Bind As IResourceObject;

    // Получаем коллекцию языков ресурсов

    Locales := Resource.Locales;

    // Получаем текущий язык перевода ресурсов

    Locale := Locales.CurrentLocale;

    // Выводим в окно консоли его идентификатор

    Debug.WriteLine("Текущий язык перевода: " + Locale.Id);

    // Выводим в окно консоли признак того, является ли

    // текущий язык перевода языком ресурсов
 по умолчанию

    Debug.WriteLine("Является языком
 ресурсов по умолчанию: " + Locale.IsDefault.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен идентификатор
 текущего языка перевода и признак того, является ли он языком ресурсов
 по умолчанию.


См. также:


[IResourceLocales](IResourceLocales.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
