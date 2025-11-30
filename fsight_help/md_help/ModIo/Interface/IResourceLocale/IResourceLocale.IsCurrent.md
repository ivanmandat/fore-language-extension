# IResourceLocale.IsCurrent

IResourceLocale.IsCurrent
-


# IResourceLocale.IsCurrent


## Синтаксис


IsCurrent: Boolean;


## Описание


Свойство IsCurrent определяет
 является ли язык текущим языком перевода.


## Комментарии


Допустимые значения:


	- True. Язык является
	 текущим языком перевода;


	- False. Язык не является
	 текущим языком перевода.


Язык перевода - это язык, используемый для отображения значений
 на [языке
 репозитория для текущего пользователя](setup.chm::/06_ak_client_config/uinav_repoconfig_repo1.htm#more), если он отличается
 от языка по умолчанию для репозитория. Если в ресурсах отсутствует язык
 перевода, совпадающий с языком репозитория для текущего пользователя,
 то будут использоваться значения для языка ресурсов по умолчанию.


## Пример


Для выполнения примера в репозитории предполагается наличие ресурсов
 с идентификатором «APP_RESOURCE». В данных ресурсах должно содержаться
 несколько языков.


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

    Resource := mb.ItemById("APP_RESOURCE").Edit As IResourceObject;

    // Получаем коллекцию языков ресурсов

    Locales := Resource.Locales;

    // Получаем второй язык в ресурсах

    Locale := Locales.Item(1);

    // Проверяем, является ли он текущим языком перевода

    If Locale.IsCurrent

        // Если является, то выводим соответствующее сообщение

        Then

            Debug.WriteLine(Locale.Id + "(" + Locale.Key.ToString + ")" +

                "Является текущим языком перевода");

        // Если не является, то делаем его текущим языком перевода

        Else

            Locale.IsCurrent := True;

    End If;

    // Сохраняем изменения

    (Resource As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера второй язык в ресурсах будет установлен
 в качестве языка перевода.


См. также:


[IResourceLocale](IResourceLocale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
