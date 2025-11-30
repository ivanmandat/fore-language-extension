# FormCloseReason

FormCloseReason
-


# FormCloseReason


## Описание


Перечисление FormCloseReason содержит значения, определяющие результат закрытия формы.


Используется следующим свойством:


-
[ICloseQueryEventArgs.CloseReason](../Interface/ICloseQueryEventArgs/ICloseQueryEventArgs.CloseReason.htm)


## Допустимые значения


 Значение
 Краткое описание


 0
 None. Причина закрытия не была определена или не может быть определена.


 1
 WindowsShutDown. Операционная система закрывает все приложения перед завершением работы.


 2
 MdiFormClosing. MDI-дочерняя форма будет закрыта в результате закрытия родительской MDI-формы.


 3
 UserClosing. Пользователь закрывает форму, используя пользовательский интерфейс, например нажатием кнопки «Закрыть» в окне формы, выбором параметра «Закрыть» в системном меню окна, нажатием сочетания клавиш ALT+F4, либо в коде был вызван метод [Close](../Interface/IFormControl/IFormControl.Close.htm).


 4
 TaskManagerClosing. Диспетчер задач Microsoft Windows закрывает приложение.


 5
 FormOwnerClosing. Форма будет закрыта в результате закрытия родительской формы.


См. также:


[Перечисления сборки Forms](ModForms_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
