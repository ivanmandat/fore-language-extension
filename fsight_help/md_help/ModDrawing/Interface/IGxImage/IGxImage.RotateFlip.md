# IGxImage.RotateFlip

IGxImage.RotateFlip
-


# IGxImage.RotateFlip


## Синтаксис


RotateFlip(RotateFlipType: [GxRotateFlipType](../../Enums/GxRotateFlipType.htm));


## Параметры


RotateFlipType. Тип вращения и отражения.


## Описание


Метод RotateFlip осуществляет
 вращение и отражение изображения.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и двух компонентов ImageBox с наименованиями
 ImageBox1 и ImageBox2. В ImageBox1 загружено какое-либо изображение.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Image: IGxImage;

Begin

    Image := ImageBox1.Image;

    Image.RotateFlip(GxRotateFlipType.Rotate180FlipX);

    ImageBox2.Image := Image;

End Sub Button1OnClick;


При нажатии на кнопку в компоненте с наименованием ImageBox2 будет содержаться
 изображение, содержащееся в компоненте с наименованием ImageBox1 и повернутое
 на 180 градусов по часовой стрелке и отражённое слева направо.


См. также:


[IGxImage](IGxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
