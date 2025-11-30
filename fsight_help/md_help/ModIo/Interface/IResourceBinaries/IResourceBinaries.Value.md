# IResourceBinaries.Value

IResourceBinaries.Value
-


# IResourceBinaries.Value


## Синтаксис


Value(Id: String): [IIOStream](../IIOStream/IIOStream.htm);


## Параметры


Id. Идентификатор изображения.


## Описание


Свойство Value определяет изображение
 редактора ресурсов, идентификатор которого передается посредством параметра
 Id.


## Комментарии


Идентификатор изображения чувствителен к регистру


## Пример


Для выполнения примера в репозитории предполагается наличие ресурсов
 с идентификатором «APP_RESOURCE», содержавших изображение с идентификатором
 «main_img». В данных ресурсах язык по умолчанию - русский, а язык
 перевода - английский.


В файловой системе должны присутствовать следующие файлы: «c:\ru.png»
 и «c:\en.png».


Добавьте ссылки на системные сборки: IO, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Resource: IResourceObject;

    Binares: IResourceBinaries;

    Locales: IResourceLocales;

    Locale: IResourceLocale;

    FileImg: IFileInfo;

    BinR: IBinaryReader;

    Stream: IIOStream;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ресурсы

    Resource := mb.ItemById("APP_RESOURCE").Edit As IResourceObject;

    // Получаем коллекцию языков ресурсов

    Locales := Resource.Locales;

    // Получаем язык по умолчанию

    Locale := Locales.DefaultLocale;

    // Получаем изображения для языка по умолчанию

    Binares := Locale.Binaries;

    // Получаем файл с новым изображением для языка по умолчанию

    FileImg := New FileInfo.Attach("c:\ru.png");

    If FileImg.Exists Then

        BinR := FileImg.OpenBinaryReader;

        Stream := BinR.Stream;

        // Заменяем изображение для языка по умолчанию

        Binares.Value("main_img") := Stream;

    End If;

    // Получаем текущий язык для перевода

    Locale := Locales.CurrentLocale;

    // Получаем изображения для языка перевода

    Binares := Locale.Binaries;

    // Получаем файл с новым изображением для языка перевода

    FileImg := New FileInfo.Attach("c:\en.png");

    If FileImg.Exists Then

        BinR := FileImg.OpenBinaryReader;

        Stream := BinR.Stream;

        // Заменяем изображение для языка перевода

        Binares.Value("main_img") := Stream;

    End If;

    Dispose FileImg;

    // Сохраняем изменения

    (Resource As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для изображения «main_img» будет задано
 значение для языка по умолчанию и для языка перевода.


См. также:


[IResourceBinaries](IResourceBinaries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
