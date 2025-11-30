# Form.OnCloseQuery

Form.OnCloseQuery
-


# Form.OnCloseQuery


## Синтаксис


OnCloseQuery(Sender: Object; Args: [ICloseQueryEventArgs](../../Interface/ICloseQueryEventArgs/ICloseQueryEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnCloseQuery наступает
 в тот момент, когда форма получает команду на закрытие.


## Комментарии


Используя свойство [CloseReason](../../Interface/ICloseQueryEventArgs/ICloseQueryEventArgs.CloseReason.htm)
 аргумента события можно определить причину закрытия формы. С помощью свойства
 [Allowed](../../Interface/ICancelEventArgs/ICancelEventArgs.Allowed.htm)
 можно разрешить, либо запретить закрытие формы.


См.
 также:


[Form](Form.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
