# IScheduledTaskProperties.DynamicMailListMacro

IScheduledTaskProperties.DynamicMailListMacro
-


# IScheduledTaskProperties.DynamicMailListMacro


## Синтаксис


DynamicMailListMacro: String;


## Описание


Свойство DynamicMailListMacro
 определяет наименование макроса, который будет формировать динамический
 список адресатов для отправки уведомления о завершении задачи.


## Комментарии


В качестве значения свойства необходимо указать макрос, имеющий следующую
 сигнатуру:


			Function <name>(<param>: IScheduledTask): IArrayList;


Макрос должен быть реализован в Fore-модуле/форме/сборке, который указан
 в свойстве [IScheduledTaskProperties.DynamicMailListModule](IScheduledTaskProperties.DynamicMailListModule.htm).
 В коде макроса необходимо инициализировать динамический массив [IArrayList](ModCollections.chm::/Interface/IArrayList/IArrayList.htm)
 и в соответствии с каким-либо собственным алгоритмом добавить в него необходимых
 адресатов. Массив может содержать следующие значения:


	- Адрес электронной почты в строковом виде.


	- Ссылка на пользователя репозитория, описываемого интерфейсом
	 [ISecuritySubject](KeSom.chm::/Interface/ISecuritySubject/ISecuritySubject.htm).


Если в коллекцию добавлены пользователи репозитория, то в настройках
 также необходимо задать свойство [MailTargetType](IScheduledTaskProperties.MailTargetType.htm).


## Пример


Пример использования приведен в описании свойства [IScheduledTaskProperties.UseDynamicMailList](IScheduledTaskProperties.UseDynamicMailList.htm).


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
