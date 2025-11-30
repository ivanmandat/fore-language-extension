# IImageList.LoadFromStream

IImageList.LoadFromStream
-


# IImageList.LoadFromStream


## Синтаксис


LoadFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);
 [Transparent: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm)
 = Null]);


## Параметры


Stream. Параметр, определяющий
 поток, из которого будет загружено изображение в компонент;


Transparent. Параметр, определяющий
 цвет, который будет использоваться как прозрачный.


## Описание


Метод LoadFromStream осуществляет
 загрузку изображения в компонент из потока, который передается в качестве
 входного параметра Stream.


## Пример


Для выполнения примера в репозитории предполагается наличие ресурсов
 с идентификатором «RES_IMG». Данные ресурсы должны содержать графический
 элемент с идентификатором «img_0» и размером 16x16 пикселей.


Также предполагается наличие формы, содержащей компонент ImageList
 с идентификатором «ImageList1».


Добавьте ссылки на системные сборки: Drawing, Io, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Resource: IResourceObject;

    Binaries: IResourceBinaries;

    Color: IGxColor;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ресурсы

    Resource := mb.ItemById("RES_IMG").Bind As IResourceObject;

    // Получаем изображения из ресурсов

    Binaries := Resource.Binaries;

    // Очищаем компонент ImageList1

    ImageList1.Clear;

    // Задаем высоту и ширину изображений в компоненте ImageList1

    ImageList1.Height := 16;

    ImageList1.Width := 16;

    // Загружаем изображение из ресурсов в компонент ImageList1

    ImageList1.LoadFromStream(Binaries.Value("img_0"));

    Color := GxColor.FromName("White");

    // Сохраняем данное изображение в файл

    ImageList1.SaveToDoc("C:\Изображение из ресурсов.jpg", Color);

End Sub UserProc;


В результате выполнения примера графический элемент «img_0» из
 ресурсов будет загружен в компонент «ImageList1». Затем он из компонента
 будет сохранён в файл «C:\Изображение из ресурсов.jpg».


См. также:


[IImageList](IImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
