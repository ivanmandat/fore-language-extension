# ITreeCombo.CustomMultiselectText

ITreeCombo.CustomMultiselectText
-


# ITreeCombo.CustomMultiselectText


## Синтаксис


CustomMultiselectText: Boolean;


## Описание


Свойство CustomMultiselectText
 определяет признак использования пользовательского шаблона для формирования
 текста компонента при множественной отметке.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом при множественной отметке элементов текст, отображаемый в компоненте,
 формируется автоматически и имеет следующий вид: (Всего
 n). Где n - количество отмеченных элементов. При установке свойству
 значения True текст будет формироваться
 в соответствии с шаблоном, который задан в свойстве [CustomMultiselectTextTemplate](ITreeCombo.CustomMultiselectTextTemplate.htm).


![](ITreeCombo_SystemMultiselectText.gif)


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента TreeCombo с наименованием «TreeCombo1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    TreeCombo1.CustomMultiselectText := True;

    TreeCombo1.CustomMultiselectTextTemplate := "Диапазон: %First-%Last";

End Sub Button1OnClick;


При нажатии на кнопку для компонента «TreeCombo1» будет задан шаблон,
 в соответствии с которым будет формироваться текст компонента при множественной
 отметке.


См. также:


[ITreeCombo](ITreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
