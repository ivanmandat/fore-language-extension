# IComboBox.SelLength

IComboBox.SelLength
-


# IComboBox.SelLength


## Синтаксис


SelLength: Integer;


## Описание


Свойство SelLength определяет
 длину выделенного текста в компоненте в символах.


## Комментарии


Выделение начинается с позиции [SelStart](IComboBox.SelStart.htm).
 Выделенный текст возвращает свойство [SelText](IComboBox.SelText.htm).
 Данное свойство возвращает корректные значения, если компонент имеет фокус.
 Во всех остальных случаях свойство возвращает значение 0.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ComboBox с наименованием
 ComboBox1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    ComboBox1.SelStart := 3;

    ComboBox1.SelLength := ComboBox1.Text.Length - 3;

    ComboBox1.SelText := "New Value";

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку, часть текста компонента
 ComboBox1 будет изменена на указанное значение.


См. также:


[IComboBox](IComboBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
