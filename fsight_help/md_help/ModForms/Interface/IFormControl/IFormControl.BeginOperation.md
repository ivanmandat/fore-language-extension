# IFormControl.BeginOperation

IFormControl.BeginOperation
-


# IFormControl.BeginOperation


## Синтаксис


BeginOperation(


Value: String;


[Layout: [OperationTextLayout](../../Enums/OperationTextLayout.htm)
 = 1;]


[External: Boolean =
 False]);


## Параметры


Value. Текст, который будет отображаться в строке
 состояния.


Layout. Необязательный параметр, определяющий место
 расположения таймера процесса относительно текста.


External. Параметр, определяющий место расположения
 строки состояния. По умолчанию передается значение False,
 при этом строка состояния будет отображаться в нижней части формы. Если
 передавать значение True, то строка состояния будет отображаться
 за пределами формы и будет привязана к нижнему краю формы.


Примечание.
 Если форма развернута на весь экран, то строка состояния будет отображаться
 в нижней части формы. Значение параметра External
 игнорируется.


## Описание


Метод BeginOperation активирует
 строку состояния, в которой отображается текст параметра Value,
 таймер и анимированный индикатор процесса.


## Комментарии


Строка состояния будет активна до выполнения метода [EndOperation](IFormControl.EndOperation.htm).


Примечание.
 Из-за ограничений, имеющихся при инициализации форм, данный метод не доступен
 для использования, если для формы установлена следующая комбинация значений
 свойств: [BorderStyle](IFormControl.BorderStyle.htm) = FormBorderStyle.None
 и [ShowOnTaskbar](IFormControl.ShowOnTaskbar.htm) = False.


См. также:


[IFormControl](IFormControl.htm)
 | [IFormControl.EndOperation](IFormControl.EndOperation.htm)
 | [IFormControl.SetOperationText](IFormControl.SetOperationText.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
