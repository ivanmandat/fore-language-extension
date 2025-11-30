# IImageList

IImageList
-


# IImageList


Сборка: Forms;


## Описание


Интерфейс IImageList предназначен
 для работы с компонентами среды разработки: [ImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageList.htm)
 и [GlobalImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/GlobalImageList.htm).


## Иерархия наследования


           [IComponent](../IComponent/IComponent.htm)


           IImageList


## Комментарии


Интерфейс IImageList позволяет
 работать с изображениями в следующих форматах: BMP, JPG, GIF, TIFF, JEPEG,
 PNG, ICO, изображения с альфа-каналом в формате GIF с простой бинарной
 прозрачностью и в формате PNG с частичной прозрачностью.


## Свойства


		  Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IImageList.Count.htm)
		 Свойство Count возвращает
		 количество изображений, загруженных в коллекцию компонента.


		 ![](../../Property_Image.gif)
		 [Height](IImageList.Height.htm)
		 Свойство Height определяет
		 высоту изображений, хранящихся в коллекции компонента.


		 ![](../../Property_Image.gif)
		 [Icon](IImageList.Icon.htm)
		 Свойство Icon возвращает
		 указанное графическое изображение в виде пиктограммы.


		 ![](../../Property_Image.gif)
		 [Item](IImageList.Item.htm)
		 Свойство Item возвращает
		 указанное графическое изображение.


		 ![](../../Property_Image.gif)
		 [Width](IImageList.Width.htm)
		 Свойство Width определяет
		 ширину изображений, хранящихся в коллекции компонента.


## Свойства, унаследованные от [IComponent](../IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](../IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](../IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](../IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](../IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](../IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы


		  Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IImageList.Add.htm)
		 Метод Add добавляет
		 изображение в коллекцию компонента.


		 ![](../../Sub_Image.gif)
		 [AddIcon](IImageList.AddIcon.htm)
		 Метод AddIcon добавляет
		 указанную пиктограмму в коллекцию компонента.


		 ![](../../Sub_Image.gif)
		 [Clear](IImageList.Clear.htm)
		 Метод Clear осуществляет
		 очистку коллекции изображений компонента.


		 ![](../../Sub_Image.gif)
		 [LoadFromFile](IImageList.LoadFromFile.htm)
		 Метод LoadFromFile
		 осуществляет загрузку изображения в компонент из файла.


		 ![](../../Sub_Image.gif)
		 [LoadFromStream](IImageList.LoadFromStream.htm)
		 Метод LoadFromStream
		 осуществляет загрузку изображения в компонент из потока.


		 ![](../../Sub_Image.gif)
		 [LoadFromStream2](IImageList.LoadFromStream2.htm)
		 Метод LoadFromStream2
		 осуществляет загрузку изображений из потока с восстановлением
		 информации о полупрозрачности.


		 ![](../../Sub_Image.gif)
		 [Remove](IImageList.Remove.htm)
		 Метод Remove удаляет
		 изображение из коллекции.


		 ![](../../Sub_Image.gif)
		 [SaveToDoc](IImageList.SaveToDoc.htm)
		 Метод SaveToDoc сохраняет
		 все изображения из компонента в файл.


		 ![](../../Sub_Image.gif)
		 [SaveToStream](IImageList.SaveToStream.htm)
		 Метод SaveToStream
		 сохраняет все изображения из компонента в поток.


		 ![](../../Sub_Image.gif)
		 [SaveToStream2](IImageList.SaveToStream2.htm)
		 Метод SaveToStream2
		 сохраняет изображения в поток с сохранением информации о полупрозрачности.


		 ![](../../Sub_Image.gif)
		 [SetOverlay](IImageList.SetOverlay.htm)
		 Метод SetOverlay идентифицирует
		 изображение в списке как изображение, которое может быть использовано
		 как покрывающая маска.


См. также:


[Интерфейсы сборки Forms](../ModForms_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
