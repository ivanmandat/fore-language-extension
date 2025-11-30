# IMetabaseObjectDescriptor.Screenshot

IMetabaseObjectDescriptor.Screenshot
-


# IMetabaseObjectDescriptor.Screenshot


## Синтаксис


Screenshot(Type:
 [ScreenshotType](../../Enums/ScreenshotType.htm)): Variant;


## Параметры


Type. Тип, в котором хранится
 изображение.


## Описание


Свойство Screenshot определяет
 изображение, используемое при предварительном просмотре объекта в репозитории.


## Комментарии


Под предварительным просмотром понимается представление объектов репозитория
 в виде [огромных
 значков](UiNav.chm::/GUI/View.htm#extralarge_icons).


Для получения признака, поддерживается ли отображение объектов репозитория
 в виде огромных значков, используйте свойство [IMetabase.IsScreenshotSupported](../IMetabase/IMetabase.IsScreenshotSupported.htm).


При [добавлении](../IMetabaseUpdateFolderNode/IMetabaseUpdateFolderNode.Add.htm)
 объектов репозитория в обновление по умолчанию их изображения предварительного
 просмотра в обновление не добавляются, так как не являются частью метаданных.
 Если в обновление требуется также включить изображение предварительного
 просмотра, то используйте свойство [IMetabaseUpdateObjectNode.IncludeScreenshot](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.IncludeScreenshot.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонент ImageBox с наименованием
 «ImageBox1». В репозитории должен быть создан регламентный отчёт с идентификатором
 REGULAR_REPORT и включена возможность [отображения
 объектов в виде значков без учёта прав доступа](Admin.chm::/03_Admin/Access_control_settings.htm#extralargeicons).


Добавьте ссылки на системные сборки: IO, Metabase.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    Scr: Variant;

    Stream: IIOStream;

Begin

    MB := MetabaseClass.Active;

    MDesc := MB.ItemById("REGULAR_REPORT");

    If MB.IsScreenshotSupported = True Then

        Scr := MDesc.Screenshot(ScreenshotType.Default_);

        If Not (Scr.IsNull) Then

            Stream := IOStream.FromVariant(Scr);

            ImageBox1.LoadImageFromStream(Stream);

        End If;

    Else

        Debug.WriteLine("Возможность отображения объектов в виде значков недоступна.");

    End If;

End Sub Button1OnClick;


При нажатии на кнопку в компоненте «ImageBox1» будет размещено изображение
 для предварительного просмотра отчёта с идентификатором REGULAR_REPORT.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
