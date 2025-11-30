# IGxImage.PhysicalDimension

IGxImage.PhysicalDimension
-


# IGxImage.PhysicalDimension


## Синтаксис


PhysicalDimension: [IGxSizeF](../IGxSizeF/IGxSizeF.htm);


## Описание


Свойство PhysicalDimension возвращает
 размер изображения в пикселях на дюйм.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента [ImageBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageBox.htm)
 с наименованием ImageBox1. В компонент ImageBox1 загружено какое-либо
 изображение.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Image: IGxImage;

    Size: IGxSizeF;

Begin

    Image := ImageBox1.Image;

    Size := Image.PhysicalDimension;

    Debug.WriteLine("Ширина: " + Size.Width.ToString + ". Высота: " + Size.Height.ToString);

End Sub Button1OnClick;


При нажатии на кнопку в переменной Size будет содержаться размер изображения,
 загруженного в компонент ImageBox1. Ширина и высота будут выведены в консоль
 среды разработки.


См. также:


[IGxImage](IGxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
