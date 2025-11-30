# IResourceBinaries.ValueByKey

IResourceBinaries.ValueByKey
-


# IResourceBinaries.ValueByKey


## Синтаксис


ValueByKey(Key: Integer): [IIOStream](../IIOStream/IIOStream.htm);


## Параметры


Key. Ключ изображения.


## Описание


Свойство ValueByKey определяет
 изображение редактора ресурсов, ключ которого передается посредством параметра
 Key.


## Комментарии


Для задания изображения в ресурсах по его идентификатору используйте
 свойство [IResourceBinaries.Value](IResourceBinaries.Value.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие ресурсов
 с идентификатором «APP_RESOURCE». В данных ресурсах язык по умолчанию
 - русский, а язык перевода - английский.


Добавьте ссылки на системные сборки: IO, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Resource: IResourceObject;

    Binares: IResourceBinaries;

    ResKey: Integer;

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

    // Получаем изображения

    Binares := Resource.Binaries;

    // Создаем новый строковый элемент

    ResKey := Binares.Add;

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

        Binares.ValueByKey(ResKey) := Stream;

    End If;

    // Получаем текущий язык для перевода

    Locale := Locales.CurrentLocale;

    // Получаем строковые элементы для языка перевода

    Binares := Locale.Binaries;

    // Получаем файл с новым изображением для языка перевода

    FileImg := New FileInfo.Attach("c:\en.png");

    If FileImg.Exists Then

        BinR := FileImg.OpenBinaryReader;

        Stream := BinR.Stream;

        // Заменяем изображение для языка перевода

        Binares.ValueByKey(ResKey) := Stream;

    End If;

    Dispose FileImg;

    // Сохраняем изменения

    (Resource As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в ресурсы будет добавлен новый строковый
 элемент. Для него будет задано значение для языка по умолчанию и для языка
 перевода.


См. также:


[IResourceBinaries](IResourceBinaries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
