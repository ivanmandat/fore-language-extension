# IGxICMManager.TranslateImage

IGxICMManager.TranslateImage
-


# IGxICMManager.TranslateImage


## Синтаксис


TranslateImage(Source: [IGxImage](../IGxImage/IGxImage.htm)):
 [IGxImage](../IGxImage/IGxImage.htm);


## Параметры


Source. Преобразуемое изображение.


## Описание


Метод TranslateImage осуществляет
 преобразование указанного изображения в соответствии с палитрой указанного
 цветового профиля.


## Комментарии


Цветовой профиль задается в свойстве [ICMProfile](IGxICMManager.ICMProfile.htm).
 Данный метод возвращает изображение, которое будет отображаться устройством
 при использовании установленного цветового профиля.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и двух компонентов [ImageBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageBox.htm)
 с наименованиями SourceImg и DestImg. В операционной системе имеется файл
 цветового профиля «ProPhoto», а также файл с изображением «c:\Work\Image.bmp».


	Class TestForm: Form

	    Button1: Button;

	    SourceImg: ImageBox;

	    DestImg: ImageBox;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        ICMMan: IGxICMManager;

	        Img1, Img2: IGxImage;

	    Begin

	        ICMMan := New GxICMManager.Create;

	        ICMMan.ICMProfile := "ProPhoto";

	        Img1 := New GxImage.CreateFromFile("c:\Work\Image.bmp");

	        Img2 := ICMMan.TranslateImage(Img1);

	        SourceImg.Image := Img1;

	        DestImg.Image := Img2;

	    End Sub Button1OnClick;

	End Class TestForm;


После запуска формы при нажатии на кнопку будет осуществлено преобразование
 загруженного файла изображения в соответствии с палитрой указанного цветового
 профиля. Исходное изображение будет отображено в компоненте «SourceImg»,
 а преобразованное в компоненте «DestImg».


См. также:


[IGxICMManager](IGxICMManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
