# IGxImageList.SaveToDoc

IGxImageList.SaveToDoc
-


# IGxImageList.SaveToDoc


## Синтаксис


SaveToDoc(Value: String; BgColor: [IGxColor](../IGxColor/IGxColor.htm)):
 Boolean;


## Параметры


Value. Путь к файлу, в который
 необходимо сохранить изображения.


BgColor. Цвет фона картинки.
 Если в качестве цвета фона передается Null,
 то цвет будет выбираться случайно.


## Описание


Метод SaveToDoc сохраняет все
 изображения из коллекции в файл, путь которого передается в качестве входного
 параметра.


## Комментарии


Все изображения сохраняются в виде горизонтального ряда. Результатом
 выполнения метода будет признак удачного сохранения.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием Button1, компонент ImageList с наименованием
 ImageList1 и набором изображений в коллекции. Подробнее о загрузке изображений
 в компонент написано в разделе [ImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageList.htm).


Добавьте ссылки на системные сборки: Drawing, Forms, Io.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ImgList: IGxImageList;

	    Str: IIOStream;

	Begin

	    ImgList := New GxImageList.Create;

	    Str := New MemoryStream.Create;

	    // Через поток передаем пиктораммы в коллекцию изображений

	    ImageList1.SaveToStream(Str, GxColor.FromName("White"));

	    ImgList.LoadFromStream(Str);

	    // Удаляем одно изображение из коллекции и сохраняем в файл оставшиеся

	    ImgList.Remove(1);

	    ImgList.SaveToDoc("C:\temp\1.bmp", GxColor.FromName("White"));

	    // Выводим в консоль количество изображений в коллекции и размеры первого изображения

	    Debug.WriteLine("Количество изображений в коллекции: " + ImgList.Count.ToString);

	    Debug.WriteLine("Size:");

	    Debug.WriteLine("Width: " + ImgList.Item(0).Size.Width.ToString);

	    Debug.WriteLine("Height: " + ImgList.Item(0).Size.Height.ToString);

	End Sub Button1OnClick;


При нажатии на кнопку удалится одно изображение из коллекции, и в заданный
 файл будут сохранены оставшиеся изображения в виде горизонтального ряда:


![](igximagelist_savetodoc.gif)


В окно консоли выведется количество изображений, содержащихся в файле,
 и размеры первого изображения.


См. также:


[IGxImageList](IGxImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
