# IResourceStrings.ValueByKey

IResourceStrings.ValueByKey
-


# IResourceStrings.ValueByKey


## Синтаксис


ValueByKey(Key: Integer): String;


## Параметры


Key. Ключ строки.


## Описание


Свойство ValueByKey определяет
 строку редактора ресурсов, ключ которой передается посредством параметра
 Key.


## Комментарии


Для задания строки ресурсов по её идентификатору используйте свойство
 [IResourceStrings.Value](IResourceStrings.Value.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие ресурсов
 с идентификатором «APP_RESOURCE». В данных ресурсах язык по умолчанию
 - русский, а язык перевода - английский.


Добавьте ссылки на системные сборки: IO, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Resource: IResourceObject;

    ResStrs: IResourceStrings;

    ResStrKey: Integer;

    Locales: IResourceLocales;

    Locale: IResourceLocale;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ресурсы

    Resource := mb.ItemById("APP_RESOURCE").Edit As IResourceObject;

    // Получаем строковые элементы ресурсов

    ResStrs := Resource.Strings;

    // Создаем новый строковый элемент

    ResStrKey := ResStrs.Add;

    // Получаем коллекцию языков ресурсов

    Locales := Resource.Locales;

    // Получаем язык по умолчанию

    Locale := Locales.DefaultLocale;

    // Получаем строковые элементы для языка по умолчанию

    ResStrs := Locale.Strings;

    // Задаем значение строкового элемента для языка по умолчанию

    ResStrs.ValueByKey(ResStrKey) := "Отмена";

    // Получаем язык для перевода

    Locale := Locales.CurrentLocale;

    // Получаем строковые элементы для языка перевода

    ResStrs := Locale.Strings;

    // Задаем значение строкового элемента для языка перевода

    ResStrs.ValueByKey(ResStrKey) := "Cancel";

    // Сохраняем изменения

    (Resource As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в ресурсы будет добавлен новый строковый
 элемент. Для него будет задано значение для языка по умолчанию и для языка
 перевода.


См. также:


[IResourceStrings](IResourceStrings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
