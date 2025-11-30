# IResourceLocales.DefaultLocale

IResourceLocales.DefaultLocale
-


# IResourceLocales.DefaultLocale


## Синтаксис


DefaultLocale: [IResourceLocale](../IResourceLocale/IResourceLocale.htm);


## Описание


Свойство DefaultLocale возвращает
 язык редактора ресурсов, установленный по умолчанию.


## Комментарии


Язык ресурсов по умолчанию - это язык, используемый для отображения
 значений на [языке
 по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm) для
 репозитория. Для корректной работы языки по умолчанию в ресурсах и в репозитории
 должны совпадать.


После создания в ресурсах содержится один язык, установленный для текущего [репозитория по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm). Если для репозитория не задан язык по умолчанию,
 то в ресурсах будет содержатся язык, соответствующий языку интерфейса
 платформы. Данный язык будет являться языком по умолчанию для ресурсов.


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

    // Получаем коллекцию языков ресурсов

    Locales := Resource.Locales;

    // Получаем язык ресурсов по умолчанию

    Locale := Locales.DefaultLocale;

    // Получаем строковые элементы для языка по умолчанию

    ResStrs := Locale.Strings;

    // Создаем новый строковый элемент

    ResStrKey := ResStrs.Add;

    // Задаем значение строкового элемента для языка по умолчанию

    ResStrs.ValueByKey(ResStrKey) := "Отмена";

    // Получаем текущий язык перевода

    Locale := Locales.CurrentLocale;

    // Проверяем, совпадает ли он с языком по умолчанию

    If Locale.IsDefault

        // Если совпадает, то выводим соответствующее сообщение

        Then

            Debug.WriteLine("Текущий язык перевода совпадает с языком репозитория по умолчанию");

        // Если не совпадает, то задаем значение для текущего языка перевода

        Else

            // Получаем строковые элементы для языка перевода

            ResStrs := Locale.Strings;

            // Задаем значение строкового элемента для языка перевода

            ResStrs.ValueByKey(ResStrKey) := "Cancel";

    End If;

    // Сохраняем изменения

    (Resource As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в ресурсы будет добавлен новый строковый
 элемент. Для него будет задано значение для языка по умолчанию и для языка
 перевода, если текущий язык перевода не совпадает с языком ресурсов по
 умолчанию.


См. также:


[IResourceLocales](IResourceLocales.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
