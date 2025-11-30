# IDateTimePickerEx.Mode

IDateTimePickerEx.Mode
-


# IDateTimePickerEx.Mode


## Синтаксис


Mode: [DateTimePickerExMode](../../Enums/DateTimePickerExMode.htm);


## Описание


Свойство Mode определяет режим установки даты в календаре.


## Комментарии


При изменении режима установки даты изменяется внешний вид компонента. Установка даты будет осуществляться путем выбора одного из периодов, соответствующих режиму. Значение свойства [CurrentDate](IDateTimePickerEx.CurrentDate.htm) будет соответствовать началу выбранного периода.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента DateTimePickerEx с наименованием «DateTimePickerEx1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    DateTimePickerEx1.Mode := DateTimePickerExMode.Months;

End Sub Button1OnClick;


При нажатии на кнопку будет установлен режим выбора даты в компоненте «DateTimePickerEx1». Выбор даты будет осуществляться путем выбора месяца. Итоговая дата будет соответствовать началу выбранного месяца.


См. также:


[IDateTimePickerEx](IDateTimePickerEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
