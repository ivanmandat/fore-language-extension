# Отображение повернутого текста на форме

Отображение повернутого текста на форме
-


# Отображение повернутого текста на форме


В зависимости от дизайна разрабатываемого приложения иногда может возникнуть
 необходимость отображения не простых горизонтальных текстовых меток, а
 текста, расположенного по вертикали или повернутого на определенный угол.
 С помощью стандартных компонентов дизайнера форм такая задача не осуществима.
 В качестве варианта обхода можно использовать компонент [ImageButton](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageButton.htm).
 Для этого необходимо настроить его визуальное отображение по подобию текстовой
 метки и загрузить изображение с перевернутым текстом. Если текст необходимо
 повернуть на произвольный угол, то необходимо предварительно подготовить
 изображения в каком-либо графическом редакторе. Если текст необходимо
 повернуть на угол, кратный 90, то можно динамически сформировать изображения,
 используя ресурсы сборки [Drawing](ModDrawing.chm::/Interface/ModDrawing_Interface.htm):


	Sub ChangeAgleForText(Text: String; ImgButton: ImageButton);

	Var

	    Graph: IGxGraphics;

	    TextSize: IGxRectF;

	    Img: IGxImage;

	Begin

	    Graph := GxGraphicsClass.FromImage(ImgButton.GetImage);

	    //Настройка кнопки
	 таким образом, чтобы она внешне напоминала компонент Label

	    ImgButton.BorderStyle := ControlBorderStyle.None;

	    //Вычисление размера, который будет занимать текст в компоненте

	    TextSize := Graph.MeasureTextRF(Text, ImgButton.NormalLook.Font.GxFont, New GxRectF.Create(0, 0, 0, 0), Null);

	    //Установка размеров
	 и текста для кнопки, получение изображения с текстом

	    ImgButton.Height := Double.RoundInt(TextSize.Height);

	    ImgButton.Width := Double.RoundInt(TextSize.Width);

	    ImgButton.Text := Text;

	    Img := ImgButton.GetImage;

	    //Разворот изображения

	    Img.RotateFlip(GxRotateFlipType.Rotate90FlipNone);

	    //Разворот кнопки,
	 удаление текста и установка нового изображения

	    ImgButton.Height := Double.RoundInt(TextSize.Width);

	    ImgButton.Width := Double.RoundInt(TextSize.Height);

	    ImgButton.Text := "";

	    ImgButton.DisabledLook.Background := Img;

	    //Запрет доступа к
	 кнопке, чтобы она работала в режиме текстовой метки

	    ImgButton.Enabled := False;

	End Sub ChangeAgleForText;


Данная процедура динамически формирует изображение на основании передаваемого
 текста и устанавливает его в передаваемый компонент. Вызвать процедуру
 можно, например, в событии формы OnCreate:


	Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	Begin

	    ChangeAgleForText("Текст", ImageButton1);

	End Sub TESTFormOnCreate;


См. также:


[Примеры](ModForms_Samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
