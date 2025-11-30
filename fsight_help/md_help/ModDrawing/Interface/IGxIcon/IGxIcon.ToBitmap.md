# IGxIcon.ToBitmap

IGxIcon.ToBitmap
-


# IGxIcon.ToBitmap


## Синтаксис


ToBitmap: [IGxBitmap](../IGxBitmap/IGxBitmap.htm);


## Описание


Метод ToBitmap осуществляет
 преобразование пиктограммы в битовое изображение.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ImageBox с наименованием
 ImageBox1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Icon: IGxIcon;

Begin

    Icon := Self.Icon;

    If Not IsNull(Icon) Then

        ImageBox1.Image := Icon.ToBitmap;

        Debug.WriteLine("Ширина: " + Icon.Width.ToString);

        Debug.WriteLine("Высота: " + Icon.Height.ToString);

    End If;

End Sub Button1OnClick;


При нажатии на кнопку, если для формы установлена пиктограмма, то её
 изображение будет загружено в компонент ImageBox1, а размеры выведены
 в консоль среды разработки.


См. также:


[IGxIcon](IGxIcon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
