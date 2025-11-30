# IFormControl.SetOperationText

IFormControl.SetOperationText
-


# IFormControl.SetOperationText


## Синтаксис


SetOperationText(Value: String);


## Параметры


Value - текст, который будет отображаться в строке состояния.


## Описание


Метод SetOperationText изменяет текст, отображаемый в строке состояния. Новое значение передается посредством параметра Value. Метод должен вызываться после [BeginOperation](IFormControl.BeginOperation.htm) и перед [EndOperation](IFormControl.EndOperation.htm), в противном случае генерируется исключительная ситуация.


См. также:


[IFormControl](IFormControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
