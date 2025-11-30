# IScheduledTaskProperties

IScheduledTaskProperties
-


# IScheduledTaskProperties


Сборка: Fore;


## Описание


Интерфейс IScheduledTaskProperties
 содержит базовые свойства и методы, определяющие параметры задачи.


## Иерархия наследования


IScheduledTaskProperties


## Комментарии


Параметры задачи можно получить в свойстве [IScheduledTask.Properties](../IScheduledTask/IScheduledTask.Properties.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](IScheduledTaskProperties.Active.htm)
		 Свойство Active определяет
		 активность задачи.


		 ![](../../Property_Image.gif)
		 [Alerts](IScheduledTaskProperties.Alerts.htm)
		 Свойство Alerts возвращает
		 событие, по наступлению которого будет выполняться задача.


		 ![](../../Property_Image.gif)
		 [AppendAttachment](IScheduledTaskProperties.AppendAttachment.htm)
		 Свойство AppendAttachment
		 определяет необходимость после выполнения задачи прикреплять к
		 письму, отправляемому по электронной почте, результат расчета.


		 ![](../../Property_Image.gif)
		 [Class_](IScheduledTaskProperties.Class.htm)
		 Свойство Class_ определяет
		 класс задачи, выполняемой в планировщике задач.


		 ![](../../Property_Image.gif)
		 [CopyMailRecipients](IScheduledTaskProperties.CopyMailRecipients.htm)
		 Свойство CopyMailRecipients
		 определяет электронные адреса, по которым будет осуществляться
		 отправка копии уведомления о выполнении задачи.


		 ![](../../Property_Image.gif)
		 [DynamicMailListMacro](IScheduledTaskProperties.DynamicMailListMacro.htm)
		 Свойство DynamicMailListMacro
		 определяет наименование макроса, который будет формировать динамический
		 список адресатов для отправки уведомления о завершении задачи.


		 ![](../../Property_Image.gif)
		 [DynamicMailListModule](IScheduledTaskProperties.DynamicMailListModule.htm)
		 Свойство DynamicMailListModule
		 определяет объект среды разработки, содержащий реализацию макроса,
		 который будет формировать динамический список адресатов для отправки
		 уведомления о завершении задачи.


		 ![](../../Property_Image.gif)
		 [EventId](IScheduledTaskProperties.EventId.htm)
		 Свойство EventId определяет
		 идентификатор события.


		 ![](../../Property_Image.gif)
		 [FtpAddress](IScheduledTaskProperties.FtpAddress.htm)
		 Свойство FtpAddress
		 определяет путь к Ftp-папке, куда будет сохранен рассчитанный
		 отчет.


		 ![](../../Property_Image.gif)
		 [HiddenMailRecipients](IScheduledTaskProperties.HiddenMailRecipients.htm)
		 Свойство HiddenMailRecipients
		 определяет электронные адреса, по которым будет осуществляться
		 отправка скрытой копии уведомления о выполнении задачи.


		 ![](../../Property_Image.gif)
		 [MailBody](IScheduledTaskProperties.MailBody.htm)
		 Свойство MailBody определяет
		 тело сообщения, уведомляющего пользователя об окончании выполнения
		 задачи.


		 ![](../../Property_Image.gif)
		 [MailRecipients](IScheduledTaskProperties.MailRecipients.htm)
		 Свойство MailRecipients
		 определяет коллекцию электронных адресов, по которым будет осуществляться
		 отправка уведомления о выполнении задачи.


		 ![](../../Property_Image.gif)
		 [MailSubject](IScheduledTaskProperties.MailSubject.htm)
		 Свойство MailSubject
		 определяет тему сообщения, уведомляющего пользователя об окончании
		 выполнения задачи.


		 ![](../../Property_Image.gif)
		 [MailTargetType](IScheduledTaskProperties.MailTargetType.htm)
		 Свойство MailTargetType
		 определяет вид электронной почты, на который будет отправлен результат
		 выполнения задачи.


		 ![](../../Property_Image.gif)
		 [ParamValues](IScheduledTaskProperties.ParamValues.htm)
		 Свойство ParamValues
		 определяет значения параметров объекта, которые будут использованы
		 при выполнении задачи.


		 ![](../../Property_Image.gif)
		 [Period](IScheduledTaskProperties.Period.htm)
		 Свойство Period определяет
		 период выполнения задачи.


		 ![](../../Property_Image.gif)
		 [Queueing](IScheduledTaskProperties.Queueing.htm)
		 Свойство Queueing определяет,
		 будет ли запущена задача, если не завершилось выполнение предыдущего
		 экземпляра этой же задачи.


		 ![](../../Property_Image.gif)
		 [SendMail](IScheduledTaskProperties.SendMail.htm)
		 Свойство SendMail определяет,
		 будут ли отправляться по электронной почте уведомления о результатах
		 выполнения задачи.


		 ![](../../Property_Image.gif)
		 [UseDynamicMailList](IScheduledTaskProperties.UseDynamicMailList.htm)
		 Свойство UseDynamicMailList
		 определяет, будет ли динамически формироваться список адресатов
		 для отправки результатов выполнения задачи.


		 ![](../../Property_Image.gif)
		 [UserTag](IScheduledTaskProperties.UserTag.htm)
		 Свойство UserTag доступно
		 только через Fore, не используется компилятором и может содержать
		 любые пользовательские данные.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreatePeriod](IScheduledTaskProperties.CreatePeriod.htm)
		 Метод CreatePeriod
		 создает объект, содержащий настройки периода выполнения задачи.


		 ![](../../Sub_Image.gif)
		 [LoadParamValues](IScheduledTaskProperties.LoadParamValues.htm)
		 Метод LoadParamValues
		 проверяет заданы ли значения у параметров задачи.


См. также:


[Интерфейсы сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
