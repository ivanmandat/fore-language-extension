# IResourceItems.Key

IResourceItems.Key
-


# IResourceItems.Key


## Синтаксис


Key(Index: Integer): Integer;


## Параметры


Index. Индекс объекта.


## Описание


Свойство Key возвращает ключ
 объекта с указанным индексом.


## Комментарии


Для поиска индекса объекта по указанному ключу используйте свойство
 [IResourceItems.FindByKey](IResourceItems.FindByKey.htm).


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

    // Получаем строковые элементы для языка по умолчанию

    ResStrs := Resource.Strings;

    // Получаем первый строковый элемент

    ResStrKey := ResStrs.Key(0);

    // Задаем значение строкового элемента для языка по умолчанию

    ResStrs.ValueByKey(ResStrKey) := "Отмена";

    // Получаем коллекцию языков ресурсов

    Locales := Resource.Locales;

    // Получаем первый язык для перевода

    Locale := Locales.Item(1);

    // Получаем строковые элементы для языка перевода

    ResStrs := Locale.Strings;

    // Задаем значение строкового элемента для языка перевода

    ResStrs.ValueByKey(ResStrKey) := "Cancel";

    // Сохраняем изменения

    (Resource As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для первого строкового элемента ресурсов
 будет изменено значение для языка по умолчанию и для языка перевода.


См. также:


[IResourceItems](IResourceItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
