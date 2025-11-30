# IResourceStrings.Value

IResourceStrings.Value
-


# IResourceStrings.Value


## Синтаксис


Value[Id: String]: String;


## Параметры


Id. Идентификатор строки.


## Описание


Свойство Value определяет строку
 редактора ресурсов, идентификатор которой передается посредством параметра
 Id.


## Комментарии


Идентификатор строки чувствителен к регистру.


## Пример


Для выполнения примера в репозитории предполагается наличие ресурсов
 с идентификатором «APP_RESOURCE», содержащих строковый элемент с идентификатором
 «Button1». В данных ресурсах язык по умолчанию - русский, а язык
 перевода - английский.


Добавьте ссылки на системные сборки: IO, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Resource: IResourceObject;

    ResStrs: IResourceStrings;

    Locales: IResourceLocales;

    Locale: IResourceLocale;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ресурсы

    Resource := mb.ItemById("APP_RESOURCE").Edit As IResourceObject;

    // Получаем коллекцию языков ресурсов

    Locales := Resource.Locales;

    // Получаем язык по умолчанию

    Locale := Locales.DefaultLocale;

    // Получаем строковые элементы для языка по умолчанию

    ResStrs := Locale.Strings;

    // Задаем значение строкового элемента для языка по умолчанию

    ResStrs.Value("Button1") := "Отмена";

    // Получаем язык перевода

    Locale := Locales.CurrentLocale;

    // Получаем строковые элементы для языка перевода

    ResStrs := Locale.Strings;

    // Задаем значение строкового элемента для языка перевода

    ResStrs.Value("Button1") := "Cancel";

    // Сохраняем изменения

    (Resource As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для строкового элемента «Button1» будет
 задано значение для языка по умолчанию и для языка перевода.


См. также:


[IResourceStrings](IResourceStrings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
