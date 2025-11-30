# IDimensionCombo.CustomMultiselectText

IDimensionCombo.CustomMultiselectText
-


# IDimensionCombo.CustomMultiselectText


## Синтаксис


CustomMultiselectText: Boolean;


## Описание


Свойство CustomMultiselectText
 определяет признак использования пользовательского шаблона для формирования
 текста компонента при множественной отметке.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом при множественной отметке элементов текст, отображаемый в компоненте,
 формируется автоматически и имеет следующий вид: <наименование
 справочника> (Всего n). Где n - количество отмеченных элементов.
 При установке свойству значения True
 текст будет формироваться в соответствии с шаблоном, который задан в свойстве
 [IDimensionCombo.CustomMultiselectTextTemplate](IDimensionCombo.CustomMultiselectTextTemplate.htm).


![](IDimensionCombo_SystemMultiselectText.gif)


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента DimensionCombo с наименованием «DimensionCombo1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    DimensionCombo1.CustomMultiselectText := True;

	    DimensionCombo1.CustomMultiselectTextTemplate := "Диапазон: %First-%Last";

	End Sub Button1OnClick;


При нажатии на кнопку для компонента «DimensionCombo1» будет задан шаблон,
 в соответствии с которым будет формироваться текст компонента при множественной
 отметке.


См. также:


[IDimensionCombo](IDimensionCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
