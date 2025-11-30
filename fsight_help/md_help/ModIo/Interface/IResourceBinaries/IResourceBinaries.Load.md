# IResourceBinaries.Load

IResourceBinaries.Load
-


# IResourceBinaries.Load


## Синтаксис


Load(Key: Integer; Stream: [IIOStream](../IIOStream/IIOStream.htm)):
 Boolean;


## Параметры


Key. Ключ изображения;


Stream. Поток.


## Описание


Метод Load загружает изображение
 с указанным ключом из ресурсов в поток.


## Комментарии


Если загрузка прошла успешно, то метод возвращает значение True,
 в противном случае - False.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 ImageList с идентификатором «ImageList1».
 Данный компонент должен содержать изображение, используемое для пиктограмм
 прочих компонентов формы. К форме должны быть подключены ресурсы, содержащие
 изображение с идентификатором «ImgList». Ресурсы должны содержать два
 языка: русский (язык по умолчанию) и английский (язык перевода). Изображение
 «ImgList» должно содержать русскоязычные и англоязычные пиктограммы для
 компонентов формы.


Добавьте ссылки на системные сборки: IO, Metabase.


Процедура, приведённая в качестве примера, должна выполняться при наступлении
 события OnCreate для формы.


			Sub TestFormOnCreate(Sender: Object; Args: IEventArgs);

Var

    MB: IMetabase;

    Resource: IResourceObject;

    Locales: IResourceLocales;

    Locale: IResourceLocale;

    Binares: IResourceBinaries;

    Stream: IIOStream;

    BinKey: Integer;

Begin

    // Получаем ресурсы

    Resource := Self.Resources;

    // Получаем языки ресурсов

    Locales := Resource.Locales;

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Выполняем поиск в ресурсах текущего языка репозитория

    Locale := Locales.FindByKey(MB.CurrentLocale);

    // Получаем изображения из ресурсов для текущего языка репозитория

    Binares := Locale.Binaries;

    // Создаем поток

    Stream := New MemoryStream.Create;

    // Получаем ключ для изображения из ресурсов для текущего языка репозитория

    BinKey := Binares.FindById("ImgList");

    // Загружаем в поток из ресурсов изображение с найденным ключом

    If Binares.Load(BinKey, Stream) Then

        // Загружаем изображение из потока в компонент ImageList

        ImageList1.LoadFromStream(Stream);

    End If;

End Sub TestFormOnCreate;


В результате выполнения примера пиктограммы, используемые для компонентов
 формы, будут зависеть от текущего языка репозитория.


См. также:


[IResourceBinaries](IResourceBinaries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
