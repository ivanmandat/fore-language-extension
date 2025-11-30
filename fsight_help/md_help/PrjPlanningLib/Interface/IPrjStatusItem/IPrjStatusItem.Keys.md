# IPrjStatusItem.Keys

IPrjStatusItem.Keys
-


# IPrjStatusItem.Keys


## Синтаксис


Keys: Array;


## Описание


Свойство Keys возвращает массив
 ключей задач, содержащихся в плане проекта с ошибкой или предупреждением.


## Комментарии


Ошибки или предупреждения могут возникнуть при построении плана проекта.
 Для проверки плана проекта на наличие ошибок или предупреждений используйте
 метод [IPrjProject.CheckConstraints](../IPrjProject/IPrjProject.CheckConstraints.htm).


Для получения ошибки или предупреждения
 используйте свойство [IPrjProject.Status](../IPrjProject/IPrjProject.Status.htm).


Примечание.
 Массив ключей может содержать только один ключ первой найденной ошибки
 или предупреждения.


## Пример


Использование свойства приведено в примере для [IPrjProject.Status](../IPrjProject/IPrjProject.Status.htm).


См. также:


[IPrjStatusItem](IPrjStatusItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
