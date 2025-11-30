# IGxRectangleTransformImage.Margins

IGxRectangleTransformImage.Margins
-


# IGxRectangleTransformImage.Margins


## Синтаксис


Margins: [IGxMargins](../IGxMargins/IGxMargins.htm);


## Описание


Свойство Margins определяет
 параметры фиксированных отступов графического изображения.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента ImageButton с наименование ImageButton1.


			Sub ImageButton1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Img: IGxImage;

    TransfImage: IGxRectangleTransformImage;

    Marg: IGxMargins;

Begin

    Img := GxRectangleTransformImage.FromFile("c:\Image.bmp");

    TransfImage := Img As IGxRectangleTransformImage;

    Marg := TransfImage.Margins;

    Marg.Bottom := 5;

    Marg.Left := 5;

    Marg.Right := 5;

    Marg.Top := 5;

    TransfImage.Unit := GxUnit.Millimeter;

    ImageButton1.NormalLook.Background := TransfImage;

End Sub ImageButton1OnClick;


При нажатии на кнопку ImageButton1 для нее будет изменён фон. В качестве
 фона в обычном режиме кнопки будет установлено изображение Image.bmp.
 Для изображения будет установлена фиксированная область - пять миллиметров
 со всех краев.


См. также:


[IGxRectangleTransformImage](IGxRectangleTransformImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
