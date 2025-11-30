# IMetabase.ExceptionMailAddress

IMetabase.ExceptionMailAddress
-


# IMetabase.ExceptionMailAddress


## Синтаксис


		ExceptionMailAddress: String;


## Описание


Свойство ExceptionMailAddress
 определяет адрес электронной почты, который будет подставляться в поле
 адресата при отправке сообщений об ошибках платформы.


## Комментарии


Отправка сообщений об ошибках осуществляется программой, которая установлена
 в операционной системе в качестве почтового клиента по умолчанию.


Также адрес электронной почты может быть задан в реестре: в ветке [HKLM\SOFTWARE\Foresight\Foresight Analytics Platform\10.0\Exception] создайте
 строковый параметр «EMail» и укажите адрес в качестве его значения. Параметр
 в реестре имеет больший приоритет чем значение свойства ExceptionMailAddress.


## Примеры


Пример использования свойства приведен в примере для свойства [IMetabase.ExceptionHandler](IMetabase.ExceptionHandler.htm).


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
