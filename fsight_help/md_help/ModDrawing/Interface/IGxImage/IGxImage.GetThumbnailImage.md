# IGxImage.GetThumbnailImage

IGxImage.GetThumbnailImage
-


# IGxImage.GetThumbnailImage


## Синтаксис


GetThumbnailImage(ThumbWidth: Integer, ThumbHeight:
 Integer): [IGxImage](IGxImage.htm);


## Параметры


ThumbWidth. Ширина миниатюры
 в пикселях.


ThumbHeight. Высота миниатюры в
 пикселях.


## Описание


Метод GetThumbnailImage создает
 миниатюру.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и двух компонентов ImageBox с наименованиями
 ImageBox1 и ImageBox2. В ImageBox1 загружено какое-либо изображение.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Image, Image1: IGxImage;

Begin

    Image := ImageBox1.Image;

    Image1 := Image.GetThumbnailImage(20, 20);

    ImageBox2.Image := Image1;

End Sub Button1OnClick;


При нажатии на кнопку в компонент ImageBox2 будет загружена миниатюра
 изображения, содержащегося в компоненте ImageBox1.


См. также:


[IGxImage](IGxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
