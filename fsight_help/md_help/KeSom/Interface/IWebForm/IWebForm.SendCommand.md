# IWebForm.SendCommand

IWebForm.SendCommand
-


# IWebForm.SendCommand


## Синтаксис


SendCommand(Command: String; [Argument: Variant
 = Null]): Variant;


## Параметры


Command. Наименование команды,
 которая будет отправлена веб-форме.


Argument. Аргумент команды.


## Описание


Метод SendCommand осуществляет
 отправку команды веб-форме и получает результаты её выполнения.


## Комментарии


Использование данного метода доступно только в веб-приложении. Отправляемая
 команда может быть обработана в событии [onCommand](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/Web_Form.htm)
 веб-формы. В качестве аргумента команды могут передаваться как значения
 простых типов, так и системные или пользовательские объекты.


## Пример


Использование метода приведено в примере для [IWebForm.ShowModal](IWebForm.ShowModal.htm).


См. также:


[IWebForm](IWebForm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
