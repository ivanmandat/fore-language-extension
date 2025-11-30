# Form.OnCommand

Form.OnCommand
-


# Form.OnCommand


## Синтаксис


OnCommand(Sender: Object; Args: [ICommandEventArgs](../../Interface/ICommandEventArgs/ICommandEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnCommand наступает
 во время отправления команды данной форме от другой формы.


## Комментарии


Для отправления команд используются методы формы [PostCommand](../../Interface/IFormControl/IFormControl.PostCommand.htm)
 и [SendCommand](../../Interface/IFormControl/IFormControl.SendCommand.htm).


Если осуществляется запуск «Форсайт. Аналитическая платформа»
 с ключом [singleinstance](Setup.chm::/07_AK_Run_Additional/UseKeys.htm)
 для активации ранее запущенного приложения, то всем запущенным формам
 будет отправлено сообщение «BeforeInstanceActivate».
 Первая форма, которая обработает данное сообщение и вернет значение не
 равное 0, будет активирована. Форме, обработавшей сообщение «BeforeInstanceActivate»,
 также будет отправлено сообщение «AfterInstanceActivate».
 Обработка сообщений должна осуществляться в данном событии OnCommand.


## Пример


Пример использования приведен в описании методов [PostCommand](../../Interface/IFormControl/IFormControl.PostCommand.htm)
 и [SendCommand](../../Interface/IFormControl/IFormControl.SendCommand.htm).


См.
 также:


[Form](Form.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
