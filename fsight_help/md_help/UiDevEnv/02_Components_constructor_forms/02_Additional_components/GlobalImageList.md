# GlobalImageList: Компонент

GlobalImageList: Компонент
-


# GlobalImageList


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IImageList](ModForms.chm::/Interface/IImageList/IImageList.htm)


           [IGlobalImageList](KeExtCtrls.chm::/Interface/IGlobalImageList/IGlobalImageList.htm)


           [GlobalImageList](KeExtCtrls.chm::/Class/GlobalImageList/GlobalImageList.htm)


## Описание


Компонент GlobalImageList является
 аналогом компонента [ImageList](ImageList.htm) и предназначен
 для хранения коллекции изображений, загруженных из документов репозитория.


## Работа с компонентом


Документ должен представлять собой импортированное изображение, состоящее
 из горизонтально расположенных пиктограмм. Для загрузки документа необходимо
 дважды щелкнуть по свойству [Document](KeExtCtrls.chm::/Interface/IGlobalImageList/IGlobalImageList.Document.htm)
 в инспекторе объектов или выполнить соответствующую команду контекстного
 меню, вызываемого для компонента. Изображение при загрузке будет разбиваться
 на пиктограммы. Для работы с пиктограммами реализован специальный редактор.
 Редактор аналогичен редактору компонента [ImageList](ImageList.htm),
 но имеет определенные ограничения. В редакторе не доступно изменение списка
 пиктограмм.


Компонент GlobalImageList применяется,
 если необходимо использовать один и тот же набор пиктограмм в различных
 формах.


## Свойства компонента GlobalImageList


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Count](ModForms.chm::/Interface/IImageList/IImageList.Count.htm)
		 Свойство Count
		 возвращает количество изображений, загруженных в коллекцию компонента.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
		 Свойство Data
		 предназначено для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Document](KeExtCtrls.chm::/Interface/IGlobalImageList/IGlobalImageList.Document.htm)
		 Свойство Document определяет
		 документ репозитория, являющийся источником изображения для компонента.


		 ![](../../Property_Image.gif)
		 [Height](ModForms.chm::/Interface/IImageList/IImageList.Height.htm)
		 Свойство Height
		 определяет высоту изображений, хранящихся в коллекции компонента.


		 ![](../../Property_Image.gif)
		 [Icon](ModForms.chm::/Interface/IImageList/IImageList.Icon.htm)
		 Свойство Icon
		 возвращает указанное графическое изображение в виде пиктограммы.


		 ![](../../Property_Image.gif)
		 [Item](ModForms.chm::/Interface/IImageList/IImageList.Item.htm)
		 Свойство Item
		 возвращает указанное графическое изображение.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name
		 определяет наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag
		 не используется компилятором. Пользователь может изменить значение
		 свойства Tag
		 и использовать его по своему усмотрению.


		 ![](../../Property_Image.gif)
		 [Width](ModForms.chm::/Interface/IImageList/IImageList.Width.htm)
		 Свойство Width
		 определяет ширину изображений, хранящихся в коллекции компонента.


## Методы компонента GlobalImageList


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](ModForms.chm::/Interface/IImageList/IImageList.Add.htm)
		 Метод Add
		 добавляет изображение в коллекцию компонента.


		 ![](../../Sub_Image.gif)
		 [AddIcon](ModForms.chm::/Interface/IImageList/IImageList.AddIcon.htm)
		 Метод AddIcon
		 добавляет пиктограмму в коллекцию компонента.


		 ![](../../Sub_Image.gif)
		 [Clear](ModForms.chm::/Interface/IImageList/IImageList.Clear.htm)
		 Метод Clear
		 осуществляет очистку коллекции изображений компонента.


		 ![](../../Sub_Image.gif)
		 [LoadFromFile](ModForms.chm::/Interface/IImageList/IImageList.LoadFromFile.htm)
		 Метод LoadFromFile
		 осуществляет загрузку изображения в компонент из файла.


		 ![](../../Sub_Image.gif)
		 [LoadFromStream](ModForms.chm::/Interface/IImageList/IImageList.LoadFromStream.htm)
		 Метод LoadFromStream
		 осуществляет загрузку изображения в компонент из потока.


		 ![](../../Sub_Image.gif)
		 [LoadFromStream2](ModForms.chm::/Interface/IImageList/IImageList.LoadFromStream2.htm)
		 Метод LoadFromStream2
		 осуществляет загрузку изображений из потока с восстановлением
		 информации о полупрозрачности.


		 ![](../../Sub_Image.gif)
		 [Remove](ModForms.chm::/Interface/IImageList/IImageList.Remove.htm)
		 Метод Remove
		 удаляет изображение из коллекции.


		 ![](../../Sub_Image.gif)
		 [SaveToDoc](ModForms.chm::/Interface/IImageList/IImageList.SaveToDoc.htm)
		 Метод SaveToDoc
		 сохраняет все изображения из компонента в файл.


		 ![](../../Sub_Image.gif)
		 [SaveToStream](ModForms.chm::/Interface/IImageList/IImageList.SaveToStream.htm)
		 Метод SaveToStream
		 сохраняет все изображения из компонента в поток.


		 ![](../../Sub_Image.gif)
		 [SaveToStream2](ModForms.chm::/Interface/IImageList/IImageList.SaveToStream2.htm)
		 Метод SaveToStream2
		 сохраняет изображения в поток с сохранением информации о полупрозрачности.


		 ![](../../Sub_Image.gif)
		 [SetOverlay](modforms.chm::/Interface/IImageList/IImageList.SetOverlay.htm)
		 Метод SetOverlay
		 идентифицирует изображение в списке как изображение, которое может
		 быть использовано как покрывающая маска.


См. также:


[Дополнительные компоненты](Additional_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
